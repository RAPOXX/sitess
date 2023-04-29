import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {
  

  url: string = 'http//site.com'

  botaoclick() {
    alert('botao clicado')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
