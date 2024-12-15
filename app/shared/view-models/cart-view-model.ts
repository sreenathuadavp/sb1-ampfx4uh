import { Observable } from '@nativescript/core';
import { CartItem, Service } from '../models/service.model';

export class CartViewModel extends Observable {
  private items: CartItem[] = [];

  addToCart(service: Service) {
    const existingItem = this.items.find(item => item.service.id === service.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ service, quantity: 1 });
    }
    this.notifyPropertyChange('items', this.items);
  }

  removeFromCart(serviceId: string) {
    this.items = this.items.filter(item => item.service.id !== serviceId);
    this.notifyPropertyChange('items', this.items);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + (item.service.price * item.quantity), 0);
  }

  getItems(): CartItem[] {
    return this.items;
  }
}