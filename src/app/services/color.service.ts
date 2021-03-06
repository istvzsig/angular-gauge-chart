import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
  static colors = {
    flat: {
      primary: '#0e2d43',
      secondary: '#ffa600' || '#21c88c',
      background: '#eef1f31',
      white: '#ffffff',
    },
    shadows: {
      chartShadow: 'rgba(0,0,0,.33)',
    }
  }
}