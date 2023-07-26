export interface AccountDataModel {
    name: string;
    account:{
        agency: string
        number: string
        saldo: number
    };
    card:{
        limit: number
        number:string
    };
    saldo_limit:{
        saldo: string
    };
   
}