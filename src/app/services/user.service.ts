import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/moodboard-user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://moodboard-backend-4kze.onrender.com/api/users'; // URL correcta

  constructor(private http: HttpClient) {}

  // Registrar usuario
  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // Obtener todos los usuarios (opcional)
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
