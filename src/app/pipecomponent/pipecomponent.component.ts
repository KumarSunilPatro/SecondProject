import { Component } from '@angular/core';

@Component({
  selector: 'app-pipecomponent',
  templateUrl: './pipecomponent.component.html',
  styleUrls: ['./pipecomponent.component.css']
})
export class PipecomponentComponent {

 newDigit:number;
 original:number[]=[2,3,4,1,5,7,8]
 purepipe:number[]=[2,3,4,1,5,7,8]
 impurepipe:number[]=[2,3,4,1,5,7,8]
 addnewdigit(newDigit){
   this.original.push(newDigit)
   this.purepipe.push(newDigit)
   this.impurepipe.push(newDigit)
 }


}
