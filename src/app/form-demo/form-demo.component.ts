import { Subscription } from 'rxjs';

import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormGroup
} from '@angular/forms';

import { LogService } from '../log.service';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit, OnDestroy {

  form: FormGroup;

  formValue$Index: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private logSer: LogService,
  ) {
    this.logSer.startLog();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['']
    });

    this.formValue$Index = this.form.valueChanges.subscribe(data => {
      console.log(data);
      this.logSer.publishLog('这是在FormDemoComponent中，表单值改变时记录的日志。此时表单中的值发生了改变！');
    });

    setInterval(() => {
      this.form.controls.name.setValue('1');
    }, 1000);
  }

  ngOnDestroy(): void {
    this.logSer.publishLog(
      '这是在FormDemoComponent中，组件销毁时记录的日志。此时表单值改变的观察者对象的状态为：closed-'
      + this.formValue$Index.closed
    );
    this.logSer.endLog();
  }

}
