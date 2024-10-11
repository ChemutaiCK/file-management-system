from django.db import models

class Directory(models.Model):
    name = models.CharField(max_length=255)
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)

class File(models.Model):
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='uploads/')
    directory = models.ForeignKey(Directory, related_name='files', on_delete=models.CASCADE)
from django.db import models

# Create your models here.
