import { Component, OnInit } from '@angular/core';
import { DetailInterface } from 'src/app/models/detail-interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: DetailInterface[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllDetail().subscribe(
      data => {
        this.detail = data;
      }
    )
  }

}