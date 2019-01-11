import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {JobtaskViewComponent} from "./view/view.component";
import {JobtaskEditComponent} from "./edit/edit.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {JobService} from "./job.service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-jobtask-jobtask',
  templateUrl: './jobtask.component.html',
})
export class JobtaskComponent implements OnInit {

  constructor(private http: _HttpClient,
              private modal: ModalHelper,
              private jobService: JobService,
              private msgSrv: NzMessageService,
              private fb: FormBuilder,) {

  }


  //搜索表单
  searchForm: FormGroup;
  params: any = {};
  url = `qrtzJobandtrigger/jobTaskPageList`;
  jobtasks=[
    { id: "12343", name: "1237", group: "1234j", lasttime: "1996-08-06 12:02:35", nexttime: "1996-08-06 12:02:35", status: "yes" },
    { id: "1234", name: "1238", group: "1234j", lasttime: "1996-08-06 12:02:35", nexttime: "1996-08-06 12:02:35", status: "yes" },
    { id: "12342", name: "1236", group: "1234j", lasttime: "1996-08-06 12:02:35", nexttime: "1996-08-06 12:02:35", status: "yes" },
    { id: "12341", name: "1236", group: "1234j", lasttime: "1996-08-06 12:02:35", nexttime: "1996-08-06 12:02:35", status: "yes" },
    { id: "12340", name: "1234", group: "1234j", lasttime: "1996-08-06 12:02:35", nexttime: "1996-08-06 12:02:35", status: "yes" },
  ]

  @ViewChild('st') st: SimpleTableComponent;
  columns: SimpleTableColumn[] = [
    //{ title: '', index: 'no' },
    { title: '任务名',  index: 'name' },
    { title: '任务组',  index: 'group' },
    { title: '上一次触发时间',  index: 'lasttime' },
    { title: '下一次出发时间',  index: 'nexttime' },
    { title: '状态',  index: 'status' },
    {
      title: '',
      buttons: [
        { text: '操作',
          children: [
            { text: '查看', type: "static", component: JobtaskViewComponent, click: "reload" },
            { text: '编辑', type: "static", component: JobtaskEditComponent, click: "reload" },
            { text: '删除', type: "del", click: (item: any) => {
                this.jobService.deleteJobByid(item.id).subscribe(res => {
                  if (res == true){
                    this.msgSrv.success('删除成功');
                    this.st.reload();
                  } else{
                    this.msgSrv.error('删除失败');
                  }
                });
              }
            }
          ]
        }
      ]
    }
  ];



  ngOnInit() {
    this.searchForm = this.fb.group({
      name: [null],
      groupName: [null],
      statusTypeSel: ['1'],
    });
    let job ={name:'zhuangjing', group:'zhuangjing1'}
    this.http.post("qrtzJobandtrigger/hello",job).subscribe(res =>{
    });
  }

  add() {
    this.modal
      .createStatic(JobtaskEditComponent, {  })
      .subscribe(() => this.st.reload());
  }

  resetSearch(e?: MouseEvent) {
    if (e){
      //执行这条语句主要是防止重置之后还会执行表单提交
      e.preventDefault();
    }
    this.searchForm.reset();
  }

  searchSubmit() {
    let name = this.searchForm.get('name').value;
    let groupName = this.searchForm.get('groupName').value;
    console.log(name);
    console.log(groupName);
    if (name != '' && name != null){
      this.params['name'] = name;
    } else{
      delete this.params['name'];
    }
    if (groupName != '' && groupName != null){
      this.params['groupName'] = groupName;
    } else{
      delete this.params['groupName'];
    }
    this.st.reload();
  }


  statusTypeSelChange(value) {
    console.log(value);
    if (value == '1'){
      this.params['statusType'] = Number.parseInt(value);
    }
    if (value == '2'){
      this.params['statusType'] = Number.parseInt(value);
    }
    if (value == '3'){
      delete this.params['statusType']
    }

    this.st.reload();
  }
}
