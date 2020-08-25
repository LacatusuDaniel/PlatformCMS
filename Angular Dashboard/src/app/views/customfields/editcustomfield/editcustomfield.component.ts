import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Location } from '@angular/common';
import {of} from "rxjs";


@Component({
  templateUrl: 'editcustomfield.component.html'
})
export class EditcustomfieldComponent implements OnInit{

  public id;
  public allCustomFields:any;
  customFieldForm:FormGroup;
  public customfield:any;
  type=[];
  selectedFile: File;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;
  public userFile:any= File;

  constructor(private _http:HttpClient,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('customfieldId');


    this._http.get("http://localhost:8080/customfields/"+this.id).subscribe(
      result=>{
        this.customfield=result;
        this.customFieldForm.patchValue({
            type:this.customfield.type,
            customTemplate: this.customfield.customTemplate,
            label:this.customfield.label,
        }
        )
      }
        ,error => console.log(error));

    this.customFieldForm=this.fb.group({
      type: [""],
      customTemplate: [""],
      label: [""],
    })


    of(this.getTypes()).subscribe(type => {
      this.type = type;
      // this.customFieldForm.controls.orders.patchValue(this.type[0].id);
    });

  }

  goBack(): void {
    this.location.back();
  }



  getTypes() {
    return [
      { id: 'Title', name: 'Title' },
      { id: 'Text', name: 'Text' },
      { id: 'Image', name: 'Image' }
    ];
  }


  deleteCF():any{
    return this._http.delete("http://localhost:8080/customfields/"+this.id).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }

  updateCustomField(submitForm: FormGroup):any{
    // const user=submitForm.value;
    //
    // const formData=new FormData();
    // formData.append('user', JSON.stringify(user));
    // formData.append('file', this.userFile);
    //
    // this._http.post('http://localhost:8080/customfields/upload/', formData)
    //   .subscribe(
    //     result=>this.goBack(),
    //     error => console.log(error));

    const updatePayLoad={...this.customfield,...this.customFieldForm.value};
    return this._http.put("http://localhost:8080/customfields/"+this.id,updatePayLoad,
      {headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }).subscribe(
      result=>this.goBack(),
      error => console.log(error));

  }


  onFileSelected(event) {
    const file= event.target.files[0];
    this.userFile=file;

  }


}



