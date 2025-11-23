from django.db import models
from .pedido import PEDIDO
from .producto import PRODUCTO


class DETALLE(models.Model):
    idItem = models.AutoField(primary_key=True)

    pedido = models.ForeignKey(PEDIDO, on_delete=models.CASCADE, related_name="detalles")
    producto = models.ForeignKey(PRODUCTO, on_delete=models.CASCADE, related_name="detalles")

    cantidad = models.IntegerField(max_length=7, null=False, blank=False)

    @property
    def subtotal(self):     # CS5
        return self.producto.precioUnitario * self.cantidad

    def __str__(self):
        return f"Item {self.idItem} ({self.producto.nombre})"