import { Injectable } from '@angular/core';

@Injectable()
export class TooltipService {
  private tooltipText =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsam dicta soluta doloremque tempora illum quod corrupti quia labore in.';
  div = document.createElement('div');
  showTooltip(e, val: any, parent) {
    this.div.id = 'tooltip';
    this.div.innerText = this.tooltipText;
    this.div.style.cssText = `
      position: absolute;
      color: white;
      width: 180px;
      background-color: #00000095;
      animation: '' 1000ms forwards;
      transition: 200ms ease;
      font-size: 14px;
      font-family: 'Montserrat', sans-serif;
      padding: 10px;
    `;
    this.div.style.top = `${e.clientY}px`;
    this.div.style.left = `${e.clientX}px`;
    this.div.classList.remove('hide');
    this.div.classList.add('show');
    document.body.append(this.div);
  }

  hideTooltip() {
    this.div.classList.remove('show');
    this.div.classList.add('hide');
    this.div.remove();
  }
}
