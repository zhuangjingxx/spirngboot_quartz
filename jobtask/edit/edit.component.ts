import {Component, OnInit} from '@angular/core';
import {NzModalRef, NzMessageService} from 'ng-zorro-antd';
import {_HttpClient} from '@delon/theme';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators,} from "@angular/forms";
import {JobtaskForm} from "../jobtask";
import {JobService} from "../job.service";

@Component({
  selector: 'app-jobtask-edit',
  templateUrl: './edit.component.html',
})
export class JobtaskEditComponent implements OnInit {

  // record: any = {};
  // i: any;
  // weekTimesValArray = [
  //   { label: "星期日", value: "1", checked: false},
  //   { label: "星期一", value: "2", checked: false},
  //   { label: "星期二", value: "3", checked: false},
  //   { label: "星期三", value: "4", checked: false},
  //   { label: "星期四", value: "5", checked: false},
  //   { label: "星期五", value: "6", checked: false},
  //   { label: "星期六", value: "7", checked: false},
  // ];
  //
  // monthValArray1 = [
  //   { label: "一月", value: "1", checked: false},
  //   { label: "二月", value: "2", checked: false},
  //   { label: "三月", value: "3", checked: false},
  //   { label: "四月", value: "4", checked: false},
  //   { label: "五月", value: "5", checked: false},
  //   { label: "六月", value: "6", checked: false},
  // ];
  //
  // monthValArray2 = [
  //
  //   { label: "七月", value: "7", checked: false},
  //   { label: "八月", value: "8", checked: false},
  //   { label: "九月", value: "9", checked: false},
  //   { label: "十月", value: "10", checked: false},
  //   { label: "十一月", value: "11", checked: false},
  //   { label: "十二月", value: "12", checked: false},
  // ];
  // flag: boolean = false;
  // updateAllChecked (){
  //   console.log(this.flag);
  //   if (this.jobtaskForm.get("allChecked").value) {
  //     this.monthValArray1.forEach(item => item.checked = true);
  //     this.monthValArray2.forEach(item => item.checked = true);
  //     this.flag =false;
  //   } else {
  //       if (!this.flag){
  //         this.monthValArray1.forEach(item => item.checked = false);
  //         this.monthValArray2.forEach(item => item.checked = false);
  //       }
  //       this.flag = false;
  //   }
  // }
  //
  // updateSingleChecked (){
  //
  //   for (let i=0; i<this.monthValArray1.length; i++){
  //     if (this.monthValArray1[i].checked == false){
  //       this.flag = true;
  //       this.jobtaskForm.get("allChecked").setValue(false);
  //       return;
  //     }
  //   }
  //   for (let i=0; i<this.monthValArray2.length; i++){
  //     if (this.monthValArray2[i].checked == false){
  //       this.flag = true;
  //       this.jobtaskForm.get("allChecked").setValue(false);
  //       return;
  //     }
  //   }
  //   if (this.monthValArray1.every(item => item.checked === true)
  //               && this.monthValArray2.every(item => item.checked === true)) {
  //     this.jobtaskForm.get("allChecked").setValue(true);
  //   }
  //
  // }
  //
  //
  // monthDaysValArray1 = [
  //   { label: "1号", value: "1", checked: false},
  //   { label: "2号", value: "2", checked: false},
  //   { label: "3号", value: "3", checked: false},
  //   { label: "4号", value: "4", checked: false},
  //   { label: "5号", value: "5", checked: false},
  //   { label: "6号", value: "6", checked: false},
  //   { label: "7号", value: "7", checked: false},
  //   { label: "8号", value: "8", checked: false},
  //   { label: "9号", value: "9", checked: false},
  //   { label: "10号", value: "10", checked: false},
  // ];
  //
  // monthDaysValArray2 = [
  //   { label: "11号", value: "11", checked: false},
  //   { label: "12号", value: "12", checked: false},
  //   { label: "13号", value: "13", checked: false},
  //   { label: "14号", value: "14", checked: false},
  //   { label: "15号", value: "15", checked: false},
  //   { label: "16号", value: "16", checked: false},
  //   { label: "17号", value: "17", checked: false},
  //   { label: "18号", value: "18", checked: false},
  //   { label: "19号", value: "19", checked: false},
  //   { label: "20号", value: "20", checked: false},
  // ];
  //
  // monthDaysValArray3 = [
  //   { label: "21号", value: "21", checked: false},
  //   { label: "22号", value: "22", checked: false},
  //   { label: "23号", value: "23", checked: false},
  //   { label: "24号", value: "24", checked: false},
  //   { label: "25号", value: "25", checked: false},
  //   { label: "26号", value: "26", checked: false},
  //   { label: "27号", value: "27", checked: false},
  //   { label: "28号", value: "28", checked: false},
  //   { label: "29号", value: "29", checked: false},
  //   { label: "30号", value: "30", checked: false},
  // ];
  //
  // monthDaysValArray4 = [
  //   { label: "最后一天", value: "L", checked: false},
  //   { label: "工作日", value: "W", checked: false},
  //   { label: "3号", value: "3", checked: false},
  //   { label: "4号", value: "4", checked: false},
  //   { label: "5号", value: "5", checked: false},
  //   { label: "6号", value: "6", checked: false},
  //   { label: "7号", value: "7", checked: false},
  //   { label: "8号", value: "8", checked: false},
  //   { label: "9号", value: "9", checked: false},
  //   { label: "10号", value: "10", checked: false},
  // ];
  //
  // style = {
  //   display   : 'block',
  //   height    : '30px',
  //   lineHeight: '30px',
  //
  // };
  //
  // jobtaskForm: FormGroup;
  //
  // //控制表单动态显示的参数
  // taskCronShowFlag: boolean = true;
  // cronExpHelpShowFlag: boolean = false;
  // taskDetailShowFlag: boolean = false;
  // monthValItemShowFlag : boolean = false;
  // taskDateItemShowFlag: boolean = false;
  // taskRateSelectItemShowFlag: boolean = false;
  // taskRateDaySelItemShowFlag: boolean = false;
  // weekTimeSelectItemShowFlag: boolean = false;
  // monthTimeSelectItemShowFlag: boolean = false;
  // monthDaysValItemShowFlag: boolean = false;
  // oneTimeItemShowFlag: boolean = false;
  // betweenTimeShowFlag: boolean = false;
  // taskBetweenTimeShowFlag: boolean = true;
  // endTimeShowFlag: boolean = false;
  // constructor(
  //   private modal: NzModalRef,
  //   public msgSrv: NzMessageService,
  //   public http: _HttpClient,
  //   private fb: FormBuilder,
  // ) { }
  //
  // ngOnInit(): void {
  //   this.jobtaskForm = this.fb.group({
  //     name: [null, [Validators.required, Validators.maxLength(3)] ],
  //     group: [null, [Validators.required,]],
  //     className: [null, [Validators.required,]],
  //     description: [null],
  //     cronExpression: [null, [Validators.required,]],
  //     triggerDescription: [null],
  //     // taskTypeSel: [null],
  //     // taskDate: [null],
  //     // taskTime: [null],
  //     // weekTimesVal: [null],
  //     // monthFrontSel: [null],
  //     // monthBackSel: [null],
  //     // taskRateDaySel: [null],
  //     // oneTime: [null],
  //     // betweenTimes: [null],
  //     // betweenTimeSel: [null],
  //     secondTypeSel: [null,],
  //     startTime: [null, [Validators.required,]],
  //     startDate: [null, [Validators.required,]],
  //     hasEndTime: [null],
  //     dataKey: [null],
  //     dataValue: [null]
  //   });
  // }
  //
  //
  // close() {
  //   this.modal.destroy();
  // }
  //
  //
  // //切换不同表达式所对应的界面
  //
  // optionChange(e: MouseEvent) {
  //   if (e){
  //     e.preventDefault();
  //   }
  //   this.taskCronShowFlag = !this.taskCronShowFlag;
  //   this.taskDetailShowFlag = !this.taskDetailShowFlag;
  //   if (this.taskCronShowFlag){
  //     this.jobtaskForm.removeControl("taskTypeSel");
  //     this.jobtaskForm.removeControl("taskDate");
  //     this.jobtaskForm.removeControl("taskTime");
  //     this.jobtaskForm.removeControl("taskRate");
  //     this.jobtaskForm.removeControl("weekTimesVal");
  //     this.weekTimesValArray.forEach(item => item.checked = false);
  //     this.jobtaskForm.removeControl("monthFrontSel");
  //     this.jobtaskForm.removeControl("monthBackSel");
  //     this.jobtaskForm.removeControl("taskRateDaySel");
  //     this.jobtaskForm.removeControl("oneTime");
  //     this.jobtaskForm.removeControl("betweenTimes");
  //     this.jobtaskForm.removeControl("betweenTimeSel");
  //     this.jobtaskForm.removeControl("monthVals1");
  //     this.jobtaskForm.removeControl("monthVals2");
  //     this.jobtaskForm.removeControl("allChecked");
  //     this.monthValArray1.forEach(item => item.checked = false);
  //     this.monthValArray2.forEach(item => item.checked = false);
  //
  //     this.taskRateDaySelItemShowFlag = false;
  //     this.taskDateItemShowFlag = false;
  //     this.taskRateSelectItemShowFlag = false;
  //     this.weekTimeSelectItemShowFlag = false;
  //     this.monthTimeSelectItemShowFlag = false;
  //     this.oneTimeItemShowFlag = false;
  //     this.betweenTimeShowFlag = false;
  //     this.monthValItemShowFlag = false;
  //     this.jobtaskForm.addControl("cronExpression", new FormControl(null, [Validators.required,]));
  //     this.jobtaskForm.addControl("triggerDescription", new FormControl());
  //   }
  //   if (this.taskDetailShowFlag){
  //     this.jobtaskForm.removeControl("cronExpression");
  //     this.jobtaskForm.removeControl("triggerDescription");
  //
  //     this.jobtaskForm.addControl("taskTypeSel",new FormControl(null, [Validators.required,]));
  //   }
  // }
  //
  //
  // //切换cron表达式说明界面
  // cronHelp(e: MouseEvent) {
  //   if (e){
  //     e.preventDefault();
  //   }
  //   this.cronExpHelpShowFlag = !this.cronExpHelpShowFlag;
  // }
  //
  //
  // taskTypeSelChange(value) {
  //   //重复执行
  //   if (value == '1'){
  //     this.taskRateSelectItemShowFlag = true;
  //     this.taskRateDaySelItemShowFlag = true;
  //     this.taskDateItemShowFlag = false;
  //     this.taskBetweenTimeShowFlag = true;
  //     this.monthValItemShowFlag = true;
  //     this.jobtaskForm.removeControl("taskDate");
  //     this.jobtaskForm.removeControl("taskTime");
  //
  //     this.jobtaskForm.addControl("monthVals1", new FormControl());
  //     this.jobtaskForm.addControl("monthVals2", new FormControl());
  //     this.jobtaskForm.addControl("taskRateDaySel",new FormControl(null, [Validators.required,]));
  //     this.jobtaskForm.addControl("taskRateSel",new FormControl(null, [Validators.required,]));
  //     this.jobtaskForm.addControl("allChecked",new FormControl(false, ));
  //   }
  //   //执行一次
  //   if (value == '2'){
  //     this.taskDateItemShowFlag = true;
  //     this.taskRateSelectItemShowFlag = false;
  //     this.taskRateDaySelItemShowFlag = false;
  //     this.weekTimeSelectItemShowFlag = false;
  //     this.monthTimeSelectItemShowFlag = false;
  //     this.oneTimeItemShowFlag = false;
  //     this.betweenTimeShowFlag = false;
  //     this.taskBetweenTimeShowFlag = false;
  //     this.monthValItemShowFlag = false;
  //     this.jobtaskForm.addControl("taskDate", new FormControl(null, [Validators.required,]));
  //     this.jobtaskForm.addControl("taskTime", new FormControl(null, [Validators.required,]));
  //
  //     this.jobtaskForm.removeControl("allChecked");
  //     this.jobtaskForm.removeControl("taskRateSel");
  //     this.jobtaskForm.removeControl("weekTimesVal");
  //     this.weekTimesValArray.forEach(item => item.checked = false);
  //     this.jobtaskForm.removeControl("monthFrontSel");
  //     this.jobtaskForm.removeControl("monthBackSel");
  //     this.jobtaskForm.removeControl("taskRateDaySel");
  //     this.jobtaskForm.removeControl("oneTime");
  //     this.jobtaskForm.removeControl("betweenTimes");
  //     this.jobtaskForm.removeControl("betweenTimeSel");
  //     this.jobtaskForm.removeControl("monthVals1");
  //     this.jobtaskForm.removeControl("monthVals2");
  //     this.monthValArray1.forEach(item => item.checked = false);
  //     this.monthValArray2.forEach(item => item.checked = false);
  //   }
  // }
  //
  //
  // taskRateSelChange(value) {
  //   if (value == 'day'){
  //     this.weekTimeSelectItemShowFlag = false;
  //     this.monthTimeSelectItemShowFlag = false;
  //
  //     this.jobtaskForm.removeControl("weekTimesVal");
  //     this.weekTimesValArray.forEach(item => item.checked = false);
  //     this.jobtaskForm.removeControl("monthFrontSel");
  //     this.jobtaskForm.removeControl("monthBackSel");
  //     this.jobtaskForm.removeControl("oneTime");
  //     this.jobtaskForm.removeControl("betweenTimes");
  //     this.jobtaskForm.removeControl("betweenTimeSel");
  //
  //
  //   }
  //   if (value == 'week'){
  //     this.weekTimeSelectItemShowFlag = true;
  //     this.monthTimeSelectItemShowFlag = false;
  //
  //     this.jobtaskForm.removeControl("weekTimesVal");
  //     this.weekTimesValArray.forEach(item => item.checked = false);
  //     this.jobtaskForm.removeControl("monthFrontSel");
  //     this.jobtaskForm.removeControl("monthBackSel");
  //     this.jobtaskForm.removeControl("oneTime");
  //     this.jobtaskForm.removeControl("betweenTimes");
  //     this.jobtaskForm.removeControl("betweenTimeSel");
  //
  //     this.jobtaskForm.addControl("weekTimesVal", new FormControl(null, [Validators.required,]));
  //   }
  //   if (value == 'monthWeek'){
  //     this.weekTimeSelectItemShowFlag = false;
  //     this.monthTimeSelectItemShowFlag = true;
  //
  //     this.jobtaskForm.removeControl("weekTimesVal");
  //     this.weekTimesValArray.forEach(item => item.checked = false);
  //     this.jobtaskForm.removeControl("monthFrontSel");
  //     this.jobtaskForm.removeControl("monthBackSel");
  //     this.jobtaskForm.removeControl("oneTime");
  //     this.jobtaskForm.removeControl("betweenTimes");
  //     this.jobtaskForm.removeControl("betweenTimeSel");
  //
  //     this.jobtaskForm.addControl("monthFrontSel", new FormControl(null, [Validators.required,]));
  //     this.jobtaskForm.addControl("monthBackSel", new FormControl(null, [Validators.required,]));
  //   }
  //
  //   if (value == 'monthDay'){
  //     this.weekTimeSelectItemShowFlag = false;
  //     this.monthTimeSelectItemShowFlag = false;
  //     this.monthDaysValItemShowFlag = true;
  //
  //
  //   }
  // }
  //
  //
  // taskRateDaySelChange(param: any) {
  //   if (param == 'one'){
  //     this.oneTimeItemShowFlag = true;
  //     this.betweenTimeShowFlag = false;
  //
  //     this.jobtaskForm.removeControl("betweenTimes");
  //     this.jobtaskForm.removeControl("betweenTimeSel");
  //     this.jobtaskForm.addControl("oneTime",new FormControl(null, [Validators.required,]));
  //
  //   }
  //   if (param == 'more'){
  //     this.oneTimeItemShowFlag = false;
  //     this.betweenTimeShowFlag = true;
  //
  //     this.jobtaskForm.removeControl("oneTime");
  //
  //     this.jobtaskForm.addControl("betweenTimes",new FormControl(null, [Validators.required,]));
  //     this.jobtaskForm.addControl("betweenTimeSel",new FormControl(null, [Validators.required,]));
  //   }
  // }
  //
  //
  // //任务参数
  // dataKeys: Array<{id: number, name: string}> = [];
  // dataValues: Array<{id: number, name: string}> = [];
  //
  //
  // addRow(e: MouseEvent) {
  //   if (e){
  //     e.preventDefault();
  //   }
  //   let dataKey = {id: this.dataKeys.length,name: "datakeys"+this.dataKeys.length};
  //   let dataValue = {id: this.dataKeys.length,name: "datavalues"+this.dataKeys.length};
  //   this.dataKeys.push(dataKey);
  //   this.dataValues.push(dataValue);
  //   this.jobtaskForm.addControl(dataKey.name,new FormControl());
  //   this.jobtaskForm.addControl(dataValue.name, new FormControl());
  // }
  //
  // removeRow(e: MouseEvent) {
  //   if (e){
  //     e.preventDefault();
  //   }
  //   let dataKey = this.dataKeys.pop();
  //   let dataValue = this.dataValues.pop();
  //   this.jobtaskForm.removeControl(dataKey.name);
  //   this.jobtaskForm.removeControl(dataValue.name);
  // }
  //
  //
  //
  //
  // hasEndTimeChange() {
  //   this.endTimeShowFlag = !this.endTimeShowFlag;
  //   if (this.endTimeShowFlag){
  //     this.jobtaskForm.addControl("endDate", new FormControl(null, [Validators.required]));
  //     this.jobtaskForm.addControl("endTime", new FormControl(null, [Validators.required]));
  //   }else{
  //     this.jobtaskForm.removeControl("endDate");
  //     this.jobtaskForm.removeControl("endTime");
  //   }
  // }
  //
  // submit() {
  //   console.log(this.jobtaskForm.value);
  // }
  //
  // reset(e: MouseEvent) {
  //   if (e){
  //     e.preventDefault();
  //   }
  //   this.jobtaskForm.reset();
  // }
  //
  //
  // secondTypeSelChange(value) {
  //   console.log(this.jobtaskForm.value);
  // }


  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService,
    private fb: FormBuilder,
    private jobService : JobService,
  ) {
  }

  ngOnInit(): void {
    this.jobtaskForm = this.fb.group({
      name: [null, [Validators.required,]],
      group: [null, [Validators.required,]],
      className: [null, [Validators.required,]],
      taskDescription: [null],
      // cronExpression: [null, [Validators.required,]],
      triggerDescription: [null],
      configSel: [null, [Validators.required]],
      dataKey: [null],
      dataValue: [null]
    });

    //生成秒钟和分钟的checkbox对应的数组
    this.arrays.pop();
    for (let i = 0, k = 0; i < 6; i++) {
      let tmp = [];
      for (let j = 1; j <= 10; j++) {
        tmp.push({label: k + "", value: k + "", checked: false});
        k++;
      }
      this.arrays.push(tmp);
    }

    //生成小时的checkbox对应的数组
    this.arrays1.pop();
    for (let i = 0, k = 0; i < 3; i++) {
      let tmp = [];
      for (let j = 1; j <= 8; j++) {
        tmp.push({label: k + "", value: k + "", checked: false});
        k++;
      }
      this.arrays1.push(tmp);
    }
    //生成天数的checkbox对应的数组
    this.arrays2.pop();
    for (let i = 0, k = 1; i < 3; i++) {
      let tmp = [];
      for (let j = 1; j <= 10; j++) {
        tmp.push({label: k + "", value: k + "", checked: false});
        k++;
      }
      this.arrays2.push(tmp);
    }
    this.arrays2[2].push({label: "31", value: "31", checked: false})

    if (this.record.id != null) {
      this.jobService.findJobById(this.record.id).subscribe(res => {
        this.job = res;
        this.configView();
      })
    }

  }

  //如果是编辑页面，根据传来的数据配置页面
  configView() {
    this.jobtaskForm.get('name').setValue(this.job.name);
    this.jobtaskForm.get('group').setValue(this.job.groupName);
    this.jobtaskForm.get('className').setValue(this.job.className);
    if (this.job.taskDescription != null) {
      this.jobtaskForm.get('taskDescription').setValue(this.job.taskDescription);
    }
    this.jobtaskForm.get('configSel').setValue(this.job.configSel);
    this.configSelChange(this.job.configSel);
    if (this.job.configSel == '1') {
      let date: Date = new Date(this.job.oneTimeExecTime);
      this.jobtaskForm.get('oneTimeExecTime').setValue(date);
      this.jobtaskForm.get('oneTimeExecDate').setValue(date);
    }
    if (this.job.configSel == '2') {
      let cronStr: string = this.job.cronExpression;
      let crons = cronStr.split(' ');
      //秒钟
      this.jobtaskForm.get('secondTypeSel').setValue(this.job.secondTypeSel);
      this.secondSelChange(this.job.secondTypeSel);
      if (this.job.secondTypeSel == '2') {
        let secondBetweenVal1 = crons[0].split('-')[0];
        let secondBetweenVal2 = crons[0].split('-')[1];
        this.jobtaskForm.get('secondBetweenVal1').setValue(Number.parseInt(secondBetweenVal1));
        this.jobtaskForm.get('secondBetweenVal2').setValue(Number.parseInt(secondBetweenVal2));
      }
      if (this.job.secondTypeSel == '3') {
        let secondStepVal1 = crons[0].split('/')[0];
        let secondStepVal2 = crons[0].split('/')[1];
        this.jobtaskForm.get('secondStepVal1').setValue(Number.parseInt(secondStepVal1));
        this.jobtaskForm.get('secondStepVal2').setValue(Number.parseInt(secondStepVal2));
      }
      if (this.job.secondTypeSel == '4') {
        let _secondVals = crons[0].split(',');
        for (let i = 0; i < _secondVals.length; i++) {
          let n = Number.parseInt(_secondVals[i]) / 10;
          let m = Number.parseInt(_secondVals[i]) - n * 10;
          this.arrays[n][m].checked = true;
        }
      }

      //分钟
      this.jobtaskForm.get('minuteTypeSel').setValue(this.job.minuteTypeSel);
      this.minuteSelChange(this.job.minuteTypeSel);
      if (this.job.minuteTypeSel == '2') {
        let minuteBetweenVal1 = crons[1].split('-')[0];
        let minuteBetweenVal2 = crons[1].split('-')[1];
        this.jobtaskForm.get('minuteBetweenVal1').setValue(Number.parseInt(minuteBetweenVal1));
        this.jobtaskForm.get('minuteBetweenVal2').setValue(Number.parseInt(minuteBetweenVal2));
      }
      if (this.job.minuteTypeSel == '3') {
        let minuteStepVal1 = crons[1].split('/')[0];
        let minuteStepVal2 = crons[1].split('/')[1];
        this.jobtaskForm.get('minuteStepVal1').setValue(Number.parseInt(minuteStepVal1));
        this.jobtaskForm.get('minuteStepVal2').setValue(Number.parseInt(minuteStepVal2));
      }
      if (this.job.minuteTypeSel == '4') {
        let _minuteVals = crons[1].split(',');
        for (let i = 0; i < _minuteVals.length; i++) {
          let n = Number.parseInt(_minuteVals[i]) / 10;
          let m = Number.parseInt(_minuteVals[i]) - n * 10;
          this.arrays[n][m].checked = true;
        }
      }

      //小时
      this.jobtaskForm.get('hourTypeSel').setValue(this.job.hourTypeSel);
      this.hourSelChange(this.job.hourTypeSel);
      if (this.job.hourTypeSel == '2') {
        let hourBetweenVal1 = crons[2].split('-')[0];
        let hourBetweenVal2 = crons[2].split('-')[1];
        this.jobtaskForm.get('hourBetweenVal1').setValue(Number.parseInt(hourBetweenVal1));
        this.jobtaskForm.get('hourBetweenVal2').setValue(Number.parseInt(hourBetweenVal2));
      }
      if (this.job.hourTypeSel == '3') {
        let hourStepVal1 = crons[2].split('/')[0];
        let hourStepVal2 = crons[2].split('/')[1];
        this.jobtaskForm.get('hourStepVal1').setValue(Number.parseInt(hourStepVal1));
        this.jobtaskForm.get('hourStepVal2').setValue(Number.parseInt(hourStepVal2));
      }
      if (this.job.hourTypeSel == '4') {
        let _hourVals = crons[2].split(',');
        for (let i = 0; i < _hourVals.length; i++) {
          let n = Number.parseInt(_hourVals[i]) / 8;
          let m = Number.parseInt(_hourVals[i]) - n * 8;
          this.arrays1[n][m].checked = true;
        }
      }

      //天

      this.jobtaskForm.get('dayTypeSel').setValue(this.job.dayTypeSel);
      this.daySelChange(this.job.dayTypeSel);
      if (this.job.dayTypeSel == '3') {
        let dayBetweenVal1 = crons[3].split('-')[0];
        let dayBetweenVal2 = crons[3].split('-')[1];
        this.jobtaskForm.get('dayBetweenVal1').setValue(Number.parseInt(dayBetweenVal1));
        this.jobtaskForm.get('dayBetweenVal2').setValue(Number.parseInt(dayBetweenVal2));
      }
      if (this.job.dayTypeSel == '4') {
        let dayStepVal1 = crons[3].split('/')[0];
        let dayStepVal2 = crons[3].split('/')[1];
        this.jobtaskForm.get('dayStepVal1').setValue(Number.parseInt(dayStepVal1));
        this.jobtaskForm.get('dayStepVal2').setValue(Number.parseInt(dayStepVal2));
      }
      if (this.job.dayTypeSel == '5') {
        let _dayWorkDayVal = crons[3].substring(0, crons[4].length - 1);
        this.jobtaskForm.get('dayWorkDayVal').setValue(Number.parseInt(_dayWorkDayVal));
      }
      if (this.job.dayTypeSel == '7') {
        let _dayVals = crons[3].split(',');
        for (let i = 0; i < _dayVals.length; i++) {
          let n = (Number.parseInt(_dayVals[i]) - 1) / 10;
          let m = (Number.parseInt(_dayVals[i]) - 1) - n * 10;
          this.arrays2[n][m].checked = true;
        }
      }


      //月份

      this.jobtaskForm.get('monthTypeSel').setValue(this.job.hourTypeSel);
      this.daySelChange(this.job.dayTypeSel);
      if (this.job.monthTypeSel == '2') {
        let monthBetweenVal1 = crons[4].split('-')[0];
        let monthBetweenVal2 = crons[4].split('-')[1];
        this.jobtaskForm.get('monthBetweenVal1').setValue(Number.parseInt(monthBetweenVal1));
        this.jobtaskForm.get('monthBetweenVal2').setValue(Number.parseInt(monthBetweenVal1));
      }
      if (this.job.monthTypeSel == '3') {
        let monthStepVal1 = crons[4].split('/')[0];
        let monthStepVal2 = crons[4].split('/')[1];
        this.jobtaskForm.get('monthStepVal1').setValue(Number.parseInt(monthStepVal1));
        this.jobtaskForm.get('monthStepVal2').setValue(Number.parseInt(monthStepVal2));
      }
      if (this.job.monthTypeSel == '4') {
        let _monthVals = crons[4].split(',');
        for (let i = 0; i < _monthVals.length; i++) {
          if (Number.parseInt(_monthVals[i]) <= 6) {
            this.arrays3[Number.parseInt(_monthVals[i]) - 1].checked = true;
          } else {
            this.arrays4[Number.parseInt(_monthVals[i]) - 7].checked = true;
          }

        }
      }

      //星期
      this.jobtaskForm.get('weekTypeSel').setValue(this.job.hourTypeSel);
      this.weekSelChange(this.job.weekTypeSel);
      if (this.job.weekTypeSel == '3') {
        let weekBetweenVal1 = crons[5].split('-')[0];
        let weekBetweenVal2 = crons[5].split('-')[1];
        this.jobtaskForm.get('weekBetweenVal1').setValue(Number.parseInt(weekBetweenVal1));
        this.jobtaskForm.get('weekBetweenVal2').setValue(Number.parseInt(weekBetweenVal2));
      }
      if (this.job.weekTypeSel == '4') {
        let weekMonthVal1 = crons[5].split('#')[0];
        let weekMonthVal2 = crons[5].split('#')[1];
        this.jobtaskForm.get('weekMonthVal1').setValue(Number.parseInt(weekMonthVal1));
        this.jobtaskForm.get('weekMonthVal2').setValue(Number.parseInt(weekMonthVal2));
      }
      if (this.job.weekTypeSel == '5') {
        let weekMonthLastVal = crons[5].substring(0, crons[5].length - 1);
        this.jobtaskForm.get('weekMonthLastVal').setValue(Number.parseInt(weekMonthLastVal));
      }
      if (this.job.monthTypeSel == '6') {
        let _monthVals = crons[5].split(',');
        for (let i = 0; i < _monthVals.length; i++) {
          this.arrays5[Number.parseInt(_monthVals[i]) - 1].checked = true;
        }
      }

      //配置开始时间和结束时间
      let start: Date = new Date(this.job.startTime);
      this.jobtaskForm.get('startTime').setValue(start);
      this.jobtaskForm.get('startDate').setValue(start);
      if (this.job.hasEndTime != null) {
        if (this.job.hasEndTime == false) {
          this.jobtaskForm.get('hasEndTime').setValue(false);
        } else {
          this.jobtaskForm.get('hasEndTime').setValue(true);
          let end: Date = new Date(this.job.startTime);
          this.jobtaskForm.get('endTime').setValue(end);
          this.jobtaskForm.get('endDate').setValue(end);
        }
      }
    }

    if (this.job.configSel == '3') {
      this.jobtaskForm.get('cronExpression').setValue(this.job.cronExpression);
      //配置开始时间和结束时间
      let start: Date = new Date(this.job.startTime);
      this.jobtaskForm.get('startTime').setValue(start);

      this.jobtaskForm.get('startDate').setValue(start);

      if (this.job.hasEndTime != null) {
        if (this.job.hasEndTime == false){
          this.jobtaskForm.get('hasEndTime').setValue(false);
        } else{
          this.jobtaskForm.get('hasEndTime').setValue(true);
          let end: Date = new Date(this.job.startTime);
          this.jobtaskForm.get('endTime').setValue(end);
          this.jobtaskForm.get('endDate').setValue(end);
        }

      }
      this.jobtaskForm.get('triggerDescription').setValue(this.job.triggerDescription);
    }

//配置任务参数
    if (this.job.dataKeys != null) {
      this.jobtaskForm.get('dataKey').setValue(this.job.dataKeys[0]);
      this.jobtaskForm.get('dataValue').setValue(this.job.dataValues[0]);
      for (let i = 1; i < this.job.dataKeys.length; i++) {
        let dataKey = {id: this.dataKeys.length, name: "datakeys" + this.dataKeys.length};
        let dataValue = {id: this.dataKeys.length, name: "datavalues" + this.dataKeys.length};
        this.dataKeys.push(dataKey);
        this.dataValues.push(dataValue);
        this.jobtaskForm.addControl(dataKey.name, new FormControl(this.job.dataKeys[i]));
        this.jobtaskForm.addControl(dataValue.name, new FormControl(this.job.dataValues[i]));
      }
    }

  }

  record: any = {};
  i: any;
  jobtaskForm: FormGroup;
  job: any;

  cronConfigDivShowFlag: boolean = false;
  cronExpHelpItemShowFlag: boolean = false;
  oneTimeExecConfigDivShowFlag: boolean = false;
  commonConfigDivShowFlag: boolean = false;
  secondShowFlag2: boolean = false;
  secondShowFlag3: boolean = false;
  secondShowFlag4: boolean = false;
  minuteShowFlag2: boolean = false;
  minuteShowFlag3: boolean = false;
  minuteShowFlag4: boolean = false;
  hourShowFlag2: boolean = false;
  hourShowFlag3: boolean = false;
  hourShowFlag4: boolean = false;
  dayShowFlag3: boolean = false;
  dayShowFlag4: boolean = false;
  dayShowFlag5: boolean = false;
  dayShowFlag7: boolean = false;
  monthShowFlag2: boolean = false;
  monthShowFlag3: boolean = false;
  monthShowFlag4: boolean = false;
  weekShowFlag3: boolean = false;
  weekShowFlag4: boolean = false;
  weekShowFlag5: boolean = false;
  weekShowFlag6: boolean = false;
  triggerDescriptionShowFlag: boolean = false;
  endTimeShowFlag: boolean = false;

  arrays = [[]]; //秒钟和分钟的checkbox对应的数组
  arrays1 = [[]]; //小时的checkbox对应的数组
  arrays2 = [[]]; //天数的checkbox对应的数组
  arrays3 = [
    {label: "1月", value: "1", checked: false},
    {label: "2月", value: "2", checked: false},
    {label: "3月", value: "3", checked: false},
    {label: "4月", value: "4", checked: false},
    {label: "5月", value: "5", checked: false},
    {label: "6月", value: "6", checked: false},

  ];
  arrays4 = [
    {label: "7月", value: "7", checked: false},
    {label: "8月", value: "8", checked: false},
    {label: "9月", value: "9", checked: false},
    {label: "10月", value: "10", checked: false},
    {label: "11月", value: "11", checked: false},
    {label: "12月", value: "12", checked: false},
  ];

  arrays5 = [
    {label: "星期日", value: "1", checked: false},
    {label: "星期一", value: "2", checked: false},
    {label: "星期二", value: "3", checked: false},
    {label: "星期三", value: "4", checked: false},
    {label: "星期四", value: "5", checked: false},
    {label: "星期五", value: "6", checked: false},
    {label: "星期六", value: "7", checked: false},
  ];

