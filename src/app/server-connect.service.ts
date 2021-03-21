import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export interface Product {
  ProdId: number;
  ProductName: string;
  ProductCode: string;
  ProdDesc: string;
  Rate: number;
  ProdCategory: string;
  ProdUnit: string;
  ProdImageBase64: string;
  ProdDiscount: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServerConnectService {

  ServiceUrl="http://localhost:54082/api/home";
 public IsJsLoaded:boolean;
  public ProductList:Observable<any>;
  public ProductListData:Observable<Product[]>;
    constructor(private http:HttpClient) {
      debugger
      this.IsJsLoaded=false;
      this.ProductList=this.GetProducts();
   }
   
   public GetProducts():Observable<any>
   {
    debugger
   this.ProductList=this.http.get(this.ServiceUrl);
   return this.ProductList;
   }
}
