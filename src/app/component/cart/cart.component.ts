import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { useProduct } from 'src/app/composables/useProduct';


const {getProductsCart} = useProduct()
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(public products_service: ProductsDataService){}

  path_img:string ="https://cdn.pixabay.com/photo/2018/07/25/18/36/ecommerce-3562005_1280.jpg"

  async ngOnInit(){
    const {products, sum_of_prices} = await getProductsCart()
    console.log('values', products, sum_of_prices)
    this.products_service.setCartProducts(products)
    this.products_service.setSum(sum_of_prices)
    //this.products_list = products
  }
}
