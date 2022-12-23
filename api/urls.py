from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoute, name='routes'),
    path('notes/', views.getNotes, name='notes'),
    path('notes/<int:id>/update', views.updateNote, name='update-note'),
    path('notes/<int:id>/delete', views.deleteNote, name='delete-note'),
    path('notes/create', views.createNote, name='create-note'),
    path('notes/<int:id>', views.getNote, name='note'),
]
