from rest_framework import serializers

from notes.models import Note

# Serializer is a format of input and output of data
class NoteSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Note
        fields = ['id', 'title', 'content', 'user','username']

