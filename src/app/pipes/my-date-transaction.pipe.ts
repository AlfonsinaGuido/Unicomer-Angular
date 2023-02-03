import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDateTransaction'
})
export class MyDateTransactionPipe implements PipeTransform {
  transform(value: string): string {
    let date = new Date(value);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    let formattedDate = date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    return formattedDate;
  }
}