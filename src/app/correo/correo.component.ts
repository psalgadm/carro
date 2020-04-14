import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})

export class CorreoComponent implements OnInit {

  @Output() emailAdded = new EventEmitter<{email: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(inputEmail : HTMLInputElement){   

    if(this.validar_email(inputEmail.value))
    {
      this.emailAdded.emit({email: inputEmail.value});
    }else{alert("Correo no valido."); inputEmail.value='';}
  }

  validar_email( email ) 
  {
      var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email) ? true : false;
  }

}
