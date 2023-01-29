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

    new Chart("barchart", {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Esta semana',
          data: [72, 55, 28, 38, 20, 80, 52],
          borderWidth: 1,
          backgroundColor: "#5D95BE",
          borderColor: "#5D95BE",
          borderRadius: 50,
        },
        {
          label: 'Semana pasada',
          data: [95, 42, 35, 48, 28, 65, 73],
          borderWidth: 1,
          backgroundColor: "#353A61",
          borderColor: "#353A61",
          borderRadius: 50,
        }]
      },

      options: {
        scales: {
          y: {
            max: 100,
            border: {
              display: false
            },
            beginAtZero: true,
            grid: {
              display: true
            },
            ticks: {
              display: true,
              stepSize: 20
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
            display: false,
            labels: {
              pointStyle: 'circle',
              usePointStyle: true
            },
            align: 'end'
          }
        }
      }
    });
  }
}