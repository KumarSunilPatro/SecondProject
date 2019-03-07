import { Component } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent  {
x=10;
y=20;
aParent;
bParent;
getA(data){
  this.aParent=data;
}
  getB(data){
    this.bParent=data;
  }
}
