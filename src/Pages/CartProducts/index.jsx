import { IconPlus } from "../../components/svg/iconPlus/iconPlus";
import { IconLess } from "../../components/svg/iconLess/iconLess";
import { IconTrash } from "../../components/svg/iconTrash/iconTrash";
import { useProducts } from "../../Providers/useProducts";


function Cart(){

   const { products, RemoveProductsCart, addAmountItem, removeAmountItem } = useProducts();

   return (
     <div className="container-cart">
        <div className="container-show-item">
         <p className="text-cart">Your cart is here</p>
          {products.map( (product) => {
            return (
               <div className="container-item-cart" key={product.id}>
                  <img src={product.image} alt="" />
                  <p className="name-item-cart">{product.name}</p>
                    <div className="amount-item-cart">
                      <button onClick={() => removeAmountItem({
                        id: product.id,
                        amountBuy: 1
                      })} className="amount-item-less-cart"><IconLess/></button>
                      <p>{product.amountBuy}</p>
                      <button onClick={() => addAmountItem({
                        id: product.id,
                        amountBuy: 1
                      })} className="amount-item-plus-cart"><IconPlus/></button>
                        <div className="container-price-AND-trash-cart">
                           <p>${(product.price * product.amountBuy).toFixed(2)}</p>
                           <button onClick={() => RemoveProductsCart(product.id)} className="button-trash-cart"><IconTrash/></button>
                        </div>
                    </div>
               </div>
            )
           })} 
        </div>
     </div>
   )
}
export default Cart;