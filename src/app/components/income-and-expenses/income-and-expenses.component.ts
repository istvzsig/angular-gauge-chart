import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { TooltipService } from '../../services/tooltip.service';
import { MonthlyBreakdownChartComponent } from '../monthly-breakdown-chart/monthly-breakdown-chart.component';

@Component({
  selector: 'income-and-expenses',
  templateUrl: './income-and-expenses.component.html',
  styleUrls: ['./income-and-expenses.component.css'],
})
export class IncomeAndExpensesComponent implements AfterViewInit {
  @ViewChild('question_mark') question_mark: ElementRef;
  @Input() g = new MonthlyBreakdownChartComponent();
  salary = this.g;
  otherIncome = 8888;
  expenses = 3420;
  ts = new TooltipService();
  ngAfterViewInit(): void {
    // this.question_mark.nativeElement.addEventListener('mouseover', (eve) => {
    //   this.ts.showTooltip(eve, this.expenses, this.question_mark);
    // });
    // this.question_mark.nativeElement.addEventListener('mouseleave', (eve) => {
    //   this.ts.hideTooltip();
    // });
  }
  onHover($event) {
    // $event.target.style.tarsform = 'scale(1.2)';
    console.log($event)
  }
}
