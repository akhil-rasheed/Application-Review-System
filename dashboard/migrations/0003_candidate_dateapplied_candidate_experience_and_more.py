# Generated by Django 4.1.1 on 2022-09-09 17:36

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_candidate_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidate',
            name='dateApplied',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='candidate',
            name='experience',
            field=models.CharField(default='sdfsldjf', max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='candidate',
            name='location',
            field=models.CharField(default='mysore', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='candidate',
            name='position',
            field=models.CharField(default='sde', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='candidate',
            name='resume',
            field=models.FileField(default='sks', upload_to='uploads/'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='candidate',
            name='skills',
            field=models.JSONField(default='lsks'),
            preserve_default=False,
        ),
    ]
