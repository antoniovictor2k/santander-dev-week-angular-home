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
  // // Guarda a referência do temporizador.
  // // Assim conseguimos interromper o temporizador
  // // a qualquer momento
  // timerSubs!: Subscription;

  // // Array com a URL das imagens que serão exibidas
  // // no carrossel
  // @Input() imagens: string[] = [];

  // // Guarda a posição no array "imagens" que
  // // corresponde a imagem que está sendo exibida
  // // no carrossel
  // private _indexImagemAtiva: number = 0;
  // get indexImagemAtiva() {
  //   return this._indexImagemAtiva;
  // }

  // set indexImagemAtiva(value: number) {
  //   this._indexImagemAtiva =
  //     value < this.imagens.length ? value : 0;
  // }

  // ngOnInit(): void {
  //   this.iniciarTimer();
  // }

  // ngOnDestroy(): void {
  //   this.pararTimer();
  // }

  // iniciarTimer(): void {
  //   this.timerSubs = timer(1000).subscribe(() => {
  //     this.ativarImagem(
  //       this.indexImagemAtiva + 1
  //     );
  //   });
  // }

  // pararTimer(): void {
  //   this.timerSubs?.unsubscribe();
  // }

  // ativarImagem(index: number): void {
  //   this.indexImagemAtiva = index;
  //   this.iniciarTimer();
  // }
}
