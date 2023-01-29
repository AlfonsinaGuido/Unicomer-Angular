import { Component, OnInit } from '@angular/core';
import { MenuInterface } from 'src/app/models/menu-interface.model'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  opciones: MenuInterface[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllMenu().subscribe(
      data => {
        this.opciones = data;
      }
    )
  }

}