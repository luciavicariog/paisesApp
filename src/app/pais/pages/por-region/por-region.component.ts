import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right: 5px;
  }`
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['EU','EFTA ','CARIC','PA','AU','USAN ','EEU','AL ','ASEAN','CAIS ','CEFTA','NAFTA','SAARC'];

  regionActiva: string = '';

  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  activarRegion(region:string){

    if (region === this.regionActiva){return;}
    this.regionActiva = region;

    this.paisService.buscarRegion(region)
    .subscribe(results => {
      this.paises = results;
    })
  }

  getClassCSS (region: string){
    return (region===this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary';
  }
}
