# Generated by Django 4.1.1 on 2022-09-11 04:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0009_candidate_resume'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='candidate',
            name='resume',
        ),
    ]