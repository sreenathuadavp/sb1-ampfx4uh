import { Observable } from '@nativescript/core';
import { CartViewModel } from '../../shared/view-models/cart-view-model';
import { TicketService } from '../../shared/services/ticket.service';

export class CheckoutViewModel extends Observable {
  private cartViewModel: CartViewModel;
  private ticketService: TicketService;

  constructor() {
    super();
    this.cartViewModel = new CartViewModel();
    this.ticketService = new TicketService();
    
    this.set('cartItems', this.cartViewModel.getItems());
    this.set('total', this.cartViewModel.getTotal());
    this.set('scheduledDate', new Date());
  }

  onConfirmBooking() {
    if (!this.validateForm()) {
      return;
    }

    const ticket = this.ticketService.createTicket({
      userId: 'current-user-id', // In real app, get from auth service
      serviceId: this.get('cartItems')[0].service.id,
      customerName: this.get('customerName'),
      customerPhone: this.get('customerPhone'),
      address: this.get('address'),
      scheduledDate: this.get('scheduledDate'),
      totalAmount: this.get('total'),
    });

    // In real app, integrate payment gateway here
    // After successful payment:
    alert({
      title: "Booking Confirmed",
      message: "Your service request has been submitted successfully!",
      okButtonText: "OK"
    });
  }

  private validateForm(): boolean {
    // Add validation logic here
    return true;
  }
}