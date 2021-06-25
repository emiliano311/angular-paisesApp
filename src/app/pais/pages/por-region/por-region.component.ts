import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {
  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string='';
  resultado:Country[]=[];
  constructor(private paisService:PaisService) { }
  getClaseCSS(region:string){

    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }
  activaRegion(region:string){
    this.regionActiva=region;
    this.paisService.buscarPorRegion(region)
    .subscribe((paises)=>{
      this.resultado= paises;
    },err => {
     this.resultado=[];
    })    
  }

}
