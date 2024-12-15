import { Observable } from '@nativescript/core';
import { Ticket } from '../models/ticket.model';

export class TicketService extends Observable {
  private tickets: Ticket[] = [];

  createTicket(ticketData: Partial<Ticket>): Ticket {
    const ticket: Ticket = {
      id: Date.now().toString(),
      status: 'pending',
      paymentStatus: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
      notes: [],
      ...ticketData
    } as Ticket;

    this.tickets.push(ticket);
    this.notifyPropertyChange('tickets', this.tickets);
    return ticket;
  }

  updateTicketStatus(ticketId: string, status: Ticket['status']) {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (ticket) {
      ticket.status = status;
      ticket.updatedAt = new Date();
      this.notifyPropertyChange('tickets', this.tickets);
    }
  }

  getTickets(): Ticket[] {
    return this.tickets;
  }

  getUserTickets(userId: string): Ticket[] {
    return this.tickets.filter(ticket => ticket.userId === userId);
  }
}