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
  savings: 'lightgreen',
  background: '#eef1f31',
  white: '#ffffff',
  error: '#fe5020',
};

const DATA = {
  January: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
    get savings() {
      return this.income - this.expenses;
    }
  },
  February: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
    get savings() {
      let saved = this.income - this.expenses;
      return saved >= 0 ? saved : 0; 
    }
  },
  March: {
    income: (Math.random() * 1000) | 0,
    expenses: (Math.random() * 1000) | 0,
    get savings() {
      return this.income - this.expenses;
    }
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

function setDataset() {
  return [
    {
      label: 'Income',
      data: [DATA['January'].income],
      backgroundColor: [COLORS.income + ColorService.opacity],
      borderWidth: 2,
      borderColor: COLORS.income,
      barThickness: 20,
    },
    {
      label: 'Savings',
      data: [DATA['January'].expenses],
      backgroundColor: [],
      borderWidth: 2,
      borderColor: COLORS.savings,
      barThickness: 60,
    },
    {
      label: 'Expenses',
      data: [DATA['January'].savings],
      backgroundColor: [COLORS.savings + ColorService.opacity],
      borderWidth: 2,
      borderColor: COLORS.error,
      barThickness: 40,
    },
    // // february
    // {
    //   label: 'Income',
    //   data: [DATA['February'].income],
    //   backgroundColor: [COLORS.income + ColorService.opacity],
    //   borderWidth: 2,
    //   borderColor: COLORS.income,
    //   barThickness: 20,
    // },
    // {
    //   label: 'Savings',
    //   data: [DATA['February'].expenses],
    //   backgroundColor: [],
    //   borderWidth: 2,
    //   borderColor: COLORS.savings,
    //   barThickness: 60,
    // },
    // {
    //   label: 'Expenses',
    //   data: [DATA['February'].savings],
    //   backgroundColor: [COLORS.savings + ColorService.opacity],
    //   borderWidth: 2,
    //   borderColor: COLORS.error,
    //   barThickness: 40,
    // },
    // // March
    // {
    //   label: 'Income',
    //   data: [DATA['March'].income],
    //   backgroundColor: [COLORS.income + ColorService.opacity],
    //   borderWidth: 2,
    //   borderColor: COLORS.income,
    //   barThickness: 20,
    // },
    // {
    //   label: 'Savings',
    //   data: [DATA['March'].expenses],
    //   backgroundColor: [],
    //   borderWidth: 2,
    //   borderColor: COLORS.savings,
    //   barThickness: 60,
    // },
    // {
    //   label: 'Expenses',
    //   data: [DATA['March'].savings],
    //   backgroundColor: [COLORS.savings + ColorService.opacity],
    //   borderWidth: 2,
    //   borderColor: COLORS.error,
    //   barThickness: 40,
    // },
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
