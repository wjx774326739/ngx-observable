import { Subscription } from 'rxjs';

import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';

import { LogService } from '../log.service';

@Component({
  selector: 'app-router-demo',
  templateUrl: './router-demo.component.html',
  styleUrls: ['./router-demo.component.css']
})
export class RouterDemoComponent implements OnInit, OnDestroy {
  event$Index: Subscription;
  data$Index: Subscription;
  paramMap$Index: Subscription;
  queryParamMap$Index: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private logSer: LogService,
    private router: Router,
  ) {
    this.logSer.startLog();
  }

  ngOnInit() {
    this.data$Index = this.activatedRoute.data.subscribe(data => { });
    this.paramMap$Index = this.activatedRoute.paramMap.subscribe(data => { });
    this.queryParamMap$Index = this.activatedRoute.queryParamMap.subscribe(data => { });
    this.event$Index = this.router.events.subscribe(data => { });
  }

  ngOnDestroy(): void {
    // 官方教程里面说会在不需要的时候自动取消activatedRouter的观察者对象的订阅。
    // 但是组件销毁后并没有自动取消。不知道这所谓的不需要的时候是什么时候
    setTimeout(() => {
      this.logSer.publishLog(
        '这是在RouterDemoComponent中，组件销毁时记录的日志。此时event的观察者对象的状态为：closed-'
        + this.event$Index.closed
      );
      this.logSer.publishLog(
        '这是在RouterDemoComponent中，组件销毁时记录的日志。此时data的观察者对象的状态为：closed-'
        + this.data$Index.closed
      );
      this.logSer.publishLog(
        '这是在RouterDemoComponent中，组件销毁时记录的日志。此时paramMap的观察者对象的状态为：closed-'
        + this.paramMap$Index.closed
      );
      this.logSer.publishLog(
        '这是在RouterDemoComponent中，组件销毁时记录的日志。此时queryParamMap的观察者对象的状态为：closed-'
        + this.queryParamMap$Index.closed
      );
      this.logSer.endLog();
    }, 1000);
  }

}
