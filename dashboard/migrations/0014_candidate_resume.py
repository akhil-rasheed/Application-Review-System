# Generated by Django 4.1.1 on 2022-09-14 05:57

import dashboard.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0013_alter_candidate_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidate',
            name='resume',
            field=models.FileField(blank=True, null=True, upload_to=dashboard.models.upload_to),
        ),
    ]
