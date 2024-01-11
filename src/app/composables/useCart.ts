import { ApiDelete, ApiGet, ApiPatch, ApiPost } from "../helpers/apiHelpers";

const useCart = () => {

  const getCartProducts = async (searchString:string="") => {
    const respTasks = await ApiGet(`cart/list?searchString=${searchString}`);
    return respTasks;

  };

  const getProductsCart = async(id:number)=>{
    const respTasks = await ApiPost(`cart/add`, {id});
    getCartProducts()
    return respTasks;
  }

  return {
    getCartProducts,
    getProductsCart
  };
};

export { useCart };