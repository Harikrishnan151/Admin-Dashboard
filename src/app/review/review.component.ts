import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor(){

    this.chartOptions={
      chart: {
        type: 'column'
    },
    title: {
        text: 'Company Products with highest rating per 2023'
    },
    
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'User Ratings'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>'
    },
    credits:{
      enabled:false
    },
    series: [{
        name: 'Population',
        colors: [
            '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
            '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
            '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
            '#03c69b',  '#00f194'
        ],
        colorByPoint: true,
        groupPadding: 0,
        data: [
            ['APPLE', 37.33],
            ['SAMSUNG', 31.18],
            ['SONY', 27.79],
            ['LENOVA', 22.23],
            ['XIAOMI', 21.91],
            ['VIVO', 21.74],
            ['REALME', 21.32],
            ['MSI', 20.89],
            ['CANON', 20.67],
            ['LG', 19.11],
            ['ASUS', 16.45],
            ['DELL', 16.38],
            ['OPPO', 15.41],
            ['POCO', 15.25],
            ['GOOGLE PIXEL', 14.974],
            // ['', 14.970],
            // ['Lagos', 14.86],
            // ['Manila', 14.16],
            // ['Tianjin', 13.79],
            // ['Guangzhou', 13.64]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]

      

    }
  }

}
