import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';

import { MoodboardComponent } from './components/moodboard/moodboard.component';
import { FormComponent } from './components/form/form.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MoodboardItem } from './models/moodboard-item.model';
import { MoodboardService } from './services/moodboard.service';
import { AuthService } from './services/auth.service';
import { User } from './models/moodboard-user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormComponent,
    MoodboardComponent,
    RegisterComponent,
    SettingsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  items: MoodboardItem[] = [];
  darkMode = false;
  loading = true;

  // Observable del usuario logueado
  currentUser$ = this.auth.currentUser$;

  // Observable solo con el ID del usuario (opcional)
  currentUserId$ = this.auth.currentUser$.pipe(map(user => user?.id || ''));

  constructor(
    private moodboardService: MoodboardService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loadMoodboardItems();
  }

  // 🔹 Carga los items del moodboard
  private loadMoodboardItems() {
    this.moodboardService.getItems().subscribe({
      next: data => {
        this.items = data;
        this.loading = false;
      },
      error: err => {
        console.error('Error al cargar items:', err);
        this.loading = false;
      },
    });
  }

  // 🔹 Agrega un nuevo item al moodboard
  addItem(item: MoodboardItem) {
    this.moodboardService.addItem(item).subscribe(savedItem => {
      this.items = [...this.items, savedItem];
    });
  }

  // 🔹 Alterna modo oscuro
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }

  // 🔹 Solo log de usuario registrado (opcional)
  handleUserAdded(user: User) {
    console.log('Usuario registrado:', user);
  }

  // 🔹 Logout del usuario actual
  logout() {
    this.auth.logout();
  }
}
