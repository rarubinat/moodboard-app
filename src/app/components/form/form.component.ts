import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MoodboardItem {
  type: 'image' | 'color' | 'quote' | 'link';
  content: string;
  title?: string;
}


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  newItem: MoodboardItem = {
    type: 'image',
    content: '',
    title: '',
  };

  submitForm() {
    if (!this.newItem.content) return;

    console.log('Nuevo ítem moodboard:', this.newItem);
    // Aquí puedes emitir el ítem o llamar a un servicio para guardarlo
    // Ejemplo: this.itemAdded.emit(this.newItem);

    // Resetear el formulario después de agregar
    this.newItem = { type: 'image', content: '', title: '' };
  }
}
