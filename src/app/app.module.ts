import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { ContactsAppRoutes } from './app.routes'

import { ContactsService } from './services/contacts.service';

import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailsComponent,
    ContactsEditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes),
    HttpModule,
    FormsModule
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
