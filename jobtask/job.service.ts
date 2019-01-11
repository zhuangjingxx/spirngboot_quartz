import { Injectable } from '@angular/core';
import {_HttpClient} from "@delon/theme";
import {JobtaskForm} from "./jobtask";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private http: _HttpClient,
  ) { }

  addSimpleJob (jobtask: JobtaskForm) {
    return this.http.post('qrtzJobandtrigger/addSimpleJob', jobtask);
  }

  addCronJob (jobtask: JobtaskForm){
    return this.http.post('qrtzJobandtrigger/addCronJob', jobtask);
  }

  deleteJobByid (id){
    return this.http.delete(`qrtzJobandtrigger/${id}`);
  }

  updateJob (id, jobtask:JobtaskForm){
    return this.http.put(`qrtzJobandtrigger/${id}`,jobtask);
  }

  findJobPageList (){
    return this.http.get('qrtzJobandtrigger/jobTaskPageList');
  }

  findJobById (id: any){
    return this.http.get(`qrtzJobandtrigger/${id}`);
  }

  findJobTaskModelByJobKey (jobKey){
    return this.http.get('qrtzJobandtrigger/findJobTaskModelByJobKey', jobKey);
  }
}
