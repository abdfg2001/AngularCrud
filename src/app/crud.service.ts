import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private _Product: Product[] = [];
  constructor() {
     this._Product = [{productID:12,name:'soap',price:34.76}];
   }

   showProducts():Product[]
   {
    return this._Product
   }

   remove(id:number)
   {
     let index = this._Product.findIndex(a => a.productID == id)
     if (index !== -1) {
      this._Product.splice(index,1);
    }
   }

   edit(id:number)
   {
     let index = this._Product.find(a => a.productID == id)
     return index
   }

   create(product:Product)
   {   
    this._Product.push(product);
   }

   modify(product:Product)
   {
    let index = this._Product.findIndex(a => a.productID == product.productID)
    if (index !== -1) {
      this._Product[index] = product;
    }   
   }

   product_exist(product:Product):boolean
   {
    let index = this._Product.findIndex(a => a.productID == product.productID)
    if (index == -1) {
     return true
    }
    else
    {
      return false
    }
   }

}
