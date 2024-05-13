from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('Admin_login/', views.adminlogin, name='adminlogin'),
    path('admin_signup/', views.adminsignup, name='adminsignup'),
    path('Admin/', views.admin, name='admin'),
]
