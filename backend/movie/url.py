from django.urls import path
from . import views

urlpatterns = [
    path('estudio', views.get_and_create_estudio),
    path('estudio/<int:id>', views.get_edit_and_delete_estudio),
    path('pelicula', views.get_and_create_pelicula),
    path('pelicula/<int:id>', views.get_edit_and_delete_pelicula),
    path('actor', views.get_and_create_actor),
    path('actor/<int:id>', views.get_edit_and_delete_actor),
]
