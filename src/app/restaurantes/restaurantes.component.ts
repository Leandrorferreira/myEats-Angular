import { Component, OnInit, Input } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
 //Array de dados da API
  restauranteDados;
  
  constructor(private restaurante: RestaurantesService) { }

  ngOnInit() {    
    //Consome os dados da api e armazena em um array
    //como função assincrona
    this.restaurante.getApiRestaurantes().subscribe((dados) => {
      this.restauranteDados = dados;  
    });
  }
}
