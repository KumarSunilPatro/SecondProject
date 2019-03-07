import { Component, EventEmitter } from '@angular/core';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css'],
  inputs:['xChild','yChild'],
  outputs:['aEvent','bEvent']
})
export class ChildcomponentComponent  {

  a=30;
  b="sunil";
    
  aEvent=new EventEmitter();
  bEvent=new EventEmitter();
  sendata(){
    this.aEvent.emit(this.a);
    this.bEvent.emit(this.b);
  }
  


}
