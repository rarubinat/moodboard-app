import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoodboardComponent } from './components/moodboard/moodboard.component';
import { FormComponent } from './components/form/form.component';
import { MoodboardItem } from './models/moodboard-item.model';

import { MoodboardService } from './services/moodboard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormComponent, MoodboardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  items: MoodboardItem[] = [];

  // 🌙 Modo oscuro activado o no
  darkMode = false;

  constructor(private moodboardService: MoodboardService) {}

  ngOnInit(): void {
    this.moodboardService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

  addItem(item: MoodboardItem) {
    this.moodboardService.addItem(item).subscribe((savedItem) => {
      this.items = [...this.items, savedItem];
    });
  }

  // 🔁 Método para alternar el modo oscuro
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }
}
