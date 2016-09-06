import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-details',
  templateUrl: 'contacts-details.component.html',
  styleUrls: ['contacts-details.component.css']
})
export class ContactsDetailsComponent implements OnInit {
  @Input() contact: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter<Contact>();

  constructor() {}

  ngOnInit() {}

}
