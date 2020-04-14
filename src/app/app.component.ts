import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carro';

  entrada: {email: string} = {email: ''};

  onEmailAdded(entradaData: {email: string} ) {
    this.entrada =  { email : entradaData.email};
  } 
}
