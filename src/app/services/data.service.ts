import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardInterface } from '../models/card-interface.model';
import { DetailInterface } from '../models/detail-interface';
import { MenuInterface } from '../models/menu-interface.model';
import { TransactionInterface } from '../models/transaction-interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://fakeapi-challengetechforb.onrender.com'

  constructor(private http: HttpClient) { }
  
  getAllMenu() {
    return this.http.get<MenuInterface[]>(`${this.url}/menu`);
  }
  
  getOneItemMenu(id: number) {
    return this.http.get<MenuInterface>(`${this.url}/menu/${id}`)
  }

  getAllCards() {
    return this.http.get<CardInterface[]>(`${this.url}/card`);
  }
  
  getOneCard(id: number) {
    return this.http.get<CardInterface>(`${this.url}/card/${id}`)
  }

  getAllTransactions() {
    return this.http.get<TransactionInterface[]>(`${this.url}/transaction`);
  }
  
  getOneTransaction(id: number) {
    return this.http.get<TransactionInterface>(`${this.url}/transaction/${id}`);
  }

  getAllDetail() {
    return this.http.get<DetailInterface[]>(`${this.url}/detail`);
  }

  getOneItemDetail(id: number) {
    return this.http.get<DetailInterface>(`${this.url}/detail/${id}`);
  }
  
}
