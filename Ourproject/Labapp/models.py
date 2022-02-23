from pickle import TRUE
from sqlite3 import Date
from django.db import models
from django.db.models import Model
import os

class register1(models.Model):
    jobdes = [
        ('Comp. Instructor', 'Comp. Instructor'),
        ('UITC Staff', 'UITC Staff'),
        
        ]
    Email = models.EmailField(max_length = 254, primary_key= True, null=False)
    Username = models.CharField(max_length= 50, null=False)
    Password = models.CharField(max_length = 40, null=False)
    Job = models.CharField(max_length = 40,   choices=jobdes)
    Contactnum = models.DecimalField(max_digits=11, decimal_places=0, default="", null=False)


    
    

class index(models.Model):
    Username = models.CharField(max_length= 50, primary_key= True, null=False)
    Passworddata =models.CharField(default= "", max_length =40, null=False)


    


class homepage(models.Model):

    Availability = [
        ('AVAILABLE ', 'AVAILABLE '),
        ('OCCUPIED ', 'OCCUPIED '),

        ]
    Section_name= models.CharField(max_length= 50, null=False)
    Date = models.DateField(primary_key= True, null=False)
    Timein = models.TimeField(null=False)
    Timeout = models.TimeField(null=False)
    Status = models.CharField(max_length=50, choices = Availability, null=False)


    
    
    

class hardware_reports(models.Model):
    Laboratories = [
        ('LABORATORY 1', 'LABORATORY 1'),
        ('LABORATORY 2', 'LABORATORY 2'),
        ('LABORATORY 3', 'LABORATORY 3'),
        ('LABORATORY 4', 'LABORATORY 4'),
        ]
    Labnum = models.CharField(max_length=50, choices = Laboratories, null=False)
    Pcnum = models.IntegerField(primary_key = True, null=False)
    Systemunit = models.BooleanField()
    Mouse = models.BooleanField()
    Avr = models.BooleanField()
    Monitor = models.BooleanField()
    Comments = models.CharField(max_length=50)

    

class software_reports(models.Model):
    Laboratory_num = [
        ('LABORATORY 1', 'LABORATORY 1'),
        ('LABORATORY 2', 'LABORATORY 2'),
        ('LABORATORY 3', 'LABORATORY 3'),
        ('LABORATORY 4', 'LABORATORY 4'),
        ]
    Concern = [
        ('Request', 'Request'),
        ('Complain', 'Complain'),
        ('Suggest', 'Suggest'),
        ('Others', 'Others'),
        ]
    Username = models.CharField(max_length=50, primary_key = True, null=False)
    Typeconcern = models.CharField(max_length=50, choices = Concern, null=False)
    Labnum = models.CharField(max_length=50, choices = Laboratory_num, null=False)
    Pcnum = models.IntegerField(null=False)
    Message = models.CharField(max_length=256, blank=True, null=True)



