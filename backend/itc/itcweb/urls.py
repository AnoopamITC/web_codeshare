from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.user_home),
    path("applyinternship/", views.apply_internship, name="apply-internship"),
    path("listinternships/", views.list_internships, name="list-internships"),
]
