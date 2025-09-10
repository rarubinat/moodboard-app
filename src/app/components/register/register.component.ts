import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRole, User } from '../../models/moodboard-user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @Output() userAdded = new EventEmitter<User>();

  // ==========================
  // Formulario de registro
  // ==========================
  newUser: User = {
    email: '',
    password: '',
    name: '',
    role: 'contributor',
  };

  // ==========================
  // Formulario de login
  // ==========================
  loginUser: { email: string; password: string } = {
    email: '',
    password: '',
  };

  // Roles disponibles para registro
  roles: UserRole[] = ['contributor', 'owner', 'reviewer', 'maintainer'];

  // ==========================
  // Modal y animaciones
  // ==========================
  showForm = false;
  isAnimating = false;

  // Pestaña activa: 'register' o 'login'
  activeTab: 'register' | 'login' = 'register';

  constructor(private authService: AuthService) {}

  // ==========================
  // Abrir modal
  // ==========================
  openModal() {
    this.showForm = true;
    setTimeout(() => (this.isAnimating = true), 10);
  }

  // ==========================
  // Cerrar modal
  // ==========================
  closeModal() {
    this.isAnimating = false;
    setTimeout(() => (this.showForm = false), 300);
  }

  // ==========================
  // Cambiar pestaña
  // ==========================
  switchTab(tab: 'register' | 'login') {
    this.activeTab = tab;
  }

  // ==========================
  // Registro de usuario
  // ==========================
  submitRegister() {
    // Validación simple
    if (!this.newUser.email.trim() || !this.newUser.password?.trim()) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    this.authService.register(this.newUser).subscribe({
      next: (user) => {
        // Emitimos el usuario al padre
        alert(`✅ Registro exitoso. Bienvenido ${user.name || user.email}`);
        this.userAdded.emit(user);

        // Limpiamos formulario
        this.newUser = { email: '', password: '', name: '', role: 'contributor' };

        // Cerramos modal
        this.closeModal();
      },
      error: (err) => {
        console.error('Error en registro:', err);
        alert(err.error?.error || '❌ Error al registrar usuario.');
      },
    });
  }

  // ==========================
  // Login de usuario
  // ==========================
  submitLogin() {
    // Validación simple
    if (!this.loginUser.email.trim() || !this.loginUser.password?.trim()) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    this.authService.login(this.loginUser.email, this.loginUser.password).subscribe({
      next: (user) => {
        // 🔹 Login exitoso
        alert(`✅ Bienvenido ${user.name || user.email}`);
        console.log('Login exitoso:', user);

        // Limpiamos formulario
        this.loginUser = { email: '', password: '' };

        // Cerramos modal
        this.closeModal();

        // 🔹 El header se actualiza automáticamente porque AuthService actualiza currentUser$
        //   En app.component.html se está usando: {{ currentUser$ | async as user }}
      },
      error: (err) => {
        console.error('Error en login:', err);

        // Mostramos mensaje de error
        alert(err.error?.error || '❌ Email o contraseña incorrectos.');
      },
    });
  }
}
