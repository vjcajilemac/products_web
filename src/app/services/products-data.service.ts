import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor() { }
  private products:ProductInterface[]=[]
  private cart_products:ProductInterface[] = []
  private sum:number=0

  public getProducts(){
    return this.products
  }
  public getCartProducts(){
    return this.cart_products
  }
  public getSum(){
    return this.sum
  }

  public setProducts(products: ProductInterface[]){
    this.products =  products
  }
  public setCartProducts(cart_products:ProductInterface[]){
    this.cart_products = cart_products
  }
  public setSum(sum:number){
    this.sum = sum

  }

}
