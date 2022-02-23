from os import name
from django.urls import path
from django.conf import settings
from . import views

urlpatterns = [ 
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('reg/', views.reg, name='reg'),
    path('homepage/', views.homepage, name='homepage'),
    path('software/', views.software, name='software'),
    path('softwaredata/', views.softwaredata, name='softwaredata'),
    path('hardware/', views.hardware, name='hardware'),
    path('equipmentdevice/', views.EquipmentDevice, name='EquipmentDevice'),
    path('equipmentdevice1/', views.equipmentdevice1, name='equipmentdevice1'),
    path('performrequest/', views.performrequest, name='performrequest'),
    path('records/', views.records, name='records'),
    path('delete/<int:Pcnum>', views.delete, name='delete'),
    
]
