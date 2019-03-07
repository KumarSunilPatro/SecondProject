import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurepipe',
  pure:false
})
export class ImpurepipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort(function f1(a,b) {return b-a; } )
  }

}
