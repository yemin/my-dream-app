import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { } from 'bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d';

@Component({
  selector: 'app-bing-map',
  templateUrl: './bing-map.component.html'
})
export class BingMapComponent implements AfterViewInit {
  @ViewChild('myMap') myMap; // using ViewChild to reference the div instead of setting an id
  public pageTitle: string = "Map";

  ngAfterViewInit() {  // after the view completes initializaion, create the map
    let map = new Microsoft.Maps.Map(this.myMap.nativeElement, {
      credentials: 'AuACwGkxRAiRAIqm6Vv4zMDM9yRRVN651b6eK4EFIbvKLRLLYQG9qyyS7we3BKTP'
    });
    let pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
    let layer = new Microsoft.Maps.Layer();
    layer.add(pushpin);
    map.layers.insert(layer);
  }
}
