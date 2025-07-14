import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoodboardComponent } from './components/moodboard/moodboard.component';
import { FormComponent } from './components/form/form.component';

// Definimos la estructura de un ítem del moodboard
interface MoodboardItem {
  type: 'image' | 'color' | 'quote' | 'link'; // Tipo de contenido del ítem
  content: string; // Contenido principal (URL, color, texto, etc.)
  title?: string; // Título opcional para citas o enlaces
}

@Component({
  selector: 'app-root',
  standalone: true,
  // Importamos módulos y componentes standalone usados en esta raíz
  imports: [CommonModule, FormComponent, MoodboardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Array que almacena los ítems añadidos al moodboard
  items: MoodboardItem[] = [];

  // Método que se ejecuta al recibir un ítem nuevo desde el formulario
  addItem(item: MoodboardItem) {
    this.items.push(item); // Añadimos el nuevo ítem al array
  }
}
