import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Location } from '@angular/common';
import {catchError} from "rxjs/operators";


@Component({
  templateUrl: 'edittemplate.component.html'
})
export class EdittemplateComponent implements OnInit{

  templateForm : FormGroup;
  public template:any;
  private id;

  constructor(private _http:HttpClient,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('templateId');

    this._http.get("http://localhost:8080/templates/"+this.id).subscribe(
      result=>{
        this.template=result;
        this.templateForm.patchValue({
            templateName:this.template.templateName,
            templateContent: this.template.templateContent,
            createdBy: this.template.createdBy,
          }
        )
      }
      ,error => console.log(error));

    this.templateForm=this.fb.group({
      templateName: [""],
      templateContent: [""],
      createdBy: [""],
    })
  }

  goBack(): void {
    this.location.back();
  }


  updateTemplate():any{
    const updatePayLoad={...this.template,...this.templateForm.value};
    return this._http.put<any>("http://localhost:8080/templates/"+this.id,updatePayLoad,
      {headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }

  deleteTemplate():any{
    return this._http.delete("http://localhost:8080/templates/"+this.id).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }


}
