import { ChartConfiguration } from "chart.js";
import { gaugeChartData } from "../data/gauge-chart-data";
import { GaugeChartPlugin } from "../plugins/gauge-chart-plugin";

export const gaugeChartConfiguration: ChartConfiguration = {
  type: 'doughnut',
  data: gaugeChartData,
  options: {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  },
  plugins: [GaugeChartPlugin],
};