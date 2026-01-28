import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pVideojuego'
})
export class PVideojuegoPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
