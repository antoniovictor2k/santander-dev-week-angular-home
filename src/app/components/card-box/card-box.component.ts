import { Component } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent {

  accountData: AccountDataModel ={
    name: "Antonio Victor P S",
    account:{
        agency: "0001",
        number: "124541454"
    },
    card:{
        limit: 1500,
        number: "4454"
    }
  }

}
