import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Array<Contact>;

  constructor(
    private _contactService: ContactsService
  ) {}

  ngOnInit() {
    this._contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

}
