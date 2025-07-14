import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definimos la forma que tendrá cada ítem del moodboard
interface MoodboardItem {
  type: 'image' | 'color' | 'quote' | 'link'; // tipos posibles
  content: string; // contenido del ítem
  title?: string;  // título opcional
}

@Component({
  selector: 'app-form', // nombre del componente para usar en el HTML como <app-form>
  standalone: true, // este componente no depende de un módulo externo
  imports: [CommonModule, FormsModule], // módulos necesarios para usar directivas como ngModel
  templateUrl: './form.component.html', // HTML del formulario
})
export class FormComponent {
  // Output que emite un nuevo ítem al componente padre (como AppComponent)
  @Output() itemAdded = new EventEmitter<MoodboardItem>();

  // Este objeto almacena los datos que el usuario rellena en el formulario
  newItem: MoodboardItem = {
    type: 'image',
    content: '',
    title: '',
  };

  // Se llama al enviar el formulario
  submitForm() {
    // Si el contenido está vacío, no se hace nada
    if (!this.newItem.content.trim()) return;

    // Emitimos el nuevo ítem al componente padre
    this.itemAdded.emit({ ...this.newItem });

    // Reiniciamos el formulario con valores por defecto
    this.newItem = { type: 'image', content: '', title: '' };
  }
}
