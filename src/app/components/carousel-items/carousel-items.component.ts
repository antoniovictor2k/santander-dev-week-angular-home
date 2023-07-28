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
  
  // [imagens]="[
  //   '../../../assets/imgSlider/santander-img-2.jpg',
  //   '../../../assets/imgSlider/santander-img-2.jpg',
  //   '../../../assets/imgSlider/santander-img-2.jpg'
  // ]"
  slides = [
    { img: 'https://via.placeholder.com/600.png/09f/fff' },
    { img: 'https://via.placeholder.com/600.png/021/fff' },
    { img: 'https://via.placeholder.com/600.png/321/fff' },
    { img: 'https://via.placeholder.com/600.png/422/fff' },
    { img: 'https://via.placeholder.com/600.png/654/fff' },
  ];
  // slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
 
  constructor() {}
  ngOnInit(): void {}
}
