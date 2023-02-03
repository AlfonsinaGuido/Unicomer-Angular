import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDateDetail' // falta implementar lógica para que la fecha aparezca con este formato pero con el mes en español
})
export class MyDateDetailPipe implements PipeTransform {
  transform(value: string): string {
    let date = new Date(value);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    let formattedDate = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    return formattedDate;
  }
}