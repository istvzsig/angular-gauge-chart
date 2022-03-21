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
    const canvas = document.getElementById('gaugeChart') as HTMLCanvasElement;
    super(canvas,config);
    this.draw();

  }
}
