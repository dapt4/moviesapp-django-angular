from django.db import models

# Create your models here.
class Estudio(models.Model):
    nombre = models.CharField(max_length=200)
    direccion = models.CharField(max_length=300)

class Pelicula(models.Model):
    titulo = models.CharField(max_length=200)
    fecha = models.IntegerField()
    estudio = models.ForeignKey(Estudio, on_delete=models.CASCADE, related_name="estudio")

class Actor(models.Model):
    nombre = models.CharField(max_length=200)
    pelicula = models.ForeignKey(Pelicula, on_delete=models.CASCADE, related_name="pelicula")

