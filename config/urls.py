"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from pasteleria.views import productos_tipo
from pasteleria.views import login_view
from pasteleria.views import crear_detalle
from pasteleria.views import crear_pedido, modificar_pedido
urlpatterns = [
    path('admin/', admin.site.urls),
    path('productos/<str:tipo>/', productos_tipo, name="productos_tipo"), 
    #path("pasteles/", get_pasteles, name="get_pasteles")
    path('api/login/', login_view, name='login'),
    path('detalles/', crear_detalle, name='crear-detalle'),
    path('pedidos/', crear_pedido, name='crear-pedido'),       
    path('pedidos/<int:id>/', modificar_pedido, name='modificar-pedido'), 
    path('detalles/', crear_detalle, name='crear_detalle'),
]