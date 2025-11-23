from django.db import models
from .producto import PRODUCTO
class PASTEL(models.Model):
    idPastel = models.OneToOneField(
        PRODUCTO,
        on_delete=models.CASCADE,
        primary_key=True,
        limit_choices_to={"tipo": "PASTEL"},  # opcional pero ayuda
    )
    TIPO_PASTEL =(("ESTABLECIDO", "establecido"),
                  ("PERSONALIZADO", "personalizado"))
    tipoPastel = models.CharField(max_length=15, choices= TIPO_PASTEL)
    def __str__(self):
        return f"Pastel ({self.idPastel})"
    
class PASTEL_ESTABLECIDO(models.Model):
    idEstablecido = models.OneToOneField(
        PASTEL,on_delete=models.CASCADE,
        primary_key=True,
        limit_choices_to={"tipoPastel","ESTABLECIDO"}
    )
    nombrePastel = models.CharField(max_length=50, null=False, blank=False, unique=True)
    descripcion = models.CharField(max_length=50, null=True, blank=True, default="Sin descripción")
    imagen = models.CharField(max_length=255, null=True, blank=True, default="Sin imagen")
    def __str__(self):
        return f"Pastel Establecido ({self.idEstablecido})"

class PASTEL_PERSONALIZADO(models.Model):
    idPersonalizado = models.OneToOneField(
        PASTEL, on_delete=models.CASCADE,
        primary_key= True,
        limit_choices_to={"tipoPastel","PERSONALIZADO"}
    )
    TIPO_RELLENO = (("DURAZNO", "durazno con nuez"),
               ("ALMENDRA", "crema de almendras"),
               (("GANACHE", "ganache de Belga")))
    relleno = models.CharField(max_length=20, choices=TIPO_RELLENO, null=False, blank=False)
    TIPO_TAMANO = (("CHICO", "chico"),
              ("MEDIANO", "mediano"),
              ("GRANDE","grande"))
    tamano = models.CharField(max_length=20, choices=TIPO_TAMANO, null=False, blank=False)
    TIPO_DECORACION = (("FLORES", "flores naturales comestibles"),
                  ("FONDANT", "fondant"),
                  ("FRUTA", "fruta"))
    decoracion = models.CharField(max_length=20,choices=TIPO_DECORACION, null=False, blank=False)
    TIPO_SABOR = (("CHOCOLATE", "chocolate"),
             ("VAINILLA", "vainilla"),
             ("MATCHA", "matcha"))
    sabor = models.CharField(max_length=20, choices=TIPO_SABOR, null=False, blank=False)