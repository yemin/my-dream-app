import { Component } from '@angular/core';

@Component({
  selector: 'my-charts',
  template: `
    <my-barchart></my-barchart>
    <my-linechart></my-linechart>
  `
})
export class MyChartsComponent {
}