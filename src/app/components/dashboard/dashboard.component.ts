import { Component, OnInit } from '@angular/core';
import { DataStore } from 'aws-amplify';
import { Dashboard } from 'src/app/models/dashboard.model';
import { Hotel, Reservation } from 'src/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  reservations: Array<Dashboard> = [];
  hotels: Array<Dashboard> = [];

  constructor() { }

  ngOnInit(): void {

    this.loadTopHotels();
    this.loadReservationCount();
  }

  public async loadReservationCount() {    
  }

  public async loadTopHotels() {
  }



}
