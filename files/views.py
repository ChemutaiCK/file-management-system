from rest_framework import viewsets
from .models import File, Directory
from .serializers import FileSerializer, DirectorySerializer

class FileViewSet(viewsets.ModelViewSet):
    queryset = File.objects.all()
    serializer_class = FileSerializer

class DirectoryViewSet(viewsets.ModelViewSet):
    queryset = Directory.objects.all()
    serializer_class = DirectorySerializer
