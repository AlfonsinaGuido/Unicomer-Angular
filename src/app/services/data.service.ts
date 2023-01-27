import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://fakeapi-challengetechforb.onrender.com'

  constructor(private http: HttpClient) { }


  // getAll() {
  //   return this.http.get<Account[]>(`${this.url}/cuenta`);
  // }

  // getAccount(id: string) {
  //   return this.http.get<Account>(`${this.url}/cuenta/${id}`)
  // }

  // getAllHistory() {
  //   return this.http.get<History[]>(`${this.url}/transactions`);
  // }

  // getAllCards() {
  //   return this.http.get<Card[]>(`${this.url}/cards`);
  // }
  // getOneCard(id: string) {
  //   return this.http.get<Card>(`${this.url}/cards/${id}`)
  // }
}
