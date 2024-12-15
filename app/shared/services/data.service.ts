import { Observable } from '@nativescript/core';
import { Service } from '../models/service.model';

export class DataService extends Observable {
  private services: Service[] = [
    {
      id: '1',
      name: 'Plumbing Service',
      description: 'Professional plumbing services in Chittoor area',
      price: 500,
      category: 'Home',
      imageUrl: 'res://plumbing'
    },
    {
      id: '2',
      name: 'Electrical Repair',
      description: 'Expert electrical repair and installation',
      price: 600,
      category: 'Home',
      imageUrl: 'res://electrical'
    },
    {
      id: '3',
      name: 'House Cleaning',
      description: 'Complete house cleaning services',
      price: 800,
      category: 'Home',
      imageUrl: 'res://cleaning'
    }
  ];

  getServices(): Service[] {
    return this.services;
  }

  getServiceById(id: string): Service | undefined {
    return this.services.find(service => service.id === id);
  }
}