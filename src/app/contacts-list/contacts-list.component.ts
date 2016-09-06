import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})

export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(
    private _contactService: ContactsService,
    private _eventBusService: EventBusService
  ) {}

  ngOnInit() {
    this.contacts = this._contactService
      .search(this.terms$)
      .merge(this._contactService.getContacts());

    this._eventBusService.emit('appTitleChange', 'Contact list');
  }

  /*private search(term: string) {
    // Old solution without async pipe
    //this._contactService.searchContacts(term)
    //  .subscribe(contacts => this.contacts = contacts);

    // With async pipe, syntax is following:
    this.contacts = this._contactService.searchContacts(term);
  }*/

}
