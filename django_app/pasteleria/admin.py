from django.contrib import admin
from .models import (
    USUARIO,
    PRODUCTO, PASTEL,
    PEDIDO, DETALLE, PROMOCION, TARTA, POSTRE,
    PAN, PASTEL_ESTABLECIDO, PASTEL_PERSONALIZADO,
    EXTRA
)

# Registro de modelos simples
admin.site.register(USUARIO)
admin.site.register(PASTEL)
admin.site.register(PROMOCION)
admin.site.register(DETALLE)  # Registrar el modelo DETALLE
admin.site.register(PASTEL_ESTABLECIDO)
admin.site.register(PAN)
admin.site.register(POSTRE)
admin.site.register(TARTA)
admin.site.register(EXTRA)

# Registro personalizado para PRODUCTO
@admin.register(PRODUCTO)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ("idProducto", "tipo", "stock", "precioUnitario")
    list_filter = ("tipo", "promocion")
    search_fields = ("idProducto",)
    filter_horizontal = ("promocion",)

# Registro personalizado para PASTEL_PERSONALIZADO
@admin.register(PASTEL_PERSONALIZADO)
class PastelPersonalizadoAdmin(admin.ModelAdmin):
    list_display = ("idPersonalizado", "idPersonalizado__nombre")  # Mostrar el ID y nombre
    search_fields = ("idPersonalizado",)
    filter_horizontal = ("extras",)
    list_filter = ("idPersonalizado__tipoPastel",)
    ordering = ("idPersonalizado",)

# Administrar la relación ManyToMany con atributos adicionales usando inlines
class DetalleInline(admin.TabularInline):
    model = DETALLE
    extra = 1  # Esto crea una fila vacía por defecto para agregar productos a un pedido

# Registro personalizado para PEDIDO
@admin.register(PEDIDO)
class PedidoAdmin(admin.ModelAdmin):
    list_display = ('id', 'cliente', 'fecha')
    inlines = [DetalleInline]  # Incluir la relación de productos en el pedido

# Registro del modelo intermedio DETALLE
@admin.register(DETALLE)
class DetalleAdmin(admin.ModelAdmin):
    list_display = ('pedido', 'producto', 'cantidad', 'precio')
    search_fields = ('pedido__cliente', 'producto__nombre')  # Permite buscar productos por nombre o cliente

