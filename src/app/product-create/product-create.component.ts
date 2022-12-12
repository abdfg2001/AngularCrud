import { Component, OnInit } from '@angular/core';
import {CrudService} from './../crud.service'
import { Router} from '@angular/router';
import { Product } from '../product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  model:Product = {
    "productID": 0,
    "name": "",
    "price": 0,
  }

  constructor(private crud : CrudService,private _router:Router) { }

  ngOnInit(): void {
  }

  create(product:Product):void
  {
   console.log(product);
   if (this.crud.product_exist(product))
    {
      this.crud.create(product);
      this._router.navigate(['']);
    }
   else{
      alert('productID exist')
   } 
  }

}
