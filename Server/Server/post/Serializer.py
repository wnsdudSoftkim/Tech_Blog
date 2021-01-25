from rest_framework import generics,serializers
from rest_framework.response import Response
from .models import *
class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title','body','user_date','thumbnail','my_id')
class PostListView(generics.ListAPIView):
    queryset = Post.objects.all()
    print("Post Work",queryset)
    serializer_class = PostListSerializer
    def list(self,request):
        queryset = self.get_queryset()
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(queryset,many=True)

        page = self.paginate_queryset(queryset)
        print("Post Work",page)
        if page is not None:
            serializer = self.get_serializer(page,many=True)
            return self.get_paginated_response(serializer.data)
        return Response(serializer.data)