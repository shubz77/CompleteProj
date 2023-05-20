import { Component, OnInit } from '@angular/core';
import { VenueUserService } from 'src/app/services/userService/venuesUser/venue-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-policy-admin',
  templateUrl: './view-policy-admin.component.html',
  styleUrls: ['./view-policy-admin.component.css']
})
export class ViewPolicyAdminComponent implements OnInit {

  venues:any;
  constructor(private venueUserService:VenueUserService) { }

  ngOnInit(): void {
    // Get All Venues
    this.venueUserService.getAllVenues().subscribe(
      (venues)=>{
        this.venues = venues;
      },
      (error)=>{
        Swal.fire("Error","Problem in loading Venues","error");
      }
      )
  }


}
