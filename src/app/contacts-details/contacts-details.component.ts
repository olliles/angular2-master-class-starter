import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-details',
  templateUrl: 'contacts-details.component.html',
  styleUrls: ['contacts-details.component.css']
})
export class ContactsDetailsComponent implements OnInit {
  contact: Contact;

  constructor(
    private _route: ActivatedRoute,
    private _contactsService: ContactsService
  ) {

  }

  ngOnInit() {
    let id = this._route.snapshot.params['id'];
    this._contactsService.getContact(id)
      .subscribe(contact => this.contact = contact);
  }

}
