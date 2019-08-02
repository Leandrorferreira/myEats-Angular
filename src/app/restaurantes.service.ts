import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurante } from './model/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor(private http: HttpClient) { }
 
  public getApiRestaurantes(){
    return this.http.get('http://localhost:3000/restaurants');
  }  

  //função que retorna um restaurante com base no ID
  public getRestaurantById(id_rest: string){
    return this.http.get('http://localhost:3000/restaurants/'+ id_rest);
  }
}
