import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Location } from '@angular/common';
import { of } from 'rxjs';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  templateUrl: 'addcustomfield.component.html'
})
export class AddcustomfieldComponent implements OnInit{
  customFieldForm:FormGroup;
  public customfieldgroup:any;
  type=[];
  public userFile:any= File;
  public id;
  public selectedOption:string;

  constructor(private _http:HttpClient,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('groupId');

    // this._http.get("http://localhost:8080/customfieldsgroup/"+this.id).subscribe(
    //   result=>{
    //     this.customfieldgroup=result;
    //     this.customFieldForm.patchValue({
    //         groupId: this.customfieldgroup.groupId,
    //       }
    //     )
    //   }
    //   ,error => console.log(error));

  this.customFieldForm=this.fb.group({
      type: [""],
      customTemplate: [""],
      name:[""],
      groupId:[""],
      label: [""],
  })

    // async orders
    of(this.getTypes()).subscribe(type => {
      this.type = type;

    });

  }


  // types= [
  //     { id: 'Title', name: 'Title' },
  //     { id: 'Text', name: 'Text' },
  //     { id: 'Image', name: 'Image' }
  //   ];


  getTypes() {
    return [
      { id: 'Title', name: 'Title' },
      { id: 'Text', name: 'Text' },
      { id: 'Image', name: 'Image' }
    ];
  }

  goBack(): void {
    this.location.back();
  }

  onFileSelected(event) {
    const file= event.target.files[0];
    this.userFile=file;
    console.log(file);

  }

  addCustomField(submitForm: FormGroup):any{
    const user=submitForm.value;

    const formData=new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('file', this.userFile);

    this._http.post('http://localhost:8080/customfields/upload/', formData)
    .subscribe(
    result=>this.goBack(),
  error => console.log(error));

  }

  addCF(page:any):any{
    const addCustomFieldPayLoad={...this.customFieldForm.value};
    return this._http.post<any>("http://localhost:8080/customfields/addcustomfields",addCustomFieldPayLoad,
      {headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }

}



