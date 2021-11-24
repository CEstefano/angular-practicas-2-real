import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute ,
              private ViewPaisService : PaisService) { }

  ngOnInit(): void {
    console.log("hello wor 0")
    this.activatedRoute.params
      .subscribe( ({ id })  => {  //podriamos desestructurar y mandar el parametro directo asi .sucribe(({ParametroidPais}))
        console.log("hello wor")
        console.log(id)

        this.ViewPaisService.verPais(id)
        .subscribe(data =>{
        console.log("hello wor2")
        console.log(data)
      })
      })



  }

}
