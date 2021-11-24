import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{

 @Input() placeholder : string = ''

  termino : string = '';

  // Event emiterr<TIPO DE ARGUMENTO O DATO QUE EMITIRA : EN ESTE CASO EL TERMINO COMO STRING>
  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter(); //este emitira el valor que se escriba al momento para sugerencias


  debouncer : Subject<string> = new Subject;
  constructor() { }

//  me suscribo al valor  del termino y este parametro sera pasado x medio del next() del Subject debouncer//
  ngOnInit(): void {
    // observables. SUBJECT me permite usar operadores rxjs : PIPES (es una tuberia que permite tramformar la salida del siguiente subcribe)
    this.debouncer.pipe(debounceTime(300)) //no emitas el suscribe hasta que el observable debouncer deje de emitir valores x 300mlsimas de segs
    .subscribe( terminoIncompleto => {
      console.log('debouncer : ' , terminoIncompleto)
      this.onDebounce.emit( terminoIncompleto);
    })
  }

  buscarPais(){
    // console.log(this.termino);
    // EMITEME EL TERMINO A POR PAIS COMPONENT QUE ME LLAMA COM COMPONENTE (PASALE MI DATO TERMINO A SUS TERMINO)
    this.onEnter.emit(this.termino);
  }


// mi next esta suscrito a mi obserbavle SUBJECT : debouncer
  teclaOprimida(){
    this.debouncer.next(this.termino)
    console.log('NEXT : ' ,this.termino);
    // this.debouncer.
  }

}
