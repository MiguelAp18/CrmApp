from django.http import HttpRequest
from django.views import View
from django.http.response import HttpResponse as HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json

from .models import Ticket

# Create your views here.
class TicketView(View):
    
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, id = 0):
        
        if id > 0:
            tickets = list(Ticket.objects.filter(id=id).values())
            if len(tickets) > 0:
                ticket = tickets[0]
                data = {'message': 'Success', 'tickets': ticket}
            else:
                data = {'message': 'Ticket not found'}

            return JsonResponse(data)

        else:
            tickets = list(Ticket.objects.values())
            if len(tickets) > 0:
                data = {'message': 'Success', 'tickets': tickets}
            else:
                data = {'message': 'Tickets not found'}

            return JsonResponse(data)

    def post(self, request):
        
        res = json.loads(request.body)
        Ticket.objects.create(title=res['title'], description=res['description'], priority=res['priority'])
        data = {'message': 'Success'}

        return JsonResponse(data)

    def put(self, request, id):
        
        res = json.loads(request.body)
        tickets = list(Ticket.objects.filter(id=id).values())
        if len(tickets) > 0:
            ticket = Ticket.objects.get(id=id)
            ticket.title = res['title']
            ticket.description = res['description']
            ticket.priority = res['priority']
            ticket.save()
            data = {'message': 'Success'}
        else:
            data = {'message': 'Ticket not found'}

        return JsonResponse(data)

    def delete(self, request, id):
        
        tickets = list(Ticket.objects.filter(id=id).values())
        if len(tickets) > 0:
            Ticket.objects.filter(id=id).delete()
            data = {'message': 'Success'}
        else:
            data = {'message': 'Ticket not found'}

        return JsonResponse(data)
