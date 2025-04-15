import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-allhotels',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './allhotels.component.html',
  styleUrl: './allhotels.component.css'
})
export class AllhotelsComponent {
  Hotels: any[] = [];
  param: any;
  searchTerm: string = '';

  constructor(public _dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this._dataService.getAllHotels().subscribe((data) => {
      this.Hotels = data.recipes;
      console.log(this.Hotels);
    });
  }

  filteredHotels(): any[] {
    if (!this.Hotels || !Array.isArray(this.Hotels)) {
      return [];
    }
    
    if (!this.searchTerm) {
      return this.Hotels;
    }

    return this.Hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
