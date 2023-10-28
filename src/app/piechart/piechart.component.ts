import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor(){

    this.chartOptions={

      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Smartphone shipment market share , Q1 2023',
        align: 'center'
    },
    credits:{
      enabled:false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Apple',
            y: 40.67,
            sliced: true,
            selected: true
        }, {
            name: 'Samsung',
            y: 14.77
        },  {
            name: 'Pixel',
            y: 4.86
        }, {
            name: 'Real Me',
            y: 7.63
        }, {
            name: 'Xiamoi',
            y: 10.53
        },  {
            name: 'Oppo',
            y: 6.40
        }, {
            name: 'Vivo',
            y: 4.84
        }, {
            name: 'Oneplus',
            y: 5.51
        }, {
            name: 'Other',
            y: 2.6
        }]
    }]

    }
  }

}
