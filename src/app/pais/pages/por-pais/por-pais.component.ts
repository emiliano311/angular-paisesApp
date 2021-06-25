import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li {
      cursor:pointer;
    }`
  ]
})
export class PorPaisComponent {

  termino:string='';
  hayError:boolean=false;
  paises:Country[]=[];
  paisesSugridos:Country[]=[];
  mostrarSugerencias:boolean=false;
  constructor(private paisSerice:PaisService) { }


  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;

    this.paisSerice.buscarPais(termino)
    .subscribe((paises) => {
      this.paises=paises;
      console.log(paises)

    },(error)=>{

      console.log(error);
      this.hayError=true;
      this.paises=[];
    });
  }

  sugerencias(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerencias=true;
    this.paisSerice.buscarPais(termino)
      .subscribe( paises => {
        this.paisesSugridos=paises.splice(0,5);
      }, err => this.paisesSugridos=[])
  }
  buscarSugerido(termino:string){
    this.buscar(termino);
    this.mostrarSugerencias=false;
  }
}
