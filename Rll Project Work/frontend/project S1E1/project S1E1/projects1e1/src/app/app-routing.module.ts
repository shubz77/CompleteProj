import { BookDetailPastComponent } from './pages/organizer/book-detail-past/book-detail-past.component';
import { PolicyDetailAdminComponent } from './pages/admin/policy-detail-admin/policy-detail-admin.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { OrgHomeComponent } from './pages/organizer/org-home/org-home.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { OrgProfileComponent } from './pages/organizer/org-profile/org-profile.component';
import { ViewOrganizerComponent } from './pages/admin/view-organizer/view-organizer.component';
import { ViewUserComponent } from './pages/admin/view-user/view-user.component';

import { UserNotificationComponent } from './pages/user/user-notification/user-notification.component';
import { AvailabilityComponent } from './pages/user/availability/availability.component';
import { BookDetailComponent } from './pages/organizer/book-detail/book-detail.component';
import { FutureBookingComponent } from './pages/organizer/future-booking/future-booking.component';
import { PaymentComponent } from './pages/user/payment/payment.component';
import { BookingDetailUserComponent } from './pages/user/booking-detail-user/booking-detail-user.component';
import { BookingHistoryUserComponent } from './pages/user/booking-history-user/booking-history-user.component';
import { BookingDetailsComponent } from './pages/admin/booking-details/booking-details.component';
import { ViewBookingsAdminComponent } from './pages/admin/view-bookings-admin/view-bookings-admin.component';
import { ViewPolicyAdminComponent } from './pages/admin/view-policy-admin/view-policy-admin.component';
import { PayMessageComponent } from './pages/user/pay-message/pay-message.component';
import { BookEventComponent } from './pages/user/book-event/book-event.component';


import { PolicyDetailUserComponent } from './pages/user/policy-detail-user/policy-detail-user.component';
import { ViewPolicyComponent } from './pages/user/view-policy/view-policy.component';


import { ShowEventsComponent } from './pages/organizer/add-policy/policy-details/show-events/show-events.component';
import { PolicyDetailsComponent } from './pages/organizer/add-policy/policy-details/policy-details.component';


import { AddEventComponent } from './pages/organizer/add-policy/add-event/add-event.component';
import { AddPolicyComponent } from './pages/organizer/add-policy/add-policy.component';
import { ManagePolicyComponent } from './pages/organizer/manage-policy/manage-policy.component';
import { OrganizerGuard } from './services/organizerService/organizer.guard';
import { OrganizerDashboardComponent } from './pages/organizer/organizer-dashboard/organizer-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserGuard } from './services/userService/user.guard';
import { AdminGuard } from './services/adminService/admin.guard';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';


import { UpdateEventComponent } from './pages/organizer/add-policy/update-event/update-event.component';
import { EventsUserComponent } from './pages/user/policy-detail-user/events-user/events-user.component';
import { PastBookingComponent } from './pages/organizer/past-booking/past-booking.component';
import { OrgNotificationsComponent } from './pages/organizer/org-notifications/org-notifications.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';

const routes: Routes = [
  
  {
    path:"registration",
    component:RegistrationComponent
  },
 

  {
    path:"",
    component:HomeComponent
  },
  

  {
    path:"login",
    component:LoginComponent,  
  },

  {
    path:"user",
    component:UserDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:"",
        component:UserHomeComponent,
      },

      {
        path:"viewVenues",
        component:ViewPolicyComponent,
      },
      {
        path:"venueDetails/:venueId",
        component:PolicyDetailUserComponent,
        children:[
          {
            path:"events/:venueId",
            component:EventsUserComponent,
          },
          {
            path:"foodItems/:venueId",
            
          },
          {
            path:"equipments/:venueId",
            
          },
        ]        
      },
      {
        path:"availability/:venueId",
        component:AvailabilityComponent,
      },
      {
        path:"bookEvent",
        component:BookEventComponent,
      },
      {
        path:"payMessage",
        component:PayMessageComponent,

      },
      {
        path:"bookingHistory",
        component:BookingHistoryUserComponent,
      },
      {
        path:"bookingDetail/:bookingId",
        component:BookingDetailUserComponent,
      },
      {
        path:"payment/:bookingId",
        component:PaymentComponent,
      },
      {
        path:"notifications",
        component:UserNotificationComponent,
      },
      {
        path:"userProfile",
        component:UserProfileComponent,
      },
  ]
  },

  {
    path:"organizer",
    component:OrganizerDashboardComponent,
    canActivate:[OrganizerGuard],
    children:[
      {
        path:"",
        component:OrgHomeComponent,
      },

    {
      path:"manageVenue",
      component:ManagePolicyComponent,
    },
    {
      path:"addVenue",
      component:AddPolicyComponent,
    },


    { path:"venueDetails/:venueId",
      component:PolicyDetailsComponent,
      children:[
        {
          path:"showEvents/:venueId",
          component:ShowEventsComponent,
        },

        {
          path:"showFoodItems/:venueId",
          
        },

        {
          path:"showEquipments/:venueId",
          
        },

        {
          path:"addEvent/:venueId",
          component:AddEventComponent,
        },

        {
          path:"addFoodItem/:venueId",
          
        },

        {
          path:"addEquipment/:venueId",
          
        },


        {
          path:"updateEvent/:eventId",
          component:UpdateEventComponent,
        },

        {
          path:"updateFoodItem/:foodItemId",
          
        },

        {
          path:"updateEquipment/:equipmentId",
          
        }

      ]
    },
    {
      path:"viewBookings",
      component:FutureBookingComponent,
    },
    {
      path:"pastBookings",
      component:PastBookingComponent,
    },
    {
      path:"bookDetailsF/:bookingId",
      component:BookDetailComponent,
    },
    {
      path:"bookDetailsP/:bookingId",
      component:BookDetailPastComponent,
    },
    {
      path:"notifications",
      component:OrgNotificationsComponent,
    },
    {
      path:"orgProfile",
      component:OrgProfileComponent,
    },
    
  ],
  },
  {
    path:"admin",
    component:AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:"",
        component:AdminHomeComponent,
      },
      {
        path:"viewVenues",
        component:ViewPolicyAdminComponent,
      },
      {
        path:"venueDetails/:venueId",
        component:PolicyDetailAdminComponent,
        children:[
          {
            path:"events/:venueId",
            component:EventsUserComponent,
          },
          {
            path:"foodItems/:venueId",
            
          },
          {
            path:"equipments/:venueId",
            
          },
        ]        
      },
      {
        path:"viewBookings",
        component:ViewBookingsAdminComponent,
      },
      {
        path:"bookingDetails/:bookingId",
        component:BookingDetailsComponent,
      },
      {
        path:"allUsers",
        component:ViewUserComponent,
      },
      {
        path:"allOrganizers",
        component:ViewOrganizerComponent,
      },
      {
        path:"profile/:memberId",
        component:ProfileComponent,
      },
      
    ]
  },

  {
    path:"home",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
