import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRole, User } from '../../models/moodboard-user.model';

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

  submitRegister() {
    if (!this.newUser.email.trim() || !this.newUser.password?.trim()) return;
    this.userAdded.emit({ ...this.newUser });

    this.newUser = {
      email: '',
      password: '',
      name: '',
      role: 'contributor',
    };

    this.closeModal();
  }

  submitLogin() {
    if (!this.loginUser.email.trim() || !this.loginUser.password?.trim()) return;
    console.log('Login submit:', this.loginUser);
    // Aquí podrías llamar a un servicio de login real
    // Limpiar formulario de login
    this.loginUser = { email: '', password: '' };
    this.closeModal();
  }
}
