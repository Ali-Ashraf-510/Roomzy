import { DataService } from './../data.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hoteldetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hoteldetails.component.html',
  styleUrl: './hoteldetails.component.css'
})
export class HoteldetailsComponent implements OnInit {
  recipe: any=[]; 

  constructor(private route: ActivatedRoute, private _dataService: DataService,private router:Router) {}

  ngOnInit(): void {
    const recipeId = + this.route.snapshot.params['id']; // Get recipe ID from URL
    this._dataService.getHotelById(recipeId).subscribe((data) => {
      this.recipe = data; 
      console.log(this.recipe); 
    });
  }
  copyLink() {
    const pageUrl = window.location.href;
  
    navigator.clipboard.writeText(pageUrl)
      
     Swal.fire({
          title: 'Link Copied!',
          text: 'The link has been copied to your clipboard.',
          icon: 'success',
          timer: 3000,

          confirmButtonText: 'OK',
          customClass: {
            title: 'custom-title', 
          }
      });
     
    
    }
}
