from django.urls import path

from . import views

urlpatterns = [ 
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('homepage/', views.homepage, name='homepage'),
    path('software/', views.software, name='software'),
    path('hardware/', views.hardware, name='hardware'),
    
]