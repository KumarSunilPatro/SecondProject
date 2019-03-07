import { Component, OnInit } from '@angular/core';
import {  Observable, interval, from } from 'rxjs';



@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
 obj=Observable.create(ele=>{
   ele.next("one");
   ele.next("two");
   ele.next("three");
 });
 
 arr=[1,2,3,4];
 obj2=from(this.arr);
 obj3=interval(2000);



}
