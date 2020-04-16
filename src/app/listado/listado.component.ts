import {  Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements  OnInit {
	
  constructor() { }

  ngOnInit(): void { }

  discos = [
			{titulo:'Black Sabbath', valor:'25.000', disp:1},
			{titulo:'Led Zeppelin', valor:'23.000', disp:1},
			{titulo:'Iron Maiden', valor:'17.000', disp:1},
			{titulo:'Slayer', valor:'24.000', disp:1},
			{titulo:'Anthrax', valor:'22.000', disp:1}
		];

  
  agregardisco = [];

  onAdd(e){ this.agregardisco.push(this.discos[e]); this.discos[e]["disp"]=0;}

  getDisco(e){
    return this.discos[e]["titulo"];
  }

  getValor(e){
    return this.discos[e]["valor"];
  }

  getDisp(e){
    return this.discos[e]["disp"];
  }

  onDel(titulo:string){
    var index:number = this.agregardisco.indexOf(this.agregardisco.find(x => x.titulo == titulo));
    this.agregardisco.splice(index, 1);

    var index2:number = this.discos.indexOf(this.discos.find(x => x.titulo == titulo));
    this.discos[index2]["disp"] = 1;
  }  

  getDisco2(e){
    return this.agregardisco[e]["titulo"];
  }

  getValor2(e){
    return this.agregardisco[e]["valor"];
  }

}
