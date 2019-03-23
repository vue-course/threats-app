import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  getUser() { return this.user$.asObservable(); }

  setUser(email) {
    this.user$.next(email);
  }
}
