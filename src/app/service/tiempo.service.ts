import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiempoService {

  constructor(private http:HttpClient) { }

  obtenertiempo(ciudad:string){

return this.http.get(`http://api.weatherapi.com/v1/forecast.json?key=bd8522d5414e4784946150348222903&q=${ciudad}&days=3`)
  }
}
