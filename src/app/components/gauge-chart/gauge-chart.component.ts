import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { gaugeChartConfiguration } from '../config/gauge-chart-config';
import * as DATA from '../data/gauge-chart-data';

@Component({
  selector: 'gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css'],
})
export class GaugeChartComponent implements AfterViewInit {
  @Input() max = DATA.MAX;
  @Input() current = DATA.CURRENT;

  ngAfterViewInit(): void {
    new CustomGaugeChart(gaugeChartConfiguration);
  }
}

class CustomGaugeChart extends Chart {
  constructor(config) {
    super(document.getElementById('gaugeChart') as HTMLCanvasElement, config);
    this.draw();
    console.log(this['_metasets'][0]);
  }
}
