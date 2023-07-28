import { Component, OnInit } from '@angular/core';
import { AccountDataModel, newsDataModel } from 'src/app/model/accountDataModel';

import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {

  constructor(private services: CardsService){}

  newsData: newsDataModel = {

    news: {
      titulo: "Santander News",
      0: { icon: "", description: "Notícia 1" },
      1: { icon: "", description: "Notícia 2" },
      // Adicione mais chaves e objetos aqui, para mais notícias...
  },

  }
  
  

  

  ngOnInit(): void {
   this.getNewsData();
  }

  getNewsData(){
    this.services.getCard().subscribe( data =>{
     

      this.newsData.news[0].icon = data.news[0].icon
      this.newsData.news[0].description = data.news[0].description
      this.newsData.news[1].icon = data.news[1].icon
      this.newsData.news[1].description = data.news[1].description

      
      
      
    console.log( this.newsData.news[0].icon, this.newsData.news[0].description)
    })
  }
  
}
