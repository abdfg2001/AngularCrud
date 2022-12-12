import { Component, OnInit } from '@angular/core';
import {CrudService} from './../crud.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  
  temp : any;
  editar : any;
  constructor(private crud : CrudService,private _router:Router) { }

  ngOnInit(): void {
    this.temp = this.crud.showProducts();
    console.log(this.temp)
  }

  remove(id:any) {
    this.crud.remove(id);
  }

  edit(id:any) {
    this.editar = this.crud.edit(id);
    this._router.navigate(['edit'], {queryParams:this.editar});
  }

}
