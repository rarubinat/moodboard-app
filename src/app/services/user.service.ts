import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/moodboard-user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://moodboard-backend-4kze.onrender.com/api/users';

  constructor(private http: HttpClient) {}

  /** Registrar usuario → se lo manda a tu backend */
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  /** Login → devuelve usuario + token */
  login(
    email: string,
    password: string
  ): Observable<{ user: User; accessToken: string }> {
    return this.http.post<{ user: User; accessToken: string }>(
      `${this.apiUrl}/login`,
      { email, password }
    );
  }

  /** Obtener todos los usuarios */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  /** Obtener usuario por ID */
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
