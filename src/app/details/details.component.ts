import { Component, OnInit, Input } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';
import { Restaurante } from '../model/restaurante';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  //Atributo da classe do tipo Objeto 
  //que recebe os dados do restaurante
  rest;

  //injeção de dependecias
  constructor(private route: ActivatedRoute,private restaurante: RestaurantesService) { }

  ngOnInit() {
    let id_rest =  this.route.snapshot.params['id'];  
    this.restaurante.getRestaurantById(id_rest).subscribe((dados) => {
      this.rest = dados;  
    });
  } 
}
