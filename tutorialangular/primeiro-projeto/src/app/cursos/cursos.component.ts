import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  nomePortal: string;

  cursos: string[] = ['java','Ext js','Angular']

  constructor(private cursosService: CursosService) { 
      this.nomePortal = 'http/site.training';


      //let servico = new CursosService()

      this.cursos = this.cursosService.getCursos()
  }

  ngOnInit(): void {
  }

}
