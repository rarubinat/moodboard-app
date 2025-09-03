import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoodboardItem } from '../models/moodboard-item.model'; // ajusta la ruta si es distinta

@Injectable({
  providedIn: 'root'
})
export class MoodboardService {
  private apiUrl = 'https://moodboard-backend-4kze.onrender.com/api/items';

  constructor(private http: HttpClient) {}

  // GET: Obtener todos los ítems
  getItems(): Observable<MoodboardItem[]> {
    return this.http.get<MoodboardItem[]>(this.apiUrl);
  }

  // POST: Crear un nuevo ítem
  addItem(item: Partial<MoodboardItem>): Observable<MoodboardItem> {
    return this.http.post<MoodboardItem>(this.apiUrl, item);
  }

  // DELETE: Eliminar ítem por id
  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // PUT: Actualizar ítem existente
  updateItem(id: string, item: Partial<MoodboardItem>): Observable<MoodboardItem> {
    return this.http.put<MoodboardItem>(`${this.apiUrl}/${id}`, item);
  }
}
