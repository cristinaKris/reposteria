from django.contrib import admin
from .models import (
    USUARIO,
    PRODUCTO, PASTEL,
    PEDIDO, DETALLE, PROMOCION, TARTA, POSTRE,
    PAN, PASTEL_ESTABLECIDO, PASTEL_PERSONALIZADO,
    EXTRA
)

admin.site.register(USUARIO)
admin.site.register(PASTEL)
admin.site.register(PROMOCION)
admin.site.register(PEDIDO)
admin.site.register(DETALLE)
@admin.register(PASTEL_PERSONALIZADO)
class PastelPersonalizadoAdmin(admin.ModelAdmin):
    list_display = ("idPersonalizado",)  # Mostrar solo el id (se puede agregar más si es necesario)
    search_fields = ("idPersonalizado",)  # Permitir buscar por id del pastel personalizado
    filter_horizontal = ("extras",)  # Relación ManyToMany con EXTRA
admin.site.register(PASTEL_ESTABLECIDO)
admin.site.register(PAN)
admin.site.register(POSTRE)
admin.site.register(TARTA)
admin.site.register(EXTRA)

@admin.register(PRODUCTO)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ("idProducto", "tipo", "stock", "precioUnitario")
    list_filter = ("tipo", "promocion")
    search_fields = ("idProducto",)
    filter_horizontal = ("promocion",)
