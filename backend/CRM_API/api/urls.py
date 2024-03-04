from django.urls import path
from .views import TicketView

urlpatterns = [
    path('tickets/', TicketView.as_view(), name='tickets_list'),
    path('tickets/<int:id>', TicketView.as_view(), name='ticket_operations'),
]