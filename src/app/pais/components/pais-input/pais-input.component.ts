import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  //Se emite cuando dejo de escribir
  debouncer: Subject <string>= new Subject();

  termino: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    })
  }

  buscar(){
    this.onEnter.emit(this.termino);
    console.log(this.termino);
  }

  // teclaPresionada(event: any){
  //   const valor = event.target.value;
  //   console.log(valor);
  // }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
