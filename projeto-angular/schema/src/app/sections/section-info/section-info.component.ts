import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrls: ['./section-info.component.css']
})

export class SectionInfoComponent implements OnInit {
  
  @Input('nome') nomedocurso:string = '';
  
  constructor() { 

  }
  
  ngOnInit(): void {
  }

}
