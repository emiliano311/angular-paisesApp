import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {


@Output() onEnter:EventEmitter<string> = new EventEmitter();
@Output() onDebounce:EventEmitter<string> = new EventEmitter();

debouncer:Subject<string>= new Subject(); // me sirve para suscribirme a un objeto en este caso al evento input
termino:string='';

constructor(private paisService:PaisService){}
//en el ngoninit lo que hago es suscribirme cuando se crea el objeto.
@Input() placeHolder ='';
ngOnInit(): void {
  this.debouncer.pipe(debounceTime(300))
  .subscribe( valor =>{
    this.onDebounce.emit(valor);
  })
}

buscar(){
  this.onEnter.emit(this.termino)
  
}
teclaPresionada(){
  this.debouncer.next(this.termino);

}

}
