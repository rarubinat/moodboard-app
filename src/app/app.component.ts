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
    SettingsComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  items: MoodboardItem[] = [];
  darkMode = false;
  loading = true;

  currentUser$ = this.auth.currentUser$; // usuario completo como observable
  currentUserId$ = this.auth.currentUser$.pipe(
    map(user => user?.id || '')
  ); // solo el ID para Settings

  constructor(
    private moodboardService: MoodboardService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.moodboardService.getItems().subscribe({
      next: (data) => {
        this.items = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar items:', err);
        this.loading = false;
      }
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

  handleUserAdded(user: User) {
    console.log('Usuario registrado:', user);
    this.auth.register(user).subscribe({
      next: (savedUser) => console.log('Usuario registrado y logueado:', savedUser),
      error: (err) => console.error('Error al registrar usuario:', err),
    });
  }

  logout() {
    this.auth.logout();
  }
}