//切换cron表达式说明界面
  cronHelp(e: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    this.cronExpHelpItemShowFlag = !this.cronExpHelpItemShowFlag;
  }


  configSelChange(value) {
    //执行一次配置
    if (value == '1') {
      this.cronConfigDivShowFlag = false;
      this.commonConfigDivShowFlag = false;
      this.triggerDescriptionShowFlag = false;
      this.jobtaskForm.addControl("oneTimeExecDate", new FormControl(null, [Validators.required]));
      this.jobtaskForm.addControl("oneTimeExecTime", new FormControl(null, [Validators.required]));
      this.oneTimeExecConfigDivShowFlag = true;
      this.jobtaskForm.removeControl("cronExpression");
      this.jobtaskForm.removeControl("startTime");
      this.jobtaskForm.removeControl("startDate");
      this.jobtaskForm.removeControl("hasEndTime");
      //删除掉一般页面配置的表单项
      this.removeCommonConfigFormControl();
    }
    //一般页面配置
    if (value == '2') {
      this.cronConfigDivShowFlag = false;
      this.oneTimeExecConfigDivShowFlag = false;
      this.triggerDescriptionShowFlag = false;
      this.jobtaskForm.addControl("secondTypeSel", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("minuteTypeSel", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("hourTypeSel", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("dayTypeSel", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("monthTypeSel", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("weekTypeSel", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("startDate", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("startTime", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("hasEndTime", new FormControl(false, Validators.required));
      this.commonConfigDivShowFlag = true;
      this.jobtaskForm.removeControl("cronExpression");
      this.jobtaskForm.removeControl("oneTimeExecDate");
      this.jobtaskForm.removeControl("oneTimeExecTime");
    }
    //直接写cron表达式配置
    if (value == '3') {

      this.commonConfigDivShowFlag = false;
      this.oneTimeExecConfigDivShowFlag = false;
      this.triggerDescriptionShowFlag = true;
      this.jobtaskForm.addControl("cronExpression", new FormControl(null, [Validators.required]));
      this.jobtaskForm.addControl("startDate", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("startTime", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("hasEndTime", new FormControl(false, Validators.required));
      this.cronConfigDivShowFlag = true;

      this.jobtaskForm.removeControl("oneTimeExecDate");
      this.jobtaskForm.removeControl("oneTimeExecTime");

      //删除掉一般页面配置的表单项
      this.removeCommonConfigFormControl();
    }


  }

//删除掉一般页面配置的表单项
  removeCommonConfigFormControl() {
    this.jobtaskForm.removeControl("secondTypeSel");
    this.jobtaskForm.removeControl("secondBetweenVal1");
    this.jobtaskForm.removeControl("secondBetweenVal2");
    this.jobtaskForm.removeControl("secondStepVal1");
    this.jobtaskForm.removeControl("secondStepVal2");
    for (let i = 0; i < 6; i++) {
      this.jobtaskForm.removeControl("secondVals" + i);
    }
    this.jobtaskForm.removeControl("minuteTypeSel");
    this.jobtaskForm.removeControl("minuteBetweenVal1");
    this.jobtaskForm.removeControl("minuteBetweenVal2");
    this.jobtaskForm.removeControl("minuteStepVal1");
    this.jobtaskForm.removeControl("minuteStepVal2");
    for (let i = 0; i < 6; i++) {
      this.jobtaskForm.removeControl("minuteVals" + i);
    }
    this.jobtaskForm.removeControl("hourTypeSel");
    this.jobtaskForm.removeControl("hourBetweenVal1");
    this.jobtaskForm.removeControl("hourBetweenVal2");
    this.jobtaskForm.removeControl("hourStepVal1");
    this.jobtaskForm.removeControl("hourStepVal2");
    for (let i = 0; i < 3; i++) {
      this.jobtaskForm.removeControl("hourVals" + i);
    }
    this.jobtaskForm.removeControl("dayTypeSel");
    this.jobtaskForm.removeControl("dayBetweenVal1");
    this.jobtaskForm.removeControl("dayBetweenVal2");
    this.jobtaskForm.removeControl("dayStepVal1");
    this.jobtaskForm.removeControl("dayStepVal2");
    this.jobtaskForm.removeControl("dayWorkDayVal");
    for (let i = 0; i < 3; i++) {
      this.jobtaskForm.removeControl("dayVals" + i);
    }
    this.jobtaskForm.removeControl("monthTypeSel");
    this.jobtaskForm.removeControl("monthBetweenVal1");
    this.jobtaskForm.removeControl("monthBetweenVal2");
    this.jobtaskForm.removeControl("monthStepVal1");
    this.jobtaskForm.removeControl("monthStepVal2");
    this.jobtaskForm.removeControl("monthVals1");
    this.jobtaskForm.removeControl("monthVals2");

    this.jobtaskForm.removeControl("weekTypeSel");
    this.jobtaskForm.removeControl("weekBetweenVal1");
    this.jobtaskForm.removeControl("weekBetweenVal2");
    this.jobtaskForm.removeControl("weekMonthVal1");
    this.jobtaskForm.removeControl("weekMonthVal2");
    this.jobtaskForm.removeControl("weekMonthLastVal");
    this.jobtaskForm.removeControl("weekVals");
  }


  secondSelChange(value) {

    this.jobtaskForm.removeControl("secondBetweenVal1");
    this.jobtaskForm.removeControl("secondBetweenVal2");
    this.jobtaskForm.removeControl("secondStepVal1");
    this.jobtaskForm.removeControl("secondStepVal2");
    for (let i = 0; i < 6; i++) {
      this.jobtaskForm.removeControl("secondVals" + i);
    }

    //每秒执行
    if (value == '1') {
      this.secondShowFlag2 = false;
      this.secondShowFlag3 = false;
      this.secondShowFlag4 = false;
    }
    //周期从第几秒到第几秒
    if (value == '2') {
      this.secondShowFlag2 = true;
      this.secondShowFlag3 = false;
      this.secondShowFlag4 = false;

      this.jobtaskForm.addControl("secondBetweenVal1", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("secondBetweenVal2", new FormControl(null, [Validators.required, this.betweenValValidate("secondBetweenVal2")]));
    }
    //从某一秒开始，每多少秒执行一次
    if (value == '3') {
      this.secondShowFlag2 = false;
      this.secondShowFlag3 = true;
      this.secondShowFlag4 = false;

      this.jobtaskForm.addControl("secondStepVal1", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("secondStepVal2", new FormControl(null, Validators.required));
    }
    //指定特定的秒数
    if (value == '4') {
      this.secondShowFlag2 = false;
      this.secondShowFlag3 = false;
      this.secondShowFlag4 = true;

      for (let i = 0; i < 6; i++) {
        this.jobtaskForm.addControl("secondVals" + i, new FormControl(null,));
      }
    }

  }

  minuteSelChange(value) {
    this.jobtaskForm.removeControl("minuteBetweenVal1");
    this.jobtaskForm.removeControl("minuteBetweenVal2");
    this.jobtaskForm.removeControl("minuteStepVal1");
    this.jobtaskForm.removeControl("minuteStepVal2");
    for (let i = 0; i < 6; i++) {
      this.jobtaskForm.removeControl("minuteVals" + i);
    }
    //每分钟执行
    if (value == '1') {
      this.minuteShowFlag2 = false;
      this.minuteShowFlag3 = false;
      this.minuteShowFlag4 = false;
    }
    //周期从第几分钟到第几钟
    if (value == '2') {
      this.minuteShowFlag2 = true;
      this.minuteShowFlag3 = false;
      this.minuteShowFlag4 = false;
      this.jobtaskForm.addControl("minuteBetweenVal1", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("minuteBetweenVal2", new FormControl(null, [Validators.required, this.betweenValValidate('minuteBetweenVal2')]));
    }
    //从某一分钟开始，每多少分钟执行一次
    if (value == '3') {
      this.minuteShowFlag2 = false;
      this.minuteShowFlag3 = true;
      this.minuteShowFlag4 = false;

      this.jobtaskForm.addControl("minuteStepVal1", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("minuteStepVal2", new FormControl(null, Validators.required));
    }
    //指定特定的分钟数
    if (value == '4') {
      this.minuteShowFlag2 = false;
      this.minuteShowFlag3 = false;
      this.minuteShowFlag4 = true;

      for (let i = 0; i < 6; i++) {
        this.jobtaskForm.addControl("minuteVals" + i, new FormControl(null,));
      }
    }
  }

  hourSelChange(value) {
    this.jobtaskForm.removeControl("hourBetweenVal1");
    this.jobtaskForm.removeControl("hourBetweenVal2");
    this.jobtaskForm.removeControl("hourStepVal1");
    this.jobtaskForm.removeControl("hourStepVal2");
    for (let i = 0; i < 6; i++) {
      this.jobtaskForm.removeControl("hourVals" + i);
    }
    //每小时执行
    if (value == '1') {
      this.hourShowFlag2 = false;
      this.hourShowFlag3 = false;
      this.hourShowFlag4 = false;
    }
    //周期从第几小时到第几小时
    if (value == '2') {
      this.hourShowFlag2 = true;
      this.hourShowFlag3 = false;
      this.hourShowFlag4 = false;

      this.jobtaskForm.addControl("hourBetweenVal1", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("hourBetweenVal2", new FormControl(null,
        [Validators.required, this.betweenValValidate("hourBetweenVal2")]));

    }
    //从某一小时开始，每多少小时执行一次
    if (value == '3') {
      this.hourShowFlag2 = false;
      this.hourShowFlag3 = true;
      this.hourShowFlag4 = false;


      this.jobtaskForm.addControl("hourStepVal1", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("hourStepVal2", new FormControl(null, Validators.required));
    }
    //指定特定的小时数
    if (value == '4') {
      this.hourShowFlag2 = false;
      this.hourShowFlag3 = false;
      this.hourShowFlag4 = true;

      for (let i = 0; i < 3; i++) {
        this.jobtaskForm.addControl("hourVals" + i, new FormControl(null,));
      }
    }
  }

  daySelChange(value) {
    this.jobtaskForm.removeControl("dayBetweenVal1");
    this.jobtaskForm.removeControl("dayBetweenVal2");
    this.jobtaskForm.removeControl("dayStepVal1");
    this.jobtaskForm.removeControl("dayStepVal2");
    this.jobtaskForm.removeControl("dayWorkDayVal");
    for (let i = 0; i < 3; i++) {
      this.jobtaskForm.removeControl("dayVals" + i);
    }
    //不指定
    if (value == '1') {
      this.dayShowFlag3 = false;
      this.dayShowFlag4 = false;
      this.dayShowFlag5 = false;
      this.dayShowFlag7 = false;
    }
    //每天执行
    if (value == '2') {
      this.dayShowFlag3 = false;
      this.dayShowFlag4 = false;
      this.dayShowFlag5 = false;
      this.dayShowFlag7 = false;
      this.jobtaskForm.get("weekTypeSel").setValue("1");
    }
    //周期从第几天到第几天
    if (value == '3') {
      this.dayShowFlag3 = true;
      this.dayShowFlag4 = false;
      this.dayShowFlag5 = false;
      this.dayShowFlag7 = false;
      this.jobtaskForm.get("weekTypeSel").setValue("1");
      this.jobtaskForm.addControl("dayBetweenVal1", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("dayBetweenVal2", new FormControl(null,
        [Validators.required, this.betweenValValidate("dayBetweenVal2")]));

    }
    //从某一天开始，每多少天执行一次
    if (value == '4') {
      this.dayShowFlag3 = false;
      this.dayShowFlag4 = true;
      this.dayShowFlag5 = false;
      this.dayShowFlag7 = false;
      this.jobtaskForm.get("weekTypeSel").setValue("1");

      this.jobtaskForm.addControl("dayStepVal1", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("hourStepVal2", new FormControl(null, Validators.required));
    }
    //每月几号最近的那个工作日
    if (value == '5') {
      this.dayShowFlag3 = false;
      this.dayShowFlag4 = false;
      this.dayShowFlag5 = true;
      this.dayShowFlag7 = false;
      this.jobtaskForm.get("weekTypeSel").setValue("1");
      this.jobtaskForm.addControl("dayWorkDayVal", new FormControl(null, Validators.required));
    }
    //每月最后一天
    if (value == '6') {
      this.dayShowFlag3 = false;
      this.dayShowFlag4 = false;
      this.dayShowFlag5 = false;
      this.dayShowFlag7 = false;
      this.jobtaskForm.get("weekTypeSel").setValue("1");
    }
    //指定特定的天数
    if (value == '7') {
      this.dayShowFlag3 = false;
      this.dayShowFlag4 = false;
      this.dayShowFlag5 = false;
      this.dayShowFlag7 = true;
      this.jobtaskForm.get("weekTypeSel").setValue("1");
      for (let i = 0; i < 3; i++) {
        this.jobtaskForm.addControl("dayVals" + i, new FormControl(null,));
      }
    }
  }

  monthSelChange(value) {
    this.jobtaskForm.removeControl("monthBetweenVal1");
    this.jobtaskForm.removeControl("monthBetweenVal2");
    this.jobtaskForm.removeControl("monthStepVal1");
    this.jobtaskForm.removeControl("monthStepVal2");
    this.jobtaskForm.removeControl("monthVals1");
    this.jobtaskForm.removeControl("monthVals2");
    //每月执行
    if (value == '1') {
      this.monthShowFlag2 = false;
      this.monthShowFlag3 = false;
      this.monthShowFlag4 = false;
    }
    //周期从第几月到第几月
    if (value == '2') {
      this.monthShowFlag2 = true;
      this.monthShowFlag3 = false;
      this.monthShowFlag4 = false;


      this.jobtaskForm.addControl("monthBetweenVal1", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("monthBetweenVal2", new FormControl(null,
        [Validators.required, this.betweenValValidate("monthBetweenVal2")]));
    }
    //从某一个月开始，每多少个月执行一次
    if (value == '3') {
      this.monthShowFlag2 = false;
      this.monthShowFlag3 = true;
      this.monthShowFlag4 = false;


      this.jobtaskForm.addControl("monthStepVal1", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("monthStepVal2", new FormControl(null, Validators.required));
    }
    //指定特定的月份数
    if (value == '4') {
      this.monthShowFlag2 = false;
      this.monthShowFlag3 = false;
      this.monthShowFlag4 = true;

      this.jobtaskForm.addControl("monthVals1", new FormControl(null,));
      this.jobtaskForm.addControl("monthVals2", new FormControl(null,));
    }
  }

  weekSelChange(value) {
    this.jobtaskForm.removeControl("weekBetweenVal1");
    this.jobtaskForm.removeControl("weekBetweenVal2");
    this.jobtaskForm.removeControl("weekMonthVal1");
    this.jobtaskForm.removeControl("weekMonthVal2");
    this.jobtaskForm.removeControl("weekMonthLastVal");
    this.jobtaskForm.removeControl("weekVals");
    // 不指定
    if (value == '1') {
      this.weekShowFlag3 = false;
      this.weekShowFlag4 = false;
      this.weekShowFlag5 = false;
      this.weekShowFlag6 = false;
    }
    //每周执行
    if (value == '2') {
      this.weekShowFlag3 = false;
      this.weekShowFlag4 = false;
      this.weekShowFlag5 = false;
      this.weekShowFlag6 = false;
      this.jobtaskForm.get("dayTypeSel").setValue("1");
    }
    //周期从周几到周几
    if (value == '3') {
      this.weekShowFlag3 = true;
      this.weekShowFlag4 = false;
      this.weekShowFlag5 = false;
      this.weekShowFlag6 = false;
      this.jobtaskForm.get("dayTypeSel").setValue("1");
      this.jobtaskForm.addControl("weekBetweenVal1", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("weekBetweenVal2", new FormControl(null,
        [Validators.required, this.betweenValValidate("weekBetweenVal2")]));

    }
    //一个月的第几周的星期几
    if (value == '4') {
      this.weekShowFlag3 = false;
      this.weekShowFlag4 = true;
      this.weekShowFlag5 = false;
      this.weekShowFlag6 = false;
      this.jobtaskForm.get("dayTypeSel").setValue("1");

      this.jobtaskForm.addControl("weekMonthVal1", new FormControl(null, Validators.required));
      this.jobtaskForm.addControl("weekMonthVal2", new FormControl(null, Validators.required));

    }
    //一个月的最后一个星期几
    if (value == '5') {
      this.weekShowFlag3 = false;
      this.weekShowFlag4 = false;
      this.weekShowFlag5 = true;
      this.weekShowFlag6 = false;
      this.jobtaskForm.get("dayTypeSel").setValue("1");
      this.jobtaskForm.addControl("weekMonthLastVal", new FormControl(null, Validators.required));
    }
    //指定特定的星期几
    if (value == '6') {
      this.weekShowFlag3 = false;
      this.weekShowFlag4 = false;
      this.weekShowFlag5 = false;
      this.weekShowFlag6 = true;
      this.jobtaskForm.get("dayTypeSel").setValue("1");
      this.jobtaskForm.addControl("weekVals", new FormControl(null, Validators.required));
    }
  }

  hasEndTimeChange() {
    this.endTimeShowFlag = !this.endTimeShowFlag;
    if (this.endTimeShowFlag) {
      this.jobtaskForm.addControl("endDate", new FormControl(null, [Validators.required]));
      this.jobtaskForm.addControl("endTime", new FormControl(null, [Validators.required]));
    } else {
      this.jobtaskForm.removeControl("endDate");
      this.jobtaskForm.removeControl("endTime");
    }
  }


//任务参数
  dataKeys: Array<{ id: number, name: string }> = [];
  dataValues: Array<{ id: number, name: string }> = [];


  addRow(e: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    let dataKey = {id: this.dataKeys.length, name: "datakeys" + this.dataKeys.length};
    let dataValue = {id: this.dataKeys.length, name: "datavalues" + this.dataKeys.length};
    this.dataKeys.push(dataKey);
    this.dataValues.push(dataValue);
    this.jobtaskForm.addControl(dataKey.name, new FormControl());
    this.jobtaskForm.addControl(dataValue.name, new FormControl());
  }

  removeRow(e: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    let dataKey = this.dataKeys.pop();
    let dataValue = this.dataValues.pop();
    this.jobtaskForm.removeControl(dataKey.name);
    this.jobtaskForm.removeControl(dataValue.name);
  }


  //自定义的验证函数
  betweenValValidate(name: string): ValidatorFn {
    return (control: FormControl): { [key: string]: any } | null => {
      let otherControlName = name.replace('2', '1');
      let otherControl = this.jobtaskForm.get(otherControlName);
      if (!otherControl || !control) {
        return null;
      }
      if (otherControl.value >= control.value) {
        return {error: true};
      } else {
        return null;
      }

    };
  }

  secondBetweenVal1Change() {
    this.jobtaskForm.get("secondBetweenVal2").updateValueAndValidity();
  }

  minuteBetweenVal1Change() {
    this.jobtaskForm.get("minuteBetweenVal2").updateValueAndValidity();
  }

  hourBetweenVal1Change() {
    this.jobtaskForm.get("hourBetweenVal2").updateValueAndValidity();
  }

  dayBetweenVal1Change() {
    this.jobtaskForm.get("dayBetweenVal2").updateValueAndValidity();
  }

  monthBetweenVal1Change() {
    this.jobtaskForm.get("monthBetweenVal2").updateValueAndValidity();
  }

  weekBetweenVal1Change() {
    this.jobtaskForm.get("weekBetweenVal2").updateValueAndValidity();
  }

//判断执行一次的时间是否满足要求，即大于现在的时间加上一分钟
  validateOneTimeExecDateAndTime() {
    //执行一次的时间
    let tmp = new Date();

    let date = this.jobtaskForm.get('oneTimeExecDate').value as Date;
    let time = this.jobtaskForm.get('oneTimeExecTime').value as Date;
    tmp.setFullYear(date.getFullYear());
    tmp.setMonth(date.getMonth());
    tmp.setDate(date.getDate());
    tmp.setHours(time.getHours());
    tmp.setMinutes(time.getMinutes());
    tmp.setSeconds(time.getSeconds());

    //现在的时间加上一分钟的时间
    let now = new Date();
    now.setMinutes(now.getMinutes() + 1);

    if (tmp.getTime() < now.getTime()) {
      this.msgSrv.error('任务真正执行的时间不能小于当前时间，提交失败');
      return false;
    }


    return true;

  }

//判断结束时间和开始时间是否满足要求，结束时间不能小于开始时间
  validateStartTimeAndEndTime() {
    let date = this.jobtaskForm.get('startDate').value as Date;
    let time = this.jobtaskForm.get('startTime').value as Date;
    let start = new Date();
    start.setFullYear(date.getFullYear());
    start.setMonth(date.getMonth());
    start.setDate(date.getDate());
    start.setHours(time.getHours());
    start.setMinutes(time.getMinutes());
    start.setSeconds(time.getSeconds());

    //结束时间
    let end: Date = null;
    end = new Date();
    date = this.jobtaskForm.get('endDate').value as Date;
    time = this.jobtaskForm.get('endTime').value as Date;
    end.setFullYear(date.getFullYear());
    end.setMonth(date.getMonth());
    end.setDate(date.getDate());
    end.setHours(time.getHours());
    end.setMinutes(time.getMinutes());
    end.setSeconds(time.getSeconds());

    if (start.getTime() >= end.getTime()) {
      this.msgSrv.error('任务开始时间不能大于结束时间，提交失败');
      return false;
    }

    return true;
  }

//验证选了checkbox是否有选择了值
  validateCheckboxHasValue() {

    if (this.jobtaskForm.get('secondTypeSel').value == '4') {
      let flag = false;
      for (let i = 0; i < 6; i++) {
        let array = this.jobtaskForm.get('secondVals' + i).value;
        for (let j = 0; j < 10; j++) {
          if (array[j].checked == true) {
            flag = true;
            break;
          }
        }
        if (flag) {
          break;
        }
      }
      if (!flag) {
        this.msgSrv.error('你没有选择指定的秒钟，提交失败');
        return false;
      }
    }

    if (this.jobtaskForm.get('minuteTypeSel').value == '4') {
      let flag = false;
      for (let i = 0; i < 6; i++) {
        let array = this.jobtaskForm.get('minuteVals' + i).value;
        for (let j = 0; j < 10; j++) {
          if (array[j].checked == true) {
            flag = true;
            break;
          }
        }
        if (flag) {
          break;
        }
      }
      if (!flag) {
        this.msgSrv.error('你没有选择指定的分钟，提交失败');
        return false;
      }
    }

    if (this.jobtaskForm.get('hourTypeSel').value == '4') {
      let flag = false;
      for (let i = 0; i < 3; i++) {
        let array = this.jobtaskForm.get('hourVals' + i).value;
        for (let j = 0; j < 8; j++) {
          if (array[j].checked == true) {
            flag = true;
            break;
          }
        }
        if (flag) {
          break;
        }
      }
      if (!flag) {
        this.msgSrv.error('你没有选择指定的小时，提交失败');
        return false;
      }
    }


    if (this.jobtaskForm.get('dayTypeSel').value == '7') {
      let flag = false;
      for (let i = 0; i < 3; i++) {
        let array = this.jobtaskForm.get('dayVals' + i).value;
        if (i == 2) {
          for (let j = 0; j < 11; j++) {
            if (array[j].checked == true) {
              flag = true;
              break;
            }
          }
        } else {
          for (let j = 0; j < 10; j++) {
            if (array[j].checked == true) {
              flag = true;
              break;
            }
          }
        }
        if (flag) {
          break;
        }

      }
      if (!flag) {
        this.msgSrv.error('你没有选择指定的天，提交失败');
        return false;
      }
    }


    if (this.jobtaskForm.get('monthTypeSel').value == '4') {
      let flag = false;
      for (let i = 0; i < 6; i++) {
        if (this.jobtaskForm.get('monthVals1').value[i].checked == true) {
          flag = true;
          break;
        }
        if (this.jobtaskForm.get('monthVals2').value[i].checked == true) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        this.msgSrv.error('你没有选择指定的月份，提交失败');
        return false;
      }
    }

    if (this.jobtaskForm.get('weekTypeSel').value == '6') {
      let flag = false;
      for (let i = 0; i < 7; i++) {
        if (this.jobtaskForm.get('weekVals').value[i].checked == true) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        this.msgSrv.error('你没有选择指定的星期，提交失败');
        return false;
      }
    }
    return true;

  }

//生成form表单和cron表达式
  constructForm() {
    let form = new Object();
    let cronExpression = '';
    let triggerDescription = '';
    form['name'] = this.jobtaskForm.get('name').value;
    form['groupName'] = this.jobtaskForm.get('group').value;
    form['className'] = this.jobtaskForm.get('className').value;
    form['configSel'] = this.jobtaskForm.get('configSel').value;
    if (this.jobtaskForm.get('taskDescription').value != null) {
      form['taskDescription'] = this.jobtaskForm.get('taskDescription').value;
    }
    if (this.cronConfigDivShowFlag == true) {
      form['cronExpression'] = this.jobtaskForm.get('cronExpression').value;
      let date = this.jobtaskForm.get('startDate').value as Date;
      let time = this.jobtaskForm.get('startTime').value as Date;
      let start = new Date();
      start.setFullYear(date.getFullYear());
      start.setMonth(date.getMonth());
      start.setDate(date.getDate());
      start.setHours(time.getHours());
      start.setMinutes(time.getMinutes());
      start.setSeconds(time.getSeconds());
      form['startTime'] = start.getTime();
      form['hasEndTime'] = this.jobtaskForm.get('hasEndTime').value;
      //结束时间
      if (this.jobtaskForm.get('hasEndTime').value == true){
        let end: Date = null;
        end = new Date();
        date = this.jobtaskForm.get('endDate').value as Date;
        time = this.jobtaskForm.get('endTime').value as Date;
        end.setFullYear(date.getFullYear());
        end.setMonth(date.getMonth());
        end.setDate(date.getDate());
        end.setHours(time.getHours());
        end.setMinutes(time.getMinutes());
        end.setSeconds(time.getSeconds());
        form['endTime'] = end.getTime();
      }

      form['triggerDescription'] = this.jobtaskForm.get('triggerDescription').value;
    } else if (this.oneTimeExecConfigDivShowFlag == true) {
      let tmp = new Date();

      let date = this.jobtaskForm.get('oneTimeExecDate').value as Date;
      let time = this.jobtaskForm.get('oneTimeExecTime').value as Date;
      tmp.setFullYear(date.getFullYear());
      tmp.setMonth(date.getMonth());
      tmp.setDate(date.getDate());
      tmp.setHours(time.getHours());
      tmp.setMinutes(time.getMinutes());
      tmp.setSeconds(time.getSeconds());
      form['oneTimeExecTime'] = tmp.getTime();
      triggerDescription = '在' + tmp.toLocaleDateString() + '执行一次';
      form['triggerDescription'] = triggerDescription;
    } else {
      form['secondTypeSel'] = this.jobtaskForm.get('secondTypeSel').value;
      if (this.jobtaskForm.get('secondTypeSel').value == '1') {
        cronExpression += '*';
      }
      if (this.jobtaskForm.get('secondTypeSel').value == '2') {
        cronExpression += this.jobtaskForm.get('secondBetweenVal1').value + '-' + this.jobtaskForm.get('secondBetweenVal2').value;
      }
      if (this.jobtaskForm.get('secondTypeSel').value == '3') {
        cronExpression += this.jobtaskForm.get('secondStepVal1').value + '/' + this.jobtaskForm.get('secondStepVal2').value;
      }
      if (this.jobtaskForm.get('secondTypeSel').value == '4') {
        let tmp = [];
        tmp.pop();
        for (let i = 0; i < 6; i++) {
          let array = this.jobtaskForm.get('secondVals' + i).value;
          for (let j = 0; j < 10; j++) {
            tmp.push(array[j].checked);
            if (array[j].checked == true) {
              cronExpression += (i * 10 + j) + ',';
            }
          }
        }
        cronExpression = cronExpression.substring(0, cronExpression.length - 1);
      }
      cronExpression += ' ';
      form['minuteTypeSel'] = this.jobtaskForm.get('minuteTypeSel').value;
      if (this.jobtaskForm.get('minuteTypeSel').value == '1') {
        cronExpression += '*';
      }
      if (this.jobtaskForm.get('minuteTypeSel').value == '2') {
        cronExpression += this.jobtaskForm.get('minuteBetweenVal1').value + '-' + this.jobtaskForm.get('minuteBetweenVal2').value;
      }
      if (this.jobtaskForm.get('minuteTypeSel').value == '3') {
        cronExpression += this.jobtaskForm.get('minuteStepVal1').value + '/' + this.jobtaskForm.get('minuteStepVal2').value;
      }
      if (this.jobtaskForm.get('minuteTypeSel').value == '4') {
        let tmp = [];
        tmp.pop();
        for (let i = 0; i < 6; i++) {
          let array = this.jobtaskForm.get('minuteVals' + i).value;
          for (let j = 0; j < 10; j++) {
            tmp.push(array[j].checked);
            if (array[j].checked == true) {
              cronExpression += (i * 10 + j) + ',';
            }
          }
        }
        cronExpression = cronExpression.substring(0, cronExpression.length - 1);
      }
      //小时
      cronExpression += ' ';
      form['hourTypeSel'] = this.jobtaskForm.get('hourTypeSel').value;
      if (this.jobtaskForm.get('hourTypeSel').value == '1') {
        cronExpression += '*';
      }
      if (this.jobtaskForm.get('hourTypeSel').value == '2') {
        cronExpression += this.jobtaskForm.get('hourBetweenVal1').value + '-' + this.jobtaskForm.get('hourBetweenVal2').value;
      }
      if (this.jobtaskForm.get('hourTypeSel').value == '3') {
        cronExpression += this.jobtaskForm.get('hourStepVal1').value + '/' + this.jobtaskForm.get('hourStepVal2').value;
      }
      if (this.jobtaskForm.get('hourTypeSel').value == '4') {
        let tmp = [];
        tmp.pop();
        for (let i = 0; i < 3; i++) {
          let array = this.jobtaskForm.get('hourVals' + i).value;
          for (let j = 0; j < 8; j++) {
            tmp.push(array[j].checked);
            if (array[j].checked == true) {
              cronExpression += (i * 8 + j) + ',';
            }
          }
        }
        cronExpression = cronExpression.substring(0, cronExpression.length - 1);
      }
      //天
      cronExpression += ' ';
      form['dayTypeSel'] = this.jobtaskForm.get('dayTypeSel').value;
      if (this.jobtaskForm.get('dayTypeSel').value == '1') {
        cronExpression += '?';
      }
      if (this.jobtaskForm.get('dayTypeSel').value == '2') {
        cronExpression += '*';
      }
      if (this.jobtaskForm.get('dayTypeSel').value == '3') {
        cronExpression += this.jobtaskForm.get('dayBetweenVal1').value + '-' + this.jobtaskForm.get('dayBetweenVal2').value;
      }
      if (this.jobtaskForm.get('dayTypeSel').value == '4') {
        cronExpression += this.jobtaskForm.get('dayStepVal1').value + '/' + this.jobtaskForm.get('dayStepVal2').value;
      }
      if (this.jobtaskForm.get('dayTypeSel').value == '5') {
        cronExpression += this.jobtaskForm.get('dayWorkDayVal').value + 'W';
      }
      if (this.jobtaskForm.get('dayTypeSel').value == '6') {
        cronExpression += "L";
      }
      if (this.jobtaskForm.get('dayTypeSel').value == '7') {
        let tmp = [];
        tmp.pop();
        for (let i = 0; i < 3; i++) {
          let array = this.jobtaskForm.get('dayVals' + i).value;
          if (i == 2) {
            for (let j = 0; j < 11; j++) {
              tmp.push(array[j].checked);
              if (array[j].checked == true) {
                cronExpression += (i * 10 + j) + ',';
              }
            }
          } else {
            for (let j = 0; j < 10; j++) {
              tmp.push(array[j].checked);
              if (array[j].checked == true) {
                cronExpression += (i * 10 + j) + ',';
              }
            }
          }
        }
        cronExpression = cronExpression.substring(0, cronExpression.length - 1);
      }

      //月份
      cronExpression += ' ';
      form['monthTypeSel'] = this.jobtaskForm.get('monthTypeSel').value;
      if (this.jobtaskForm.get('monthTypeSel').value == '1') {
        cronExpression += '*';
      }
      if (this.jobtaskForm.get('monthTypeSel').value == '2') {
        cronExpression += this.jobtaskForm.get('monthBetweenVal1').value + '-' + this.jobtaskForm.get('monthBetweenVal2').value;
      }
      if (this.jobtaskForm.get('monthTypeSel').value == '3') {
        cronExpression += this.jobtaskForm.get('monthStepVal1').value + '-' + this.jobtaskForm.get('monthStepVal2').value;
      }
      if (this.jobtaskForm.get('dayTypeSel').value == '4') {
        let tmp = [];
        tmp.pop();
        for (let i = 0; i < 6; i++) {
          tmp.push(this.jobtaskForm.get('monthVals1').value[i].checked);
          if (this.jobtaskForm.get('monthVals1').value[i].checked == true) {
            cronExpression += (i + 1) + ',';
          }
        }
        for (let i = 0; i < 6; i++) {
          tmp.push(this.jobtaskForm.get('monthVals2').value[i].checked);
          if (this.jobtaskForm.get('monthVals1').value[i].checked == true) {
            cronExpression += (i + 7) + ',';
          }
        }
        cronExpression = cronExpression.substring(0, cronExpression.length - 1);
      }

      //星期
      cronExpression += ' ';
      form['weekTypeSel'] = this.jobtaskForm.get('weekTypeSel').value;
      if (this.jobtaskForm.get('weekTypeSel').value == '1') {
        cronExpression += '?';
      }
      if (this.jobtaskForm.get('weekTypeSel').value == '2') {
        cronExpression += '*';
      }
      if (this.jobtaskForm.get('weekTypeSel').value == '3') {
        cronExpression += this.jobtaskForm.get('weekBetweenVal1').value + '-' + this.jobtaskForm.get('weekBetweenVal2').value;
      }
      if (this.jobtaskForm.get('weekTypeSel').value == '4') {
        cronExpression += this.jobtaskForm.get('weekMonthVal2').value + '#' + this.jobtaskForm.get('weekMonthVal1').value;
      }
      if (this.jobtaskForm.get('weekTypeSel').value == '5') {
        cronExpression += this.jobtaskForm.get('weekMonthLastVal').value + 'L';
      }
      if (this.jobtaskForm.get('dayTypeSel').value == '4') {
        let tmp = [];
        tmp.pop();
        for (let i = 0; i < 7; i++) {
          tmp.push(this.jobtaskForm.get('weekVals').value[i].checked);
          if (this.jobtaskForm.get('weekVals').value[i].checked == true) {
            cronExpression += (i + 1) + ',';
          }
        }
        cronExpression = cronExpression.substring(0, cronExpression.length - 1);
      }

      let date = this.jobtaskForm.get('startDate').value as Date;
      let time = this.jobtaskForm.get('startTime').value as Date;
      let start = new Date();
      start.setFullYear(date.getFullYear());
      start.setMonth(date.getMonth());
      start.setDate(date.getDate());
      start.setHours(time.getHours());
      start.setMinutes(time.getMinutes());
      start.setSeconds(time.getSeconds());
      form['startTime'] = start.getTime();
      //结束时间
      form['hasEndTime'] = this.jobtaskForm.get('hasEndTime').value;
      if (this.jobtaskForm.get('hasEndTime').value == true) {
        let end: Date = null;
        end = new Date();
        date = this.jobtaskForm.get('endDate').value as Date;
        time = this.jobtaskForm.get('endTime').value as Date;
        end.setFullYear(date.getFullYear());
        end.setMonth(date.getMonth());
        end.setDate(date.getDate());
        end.setHours(time.getHours());
        end.setMinutes(time.getMinutes());
        end.setSeconds(time.getSeconds());
        form['endTime'] = end.getTime();
      }
      form['cronExpression'] = cronExpression;
      form['triggerDescription'] = '该任务的cron表达式为：' + cronExpression;
    }
    let dataKeys = [];
    let dataValues = [];
    dataKeys.pop();
    dataValues.pop();
    if (this.jobtaskForm.get('dataKey').value != null) {
      dataKeys.push(this.jobtaskForm.get('dataKey').value)
    }
    if (this.jobtaskForm.get('dataValue').value != null) {
      dataValues.push(this.jobtaskForm.get('dataValue').value)
    }
    for (let i = 0; i < this.dataKeys.length; i++) {
      dataKeys.push(this.jobtaskForm.get(this.dataKeys[i].name).value);
      dataValues.push(this.jobtaskForm.get(this.dataValues[i].name).value);
    }
    if (dataValues.length > 0) {
      form['dataKeys'] = dataKeys;
      form['dataValues'] = dataValues;
    }


    return form;

  }

  reset(e: MouseEvent) {
    if (e) {
      e.preventDefault();
    }

    this.cronConfigDivShowFlag = false;
    this.cronExpHelpItemShowFlag = false;
    this.oneTimeExecConfigDivShowFlag = false;
    this.commonConfigDivShowFlag = false;
    this.secondShowFlag2 = false;
    this.secondShowFlag3 = false;
    this.secondShowFlag4 = false;
    this.minuteShowFlag2 = false;
    this.minuteShowFlag3 = false;
    this.minuteShowFlag4 = false;
    this.hourShowFlag2 = false;
    this.hourShowFlag3 = false;
    this.hourShowFlag4 = false;
    this.dayShowFlag3 = false;
    this.dayShowFlag4 = false;
    this.dayShowFlag5 = false;
    this.dayShowFlag7 = false;
    this.monthShowFlag2 = false;
    this.monthShowFlag3 = false;
    this.monthShowFlag4 = false;
    this.weekShowFlag3 = false;
    this.weekShowFlag4 = false;
    this.weekShowFlag5 = false;
    this.weekShowFlag6 = false;
    this.triggerDescriptionShowFlag = false;
    this.endTimeShowFlag = false;
    for (const control in this.jobtaskForm.controls) {
      this.jobtaskForm.removeControl(control.valueOf());
    }
    this.jobtaskForm.addControl("name", new FormControl(null, [Validators.required]));
    this.jobtaskForm.addControl("group", new FormControl(null, [Validators.required]));
    this.jobtaskForm.addControl("className", new FormControl(null, [Validators.required]));
    this.jobtaskForm.addControl("taskDescription", new FormControl(null,));
    this.jobtaskForm.addControl("triggerDescription", new FormControl(null,));
    this.jobtaskForm.addControl("configSel", new FormControl(null, [Validators.required]));
    this.jobtaskForm.addControl("startTime", new FormControl(null, [Validators.required]));
    this.jobtaskForm.addControl("startDate", new FormControl(null, [Validators.required]));
    this.jobtaskForm.addControl("hasEndTime", new FormControl(null,));
    this.jobtaskForm.addControl("dataKey", new FormControl(null,));
    this.jobtaskForm.addControl("dataValue", new FormControl(null,));

  }

  submit() {

    for (const control in this.jobtaskForm.controls) {
      this.jobtaskForm.controls[control].markAsDirty();
      this.jobtaskForm.controls[control].updateValueAndValidity();
    }


    // if (this.commonConfigDivShowFlag == true){
    //   if (!this.validateCheckboxHasValue()){
    //     return;
    //   }
    // }

    // if ( !this.oneTimeExecConfigDivShowFlag && this.jobtaskForm.get('hasEndTime').value == true){
    //   if (!this.validateStartTimeAndEndTime()){
    //     return ;
    //   }
    // }

    // if (this.oneTimeExecConfigDivShowFlag == true){
    //   if (!this.validateOneTimeExecDateAndTime()){
    //     return;
    //   }
    // }

    // if (!this.jobtaskForm.valid){
    //   this.msgSrv.error("表单未填写完成，提交失败");
    //   return;
    // }

    console.log(this.jobtaskForm.value);
    if (this.record.id != null){
      //更新
      this.jobService.updateJob(this.record.id,this.constructForm() as JobtaskForm).subscribe(res => {
        if (res == true){
          this.msgSrv.success('更新成功');
        } else{
          this.msgSrv.error('更新失败');
        }
      });
    } else{
      //添加
      if (this.jobtaskForm.get('configSel').value == '1'){
        //执行一次的简单任务
        this.jobService.addSimpleJob(this.constructForm() as JobtaskForm).subscribe( res => {
          if (res == true){
            this.msgSrv.success('添加成功');
          } else{
            this.msgSrv.error('添加失败');
          }
        });
      } else{
        this.jobService.addCronJob(this.constructForm() as JobtaskForm).subscribe( res => {
          if (res == true){
            this.msgSrv.success('添加成功');
          } else{
            this.msgSrv.error('添加失败');
          }
        });
      }
    }

    this.modal.close(true);

  }
}
