export interface Ticket {
  id: string;
  userId: string;
  serviceId: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  customerName: string;
  customerPhone: string;
  address: string;
  scheduledDate: Date;
  totalAmount: number;
  paymentStatus: 'pending' | 'completed';
  createdAt: Date;
  updatedAt: Date;
  notes: string[];
}