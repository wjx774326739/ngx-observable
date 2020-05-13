import { Subscription } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';

import { LogService } from '../log.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit, OnDestroy {

  httpError$Index: Subscription;
  httpSuccess$Index: Subscription;

  constructor(
    private http: HttpClient,
    private logSer: LogService,
  ) { }

  ngOnInit() {
    this.successReq();
    this.errorReq();
  }

  ngOnDestroy(): void {
    this.logSer.publishLog(
      '这是在HttpDemoComponent中，组件销毁时记录的日志。此时http请求成功的观察者对象的状态为：closed-'
      + this.httpSuccess$Index.closed
    );
    this.logSer.publishLog(
      '这是在HttpDemoComponent中，组件销毁时记录的日志。此时http请求失败观察者对象的状态为：closed-'
      + this.httpError$Index.closed
    );
    this.logSer.publishLog('------------------------------------------------------------');
  }

  errorReq(): void {
    // 失败的请求
    this.httpError$Index = this.http.get('./assets/test.text').subscribe(
      data => {
      },
      (error) => {
        this.logSer.publishLog(
          '这是在HttpDemoComponent中，http请求失败时记录的日志。此时该http请求观察者对象的状态为：closed-'
          + this.httpError$Index.closed
        );
      },
      () => {
        this.logSer.publishLog(
          '这是在HttpDemoComponent中，http请求complete时记录的日志。此时该http请求观察者对象的状态为：closed-'
          + this.httpError$Index.closed
        );
        setTimeout(() => {
          this.logSer.publishLog(
            '这是在HttpDemoComponent中，http请求complete,setTimeout时记录的日志。此时该http请求观察者对象的状态为：closed-'
            + this.httpError$Index.closed
          );
        });
      }
    );
  }

  successReq(): void {
    // 成功的请求
    this.httpSuccess$Index = this.http.get('./assets/test.json').subscribe(
      data => {
        console.log(data);
        this.logSer.publishLog(
          '这是在HttpDemoComponent中，http请求获取数据时记录的日志。此时该http请求观察者对象的状态为：closed-'
          + this.httpSuccess$Index.closed
        );
      },
      () => { },
      () => {
        this.logSer.publishLog(
          '这是在HttpDemoComponent中，http请求complete时记录的日志。此时该http请求观察者对象的状态为：closed-'
          + this.httpSuccess$Index.closed
        );
        setTimeout(() => {
          this.logSer.publishLog(
            '这是在HttpDemoComponent中，http请求complete,setTimeout时记录的日志。此时该http请求观察者对象的状态为：closed-'
            + this.httpSuccess$Index.closed
          );
        });
      }
    );
  }

}
