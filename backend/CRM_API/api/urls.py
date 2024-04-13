from django.urls import path
from .views import TicketView, search_tickets

urlpatterns = [
    path('tickets/', TicketView.as_view(), name='tickets_list'),
    path('tickets/<id>', TicketView.as_view(), name='ticket_operations'),
    path('search/', search_tickets, name='search_items'),
]