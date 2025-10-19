import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MoodboardItem } from '../models/moodboard-item.model';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoodboardService {
  private apiUrl = 'https://moodboard-backend-4kze.onrender.com/api/items';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // 🔹 Encabezados con token
  private getHeaders() {
    const token = localStorage.getItem('accessToken'); 
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      }),
    };
  }

  // GET: Obtener todos los ítems
  getItems(): Observable<MoodboardItem[]> {
    return this.http.get<MoodboardItem[]>(this.apiUrl, this.getHeaders());
  }

  // POST: Crear un nuevo ítem (solo usuarios logueados)
  addItem(item: Partial<MoodboardItem>): Observable<MoodboardItem> {
    const user = this.authService.currentUser;

    if (!user) {
      console.error('No se puede crear item: usuario no logueado');
      return throwError(() => new Error('Usuario no autenticado'));
    }

    // 🔹 Mostrar datos completos del usuario en consola
    console.log('Usuario actual que crea el item:', user);

    // 🔹 Añadir automáticamente created_by y creator_role
    const itemWithUser = {
      ...item,
      created_by: user.id,
      creator_role: user.role || 'user', // fallback por si role es undefined
    };

    return this.http.post<MoodboardItem>(this.apiUrl, itemWithUser, this.getHeaders())
      .pipe(
        tap(createdItem => console.log('Item creado correctamente:', createdItem))
      );
  }

  // DELETE: Eliminar ítem por id
  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  // PUT: Actualizar ítem existente
  updateItem(id: string, item: Partial<MoodboardItem>): Observable<MoodboardItem> {
    return this.http.put<MoodboardItem>(`${this.apiUrl}/${id}`, item, this.getHeaders());
  }
}
