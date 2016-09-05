import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';
import { CONTACT_DATA } from '../data/contact-data';

@Injectable()
export class ContactsService {

  constructor() { }

  // now uses dummy data, needs to retrieve from real backend?
  getContacts() {
    return CONTACT_DATA;
  }
}
