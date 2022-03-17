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
  savings: '#21c88c',
  background: '#eef1f31',
  white: '#ffffff',
  error: '#fe5020',
};

const DATA = {
  January: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
    saving: function() {
      return this.income - this.expenses;
    }
  },
  February: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
  },
  March: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
  },
  April: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
  },
  May: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
  },
  June: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
  },
  July: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
  },
  August: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
  },
  September: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
  },
  October: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
  },
  November: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
  },
  December: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
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

const OPACITY = '22';

function setDataset() {
  return [
    {
      xAxesID: 'income-bar',
      label: 'Income',
      data: [DATA['January'].income],
      backgroundColor: [COLORS.income + OPACITY],
      borderWidth: 2,
      borderColor: COLORS.income,
      barThickness: 20,
    },
    {
      label: 'Expenses',
      data: [DATA['January'].saving],
      backgroundColor: [COLORS.savings + OPACITY],
      borderWidth: 2,
      borderColor: COLORS.error,
      barThickness: 40,
    },
    {
      label: 'Savings',
      data: [DATA['January'].expenses],
      backgroundColor: [COLORS.error + OPACITY],
      borderWidth: 2,
      borderColor: COLORS.savings,
      barThickness: 60,
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
      enabled: false,
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
