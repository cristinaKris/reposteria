from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from .models import PRODUCTO,PAN, TARTA, POSTRE, PASTEL, PASTEL_ESTABLECIDO, PASTEL_PERSONALIZADO

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