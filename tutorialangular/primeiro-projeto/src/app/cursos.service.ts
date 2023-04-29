import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  getCursos(): string[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
