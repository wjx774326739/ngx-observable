import {
    Observable,
    Subject
} from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private log$ = new Subject<string>();

  constructor() { }

  publishLog(log: string): void {
    this.log$.next(log);
  }

  subscribeLog(): Observable<string> {
    return this.log$.asObservable();
  }

}
