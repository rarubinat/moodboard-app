// Importa el decorador Component y el decorador Input para recibir datos desde el componente padre
import { Component, Input } from '@angular/core';
// Importa funcionalidades comunes como *ngFor, *ngIf, etc.
import { CommonModule } from '@angular/common';
// Importa la interfaz MoodboardItem desde el modelo externo
import { MoodboardItem } from '../../models/moodboard-item.model'; // Ajusta la ruta si es necesario

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
