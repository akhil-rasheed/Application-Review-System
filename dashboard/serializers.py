from rest_framework import serializers
from .models import Candidate


class CandidateSerializer(serializers.ModelSerializer):
    resume = serializers.FileField(required=False)

    class Meta:
        model = Candidate
        fields = ('id', 'dateApplied', 'firstName', 'lastName', 'email', 'status', 'education',
                  'position', 'resume', 'phone', 'location', 'salary', 'experience', 'skills')
