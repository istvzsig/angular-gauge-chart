import { ColorService } from '../services/color.service';

const colors = ColorService.colors;

export const GaugeChartPlugin: any = {
  id: 'radialChartPlugin',
  beforeDraw(chart: any) {
    this.setShadow(chart);
    this.setText(chart, 47);
  },
  afterDatasetDraw(chart: any) {
    // chart.ctx.save();
    // chart.ctx.restore();
  },
  setText(chart: any, fontSize) {
    chart.ctx.textAlign = 'center';
    chart.ctx.fillStyle = ColorService.colors.flat.primary;
    chart.ctx.font = `700 ${fontSize}px Montserrat`;
    chart.ctx.fillText(
      `${chart.data.datasets[0].data[0]}%`,
      chart.width / 2,
      chart._metasets[0].data[0].y
    );
  },
  setShadow(chart: any) {
    chart.ctx.shadowColor = ColorService.colors.shadows.chartShadow;
    chart.ctx.shadowBlur = 12;
    chart.ctx.shadowOffsetX = 0;
    chart.ctx.shadowOffsetY = 5;
  },
};