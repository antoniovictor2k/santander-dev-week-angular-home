import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-items',
  templateUrl: './carousel-items.component.html',
  styleUrls: ['./carousel-items.component.css']
})
export class CarouselItemsComponent {
  
  @ViewChild('slickCarousel') slickCarousel!: ElementRef;

 


    slideConfig = {
      slidesToShow: 5, // Mostrar 5 cards por vez
      slidesToScroll: 1,
      nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>',
      prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4 // Mostrar 4 cards por vez em dispositivos com largura menor que 1200px
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3 // Mostrar 3 cards por vez em dispositivos com largura menor que 992px
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1 // Mostrar 1 card por vez em dispositivos com largura menor que 768px
          }
        }
      ]
    };
  

  cards: any[] = [
    { title: 'Card 1', content: 'Conteúdo do Card 1', active: false },
    { title: 'Card 2', content: 'Conteúdo do Card 2', active: false },
    { title: 'Card 3', content: 'Conteúdo do Card 3', active: false },
    { title: 'Card 4', content: 'Conteúdo do Card 4', active: false },
    { title: 'Card 5', content: 'Conteúdo do Card 5', active: false },
    { title: 'Card 6', content: 'Conteúdo do Card 5', active: false },
    { title: 'Card 7', content: 'Conteúdo do Card 5', active: false },
    // Adicione mais cards aqui
  ];
  nextSlide() {
    this.slickCarousel.nativeElement.slickNext();
  }
  constructor() {}

  ngOnInit(): void {}

  toggleCard(card: any) {
    this.cards.forEach((c) => (c.active = false));
    card.active = true;
  }

}
