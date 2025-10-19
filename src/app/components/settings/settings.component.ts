import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/moodboard-user.model';
import { FormsModule } from '@angular/forms'; // para [(ngModel)]

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  user?: User;

  // ✅ Controla la visibilidad del modal
  isOpen = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // 🔹 Suscribirse al usuario actual
    this.authService.currentUser$.subscribe({
      next: (u) => (this.user = u || undefined),
      error: (err) => console.error('Error cargando usuario:', err),
    });
  }

  // ✅ Métodos para abrir/cerrar modal
  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  // 🔹 Método opcional para actualizar datos del usuario
  save() {
    if (!this.user) return;

    // Aquí llamarías a tu UserService para actualizar el usuario en moodboard_users
    // Ejemplo:
    // this.userService.updateUser(this.user).subscribe(...);
    console.log('Usuario actualizado:', this.user);
    this.closeModal();
  }
}
