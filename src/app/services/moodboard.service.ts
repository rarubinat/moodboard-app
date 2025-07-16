import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoodboardItem } from '../models/moodboard-item.model'; // ajusta si la ruta es distinta

@Injectable({
  providedIn: 'root'
})
export class MoodboardService {
  private apiUrl = 'https://moodboard-backend-4kze.onrender.com/api/items'; // URL del backend

  constructor(private http: HttpClient) {}

  // GET: Obtener todos los ítems
  getItems(): Observable<MoodboardItem[]> {
    return this.http.get<MoodboardItem[]>(this.apiUrl);
  }

  // POST: Agregar nuevo ítem
  addItem(item: MoodboardItem): Observable<MoodboardItem> {
    return this.http.post<MoodboardItem>(this.apiUrl, item);
  }
}
