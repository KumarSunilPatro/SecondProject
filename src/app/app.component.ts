import { Component } from '@angular/core';
import {  FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  myFormBuilder;
  myForm;
  
  constructor() {
    this.myFormBuilder = new FormBuilder();
    this.generateForm();
  }

    generateForm() {
      this.myForm = this.myFormBuilder.group({
        name: ['sachin', [Validators.required, Validators.pattern]
        ],
        age: ['35',{
          validators: [Validators.required],
          updateOn: 'blur'
        }  ],
        address: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)] ]
      })
    }
    get name(): FormControl {
      return this.myForm.get('name') as FormControl;
    }
     get age(): FormControl {
      return this.myForm.get('age') as FormControl;
    }
    get address():FormControl{
      return this.myForm.get('address') as FormControl;
    }
    submitMyForm() {
      alert(`Name: ${this.myForm.value.name} Age: ${this.myForm.value.age} Address: ${this.myForm.value.address}`);
    }
  }
  

