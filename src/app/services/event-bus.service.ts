import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { EventBusArgs } from '../models/event-bus-args';

@Injectable()
export class EventBusService {
  eventBusArgs: EventBusArgs;
  private _messages$ = new Subject<EventBusArgs>();

  constructor() { }

  emit(eventType: string, data: any) {
    this._messages$.next({ type: eventType, data: data});
  }

  observe(eventType: string) {
    return this._messages$
               .filter(args => args.type === eventType)
               .map(args => args.data);
  }

}
