import { Component, OnInit } from '@angular/core';
import { TransactionInterface } from 'src/app/models/transaction-interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactions: TransactionInterface[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllTransactions().subscribe(
      data => {
        this.transactions = data;
      }
    )
  }

}