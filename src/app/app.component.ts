import { Component } from '@angular/core';
import * as data from './sample.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  products: any = (data as any).default;
}
