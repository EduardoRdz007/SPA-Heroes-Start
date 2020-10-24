import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes:
import { AppComponent } from './app.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';

// Rutas:
import{RouterModule} from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HerosComponent,
    AboutComponent,
    NavbarComponent,
    ErrorComponent,
    HeroComponent,
    BuscadorComponent,
  ],
  // Se importaron las carpetas:
  // Sale el texto en la barra de direción.
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // Para que al iniciar el servidor salga la página home-- {path: '', component:HomeComponent}, --:
      {path: '', component:HomeComponent},
      {path: 'home', component:HomeComponent},
      {path: 'heros', component:HerosComponent},
      {path: 'about', component:AboutComponent},
      // Botón de heros.component.html:
      // Por el /:parámetro 
      {path: 'hero/:id', component:HeroComponent},
      {path:'results/:termino', component:BuscadorComponent},
      {path: '**', pathMatch:'full', component: ErrorComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
