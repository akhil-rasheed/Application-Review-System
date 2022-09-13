from django.db import models


class Candidate(models.Model):
    id = models.AutoField(primary_key=True, blank=True)
    dateApplied = models.DateTimeField(auto_now_add=True, blank=True)
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=50)
    email = models.EmailField(max_length=255)
   # resume = models.FileField(blank=True, null=True, upload_to='uploads/')
    phone = models.CharField(max_length=255)

    APPLIED_STATUS = 1
    ACCEPTED_STATUS = 2
    REJECTED_STATUS = 3

    STATUS_CHOICES = (
        (APPLIED_STATUS, "Applied"),
        (ACCEPTED_STATUS, "Accepted"),
        (REJECTED_STATUS, "Rejected"),
    )

    status = models.IntegerField(
        choices=STATUS_CHOICES, default=APPLIED_STATUS, blank=True)

    position = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    salary = models.IntegerField()
    experience = models.CharField(max_length=255)
    skills = models.CharField(max_length=255)
    education = models.CharField(max_length=255)

    def _str_(self):
        return 'self.firstName + " " + self.lastName'
