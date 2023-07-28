import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';



@Component({
  selector: 'app-carousel-items',
  templateUrl: './carousel-items.component.html',
  styleUrls: ['./carousel-items.component.css']
})
export class CarouselItemsComponent {

  
  slides = [
    { titulo: "Prêmios com o DinDin", icon: "emoji_events", link:'' },
    { titulo: "Quero Investir", icon: "savings", link:'' },
    { titulo: "Faça um consórcio", icon: "diversity_3", link:'' },
    { titulo: "Compre seu carro", icon: "directions_car", link:'' },
    { titulo: "Portabilidade Santander", icon: "show_chart", link:'' },

  ];

  slides_2 = [
    { titulo: "Compre sua casa", icon: "house", link:'' },
    { titulo: "Abra sua conta", icon: "paid", link:'' },
    { titulo: "Empréstimo para você", icon: "real_estate_agent", link:'' },
    { titulo: "Peça seu cartão", icon: "credit_card" },
    { titulo: "Renegocie sua dívida ", icon: "currency_exchange ", link:'' },

  ];

  

  constructor() { }
  ngOnInit(): void { }
}
