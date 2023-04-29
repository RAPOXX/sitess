import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getcursos() {
    return ['angular','python','javascript']
  }


  constructor() { }
}
