from .models import Estudio, Pelicula, Actor
from .serializers import EstudioSerializer, PeliculaSerializer, ActorSerializer
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

# Create your views here.
@api_view(['GET', 'POST'])
def get_and_create_estudio(request):
    try:
        if request.method == 'GET':
            estudios = Estudio.objects.all()
            serializer = EstudioSerializer(estudios, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == 'POST':
            serializer = EstudioSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response('something went wrong', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'PUT', 'DELETE'])
def get_edit_and_delete_estudio(request, id):
    try:
        estudio = Estudio.objects.get(id=id)
        if request.method == 'GET':
            serializer = EstudioSerializer(estudio)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == 'PUT':
            serializer = EstudioSerializer(estudio, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == 'DELETE':
            estudio.delete()
            serializer = EstudioSerializer(estudio)
            return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response('something went wrong', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'POST'])
def get_and_create_pelicula(request):
    try:
        if request.method == 'GET':
            peliculas = Pelicula.objects.all()
            serializer = PeliculaSerializer(peliculas, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == 'POST':
            estudio = Estudio.objects.get(id=request.data['estudio'])
            pelicula = Pelicula(titulo=request.data['titulo'], fecha=request.data['fecha'], estudio=estudio)
            pelicula.save()
            serializer = PeliculaSerializer(pelicula)
            return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response('something went wrong', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'PUT', 'DELETE'])
def get_edit_and_delete_pelicula(request, id):
    try:
        pelicula = Pelicula.objects.get(id=id)
        if request.method == 'GET':
            serializer = PeliculaSerializer(pelicula)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == 'PUT':
            serializer = PeliculaSerializer(pelicula, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == 'DELETE':
            pelicula.delete()
            serializer = PeliculaSerializer(pelicula)
            return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response('something went wrong', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'POST'])
def get_and_create_actor(request):
    try:
        if request.method == 'GET':
            actores = Actor.objects.all()
            serializer = ActorSerializer(actores, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == 'POST':
            pelicula = Pelicula.objects.get(id=request.data["pelicula"])
            actor = Actor(nombre=request.data['nombre'], pelicula=pelicula)
            actor.save()
            serializer = ActorSerializer(actor)
            return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response('something went wrong', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'PUT', 'DELETE'])
def get_edit_and_delete_actor(request, id):
    try:
        actor = Actor.objects.get(id=id)
        if request.method == 'GET':
            serializer = ActorSerializer(actor)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == 'PUT':
            pelicula = Pelicula.objects.get(id=request.data['pelicula'])
            actor.nombre = request.data['nombre']
            actor.pelicula = pelicula
            actor.save()
            serializer = ActorSerializer(actor)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == 'DELETE':
            actor.delete()
            serializer = ActorSerializer(actor)
            return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response('something went wrong', status=status.HTTP_500_INTERNAL_SERVER_ERROR)
