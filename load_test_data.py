# users/load_test_data.py
import os
import django
from datetime import date

# Configurar Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
django.setup()

from pasteleria.models import USUARIO

# Borrar datos anteriores (opcional)
USUARIO.objects.all().delete()

# Crear usuarios de prueba
usuarios = [
    USUARIO(
        correo="admin@test.com",
        nombreU="adminuser",
        contraseña="1234",
        nombres="Admin",
        apellidoP="Test",
        apellidoM="User",
        direccionEntrega="Calle 123",
        fechaN=date(1990, 1, 1),
        celular="5551234567",
        puntosReco=200
    ),
    USUARIO(
        correo="juan@test.com",
        nombreU="juanito",
        contraseña="abcd",
        nombres="Juan",
        apellidoP="Perez",
        apellidoM="Lopez",
        direccionEntrega="Avenida 456",
        fechaN=date(1995, 6, 15),
        celular="5559876543",
        puntosReco=150
    ),
]

for u in usuarios:
    u.save()

print("Usuarios de prueba cargados correctamente.")
