from .models import Estudio, Pelicula, Actor
from rest_framework import serializers

class EstudioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Estudio
        fields = ['id','nombre', 'direccion']

class PeliculaSerializer(serializers.HyperlinkedModelSerializer):
    estudio = serializers.SlugRelatedField(
        many = False,
        read_only = True,
        slug_field = 'id'
    )
    class Meta:
        model = Pelicula
        fields = ['id','titulo', 'fecha','estudio']

class ActorSerializer(serializers.HyperlinkedModelSerializer):
    pelicula = serializers.SlugRelatedField(
        many = False,
        read_only = True,
        slug_field = 'id'
    )
    class Meta:
        model = Actor
        fields = ['id','nombre', 'pelicula']
