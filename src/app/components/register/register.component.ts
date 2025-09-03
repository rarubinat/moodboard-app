import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRole, User } from '../../models/moodboard-user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

 @Output() userAdded = new EventEmitter<User>();

  newUser: User = {
    email: '',
    password: '',
    name: '',
    role: 'contributor',
  };

  roles: UserRole[] = ['contributor', 'owner', 'reviewer', 'maintainer'];

  showForm = false;
  isAnimating = false;

  openModal() {
    this.showForm = true;
    setTimeout(() => (this.isAnimating = true), 10);
  }

  closeModal() {
    this.isAnimating = false;
    setTimeout(() => (this.showForm = false), 300);
  }

  submitForm() {
    if (!this.newUser.email.trim() || !this.newUser.password?.trim()) return;

    // Emitimos el usuario al componente padre
    this.userAdded.emit({ ...this.newUser });

    // Limpiamos el formulario
    this.newUser = {
      email: '',
      password: '',
      name: '',
      role: 'contributor',
    };

    this.closeModal();
  }
}