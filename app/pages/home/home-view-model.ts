import { Observable } from '@nativescript/core';
import { DataService } from '../../shared/services/data.service';

export class HomeViewModel extends Observable {
  private dataService: DataService;

  constructor() {
    super();
    this.dataService = new DataService();
    this.set('popularServices', this.dataService.getServices());
  }

  onViewAllTap() {
    // Navigate to services page
  }

  onCategoryTap(args) {
    const category = args.object.category;
    // Navigate to category specific page
  }
}