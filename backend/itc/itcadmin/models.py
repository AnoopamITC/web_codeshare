from django.db import models
from django.contrib.auth.hashers import make_password

class AdminUser(models.Model):
    admin_id = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=128)  

    def save(self, *args, **kwargs):
       
        if not self.pk:
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.admin_id
