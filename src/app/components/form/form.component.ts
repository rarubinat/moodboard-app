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

  // Opciones para el select de tipos
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

  submitForm() {
    if (!this.newItem.content.trim()) return;
    this.itemAdded.emit({ ...this.newItem });
    this.newItem = { type: 'image', content: '', title: '' };
  }
}
