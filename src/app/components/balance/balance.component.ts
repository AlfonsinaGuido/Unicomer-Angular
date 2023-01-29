import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChartBalance();
  };

  renderChartBalance() {

    new Chart("linechart", {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Income',
          data: [18, 8, 22, 12, 16, 26, 10],
          borderWidth: 1,
          backgroundColor: "blue",
          borderColor: "blue",
          pointRadius: 0,
          tension: 0.5,
        },
        {
          label: 'Withdeawls',
          data: [12, 24, 14, 20, 11, 7, 13],
          borderWidth: 1,
          backgroundColor: "orange",
          borderColor: "orange",
          pointRadius: 0,
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
              display: false,
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
              display: false,
            }
          },
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });
  }
}