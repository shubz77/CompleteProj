import { ManagePolicyComponent } from '../../pages/organizer/manage-policy/manage-policy.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  orgID :any;
  venueList:any;
  constructor(private login:LoginService ,private http: HttpClient) {
    
    }

    //get venues by organizer Id
      getVenueByOrganizerId(){
        this.orgID = sessionStorage.getItem('memberId');
         return this.http.get(`${baseUrl}/venue/organizer/${this.orgID}`);

      };

      //get List of venues 
      getVenueList(){return this.venueList};
     public  getFutureBookingsByOrgId(){
      this.orgID = sessionStorage.getItem('memberId');
        return this.http.get(`${baseUrl}/booking/upcomingBookings/${this.orgID}`);
      }

      // List of Past Bookings
      public  getPastBookingsByOrgId(){
        this.orgID = sessionStorage.getItem('memberId');
          return this.http.get(`${baseUrl}/booking/previousBookings/${this.orgID}`);
        }

        // Get Notifications
        public getNotifications(){
          return this.http.get(`${baseUrl}/notification/getNotification/${sessionStorage.getItem('memberId')}`)
        }
};

  