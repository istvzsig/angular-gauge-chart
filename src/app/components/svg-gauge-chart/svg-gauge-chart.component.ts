import { Component, Input, OnInit } from '@angular/core';
import { CURRENT } from '../data/gauge-chart-data';
@Component({
  selector: 'svg-gauge-chart',
  templateUrl: './svg-gauge-chart.component.html',
  styleUrls: ['./svg-gauge-chart.component.css']
})
export class SvgGaugeChartComponent implements OnInit {

  @Input() current = CURRENT;

  ngOnInit(): void {
  }

}
