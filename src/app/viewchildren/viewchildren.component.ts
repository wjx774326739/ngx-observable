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
    // 因为这是在销毁时执行，所以可能存在此处执行了，但是还没来得及自动取消订阅的情况。
    // 所以延迟100ms再记录观察者对象的情况
    setTimeout(() => {
      this.logSer.publishLog(
        '这是在ViewchildrenComponent中记录的日志。此时组件被销毁，被观察的@ViewChildren的changes观察对象的状态为：closed-'
        + this.viewchildrenChanges$Index.closed
      );
      this.logSer.endLog();
    }, 1000);
  }

}
