from django.contrib import admin
from .models import register #index #homepage, hardware_reports, software_reports
from .models import index, register, homepage, hardware_reports, software_reports

# Register your models here.
admin.site.register(register)

class i1(admin.ModelAdmin):
    list_display = ['User_name', 'Password_data' ]
admin.site.register(index, i1)

class reg1(admin.ModelAdmin):
    list_display = ['Email_data', 'User_name', 'Password_input', 'Job_description', 'Contact_num' ]
admin.site.register(register, reg1)

class hp1(admin.ModelAdmin):
    list_display = ['Section_name', 'Date', 'Time_in', 'Time_out', ' Status' ]
admin.site.register(homepage, hp1)

class hr1(admin.ModelAdmin):
    list_display = ['Lab_num', 'Pc_num', 'System_unit', 'Mouse', 'Avr', 'Monitor', 'Comments' ]
admin.site.register(hardware_reports, hr1)

class sr1(admin.ModelAdmin):
    list_display = ['User_name', 'Type_concern', 'Lab_num', 'Pc_num', 'Message' ]
admin.site.register(software_reports, sr1)
