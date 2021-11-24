import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  hayError : boolean = false;
  termino : string = 'Hola';
  paisesResult : Pais[] = [];
  constructor(private paisService : PaisService) { }


  get rpaisesR() {
    return this.paisesResult;
 }

  buscarPais( eventoTermino : string){
    this.hayError = false;
    // buscarxPais me retorna la peticcion http,pero yo no necesito que esos datos retornen dentro del servicio , solo los usare en quien sea q mando a llamar en POR-PAIS
    // a la funcion  buscarxPais ,por eso llamo al sucribe aca

    this.termino=eventoTermino;

    this.paisService.buscarxPais(this.termino).subscribe((response) => {
      console.log(response)
      this.paisesResult = response;
      // console.log(response[0].name)
    },
    (err) => {
      console.log(err.status);
      this.hayError= true;
    })
    // console.log(this.termino)

  }

  sugerencias(termino:string){
    this.hayError= false;
    // TODO: CREAR SUGERENCIAS
    console.log('YO')
  }


}
