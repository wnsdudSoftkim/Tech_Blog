from rest_framework import generics,serializers
from rest_framework.response import Response
from .models import *
class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email','author','password')
class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    print("User Work",queryset)
    serializer_class = UserListSerializer
    def list(self,request):
        queryset = self.get_queryset()
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(queryset,many=True)

        page = self.paginate_queryset(queryset)
        print("User Work",page)
        if page is not None:
            serializer = self.get_serializer(page,many=True)
            return self.get_paginated_response(serializer.data)
        return Response(serializer.data)