import { Component } from '@angular/core';
import { TiempoService } from './service/tiempo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-time';

  pronostico:any;

  constructor(private servicio_de_tiempo:TiempoService){}

buscar(nombreABuscar:any){
console.log(nombreABuscar.value)

this.servicio_de_tiempo.obtenertiempo(nombreABuscar.value)
.subscribe((datos:any)=>{
  console.log(datos)
  this.pronostico = datos.forecast.forecastday;
  console.log(this.pronostico)
})
}
}

