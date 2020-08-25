import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Location } from '@angular/common';
import {TemplatesComponent} from "../../templates/templates.component";
import {of} from "rxjs";


@Component({
  templateUrl: 'editcustomfieldgroup.component.html'
})
export class EditcustomfieldgroupComponent implements OnInit{

  public allTemplates:any;
  customFieldGroupForm:FormGroup;
  public id;

  customFieldForm:FormGroup;
  public customfieldgroup:any;
  type=[];

  constructor(private _http:HttpClient,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('groupId');

    this._http.get("http://localhost:8080/templates/all").subscribe(
      result=>this.allTemplates=result,
      error => console.log(error));

    this._http.get("http://localhost:8080/customfieldsgroup/"+this.id).subscribe(
      result=>{
        this.customfieldgroup=result;
        this.customFieldGroupForm.patchValue({
            groupName:this.customfieldgroup.groupName,
            templates_TemplateId: this.customfieldgroup.templates_TemplateId,
        }
        )
      }
        ,error => console.log(error));



    this.customFieldGroupForm=this.fb.group({
      groupName: [""],
      templates_TemplateId: [""],
    })



  }

  goBack(): void {
    this.location.back();
  }

  changeValue(event) {
    const newVal=event.target.value;
    this.customFieldGroupForm.patchValue({templates_TemplateId:newVal});
    this.customfieldgroup.templates_TemplateId=newVal;
    // console.log(newVal);
  }


  updateCustomField():any{
    const updatePayLoad={...this.customfieldgroup,...this.customFieldGroupForm.value};
    return this._http.put("http://localhost:8080/customfieldsgroup/"+this.id,updatePayLoad,
      {headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }



}



