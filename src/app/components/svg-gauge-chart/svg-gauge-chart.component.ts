import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'svg-gauge-chart',
  templateUrl: './svg-gauge-chart.component.html',
  styleUrls: ['./svg-gauge-chart.component.css']
})
export class SvgGaugeChartComponent implements OnInit {

  @Input() current: any;

  ngOnInit(): void {
  }

}
