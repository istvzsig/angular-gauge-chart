import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GaugeChartComponent } from './components/gauge-chart/gauge-chart.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { IncomeAndExpensesComponent } from './components/income-and-expenses/income-and-expenses.component';
import { BreakdownsComponent } from './components/breakdowns/breakdowns.component';
import { TooltipService } from './services/tooltip.service';
import { MonthlyBreakdownChartComponent } from './components/monthly-breakdown-chart/monthly-breakdown-chart.component';
import { EndOfMonthBreakdownChartComponent } from './components/end-of-month-breakdown-chart/end-of-month-breakdown-chart.component';

const components = [
  AppComponent,
  GaugeChartComponent,
  HeaderComponent,
  AlertsComponent,
  IncomeAndExpensesComponent,
  BreakdownsComponent,
  MonthlyBreakdownChartComponent,
  EndOfMonthBreakdownChartComponent,
];

const services = [
  TooltipService,
]

@NgModule({
  declarations: [...components],
  imports: [BrowserModule],
  providers: [...services],
  bootstrap: [components[0]],
})
export class AppModule {}
