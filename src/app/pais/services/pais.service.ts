import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v3.1';
  constructor( private http : HttpClient)
  {  }

// 2da forma de manejo de errores
// mediante operadores(funciones que se ejecutan en base a la peticion get) rxjs puedo manejar errores , esta es una 2da forma  /
// / of es una funcion que retrona observable, en este caso como un arreglo vacio . en acterror puedo retornar lo que se a, el termino por ej,
  buscarxPais(termino : string) : Observable<Pais[]>{
     const url = `${this.apiUrl}/name/${termino}`
     return this.http.get<Pais[]>(url)

    //  .pipe(
    //    catchError(err => of(["vacio"]))
    //   )
  }

  buscarxCapital(termino : string) : Observable<Pais[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Pais[]>(url)
 }


    verPais(termino : string) : Observable<Pais>{
      const url = `${this.apiUrl}/alpha/${termino}`
      return this.http.get<Pais>(url)
    }
}
