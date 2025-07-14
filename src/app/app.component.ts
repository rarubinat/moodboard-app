import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

import { MoodboardComponent } from './components/moodboard/moodboard.component';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MoodboardComponent, FormComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
