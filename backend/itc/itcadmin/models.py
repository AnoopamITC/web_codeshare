from django.db import models
from django.contrib.auth.hashers import make_password
class AdminUser(models.Model):
    admin_id = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=128)

    def save(self, *args, **kwargs):
        if not self.pk:
            from django.contrib.auth.hashers import make_password
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.admin_id

    class Meta:
        db_table = "itcadmin_adminuser"   # ✅ Match your existing table
        

class Internship(models.Model):
    MODE_CHOICES = [
        ('Online', 'Online'),
        ('Offline', 'Offline'),
        ('Hybrid', 'Hybrid'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    duration = models.CharField(max_length=100)
    fees = models.DecimalField(max_digits=10, decimal_places=2)
    eligibility = models.TextField()
    mode = models.CharField(max_length=20, choices=MODE_CHOICES)
    status = models.BooleanField(default=True)
    image = models.ImageField(upload_to="internships/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = "itcadmin_internship"   # ✅ Match your existing table
