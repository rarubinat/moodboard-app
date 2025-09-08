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

  // Formulario de registro
  newUser: User = {
    email: '',
    password: '',
    name: '',
    role: 'contributor',
  };

  // Formulario de login
  loginUser: { email: string; password: string } = {
    email: '',
    password: '',
  };

  roles: UserRole[] = ['contributor', 'owner', 'reviewer', 'maintainer'];

  showForm = false;
  isAnimating = false;

  // Control de pestañas
  activeTab: 'register' | 'login' = 'register';

  constructor(private authService: AuthService) {}

  openModal() {
    this.showForm = true;
    setTimeout(() => (this.isAnimating = true), 10);
  }

  closeModal() {
    this.isAnimating = false;
    setTimeout(() => (this.showForm = false), 300);
  }

  switchTab(tab: 'register' | 'login') {
    this.activeTab = tab;
  }

  // Registro usando AuthService
  submitRegister() {
    if (!this.newUser.email.trim() || !this.newUser.password?.trim()) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    this.authService.register(this.newUser).subscribe({
      next: (user) => {
        alert(`✅ Registro exitoso. Bienvenido ${user.name || user.email}`);
        this.userAdded.emit(user);
        this.newUser = { email: '', password: '', name: '', role: 'contributor' };
        this.closeModal();
      },
      error: (err) => {
        console.error('Error en registro:', err);
        alert(err.error?.error || '❌ Error al registrar usuario.');
      },
    });
  }

  // Login usando AuthService
  submitLogin() {
    if (!this.loginUser.email.trim() || !this.loginUser.password?.trim()) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    this.authService.login(this.loginUser.email, this.loginUser.password).subscribe({
      next: (user) => {
        alert(`✅ Bienvenido ${user.name || user.email}`);
        console.log('Login exitoso:', user);
        this.loginUser = { email: '', password: '' };
        this.closeModal();
      },
      error: (err) => {
        console.error('Error en login:', err);
        alert(err.error?.error || '❌ Email o contraseña incorrectos.');
      },
    });
  }
}
