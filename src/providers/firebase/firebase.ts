import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
 
@Injectable()
export class FirebaseProvider {

  private path = '/geopoints';
 
  constructor(public afd: AngularFireDatabase) { }
 
  getAll() {
    return this.afd.list(this.path);
  }
 
  addItem(geolocation) {
    this.afd.list(this.path).push(geolocation);
  }
 
}
