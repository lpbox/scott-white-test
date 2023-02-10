import { LatLang } from './latlang';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: LatLang;
}
