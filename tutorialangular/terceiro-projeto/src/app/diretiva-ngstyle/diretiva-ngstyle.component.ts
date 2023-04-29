import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {


  ativo = true
  tamanhofonte = 16
  
  mudaativo() {
    this.ativo = !this.ativo
  }

  constructor() { }

  ngOnInit(): void {

}

}


