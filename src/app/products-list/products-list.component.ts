import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';
import { useProduct } from '../composables/useProduct';
import { ProductInterface } from '../interfaces/Product';
const {getProducts} =useProduct()
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products_list: ProductInterface[] = []
  constructor(public products_service: ProductsDataService){}

  path_img:string ="https://cdn.pixabay.com/photo/2018/07/25/18/36/ecommerce-3562005_1280.jpg"
  async ngOnInit(){
    const products = await getProducts()
    this.products_service.setProducts(products)
    //this.products_list = products
  }

}
