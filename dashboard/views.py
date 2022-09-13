from copyreg import constructor
from django.shortcuts import render
from .serializers import CandidateSerializer
from rest_framework import viewsets
from .models import Candidate
from rest_framework.response import Response
from rest_framework import generics


class CandidateList(generics.ListCreateAPIView):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer


class CandidateDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer
