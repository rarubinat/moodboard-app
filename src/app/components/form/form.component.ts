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
    status: 'available', // ✅ nuevo campo
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

  statuses: MoodboardItem['status'][] = [ // (opcional si lo usas en el template)
    'available',
    'in_progress',
    'completed',
    'pending',
    'error',
    'archived',
  ];

  showForm = false;
  isAnimating = false;

  openDrawer() {
    this.showForm = true;
    setTimeout(() => {
      this.isAnimating = true;
    }, 10);
  }

  closeDrawer() {
    this.isAnimating = false;
    setTimeout(() => {
      this.showForm = false;
    }, 300);
  }

  submitForm() {
    if (!this.newItem.content.trim()) return;
    this.itemAdded.emit({ ...this.newItem });

    // ✅ Reinicia también el status al valor por defecto
    this.newItem = {
      type: 'image',
      content: '',
      title: '',
      status: 'available',
    };

    this.closeDrawer();
  }
}
