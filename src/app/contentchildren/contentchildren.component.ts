import { Subscription } from 'rxjs';

import {
    AfterContentInit,
    Component,
    ContentChildren,
    OnDestroy,
    OnInit,
    QueryList
} from '@angular/core';

import { LogService } from '../log.service';

@Component({
  selector: 'app-contentchildren',
  templateUrl: './contentchildren.component.html',
  styleUrls: ['./contentchildren.component.css']
})
export class ContentchildrenComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChildren('test')
  testContent: QueryList<any>;

  contentChildrenChanges$Index: Subscription;

  constructor(
    private logSer: LogService,
  ) {
    this.logSer.startLog();
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.contentChildrenChanges$Index = this.testContent.changes.subscribe(data => { });
    this.logSer.publishLog(
      '这是在ContentchildrenComponent中记录的日志。此时订阅观察了 @ContentChildren的changes观察对象。此时的状态为：closed-'
      + this.contentChildrenChanges$Index.closed
    );
  }

  ngOnDestroy() {
    // 因为这是在销毁时执行，所以可能存在此处执行了，但是还没来得及自动取消订阅的情况。
    // 所以延迟100ms再记录观察者对象的情况
    setTimeout(() => {
      this.logSer.publishLog(
        '这是在ContentchildrenComponent中记录的日志。此时组件被销毁，被观察的 @ContentChildren的changes观察对象的状态为：closed-'
        + this.contentChildrenChanges$Index.closed
      );
      console.log(this.contentChildrenChanges$Index);
      this.logSer.endLog();
    }, 1000);
  }

}
