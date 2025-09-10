import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { User } from '../models/moodboard-user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // 🔹 Subject que mantiene el usuario actual en memoria
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  // 🔹 Observable público que emite cambios del usuario actual
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private userService: UserService) {
    // 🔹 Recuperar sesión desde localStorage al recargar la app
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  /** 
   * Registro de usuario + login automático
   */
  register(user: User): Observable<User> {
    return this.userService.register(user).pipe(
      tap((savedUser) => {
        localStorage.setItem('currentUser', JSON.stringify(savedUser));
        this.currentUserSubject.next(savedUser);
      })
    );
  }

  /** 
   * Login de usuario
   */
  login(email: string, password: string): Observable<User> {
    return this.userService.login(email, password).pipe(
      tap((response) => {
        // 🔹 Guardar usuario y token en localStorage
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        localStorage.setItem('accessToken', response.accessToken);

        // 🔹 Actualizar observable del usuario actual
        this.currentUserSubject.next(response.user);
      }),
      // 🔹 Devolver solo el usuario (sin el token) al suscribirse
      map((response) => response.user)
    );
  }

  /** 
   * Logout del usuario
   */
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.currentUserSubject.next(null);
  }

  /** 
   * Getter para obtener el usuario actual de manera síncrona
   */
  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
