import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {CrudService} from './../crud.service'
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public parameters: Product = {name:'', price:0, productID:0};
  constructor(private route: ActivatedRoute,private crud : CrudService,private _router:Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.parameters.name = params['name'];
        this.parameters.price = Number(params['price']);
        this.parameters.productID = Number(params['productID']);
        console.log('params: ',params);
      }
    );
  
  }

  modify(product:Product):void
  {
    console.log('Modify: ',product)
    this.crud.modify(product)
    this._router.navigate(['']);
  }

}
