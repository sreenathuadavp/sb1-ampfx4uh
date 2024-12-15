import { Observable } from '@nativescript/core';
import { Ticket } from '../../shared/models/ticket.model';
import { TicketService } from '../../shared/services/ticket.service';

export class AdminViewModel extends Observable {
  private ticketService: TicketService;
  
  constructor() {
    super();
    this.ticketService = new TicketService();
    this.refreshTickets();
  }

  private refreshTickets() {
    const allTickets = this.ticketService.getTickets();
    this.set('pendingTickets', allTickets.filter(t => t.status === 'pending'));
    this.set('activeTickets', allTickets.filter(t => t.status === 'in-progress'));
  }

  onAcceptTicket(args) {
    const ticket = args.object.bindingContext as Ticket;
    this.ticketService.updateTicketStatus(ticket.id, 'in-progress');
    this.refreshTickets();
  }

  onCompleteTicket(args) {
    const ticket = args.object.bindingContext as Ticket;
    this.ticketService.updateTicketStatus(ticket.id, 'completed');
    this.refreshTickets();
  }
}