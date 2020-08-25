import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Location } from '@angular/common';
import { of } from 'rxjs';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  templateUrl: 'addcustomfieldgroup.component.html'
})
export class AddcustomfieldgroupComponent implements OnInit{
  public allTemplates:any;
  customFieldGroupForm:FormGroup;
  public customfieldgroup:any;
  type=[];
  public userFile:any= File;

  constructor(private _http:HttpClient,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this._http.get("http://localhost:8080/templates/all").subscribe(
      result=>this.allTemplates=result,
      error => console.log(error));

  this.customFieldGroupForm=this.fb.group({
      groupName: [""],
      templates_TemplateId: [""],
  })
  }

  changeValue(event) {
    const newVal=event.target.value;
    this.customFieldGroupForm.patchValue({templates_TemplateId:newVal});
    // this.customfieldgroup.templateId=newVal;
    // console.log(newVal);
  }

  goBack(): void {
    this.location.back();
  }

  addCustomField(page:any):any{
    const addCustomFieldPayLoad={...this.customFieldGroupForm.value};
    return this._http.post<any>("http://localhost:8080/customfieldsgroup/addcustomfieldsgroup",addCustomFieldPayLoad,
      {headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }

  onUpload(submitForm: FormGroup) {

    const user = submitForm.value;

    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('file', this.userFile);

    this._http.post('http://localhost:8080/customfields/upload/', formData)
      .subscribe((response) => {
        console.log(response);
      });
  }




}



