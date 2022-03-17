import { Injectable } from '@angular/core';

@Injectable()
export class DataManagerService {
    static gaugeChart =  {
     MAX: 100,
     get CURRENT() {
         return this.MAX - (Math.random() * this.MAX | 0) || 0;
     },
    }
}