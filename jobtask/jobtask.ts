import {Validators} from "@angular/forms";

export  class JobtaskForm {
  name: string;
  groupName: string;
  className: string;
  taskDescription: string;
  cronExpression: string;
  configSel: string;
  oneTimeExecTime: number;
  secondTypeSel: string;
  minuteTypeSel: string;
  hourTypeSel: string;
  dayTypeSel: string;
  monthTypeSel: string;
  weekTypeSel: string;
  triggerDescription: string;
  startTime: number;
  hasEndTime: boolean;
  endTime: number;
  dataKeys: string[];
  dataValues: string[];
}
