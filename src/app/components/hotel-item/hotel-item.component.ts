import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStore } from '@aws-amplify/datastore';
import { Hotel, RoomType } from 'src/models';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent implements OnInit {

  subscription: any;
  isNew: boolean = true;
  hotelForm!: FormGroup;
  roomTypeListForm!: FormGroup;
  hotel!: Hotel;
  roomTypes: Array<RoomType> = [];
  image_link: string = '';
  matAppearance: MatFormFieldAppearance = 'legacy';


  constructor(private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.hotel = this.getDefaultHotel();
    this.buildHotelForm(this.hotel);
    this.roomTypeListForm = this.formBuilder.group({
      roomTypeList: this.formBuilder.array([])
    });
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {

      if (id === 'new') {
        this.isNew = true;
        this.buildHotelForm(this.hotel);
      } else {
        this.isNew = false;
        this.loadHotel(id);
        this.loadRoomTypes(id);
      }
    }
  }

  getDefaultHotel(): Hotel {

    const defaultHotel: Hotel = {
      id: '',
      hotel_name: '',
      address_line_1: '',
      address_line_2: '',
      city: '',
      zipcode: '',
      country: '',
      image_link: '',
      lat: 0,
      long: 0,
      createdAt: '',
      updatedAt: ''
    };
    return defaultHotel;
  }

  getDefaultRoomType(): Hotel {

    const defaultRoomType: RoomType = {
      id: '',
      hotelID: '',
      room_type_name: '',
      quantity: 0,
      createdAt: '',
      updatedAt: ''
    };
    return defaultRoomType;
  }



  buildHotelForm(hotel: Hotel) {
    this.hotelForm = this.formBuilder.group({
      hotel_name: [hotel.hotel_name, Validators.required],
      image_link: [hotel.image_link, Validators.required],
      address_line_1: [hotel.address_line_1, Validators.required],
      address_line_2: [hotel.address_line_2],
      city: [hotel.city, Validators.required],
      zipcode: [hotel.zipcode],
      country: [hotel.country, Validators.required],
      lat: [hotel.lat, Validators.required],
      long: [hotel.long, Validators.required],
    });
  }

  buildroomTypeListForm(roomTypes: RoomType[]) {
    roomTypes.forEach(roomType => {
      const roomTypeForm = this.formBuilder.group({
        room_type_name: [roomType.room_type_name, Validators.required],
        quantity: [roomType.quantity, Validators.required]
      });
      this.roomTypeList.push(roomTypeForm);
    });

  }

  get roomTypeList() {
    return this.roomTypeListForm.get('roomTypeList') as FormArray;
  }

  public async loadHotel(id: string) {
    this.hotel = await DataStore.query(Hotel, id) as Hotel;
    this.image_link = this.hotel.image_link as string;
    this.buildHotelForm(this.hotel);
  }

  public async loadRoomTypes(id: string) {
    this.roomTypes = await DataStore.query(RoomType, (rt) => rt.hotelID('eq', id));
    this.buildroomTypeListForm(this.roomTypes);
  }

  async onSubmitClick() {

    await DataStore.save(
      new Hotel({
        hotel_name: this.hotelForm.value.hotel_name,
        address_line_1: this.hotelForm.value.address_line_1,
        address_line_2: this.hotelForm.value.address_line_2,
        city: this.hotelForm.value.city,
        zipcode: this.hotelForm.value.zipcode,
        country: this.hotelForm.value.country,
        image_link: this.hotelForm.value.image_link,
        lat: Number(this.hotelForm.value.lat),
        long: Number(this.hotelForm.value.long),
      })
    );

    this._snackBar.open('A hotel ' + this.hotelForm.value.hotel_name + ' was saved', 'Done', {
      duration: 3000
    });

    this.goToHotelList();

  }


  goToHotelList() {
    this.router.navigate(['hotel-list']);
  }
  
}
