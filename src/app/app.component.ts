import { Component, Input } from '@angular/core';
import { GaugeChartComponent } from './components/gauge-chart/gauge-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // 💀
  private data = JSON.parse(
    JSON.stringify( new GaugeChartComponent() )
  )
  @Input() current = this.data.current;
  @Input() max = this.data.max;
}
