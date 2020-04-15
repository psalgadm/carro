import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carro';

  entrada: {email: string, validoCorreo: boolean} = {email: '', validoCorreo: false};

  onEmailAdded(entradaData: {email: string, validoCorreo: boolean} ) {
    this.entrada =  { email : entradaData.email,  validoCorreo : entradaData.validoCorreo};
  } 
}
