# Generated by Django 5.0.1 on 2024-06-12 15:23

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("app", "0003_appointment"),
    ]

    operations = [
        migrations.AlterField(
            model_name="appointment",
            name="choose",
            field=models.CharField(
                choices=[
                    ("Site Plan", "Site Plan"),
                    ("Interiors Design", "Interiors Design"),
                    ("Renovation", "Renovation"),
                ],
                max_length=16,
            ),
        ),
    ]
