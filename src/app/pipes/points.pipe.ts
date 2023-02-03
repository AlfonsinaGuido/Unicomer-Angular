import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'points' // pipe personalizado para ocultar números en una tarjeta
})
export class PointsPipe implements PipeTransform {

  transform(value: string): string {
    return "⦁⦁⦁⦁ ⦁⦁⦁⦁ ⦁⦁⦁⦁ " + value.slice(15); // retorna el primer string más el valor omitiendo los primeros 15 caracteres.
  }
}
