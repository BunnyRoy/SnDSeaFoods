import { Component, OnInit } from '@angular/core';
import {ServerConnectService} from '../server-connect.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Products:Observable<any>;
  constructor(private serviceInstance:ServerConnectService) { }

  ngOnInit(): void {
    debugger
    this.serviceInstance.GetProducts().subscribe(
      data=>{
        console.log('called');
        this.Products=  data;
      }
    );
  }

}
