from rest_framework import serializers
from .models import Candidate


class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ('id', 'dateApplied', 'firstName', 'lastName', 'email', 'status',
                  'position', 'phone', 'location', 'salary', 'experience', 'skills')
