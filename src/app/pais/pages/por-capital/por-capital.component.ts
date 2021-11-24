import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent  {

  hayError : boolean = false;
  termino : string = 'Hola';
  capitalesResult : Pais[] = [];

  // TermBusqueda : string = 'Ingresa una capital'

  constructor(private paisService : PaisService) { }


  get rcapitalR() {
    return this.capitalesResult;
 }

  buscarCapital( eventoTermino : string){
    this.hayError = false;
    this.termino=eventoTermino;

    this.paisService.buscarxCapital(this.termino).subscribe((response) => {
      this.capitalesResult = response;
      // console.log(response[0].name)
    },
    (err) => {
      console.log(err.status);
      this.hayError= true;
    })
  }

  sugerencias(termino:string){
    this.hayError= false;
    // TODO: CREAR SUGERENCIAS
    console.log('YO')
  }


}
