import { ColorService } from './../../services/color.service';
import {
  AfterViewInit,
  Component,
  ConstructorProvider,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Chart, { ChartConfiguration } from 'chart.js/auto';

const COLORS = {
  income: '#0e2d43',
  saving: '#00ddee',
  background: '#eef1f3',
  white: '#ffffff',
  error: '#fe5020',
  expense: '#ffa600',
};

const DATA = {
  January: {
    income: (Math.random() * 1000) | 0,
    expense: (Math.random() * 1000) | 0,
    get saving() {
      return this.income - this.expense;
    }
  },
  February: {
    income: (Math.random() * 1000) | 0,
    expense: (Math.random() * 1000) | 0,
    get saving() {
      let saved = this.income - this.expense;
      return saved >= 0 ? saved : 0; 
    }
  },
  March: {
    income: (Math.random() * 1000) | 0,
    expense: (Math.random() * 1000) | 0,
    get saving() {
      return this.income - this.expense;
    }
  },
  April: {
    income: (Math.random() * 1000) | 0,
    expense: (Math.random() * 1000) | 0,
  },
  May: {
    income: (Math.random() * 1000) | 0,
    expense: (Math.random() * 1000) | 0,
  },
  June: {
    income: (Math.random() * 1000) | 0,
    expense: (Math.random() * 1000) | 0,
  },
  July: {
    income: (Math.random() * 1000) | 0,
    expense: (Math.random() * 1000) | 0,
  },
  August: {
    income: (Math.random() * 1000) | 0,
    expense: (Math.random() * 1000) | 0,
  },
  September: {
    income: (Math.random() * 1000) | 0,
    expense: (Math.random() * 1000) | 0,
  },
  October: {
    income: (Math.random() * 1000) | 0,
    expense: (Math.random() * 1000) | 0,
  },
  November: {
    income: (Math.random() * 1000) | 0,
    expense: (Math.random() * 1000) | 0,
  },
  December: {
    income: (Math.random() * 1000) | 0,
    expense: (Math.random() * 1000) | 0,
  },
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function setDataset() {
  return [
    {
      label: 'Income',
      data: [DATA['January'].income],
      backgroundColor: [COLORS.income + ColorService.opacity],
      borderWidth: 2,
      borderColor: [COLORS.income],
      barThickness: 33,
    },
    {
      label: 'Saving',
      data: [DATA['January'].saving],
      backgroundColor: [COLORS.saving + ColorService.opacity],
      borderWidth: 2,
      borderColor: COLORS.saving,
      barThickness: 33,
    },
    {
      label: 'Expense',
      data: [DATA['January'].expense],
      backgroundColor: [COLORS.expense + ColorService.opacity],
      borderWidth: 2,
      borderColor: COLORS.expense,
      barThickness: 33,
    },
  ];
}

const BarChartPlugin = {
  id: 'barChartPlugin',
  afterDatasetDraw(chart: any) {},
  afterUpdate(chart: any) {
    chart.ctx.save();
  },
};

const labelPlugin = {
  font: {
    size: 14,
    family: 'Montserrat',
    weight: 'bold',
  },
  color: COLORS.income,
}

const legendPlugin = {
  display: true,
  position: 'bottom',
  align: 'start',
  labels: labelPlugin,
  onHover: e => {
    
  }
}

const OPTIONS = {
  scales: {
    x: { stacked: true, },
    y: { beginAtZero: true, },
  },
  plugins: {
    legend: legendPlugin,
    labels: labelPlugin,
    tooltip: {
      enabled: true,
    }
  },
}

const monthlyBreakdownConfiguration: any = {
  type: 'bar',
  data: {
    labels: [...MONTHS],
    datasets: setDataset(),
  },
  options: OPTIONS,
  plugins: [BarChartPlugin],
};

@Component({
  selector: 'monthly-breakdown-chart',
  templateUrl: './monthly-breakdown-chart.component.html',
  styleUrls: ['./monthly-breakdown-chart.component.css'],
})
export class MonthlyBreakdownChartComponent implements AfterViewInit {
  @ViewChild('monthlyBreakdownChart')
  monthlyBreakdownChart!: ElementRef;
  ngAfterViewInit(): void {
    const ctx = this.monthlyBreakdownChart.nativeElement.getContext('2d');
    new Chart(ctx, monthlyBreakdownConfiguration);
  }
}
