import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/moodboard-user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  @Input() userId?: string;
  user?: User;

  // ✅ Controla la visibilidad del modal
  isOpen = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (this.userId) {
      this.loadUser(this.userId);
    }
  }

  loadUser(id: string) {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.user = users.find(u => u.id === id);
      },
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
}
