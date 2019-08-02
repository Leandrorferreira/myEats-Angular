import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurante-card',
  templateUrl: './restaurante-card.component.html',
  styleUrls: ['./restaurante-card.component.css']
})
export class RestauranteCardComponent implements OnInit {

  @Input() name;
  @Input() imagePath;
  @Input() id;
  @Input() category;
  @Input() deliveryEstimate;
  @Input() rating;
  @Input() about;
  @Input() hours;

  constructor() { }

  ngOnInit() {    
  } 
}
