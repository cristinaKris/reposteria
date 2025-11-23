from pasteleria.models import PRODUCTO
from pasteleria.models import POSTRE

def run():
    # --- Crear productos base tipo POSTRE ---
    productos_data = [
        {"stock": 10, "precioUnitario": 45.00, "tipo": "POSTRE"},
        {"stock": 8,  "precioUnitario": 55.00, "tipo": "POSTRE"},
        {"stock": 12, "precioUnitario": 35.00, "tipo": "POSTRE"},
    ]

    productos = []
    for data in productos_data:
        producto = PRODUCTO.objects.create(
            stock=data["stock"],
            precioUnitario=data["precioUnitario"],
            tipo=data["tipo"]
        )
        productos.append(producto)

    # --- Crear postres asociados ---
    postres_data = [
        {
            "producto": productos[0],
            "nombrePostre": "Gelatina de Fresa",
            "descripcion": "Gelatina casera con fruta",
            "imagen": "gelatina_fresa.jpg",
        },
        {
            "producto": productos[1],
            "nombrePostre": "Pay de Limón",
            "descripcion": "Clásico pay frío de limón",
            "imagen": "pay_limon.jpg",
        },
        {
            "producto": productos[2],
            "nombrePostre": "Flan Napolitano",
            "descripcion": "Flan casero tradicional",
            "imagen": "flan_napolitano.jpg",
        },
    ]

    for data in postres_data:
        POSTRE.objects.create(
            idPostre=data["producto"],
            nombrePostre=data["nombrePostre"],
            descripcion=data["descripcion"],
            imagen=data["imagen"],
        )

    print("Datos de prueba cargados correctamente.")
