import * as L from 'leaflet';

export class Device {
  private _id: string;
  private _name: string;
  private _date: Date;

  constructor(name: string) {
    this._id = `DeviceID_${Math.round(Math.random()*100000000000)}`;
    this._name = name;
    this._date = new Date();
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
