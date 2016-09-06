import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactsService } from '../services/contacts.service';
import { EventBusService } from '../services/event-bus.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: 'contacts-editor.component.html',
  styleUrls: ['contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  contact: Contact = <Contact>{ address: {}};

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _contactsService: ContactsService,
      private _eventBusService: EventBusService
  ) {

  }

  ngOnInit() {
    let id = this._route.snapshot.params['id'];
    this._contactsService.getContact(id)
      .subscribe(contact => {
        this.contact = contact;
        this._eventBusService.emit('appTitleChange', 'Editing: ' + this.contact.name);
      });
  }

  cancel() {
    this._router.navigate(['/contact', this.contact.id]);
  }

  goToDetails() {
    this._router.navigate(['/contact', this.contact.id]);
  }

  save() {
    this._contactsService.updateContact(this.contact.id, this.contact)
      .subscribe( response => this.goToDetails() );
  }

}
