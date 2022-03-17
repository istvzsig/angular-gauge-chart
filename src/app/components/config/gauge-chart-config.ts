import { ChartConfiguration } from "chart.js";
import { gaugeChartData } from "../data/gauge-chart-data";
import { RadialChartPlugin } from "../plugins/radial-chart-plugin";

export const gaugeChartConfiguration: ChartConfiguration = {
  type: 'doughnut',
  data: gaugeChartData,
  options: {
    scales: {}, // Reset scales and removes rotation if data have 'spacing'
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  },
  plugins: [RadialChartPlugin],
};