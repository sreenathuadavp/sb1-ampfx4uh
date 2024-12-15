export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface CartItem {
  service: Service;
  quantity: number;
}

export interface Ticket {
  id: string;
  userId: string;
  serviceId: string;
  status: 'pending' | 'accepted' | 'in-progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
  notes: string;
}