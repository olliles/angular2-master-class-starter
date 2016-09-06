import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Contact } from '../models/Contact';
import { CONTACT_DATA } from '../data/contact-data';

@Injectable()
export class ContactsService {
  private _apiUrl: any = 'http://localhost:4201/api';
  contacts: Observable<Array<Contact>>;

  constructor(
    private _http: Http
  ) {}

  getContacts() {
    return this._http.get( `${this._apiUrl}/contacts/` )
      .map(res => res.json())
      .map((data) => data.items);
  }

  getContact(id: number | string) {

    return this._http.get(`${this._apiUrl}/contacts/${id}`)
      .map(res => res.json())
      .map((data) => data.item);
  }

  updateContact(id: number, contact: Contact) {
    let url = `${this._apiUrl}/contacts/${id}`;

    return this._http.put(url, contact);
  }

  rawSearch(term: string) {
    let urlWithParams = `${this._apiUrl}/search?text=${term}`;

    return this._http.get(urlWithParams)
      .map(res => res.json())
      .map((data) => data.items);
  }

  search(terms: any) {
    return terms.debounceTime(400)
         .distinctUntilChanged() // Observable<string>
         .switchMap(term => this.rawSearch(term)) //Observable<Contact[]>
         .merge(this.getContacts());
  }

}
