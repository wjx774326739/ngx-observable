import { Subscription } from 'rxjs';

import {
    AfterViewInit,
    Component,
    OnDestroy,
    OnInit,
    QueryList,
    ViewChildren
} from '@angular/core';

import { LogService } from '../log.service';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.css']
})
export class ViewchildrenComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('test')
  testView: QueryList<any>;

  viewchildrenChanges$Index: Subscription;

  constructor(
    private logSer: LogService,
  ) {
    this.logSer.startLog();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.viewchildrenChanges$Index = this.testView.changes.subscribe(data => { });
    this.logSer.publishLog(
      '这是在ViewchildrenComponent中记录的日志。此时订阅观察了@ViewChildren的changes观察对象。此时的状态为：closed-'
      + this.viewchildrenChanges$Index.closed
    );
  }

  ngOnDestroy(): void {
    setTimeout(() => {
      this.logSer.publishLog(
        '这是在ViewchildrenComponent中记录的日志。此时组件被销毁，被观察的@ViewChildren的changes观察对象的状态为：closed-'
        + this.viewchildrenChanges$Index.closed
      );
      this.logSer.endLog();
    });
  }

}
