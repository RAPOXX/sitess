import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosdiService {


  getcursos() {
    return ['angular','javascript','python']
  }

  addcurso(curso: string) {
    this.getcursos().push(curso)
  }


  constructor() { }
}
