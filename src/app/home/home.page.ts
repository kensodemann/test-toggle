import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  clicks = 0;

  constructor() {}

  toggle(evt: Event) {
    console.log(evt);
    evt.stopImmediatePropagation();
    this.clicks++;
  }
}
