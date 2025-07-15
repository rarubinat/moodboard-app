import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoodboardComponent } from './components/moodboard/moodboard.component';
import { FormComponent } from './components/form/form.component';
import { MoodboardItem } from './models/moodboard-item.model'; // ruta según tu estructura

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormComponent, MoodboardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  items: MoodboardItem[] = [];

  addItem(item: MoodboardItem) {
    this.items = [...this.items, item];
  }
}
