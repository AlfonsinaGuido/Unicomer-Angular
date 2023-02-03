import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Chart, registerables } from 'node_modules/chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  card = {
    saldo: 0,
    numero: "",
    titular: "",
    vencimiento: "",
    ingreso: 0,
    egreso: 0,
    sube: "",
    baja: ""
  }
 
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getOneCard(1).subscribe(
      data => {
        this.card = data;
      }
    );
    this.renderChartCard2();
    this.renderChartCard3();
  };

  renderChartCard2() {

    new Chart("lineChartIngresos", {
      type: 'line',
      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [{
          label: 'Income',
          data: [18, 8, 22, 12, 16, 26, 10],
          borderWidth: 3,
          backgroundColor: 'rgba(53,58,97,0.2)',
          borderColor: 'rgba(53,58,97,1)',
          pointRadius: 0,
          fill: true,
          tension: 0.5,
        }]
      },

      options: {
        scales: {
          y: {
            max: 40,
            border: {
              display: false
            },
            beginAtZero: true,
            grid: {
              display: false
            },
            ticks: {
              display: false
            }
          },
          x: {
            border: {
              display: false
            },
            beginAtZero: true,
            grid: {
              display: false
            }
          },
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  renderChartCard3() {

    new Chart("lineChartEgresos", {
      type: 'line',
      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [{
          label: 'Withdeawls',
          data: [12, 24, 14, 20, 11, 7, 13],
          borderWidth: 3,
          backgroundColor: 'rgba(93,149,190,0.2)',
          borderColor: 'rgba(93,149,190,1)',
          pointRadius: 0,
          fill: true,
          tension: 0.5,
        }]
      },

      options: {
        scales: {
          y: {
            max: 40,
            border: {
              display: false
            },
            beginAtZero: true,
            grid: {
              display: false
            },
            ticks: {
              display: false
            }
          },
          x: {
            border: {
              display: false
            },
            beginAtZero: true,
            grid: {
              display: false
            }
          },
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}