from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from .models import PRODUCTO,PAN, TARTA, POSTRE, PASTEL, PASTEL_ESTABLECIDO, PASTEL_PERSONALIZADO
from .models import USUARIO
from .models import DETALLE, PEDIDO, PRODUCTO
from .models import EXTRA
TIPOS = {
     "PAN": PAN,
    "TARTA": TARTA,
    "POSTRE": POSTRE,
    "PASTEL": PASTEL,
}

def productos_tipo(request, tipo):
    tipo = tipo.upper()
    if tipo not in TIPOS:
        return JsonResponse({"error": "Tipo no válido"}, status=400)
     
    tipo_prod = TIPOS[tipo]
     
    productos = PRODUCTO.objects.filter(tipo = tipo)  
    
    data = []    
    for p in productos:
        item = {
            "id" : p.idProducto,
            "stock" : p.stock,
            "precio" : p.precioUnitario,
            "precio_desc" : float(p.aplicarPromocion()),
            "tipo" : p.tipo,
            "descripcion" : None, 
            "nombre": None,
            "img" : None,     
        } 
        if p.tipo == "PAN" and hasattr(p, "pan"):
            pan = p.pan
            item["descripcion"] = pan.descripcion
            item["nombre"] = pan.nombrePan
            item["img"] = pan.imagen

        if p.tipo == "TARTA" and hasattr(p, "tarta"):
            producto = p.tarta
            item["descripcion"] = producto.descripcion
            item["nombre"] = producto.nombreTarta
            item["img"] = producto.imagen

        if p.tipo == "POSTRE" and hasattr(p, "postre"):
            producto = p.postre
            item["descripcion"] = producto.descripcion
            item["nombre"] = producto.nombrePostre
            item["img"] = producto.imagen

        if p.tipo == "PASTEL" and hasattr(p, "pastel"):
            producto = p.pastel
            item["descripcion"] = producto.descripcion
            item["nombre"] = producto.nombrePastel
            item["img"] = producto.imagen
                        
        data.append(item)
    return JsonResponse({"Productos":data})


# def get_pasteles(request):
#     pasteles = PASTEL.objects.all()

#     data = []

#     for p in pasteles:
#         try:
#             establecido = PASTEL_ESTABLECIDO.objects.get(idEstablecido=p)
#             data.append({
#                 "id": p.idPastel.id,
#                 "tipo": "ESTABLECIDO",
#                 "nombrePastel": establecido.nombrePastel,
#                 "descripcion": establecido.descripcion,
#                 "imagen": establecido.imagen,
#             })
#         except PASTEL_ESTABLECIDO.DoesNotExist:
#             pass
#     return JsonResponse(data, safe=False)

@csrf_exempt
@require_http_methods(["POST"])
def login_view(request):
    try:
        data = json.loads(request.body)
        correo = data.get('correo')
        contraseña = data.get('contraseña')

        usuario = USUARIO.objects.filter(correo=correo, contraseña=contraseña).first()

        if usuario:
            return JsonResponse({
                'success': True,
                'message': 'Login exitoso',
                'usuario': {
                    'id': usuario.idUsuario,
                    'nombre': usuario.nombres,
                    'apellidoP': usuario.apellidoP,
                    'apellidoM': usuario.apellidoM,
                    'correo': usuario.correo,
                    'edad': usuario.edad,
                    'saldoEqui': usuario.saldoEqui,
                    'puntosReco': usuario.puntosReco
                }
            })
        else:
            return JsonResponse({'success': False, 'message': 'Credenciales incorrectas'}, status=401)

    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=400)

#Crear pedido con nulos

