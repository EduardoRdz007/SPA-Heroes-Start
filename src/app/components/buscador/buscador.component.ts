import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroService } from 'src/app/services/Hero.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor( private _aRoute: ActivatedRoute, private _heroService: HeroService) { }
  Resultados: any = [];
  strBusqueda: "";
  ngOnInit(): void {
    this._aRoute.params.subscribe(params => {
      console.log(params['termino']);
      this.strBusqueda = params ['termino'];
      this.Resultados= this._heroService.searchHeros(params['termino']);
      console.log(this.Resultados)
    });
  }

}
