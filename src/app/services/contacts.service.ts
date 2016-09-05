import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Contact } from '../models/Contact';
import { CONTACT_DATA } from '../data/contact-data';

@Injectable()
export class ContactsService {
  private _apiUrl: any = 'http://localhost:4201/api';
  contacts: Contact[];
  contact: Contact[];

  constructor(
    private _http: Http
  ) {}

  // now uses dummy data, needs to retrieve from real backend?
  getContacts():Observable<Contact[]> {
    return this._http.get( `${this._apiUrl}/contacts/` )
      .map(res => res.json())
      .map((data) => data.items);
  }

  getContact(id: number | string):Observable<Contact> {
    let contact: Contact[];

    return this._http.get(`${this._apiUrl}/contacts/${id}`)
      .map(res => res.json())
      .map((data) => data.item);
  }
}
