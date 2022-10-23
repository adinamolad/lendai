import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStore } from 'aws-amplify';
import { Reservation } from 'src/models';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['check_in_date', 'check_out_date', 'client', 'hotel', 'room_type'];
  subscription: any;
  public reservations: Array<Reservation> = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = DataStore.observe<Reservation>(Reservation).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
    });
    
    this.loadReservationList();
  }

  ngOnDestroy() {
    if (!this.subscription) return;
    this.subscription.unsubscribe();
  }

  onAddClick(){
    this.router.navigate(['reservation-item', 'new']);
  }

  public async loadReservationList() {
    this.reservations  = await (await DataStore.query(Reservation));
   
    //this.hotels = await DataStore.query(Hotel, (h) => h.hotel_name('contains', 'Isrotel'));
    //console.log(posts);
  }

}
