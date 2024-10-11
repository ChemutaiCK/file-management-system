from django.urls import path, include
from rest_framework.routers import DefaultRouter
from files import views

router = DefaultRouter()
router.register(r'files', views.FileViewSet)
router.register(r'directories', views.DirectoryViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
