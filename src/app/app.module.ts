import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';

import { ContactsAppRoutes } from './app.routes'

import { ContactsService } from './services/contacts.service';
import { EventBusService } from './services/event-bus.service';

import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailsViewComponent } from './contacts-details-view/contacts-details-view.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailsComponent,
    ContactsEditorComponent,
    ContactsDetailsViewComponent
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
    },
    {
      provide: EventBusService, useClass: EventBusService
    },
    {
      provide: Title, useClass: Title
    }
  ],
  bootstrap: [
    ContactsAppComponent
  ]
})
export class ContactsModule {

}
