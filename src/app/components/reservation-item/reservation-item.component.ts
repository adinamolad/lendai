import { DatePipe } from '@angular/common';
import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStore } from '@aws-amplify/datastore';
import { Client, Hotel, Reservation, RoomType } from 'src/models';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.scss']
})
export class ReservationItemComponent implements OnInit, OnDestroy {

  subscription: any;
  reservationForm!: FormGroup;
  reservation!: Reservation;
  roomTypes: Array<RoomType> = [];
  clients: Array<Client> = [];
  hotels: Array<Hotel> = [];
  matAppearance: MatFormFieldAppearance = 'legacy';

  constructor(private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    this.reservation = this.getDefaultReservation();
  }

  ngOnInit() {

    // Subscribe to changes
    this.subscription = DataStore.observe<Reservation>(Reservation).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.loadClientList();
    this.loadHotelList();

    if (id) {
      if (id === 'new') {
        this.buildReservationForm(this.reservation);
      } else {
        this.loadReservation(id);
      }
    }
  }

  ngOnDestroy() {
    if (!this.subscription) return;
    this.subscription.unsubscribe();
  }

  public async loadReservation(id: string) {
    let reservation = await DataStore.query(Hotel, id);
    console.log(reservation);
  }

  getDefaultReservation(): Reservation {

    const defaultHotel: Reservation = {
      id: '',
      check_in_date: '',
      check_out_date: '',
      createdAt: '',
      updatedAt: ''
    };
    return defaultHotel;
  }

  buildReservationForm(reservation: Reservation) {
    const disabled = reservation.id ? true : false;
    this.reservationForm = this.formBuilder.group({
      range: this.formBuilder.group({
        check_in_date: new FormControl<Date | null>(null),
        check_out_date: new FormControl<Date | null>(null),
      }),
      client: [{ value: reservation.Client?.first_name + ' ' + reservation.Client?.first_name, disabled: disabled }],
      hotel: [{ value: reservation.Hotel?.hotel_name, disabled: disabled }],
      room_type: [{ value: reservation.RoomType?.room_type_name, disabled: disabled }],
    });
  }

  public async loadHotelList() {
    this.hotels = await DataStore.query(Hotel);
  }

  public async loadClientList() {
    this.clients = await DataStore.query(Client);
  }

  public async loadRoomTypes(id: string) {
    this.roomTypes = await DataStore.query(RoomType, (rt) => rt.hotelID('eq', id));
  }

  get range() {
    return this.reservationForm.get('range') as FormGroup;
  }

  async checkDates() {

    const check_in_date = this.reservationForm.value.range.check_in_date as Date;
    const check_out_date = this.reservationForm.value.range.check_out_date as Date;
    if (this.reservationForm.get('client') && check_in_date && check_out_date) {
      const tempReservations = await DataStore.query(Reservation, (rt) => rt.reservationClientId('eq', this.reservationForm.value.client));
      this.range.get('check_in_date')?.setErrors({ 'intersects': null });
      //this.range.get('check_in_date')?.updateValueAndValidity();
      tempReservations.forEach(reservation => {
        if (reservation.check_in_date && reservation.check_out_date) {
          const check_in_dateR = new Date(reservation.check_in_date);
          const check_out_dateR = new Date(reservation.check_out_date);
          const dateError = this.intersects(check_in_date, check_out_date, check_in_dateR, check_out_dateR);
          if (dateError) {
            this.range.get('check_in_date')?.setErrors({ 'intersects': true });
            this._snackBar.open('A client cannot book two rooms on the same date', 'Error', {
              duration: 3000
            });

          }
        }

      });
    }
  }

  async getRoomTypes() {
    const id = this.reservationForm.value.hotel;
    this.loadRoomTypes(id);
  }

  async checkRoomTypes() {
    const room_type_id = this.reservationForm.value.room_type;
    const hotel_id = this.reservationForm.value.hotel;

    if (room_type_id) {
      const tempReservations = await DataStore.query(Reservation, (r) => r.reservationHotelId('eq', hotel_id).reservationRoomTypeId('eq', room_type_id));
      const roomType = await DataStore.query(RoomType, room_type_id) as RoomType;
      this.range.get('room_type')?.setErrors({ 'full': null });
      this.range.get('room_type')?.updateValueAndValidity();
      console.log('tempReservations', tempReservations);
      console.log('quantityAllowed', roomType);

      if (tempReservations && roomType && roomType.quantity && tempReservations.length >= roomType.quantity) {
        this.reservationForm.get('room_type')?.setErrors({ 'full': true });
        this._snackBar.open('A client cannot book a room of a specific type because all the rooms are already booked', 'Error', {
          duration: 3000
        });
        console.log(this.reservationForm.get('room_type'));
      }


    }
  }

  public intersects = (startTime1: Date, endTime1: Date, startTime2: Date, endTime2: Date) =>
    (startTime1 < startTime2 && endTime1 > endTime2) ||
    (startTime2 <= startTime1 && startTime1 < endTime2) ||
    (startTime2 < endTime1 && endTime1 <= endTime2)


  async onSubmitClick() {
    if (!this.range.get('check_in_date')?.hasError('intersect')) {
      await DataStore.save(
        new Reservation({
          check_in_date: this.reservationForm.value.check_in_date,//doesnt work...
          check_out_date: this.reservationForm.value.check_in_date,//doesnt work...
          reservationHotelId: this.reservationForm.value.hotel,
          reservationClientId: this.reservationForm.value.client,
          reservationRoomTypeId: this.reservationForm.value.room_type

        })
      );

      this._snackBar.open('A new reservation was saved', 'Done', {
        duration: 3000
      });

      this.goToReservationList();
    }

  }




  goToReservationList() {
    this.router.navigate(['reservation-list']);
  }

}


