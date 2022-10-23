// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Client, Reservation, Hotel, RoomType } = initSchema(schema);

export {
  Client,
  Reservation,
  Hotel,
  RoomType
};