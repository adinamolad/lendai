import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

type ClientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReservationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HotelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoomTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerClient = {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClient = {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Client = LazyLoading extends LazyLoadingDisabled ? EagerClient : LazyClient

export declare const Client: (new (init: ModelInit<Client, ClientMetaData>) => Client) & {
  copyOf(source: Client, mutator: (draft: MutableModel<Client, ClientMetaData>) => MutableModel<Client, ClientMetaData> | void): Client;
}

type EagerReservation = {
  readonly id: string;
  readonly check_in_date?: string | null;
  readonly check_out_date?: string | null;
  readonly Client?: Client | null;
  readonly Hotel?: Hotel | null;
  readonly RoomType?: RoomType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reservationClientId?: string | null;
  readonly reservationHotelId?: string | null;
  readonly reservationRoomTypeId?: string | null;
}

type LazyReservation = {
  readonly id: string;
  readonly check_in_date?: string | null;
  readonly check_out_date?: string | null;
  readonly Client: AsyncItem<Client | undefined>;
  readonly Hotel: AsyncItem<Hotel | undefined>;
  readonly RoomType: AsyncItem<RoomType | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reservationClientId?: string | null;
  readonly reservationHotelId?: string | null;
  readonly reservationRoomTypeId?: string | null;
}

export declare type Reservation = LazyLoading extends LazyLoadingDisabled ? EagerReservation : LazyReservation

export declare const Reservation: (new (init: ModelInit<Reservation, ReservationMetaData>) => Reservation) & {
  copyOf(source: Reservation, mutator: (draft: MutableModel<Reservation, ReservationMetaData>) => MutableModel<Reservation, ReservationMetaData> | void): Reservation;
}

type EagerHotel = {
  readonly id: string;
  readonly hotel_name?: string | null;
  readonly address_line_1?: string | null;
  readonly address_line_2?: string | null;
  readonly city?: string | null;
  readonly zipcode?: string | null;
  readonly country?: string | null;
  readonly image_link?: string | null;
  readonly RoomTypes?: (RoomType | null)[] | null;
  readonly lat?: number | null;
  readonly long?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHotel = {
  readonly id: string;
  readonly hotel_name?: string | null;
  readonly address_line_1?: string | null;
  readonly address_line_2?: string | null;
  readonly city?: string | null;
  readonly zipcode?: string | null;
  readonly country?: string | null;
  readonly image_link?: string | null;
  readonly RoomTypes: AsyncCollection<RoomType>;
  readonly lat?: number | null;
  readonly long?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hotel = LazyLoading extends LazyLoadingDisabled ? EagerHotel : LazyHotel

export declare const Hotel: (new (init: ModelInit<Hotel, HotelMetaData>) => Hotel) & {
  copyOf(source: Hotel, mutator: (draft: MutableModel<Hotel, HotelMetaData>) => MutableModel<Hotel, HotelMetaData> | void): Hotel;
}

type EagerRoomType = {
  readonly id: string;
  readonly room_type_name?: string | null;
  readonly quantity?: number | null;
  readonly hotelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRoomType = {
  readonly id: string;
  readonly room_type_name?: string | null;
  readonly quantity?: number | null;
  readonly hotelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RoomType = LazyLoading extends LazyLoadingDisabled ? EagerRoomType : LazyRoomType

export declare const RoomType: (new (init: ModelInit<RoomType, RoomTypeMetaData>) => RoomType) & {
  copyOf(source: RoomType, mutator: (draft: MutableModel<RoomType, RoomTypeMetaData>) => MutableModel<RoomType, RoomTypeMetaData> | void): RoomType;
}