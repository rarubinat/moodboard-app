// Importa el decorador Component y el decorador Input para recibir datos desde el componente padre
import { Component, Input } from '@angular/core';
// Importa funcionalidades comunes como *ngFor, *ngIf, etc.
import { CommonModule } from '@angular/common';

// Define la estructura que debe tener cada ítem del moodboard, ampliada con todos los tipos usados
interface MoodboardItem {
  type:
    | 'image'
    | 'color'
    | 'quote'
    | 'link'
    | 'font'
    | 'component'
    | 'code'
    | 'tool'
    | 'video'
    | 'text'; // Tipos posibles para el moodboard
  content: string; // Contenido principal (URL, texto, color, código, etc.)
  title?: string;  // Título opcional para contextualizar el contenido
}

// Define el componente Angular
@Component({
  selector: 'app-moodboard',              // Selector HTML para usar este componente
  standalone: true,                       // Permite que este componente sea usado sin un módulo externo
  imports: [CommonModule],                // Necesario para usar directivas comunes (ngFor, ngIf, etc.)
  templateUrl: './moodboard.component.html', // Ruta al archivo de plantilla HTML
})
export class MoodboardComponent {
  // Recibe desde el componente padre un array con los ítems a mostrar en el moodboard
  @Input() items: MoodboardItem[] = [];
}
