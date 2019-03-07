import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureipe',
  pure:true
})
export class PureipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort(function f1(a,b){
      return b-a;
    });
  }

}
