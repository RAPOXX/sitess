import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit {

  

   exp: boolean = true
   exp2: boolean = false
   exp3: boolean = false
   ativo: boolean = true

   escondeformulario() {
    this.exp = false
    this.exp2 = true
  }

  @ViewChild('email') campoemail!: ElementRef
  @ViewChild('password') campopassword!: ElementRef



  mostravalor() {
    console.log(this.campoemail.nativeElement.value)
    if(this.campoemail.nativeElement.value == '' || this.campopassword.nativeElement.value == '') {
      alert('preencha todos os campos')
    }else {
      alert('dados enviados com sucesso')
    }


  }


  mostraformulario() {
    this.exp = true
    this.exp2 = false
    
  }

  mostrarecupera() {
    this.exp = false
    this.exp2 = false
    this.exp3 = true
  }


    constructor() {
     
  }
  
  ngOnInit(): void {
  }
  
  
  
}
