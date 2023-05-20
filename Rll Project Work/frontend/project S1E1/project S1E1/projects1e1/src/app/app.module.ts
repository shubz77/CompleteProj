import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import{ FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { OrganizerDashboardComponent } from './pages/organizer/organizer-dashboard/organizer-dashboard.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { SidebarOrgComponent } from './components/sidebar-org/sidebar-org.component';
import { ManagePolicyComponent } from './pages/organizer/manage-policy/manage-policy.component';
import { AddPolicyComponent } from './pages/organizer/add-policy/add-policy.component';
import { AddEventComponent } from './pages/organizer/add-policy/add-event/add-event.component';


import { PolicyDetailsComponent } from './pages/organizer/add-policy/policy-details/policy-details.component'
import Swal from 'sweetalert2';
import { ShowEventsComponent } from './pages/organizer/add-policy/policy-details/show-events/show-events.component';


import { UpdateEventComponent } from './pages/organizer/add-policy/update-event/update-event.component';


import { ViewPolicyComponent } from './pages/user/view-policy/view-policy.component';
import { PolicyDetailUserComponent } from './pages/user/policy-detail-user/policy-detail-user.component';
import { EventsUserComponent } from './pages/user/policy-detail-user/events-user/events-user.component';


import { BookEventComponent } from './pages/user/book-event/book-event.component';
import { PayMessageComponent } from './pages/user/pay-message/pay-message.component';
import { ViewPolicyAdminComponent } from './pages/admin/view-policy-admin/view-policy-admin.component';
import { PolicyDetailAdminComponent } from './pages/admin/policy-detail-admin/policy-detail-admin.component'


import { EventsAdminComponent } from './pages/admin/policy-detail-admin/events-admin/events-admin.component';
import { ViewBookingsAdminComponent } from './pages/admin/view-bookings-admin/view-bookings-admin.component';
import { BookingDetailsComponent } from './pages/admin/booking-details/booking-details.component';
import { BookingHistoryUserComponent } from './pages/user/booking-history-user/booking-history-user.component';
import { BookingDetailUserComponent } from './pages/user/booking-detail-user/booking-detail-user.component';
import { PaymentComponent } from './pages/user/payment/payment.component';
import { FutureBookingComponent } from './pages/organizer/future-booking/future-booking.component';
import { BookDetailComponent } from './pages/organizer/book-detail/book-detail.component';
import { PastBookingComponent } from './pages/organizer/past-booking/past-booking.component';
import { AvailabilityComponent } from './pages/user/availability/availability.component';
import { UserNotificationComponent } from './pages/user/user-notification/user-notification.component';
import { OrgNotificationsComponent } from './pages/organizer/org-notifications/org-notifications.component';
import { ViewUserComponent } from './pages/admin/view-user/view-user.component';
import { ViewOrganizerComponent } from './pages/admin/view-organizer/view-organizer.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { OrgProfileComponent } from './pages/organizer/org-profile/org-profile.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { OrgHomeComponent } from './pages/organizer/org-home/org-home.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { BookDetailPastComponent } from './pages/organizer/book-detail-past/book-detail-past.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    UserDashboardComponent,
    OrganizerDashboardComponent,
    AdminDashboardComponent,
    Navbar2Component,
    SidebarComponent,
    SidebarAdminComponent,
    SidebarOrgComponent,
    ManagePolicyComponent,
    AddPolicyComponent,
    AddEventComponent,
    
    
    PolicyDetailsComponent,
    ShowEventsComponent,
    
    
    UpdateEventComponent,
    
    
    ViewPolicyComponent,
    PolicyDetailUserComponent,
    EventsUserComponent,
    
    
    BookEventComponent,
    PayMessageComponent,
    ViewPolicyAdminComponent,
    PolicyDetailAdminComponent,
    
    
    EventsAdminComponent,
    ViewBookingsAdminComponent,
    BookingDetailsComponent,
    BookingHistoryUserComponent,
    BookingDetailUserComponent,
    PaymentComponent,
    FutureBookingComponent,
    BookDetailComponent,
    PastBookingComponent,
    AvailabilityComponent,
    UserNotificationComponent,
    OrgNotificationsComponent,
    ViewUserComponent,
    ViewOrganizerComponent,
    ProfileComponent,
    OrgProfileComponent,
    UserProfileComponent,
    AdminHomeComponent,
    OrgHomeComponent,
    UserHomeComponent,
    BookDetailPastComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
