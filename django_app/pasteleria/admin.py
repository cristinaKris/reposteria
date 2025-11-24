from django.contrib import admin
from .models import (
    USUARIO,
    PRODUCTO, PASTEL,
    PEDIDO, DETALLE, PROMOCION, TARTA, POSTRE,
    PAN, PASTEL_ESTABLECIDO, PASTEL_PERSONALIZADO,
    EXTRA
)

admin.site.register(USUARIO)
admin.site.register(PRODUCTO)
admin.site.register(PASTEL)
admin.site.register(PROMOCION)
admin.site.register(PEDIDO)
admin.site.register(DETALLE)
admin.site.register(PASTEL_PERSONALIZADO)
admin.site.register(PASTEL_ESTABLECIDO)
admin.site.register(PAN)
admin.site.register(POSTRE)
admin.site.register(TARTA)
admin.site.register(EXTRA)

