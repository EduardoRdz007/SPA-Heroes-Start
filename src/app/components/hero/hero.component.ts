import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/Hero.services';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
// Variable que almacena la respuesta del método getHero que se encuentra en el servicio _heroService.

  hero:any = {};

  constructor( private _aRoute: ActivatedRoute,
    private _heroService: HeroService) { 

  this._aRoute.params.subscribe( params => {
    console.log(params);
    this.hero = this._heroService.getHero(params['id']);
    console.log(this.hero);
  });
}

  ngOnInit(): void {
  }
}
