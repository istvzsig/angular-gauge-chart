import { ColorService } from '../services/color.service';

const colors = ColorService.colors;

export const GaugeChartPlugin: any = {
  id: 'radialChartPlugin',
  beforeDraw(chart: any) {
    this.setShadow(chart);
    this.setText(chart, 47);
  },
  afterDatasetDraw(chart: any) {
    chart.ctx.save();

    // methods here

    chart.ctx.restore();
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

// export const RadialChartPlugin = {
//   id: 'radialChartPlugin',
//   afterDatasetDraw(chart: any) {
//     this.init(chart);
//     chart.ctx.save();
//     chart.ctx.textAlign = 'center';
//     chart.ctx.fillStyle = COLORS.primary;
//     chart.ctx.font = `700 ${47}px Montserrat`;
//     chart.ctx.fillText(
//       `${chart.data.datasets[0].data[1]}%`,
//       chart.width / 2,
//       chart._metasets[0].data[0].y
//     );
//     chart.ctx.fillStyle = COLORS.primary;
//     let cx = chart._metasets[0].data[0].x;
//     let cy = chart._metasets[0].data[0].y;
//     // chart.ctx.beginPath();
//     // chart.ctx.arc(cx, cy, 15, 0, Math.PI * 2);
//     // chart.ctx.fill();
//   },
//   afterUpdate(chart: any) {
//     chart.ctx.save();
//   },
//   init(chart: any) {
//     // chart.width = window.innerWidth;
//     // chart.id = document.getElementsByTagName('canvas').length
//     if (window.innerWidth < chart.width) {
//       chart.width = window.innerWidth;
//       // chart.height =
//     }
//   },
// };
