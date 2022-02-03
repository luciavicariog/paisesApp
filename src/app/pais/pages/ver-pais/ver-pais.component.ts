import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap} from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  //Subscribirnos a cualquier cambio en la url
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }


  //En params recibiremos el nombre de la variable dada como ruta (app-routing) = a su valor
  ngOnInit(): void {

    // this.activatedRoute.params
    // .subscribe(params => {
    //   console.log(params.id);

    //   this.paisService.getPaisPorCode(params.id)
    //   .subscribe(pais => {
    //     console.log(pais);
    //   })
    // })


    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorCode(id) ),
      tap(console.log)
    )
    .subscribe(pais => this.pais = pais[0]);
  }

}
