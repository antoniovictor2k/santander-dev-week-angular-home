import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})

export class CardBoxComponent implements OnInit {

  constructor(private services: CardsService){}

  
  accountData: AccountDataModel  ={
    name: "",
    account:{
      agency: "0001",
      number: "124541454",
      saldo:0
    },
    card:{
      limit: 1500,
      number: "4454"
    },
    saldo_limit:{
      saldo:" 0"
  },
  }

  limitFormatado: string | undefined;

  ngOnInit(): void {
   this.getAccountData();
  }

  getAccountData(){
    this.services.getCard().subscribe( data =>{
      this.accountData.name = data.name
      this.accountData.account.agency = data.account.agency
      this.accountData.account.number = data.account.number
      this.accountData.card.limit = data.card.limit
      this.accountData.card.number = data.card.number.split(" ")[3]
      this.formatarSaldo();
    })
  }
  formatarSaldo() {
    const saldoNumero = parseFloat(this.accountData.card.limit.toString()); // Convertendo o saldo para um número
    this.limitFormatado = saldoNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
