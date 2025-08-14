from django.urls import path
from . import views

urlpatterns = [
    path('dashboard/', views.admin_dashboard),
    path("admin-login/", views.admin_login)
]