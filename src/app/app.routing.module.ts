import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: '',
    component : PorPaisComponent,
    // FULL HACE QUE AUNQUE COINCIAD OTRA PAGINA CON STRING VACIO , ESTA SEA LA PRINCIPAL
    pathMatch : 'full',
  },

  {
    path: 'region',
    component : PorRegionComponent
  },

  {
    path: 'capital',
    component : PorCapitalComponent
  },

  {
    // : significa ruta dinamica q recibe una variable
    path: 'pais/:id',
    component : VerPaisComponent
  },

  {
    path: '**',
    redirectTo : ''
    // component: 404Component  ---- asis e puede hacer tambien
  },
]

@NgModule(
  {
  exports: [RouterModule],

  imports : [RouterModule.forRoot(routes)],
  }
)

export class AppRoutingModule {}
