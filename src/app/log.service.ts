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

  endLog(): void {
    this.publishLog('------------------------------------');
  }

  publishLog(log: string): void {
    this.log$.next(log);
  }

  startLog(): void {
    this.publishLog('+++++++++++++++++++++++++++++++++++++');
  }

  subscribeLog(): Observable<string> {
    return this.log$.asObservable();
  }

}
