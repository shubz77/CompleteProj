import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VenueUserService } from 'src/app/services/userService/venuesUser/venue-user.service';

@Component({
  selector: 'app-policy-detail-admin',
  templateUrl: './policy-detail-admin.component.html',
  styleUrls: ['./policy-detail-admin.component.css']
})
export class PolicyDetailAdminComponent implements OnInit {

  venue:any;
  venueId=0;
  constructor(private route:ActivatedRoute,private venueUserservice:VenueUserService) { }

  ngOnInit(): void {
    this.venueId = this.route.snapshot.params.venueId;

    // Single Venue by Id
    this.venueUserservice.getVenue(this.venueId).subscribe(
      (venue)=>{ this.venue = venue; },
      (error)=>{ console.log(error); }
    )
  }
}
