import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HotelItemComponent } from './components/hotel-item/hotel-item.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { ReservationItemComponent } from './components/reservation-item/reservation-item.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HotelListMapComponent } from './components/hotel-list-map/hotel-list-map.component';

const routes: Routes = [
  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hotel-list', component: HotelListComponent },
  { path: 'hotel-list-map', component: HotelListMapComponent },
 // { path: 'hotel-item', component: HotelItemComponent },
  { path: 'hotel-item/:id', component: HotelItemComponent },
  { path: 'reservation-list', component: ReservationListComponent },
  { path: 'reservation-item/:id', component: ReservationItemComponent },
];

// const routes: Routes = [

//   {
//     path: '', component: HotelListComponent,
//     children: [
//       { path: '', redirectTo: 'hotel-list', pathMatch: 'full' },
//       {
//         path: 'hotel-list', component: HotelListComponent,
        
//       },
//       {
//         path: 'hotel-item', component: HotelItemComponent,
       
//       }]
//     }];



  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: HotelListComponent,
  // },
  // {
  //   path: 'hotel-list',
  //   component: HotelListComponent,
  // },
  // {
  //   path: 'hotel-item',
  //   component: HotelItemComponent,
  // }];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

