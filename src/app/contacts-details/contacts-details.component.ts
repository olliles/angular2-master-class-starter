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
  contact: any;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contact = this.contactsService.getContact(id);
  }

}
