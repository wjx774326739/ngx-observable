import { Component } from '@angular/core';

import { LogService } from './log.service';

interface MenuItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuList: MenuItem[] = [
    {
      name: 'http请求',
      url: '/http'
    },
    {
      name: '表单',
      url: '/form'
    },
    {
      name: '路由',
      url: '/router'
    },
    {
      name: 'viewchildren',
      url: '/viewchildren'
    },
    {
      name: 'contentchildren',
      url: '/contentchildren'
    }
  ];

  logs: string[] = [];

  constructor(
    private logSer: LogService,
  ) {
    this.logSer.subscribeLog().subscribe(log => this.logs.push(log));
  }

  onClearLogs(): void {
    this.logs = [];
  }
}
