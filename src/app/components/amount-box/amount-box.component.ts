import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-amount-box',
  templateUrl: './amount-box.component.html',
  styleUrls: ['./amount-box.component.css']
})

export class AmountBoxComponent {
  // images: string[] = ['../../../assets/imgSlider/santander-img-4.jpg', '../../../assets/imgSlider/santander-img-2.jpg', '../../../assets/imgSlider/santander-img-3.jpg']; // Add more image URLs here
  images: string[] = [
    '../../../assets/imgSlider/santander-img-4.jpg',
    '../../../assets/imgSlider/santander-img-3.jpg',
    '../../../assets/imgSlider/santander-img-2.jpg',
    '../../../assets/imgSlider/santander-img-5.jpg'
  ];

  currentSlide: number = 0;
  translateValue: string = '0';

  ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
      this.updateSlidePosition();
    }, 7000); // Change image every 3 seconds (adjust as needed)
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    this.translateValue = `-${this.currentSlide * 100}%`;
  }
}
