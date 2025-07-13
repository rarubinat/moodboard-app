import { Component } from '@angular/core';

import { MoodboardComponent } from './components/moodboard/moodboard.component';
import { FormComponent } from './components/form/form.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MoodboardComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moodboard-app';
}
