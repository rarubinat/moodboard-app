// Importa el decorador Component y el decorador Input para recibir datos desde el componente padre
import { Component, Input } from '@angular/core';
// Importa funcionalidades comunes como *ngFor, *ngIf, etc.
import { CommonModule } from '@angular/common';

// Define la estructura que debe tener cada ítem del moodboard
interface MoodboardItem {
  type: 'image' | 'color' | 'quote' | 'link'; // Tipo de contenido
  content: string; // Contenido principal (URL, texto, color, etc.)
  title?: string;  // Título opcional
}

// Define el componente Angular
@Component({
  selector: 'app-moodboard',              // Selector HTML para usar este componente
  standalone: true,                       // Permite que este componente sea usado sin un módulo externo
  imports: [CommonModule],               // Necesario para usar directivas comunes (ngFor, ngIf, etc.)
  templateUrl: './moodboard.component.html', // Ruta al archivo de plantilla HTML
})
export class MoodboardComponent {
  // Este decorador permite que el componente padre le pase un array de ítems al componente moodboard
  @Input() items: MoodboardItem[] = []; 
}
