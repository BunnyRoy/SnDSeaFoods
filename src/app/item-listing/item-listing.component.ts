import { Component, OnInit } from '@angular/core';
import {ServerConnectService} from '../server-connect.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.css']
})
export class ItemListingComponent implements OnInit {

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
