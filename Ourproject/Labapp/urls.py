from django.urls import path

from . import views

urlpatterns = [ 
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('homepage/', views.homepage, name='homepage'),
    path('software/', views.software, name='software'),
    path('softwaredata/', views.softwaredata, name='softwaredata'),
    path('hardware/', views.hardware, name='hardware'),
    
]