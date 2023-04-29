import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  meufavorito: boolean = false
  ativo: boolean = true
  ativo2: boolean = false

  
  mudaativo() {

    this.meufavorito = !this.meufavorito

  }

  onclick() {
    this.ativo = !this.ativo
  }

  quadrado(){
    this.ativo2 = !this.ativo2
  }


  constructor() { }

  ngOnInit(): void {
  }

}
