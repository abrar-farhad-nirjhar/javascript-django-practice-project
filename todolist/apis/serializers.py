from .models import Task


from rest_framework import serializers

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ['id', 'task']
        model = Task