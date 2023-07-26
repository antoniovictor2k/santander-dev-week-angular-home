import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private services: CardsService) { }


  accountData: AccountDataModel = {
    name: "",
    account: {
      agency: "0001",
      number: "124541454",
      saldo: 0,
    },
    card: {
      limit: 1500,
      number: "4454"
    },
    saldo_limit: {
      saldo: ""
    },

  }
  saldoFormatado: string | undefined;
  ngOnInit(): void {
    this.getAccountData();
  }
  
  
  getAccountData() {
    this.services.getCard().subscribe(data => {
      this.accountData.name = data.name
      this.accountData.account.saldo = data.account.limit
      this.accountData.card.limit = data.card.limit
      
      const limite =    this.accountData.card.limit
      const saldo = this.accountData.account.saldo

      const saldo_limite = limite + saldo
      
      this.accountData.saldo_limit.saldo = saldo_limite.toString()
     
      this.formatarSaldo();
      
      console.log(limite+saldo)
    })
    
  }
  formatarSaldo() {
    const saldoNumero = parseFloat(this.accountData.saldo_limit.saldo); // Convertendo o saldo para um número
    this.saldoFormatado = saldoNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  
  // saldoFormatado: string | undefined;
  
  
  
}
