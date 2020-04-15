import {  Component,Input, Output, OnInit,  AfterViewChecked} from '@angular/core';

import { CorreoComponent } from '../correo/correo.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements  OnInit, AfterViewChecked {

  @Input() correo: CorreoComponent;

  entrada2: {email: string, validoCorreo: boolean} = {email: '', validoCorreo: false};


  ngOnInit(){

  }

  ngAfterViewChecked() {
    console.log(this.correo);
  } 

}
