from rest_framework import generics,serializers
from rest_framework.response import Response
from .models import *
class CommentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('name','check','body','my_id','my_date')
class CommentListView(generics.ListAPIView):
    queryset = Comment.objects.all()
    print("Comment Work",queryset)
    serializer_class = CommentListSerializer
    def list(self,request):
        queryset = self.get_queryset()
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(queryset,many=True)

        page = self.paginate_queryset(queryset)
        print("Comment Work",page)
        if page is not None:
            serializer = self.get_serializer(page,many=True)
            return self.get_paginated_response(serializer.data)
        return Response(serializer.data)