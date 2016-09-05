import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactsAppRoutes } from './app.routes'

import { ContactsService } from './services/contacts.service';

import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes)
  ],
  providers: [
    {
      provide: ContactsService, useClass: ContactsService
    }
  ],
  bootstrap: [
    ContactsAppComponent
  ]
})
export class ContactsModule {

}
