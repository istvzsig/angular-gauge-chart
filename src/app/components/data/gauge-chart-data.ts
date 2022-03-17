import { ColorService } from '../../services/color.service';
import { DataManagerService } from '../../services/data-manager.service';

export const MAX = DataManagerService.gaugeChart.MAX;
export const CURRENT = DataManagerService.gaugeChart.CURRENT;
export const COLORS = ColorService.colors.flat;

// TODO: fix rounded corner overlap
export const gaugeChartData = {
  datasets: [
    {
      data: [CURRENT, MAX - CURRENT],
      backgroundColor: [COLORS.secondary, COLORS.primary],
      borderColor: 'rgba(255,255,255,0)',
      cutout: '75%',
      circumference: 270,
      rotation: -135,
      borderRadius: 20,
      // spacing: -20,
      padding: [0, 0, 0, 0],
    },
  ],
};
