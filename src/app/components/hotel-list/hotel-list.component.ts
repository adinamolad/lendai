import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStore } from '@aws-amplify/datastore';
import { Hotel } from 'src/models';



@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit, OnDestroy {
  subscription: any;

  public hotels: Array<Hotel> = [];

  constructor(private router: Router) {
    
  }

   ngOnInit() {
    //Subscribe to changes
    this.subscription = DataStore.observe<Hotel>(Hotel).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
    });
    
    this.loadHotelList();
  }

  ngOnDestroy() {
    if (!this.subscription) return;
    this.subscription.unsubscribe();
  }

  onAddClick(){
    this.router.navigate(['hotel-item', 'new']);
  }

  public async loadHotelList() {
    this.hotels = await DataStore.query(Hotel);
    //this.hotels = await DataStore.query(Hotel, (h) => h.hotel_name('contains', 'Isrotel'));
    //console.log(posts);
  }

}
