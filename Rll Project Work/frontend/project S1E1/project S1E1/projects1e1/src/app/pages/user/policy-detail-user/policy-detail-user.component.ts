import { VenueUserService } from '../../../services/userService/venuesUser/venue-user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-detail-user',
  templateUrl: './policy-detail-user.component.html',
  styleUrls: ['./policy-detail-user.component.css']
})
export class PolicyDetailUserComponent implements OnInit {

  venue:any;
  venueId=0;
  constructor(private route:ActivatedRoute,private venueUserservice:VenueUserService) { }

  ngOnInit(): void {
    this.venueId = this.route.snapshot.params.venueId;
    this.venueUserservice.getVenue(this.venueId).subscribe(
      (venue)=>{
        this.venue = venue;
      },
      (error)=>{
        console.log(error);
      }
    )

  }

}
