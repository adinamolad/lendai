import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataStore } from 'aws-amplify';
import { Hotel } from 'src/models';

@Component({
  selector: 'app-hotel-list-map',
  templateUrl: './hotel-list-map.component.html',
  styleUrls: ['./hotel-list-map.component.scss']
})
export class HotelListMapComponent implements AfterViewInit {

  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;
  map!: google.maps.Map;
  lat = 40.73061;
  lng = -73.935242;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  geocoder!: google.maps.Geocoder;

  hotels: Array<Hotel> = [];
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
  };


  constructor(private router: Router) {

  }



  public async loadHotelList() {
    this.hotels = await DataStore.query(Hotel);
  }


  ngAfterViewInit() {
    this.mapInitializer();
  }


  async loadAllMarkers(): Promise<void> {
    await this.loadHotelList();
    this.hotels.forEach(hotel => {
      if (hotel?.lat && hotel?.long) {
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(hotel?.lat, hotel?.long),
          map: this.map,
          title: hotel.hotel_name
        });

        const infoWindow = new google.maps.InfoWindow({
          content: marker.getTitle()
        });

        //Add click event to open info window on marker
        marker.addListener("click", () => {
          infoWindow.open(marker.getMap(), marker);
        });

        marker.setMap(this.map);
      }
    });
  }

  mapInitializer(): void {

    this.geocoder = new google.maps.Geocoder();

    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    //Adding Click event to default marker
    // this.marker.addListener("click", () => {
    //   const infoWindow = new google.maps.InfoWindow({
    //     content: this.marker.getTitle()
    //   });
    //   infoWindow.open(this.marker.getMap(), this.marker);
    // });

    // //Adding default marker to map
    // this.marker.setMap(this.map);

    //Adding other markers
    this.loadAllMarkers();

  }


}
