import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { CursosdiService } from './cursosdi.service';

@Component({
  selector: 'app-cursosdi',
  templateUrl: './cursosdi.component.html',
  styleUrls: ['./cursosdi.component.css']
})
export class CursosdiComponent implements OnInit {

  cursos: String[] = []
  @ViewChild('input') inputtxt: string = ''

  cursosdiservice: CursosdiService

  constructor(private _cursosdiservice: CursosdiService) {
    this.cursosdiservice = _cursosdiservice  
  
  }

  ngOnInit(): void {
    this.cursos = this.cursosdiservice.getcursos()
  }

  addcursobtn(curso: string) {
    this.cursosdiservice.addcurso(curso)
  }


}
