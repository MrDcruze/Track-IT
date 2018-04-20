import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   title = 'Track IT';
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 17.3850;
  lng: number = 78.4867;





  }

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
