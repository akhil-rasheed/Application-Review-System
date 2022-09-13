# Generated by Django 4.1.1 on 2022-09-13 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0012_candidate_education_candidate_skills'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidate',
            name='status',
            field=models.IntegerField(blank=True, choices=[(1, 'Applied'), (2, 'Accepted'), (3, 'Rejected')], default=1),
        ),
    ]
