from django.db import models

class Directory(models.Model):
    name = models.CharField(max_length=255)
    parent_directory = models.ForeignKey('self', null=True, blank=True, related_name='sub_directories', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class File(models.Model):
    name = models.CharField(max_length=255)
    directory = models.ForeignKey(Directory, related_name='files', on_delete=models.CASCADE)
    file = models.FileField(upload_to='uploads/')  # Ensure MEDIA_URL and MEDIA_ROOT are configured in settings.py

    def __str__(self):
        return self.name
