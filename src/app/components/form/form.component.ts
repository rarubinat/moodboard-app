import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// IMPORTA la interfaz desde el archivo compartido
import { MoodboardItem } from '../../models/moodboard-item.model'; // Ajusta la ruta según tu proyecto

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Output() itemAdded = new EventEmitter<MoodboardItem>();

  newItem: MoodboardItem = {
    type: 'image',
    content: '',
    title: '',
  };

  types: MoodboardItem['type'][] = [
    'image',
    'color',
    'quote',
    'link',
    'font',
    'component',
    'code',
    'tool',
    'video',
    'text',
  ];

  showForm = false;
  isAnimating = false; // controla animación

  openDrawer() {
    this.showForm = true;
    // Pequeño delay para que se renderice el drawer antes de iniciar animación
    setTimeout(() => {
      this.isAnimating = true;
    }, 10);
  }

  closeDrawer() {
    this.isAnimating = false;
    setTimeout(() => {
      this.showForm = false;
    }, 300); // duración de la animación en ms
  }

  submitForm() {
    if (!this.newItem.content.trim()) return;
    this.itemAdded.emit({ ...this.newItem });
    this.newItem = { type: 'image', content: '', title: '' };
    this.closeDrawer(); // cerrar con animación
  }
}
