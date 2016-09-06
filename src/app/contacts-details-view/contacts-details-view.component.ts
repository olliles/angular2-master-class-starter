import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactsService } from '../services/contacts.service';
import { EventBusService } from '../services/event-bus.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-details-view',
  templateUrl: 'contacts-details-view.component.html',
  styleUrls: ['contacts-details-view.component.css']
})
export class ContactsDetailsViewComponent implements OnInit {
  contact: Contact;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _contactsService: ContactsService,
    private _eventBusService: EventBusService
  ) {

  }

  ngOnInit() {
    let id = this._route.snapshot.params['id'];
    this._contactsService.getContact(id)
      .subscribe( contact => {
        this.contact = contact;
        this._eventBusService.emit('appTitleChange', this.contact.name);
      });
  }

  navigateToList() {
    this._router.navigate(['/']);
  }

  navigateToEditor(contact: Contact) {
    this._router.navigate(['/contact', contact.id, 'edit']);
  }

}