@csrf_exempt
def crear_pedido(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        usuario_id = data.get('usuario')  

        try:
            usuario = USUARIO.objects.get(idUsuario=usuario_id)
        except USUARIO.DoesNotExist:
            return JsonResponse({"error": "Usuario no existe"}, status=404)

        pedido = PEDIDO.objects.create(
            usuario=usuario,
            fechaEntrega=data.get('fechaEntrega', None),
            horaEntrega=data.get('horaEntrega', None),
            total=data.get('total', 0),
            calificacion=data.get('calificacion', 0),
            tipoEntrega=data.get('tipoEntrega', 'PICKUP'),
            formaPago=data.get('formaPago', 'MERCADOPAGO'),
            status=data.get('status', 'RECIBIDO'),
        )

        return JsonResponse({"idPedido": pedido.idPedido}, status=201)



@csrf_exempt
def modificar_pedido(request, id):
    try:
        pedido = PEDIDO.objects.get(idPedido = id)
    except PEDIDO.DoesNotExist:
        return JsonResponse({"error":"Pedido no existe"})
    
    if request.method in ['PUT','PATCH'] :  
        data = json.loads(request.body)
        
        campos_obligatorios = ['fechaEntrega', 'horaEntrega', 'total', 'calificacion', 'tipoEntrega', 'formaPago', 'status']
            
        pedido.fechaEntrega =data.get('fechaEntrega', pedido.fechaEntrega)
        pedido.horaEntrega = data.get('horaEntrega', pedido.horaEntrega)       
        pedido.total = data.get('total', pedido.total)
        pedido.calificacion = data.get('calificacion', pedido.calificacion)
        pedido.tipoEntrega = data.get('tipoEntrega', pedido.tipoEntrega)
        pedido.formaPago = data.get('formaPago', pedido.formaPago)
        pedido.status = data.get('status', pedido.status)
        pedido.save()

        return JsonResponse({"idPedido": pedido.idPedido}, status=200)
    
    
@csrf_exempt
def crear_detalle(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        pedido_id = data.get('pedido')  
        productos = data.get('productos', [])

        carrito = []

        try:
            pedido = PEDIDO.objects.get(idPedido=pedido_id)
        except PEDIDO.DoesNotExist:
            return JsonResponse({"error": "Pedido no existe"}, status=404)
        
        for p in productos:
            try:
                producto = PRODUCTO.objects.get(idProducto=p['idProducto'])
            except PRODUCTO.DoesNotExist:
                continue  

            detalle = DETALLE.objects.create(
                pedido = pedido,  
                producto = producto,
                cantidad = p['cantidad']
            )

            carrito.append({
                "idItem": detalle.idItem,
                "pedido": detalle.pedido.idPedido,
                "producto": detalle.producto.idProducto,
                "cantidad": detalle.cantidad,
                "subtotal": float(detalle.subtotal)
            })

        return JsonResponse(carrito, safe=False, status=201)

@csrf_exempt
def crear_PastelP(request):
    if request.method == "POST":
        data= json.loads(request.body)
        stock = 1
        precio = data.get("precio")
        extras_ids = data.get ("extras", [])
    
        producto = PRODUCTO.objects.create(
            stock = stock,
            precioUnitario = precio,
            tipo = "PASTEL"
        )  
        
        pastel = PASTEL.objects.create(
            idPastel = producto,
            tipoPastel = "PERSONALIZADO "
        ) 
        
        pastel_personalizado = PASTEL_PERSONALIZADO.objects.create (
            idPersonalizado = pastel,
        ) 
        
        extras = EXTRA.objects.filter(idExtra = extras_ids)
        pastel_personalizado.extras.set(extras)
        
        response_data = {
            "idProducto": producto.idProducto,
            "stock": producto.stock,
            "precioUnitario": str(producto.precioUnitario),
            "tipo": producto.tipo,
            "pastel": {
                "idPastel": pastel.idPastel.idProducto,
                "tipoPastel": pastel.tipoPastel,
                "pastel_personalizado": {
                    "idPersonalizado": pastel_personalizado.idPersonalizado.idPastel.idProducto,
                    "extras": list(extras.values("id", "nombre"))
                }
            }
        }
        
        return JsonResponse(response_data, status=201)
    return JsonResponse({"error": "No se logró crear"}, status=400)
    
@csrf_exempt
def get_extras_tipo(request, tipo):
    tipos_validos = [t[0] for t in EXTRA.TIPOS_EXTRA]
    if tipo not in tipos_validos:
        return JsonResponse({"error": "Tipo inválido"}, status=400)

    extras = EXTRA.objects.filter(tipoExtra=tipo)
    resultado = [
        {
            "idExtra": extra.idExtra,
            "nombreExtra": extra.nombreExtra,
            "price": float(extra.price)
        } for extra in extras
    ]
    return JsonResponse({tipo: resultado}, safe=True)

        



