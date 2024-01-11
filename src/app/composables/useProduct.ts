import { ApiDelete, ApiGet, ApiPatch, ApiPost } from "../helpers/apiHelpers";
import { ProductsDataService } from 'src/app/services/products-data.service';

const productsDataService = new ProductsDataService()
const useProduct = () => {

  const getProducts = async () => {
    const respTasks = await ApiGet(`product/list`);

    //productsDataService.setProducts(respTasks['products'])

    return respTasks['products'];

  };

  const getProductsCart = async()=>{
    const respTasks = await ApiGet(`product/sum`);
    return respTasks;
  }

  return {
    getProducts,
    getProductsCart
  };
};

export { useProduct };