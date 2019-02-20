from django.shortcuts import render

# Create your views here.
from .serializers import TaskSerializer
from .models import Task

from rest_framework import viewsets

class TaskViewset(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer



