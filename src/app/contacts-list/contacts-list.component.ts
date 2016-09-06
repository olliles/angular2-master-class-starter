import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})

export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(
    private _contactService: ContactsService
  ) {}

  ngOnInit() {
    this.contacts = this._contactService.search(this.terms$);
  }

  /*private search(term: string) {
    // Old solution without async pipe
    //this._contactService.searchContacts(term)
    //  .subscribe(contacts => this.contacts = contacts);

    // With async pipe, syntax is following:
    this.contacts = this._contactService.searchContacts(term);
  }*/

}
