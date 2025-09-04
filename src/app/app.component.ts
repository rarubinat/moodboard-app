import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoodboardComponent } from './components/moodboard/moodboard.component';
import { FormComponent } from './components/form/form.component';
import { RegisterComponent } from './components/register/register.component';
import { MoodboardItem } from './models/moodboard-item.model';
import { User } from './models/moodboard-user.model';
import { MoodboardService } from './services/moodboard.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormComponent,
    MoodboardComponent,
    RegisterComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  items: MoodboardItem[] = [];
  darkMode = false;

  constructor(
    private moodboardService: MoodboardService,
    private userService: UserService // añadido
  ) {}

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

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }

  // 🔹 Nuevo método para manejar usuario registrado
  handleUserAdded(user: User) {
    console.log('Usuario registrado:', user);

    this.userService.register(user).subscribe({
      next: (savedUser) => console.log('Usuario guardado en backend:', savedUser),
      error: (err) => console.error('Error al registrar usuario:', err),
    });
  }
}
