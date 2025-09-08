import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { User } from '../models/moodboard-user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private userService: UserService) {}

  /** Registro + login automático */
  register(user: User): Observable<User> {
    return this.userService.register(user).pipe(
      tap(savedUser => this.currentUserSubject.next(savedUser))
    );
  }

  /** Login: busca usuario por email y password */
login(email: string, password: string): Observable<User> {
  return this.userService.login(email, password).pipe(
    tap(response => {
      this.currentUserSubject.next(response.user);
      localStorage.setItem('accessToken', response.accessToken); // opcional
    }),
    map(response => response.user)
  );
}


  /** Logout: limpia el usuario actual */
  logout() {
    this.currentUserSubject.next(null);
  }

  /** Valor sincrónico del usuario actual */
  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
