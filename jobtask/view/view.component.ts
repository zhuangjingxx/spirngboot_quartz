import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import {JobtaskForm} from "../jobtask";

@Component({
  selector: 'app-jobtask-view',
  templateUrl: './view.component.html',
})
export class JobtaskViewComponent implements OnInit {
  record: any = {};
  form: JobtaskForm;
  oneTimeExecTime: string;
  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService,
    public http: _HttpClient
  ) { }

  ngOnInit(): void {
    this.form = new JobtaskForm();
    this.form.className='12';
    this.form.configSel='2';
    this.form.cronExpression='1-2 * * * * ?';
    this.form.dataValues=["12", "13", "12"];
    this.form.dataKeys=["12", "32", "1231232432543546565767676877564564534534423"];
    this.form.dayTypeSel='2';
    this.form.groupName='2';
    this.form.name='3';
    this.form.hourTypeSel='1';
    this.form.secondTypeSel='2';
    this.form.minuteTypeSel='1';
    this.form.monthTypeSel='1';
    this.form.startTime=1546614217909;
    this.form.taskDescription='2';
    this.form.weekTypeSel='1';
    console.log(this.form);
  }

  close() {
    this.modal.destroy();
  }
}
