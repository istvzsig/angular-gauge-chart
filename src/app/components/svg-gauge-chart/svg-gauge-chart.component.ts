import { MAX } from './../data/gauge-chart-data';
import { Component, Input, OnInit } from '@angular/core';
import { CURRENT } from '../data/gauge-chart-data';
import { HtmlParser } from '@angular/compiler';
@Component({
  selector: 'svg-gauge-chart',
  templateUrl: './svg-gauge-chart.component.html',
  styleUrls: ['./svg-gauge-chart.component.css']
})
export class SvgGaugeChartComponent implements OnInit {
  @Input() current = CURRENT;
  @Input() max = MAX;

  ngOnInit(): void {
  }
}
