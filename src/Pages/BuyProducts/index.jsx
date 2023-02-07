import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Loading from '../../components/Layout/Loading/index';
import { useProducts } from '../../Providers/useProducts'; // context

function Buy(){

  const { addCart } = useProducts(); // context

    const [getItem, setGetItem] = useState();
    const [loadBuyProducts, setLoadBuyProducts] = useState(false);
    const { slug } = useParams();
    
    useEffect( () => {
      const fetchProduct = async() => { //
        setLoadBuyProducts(true) // loading
         const url = '/api/products'
         try {
            const response = await axios.get(url) // esse await ele diz, espera eu pegar a url e ai vc continua o codigo
            const products = response.data.products
            if(products.length > 0){
               const selected = products.find( (product) => product.slug === slug)
               setLoadBuyProducts(false) // loading
               return setGetItem(selected)
            }
         } catch(e){
            console.log(e)
            setLoadBuyProducts(false) // loading
         } 
      }
       fetchProduct()
    },[])

   return (
     <div className="container-info-buy-item">
      {loadBuyProducts && <Loading/>}
       {!loadBuyProducts && getItem && (// setLoad
           <div className="container-global-info">
             <div className="container-info-main">
               <img  src={getItem.img} alt="" />
                 <div className="container-info-text">
                   <div className="container-name-assessment">
                     <p className="name-computer-about">{getItem.title}</p>
                     <p className="assessment-item">{getItem.stars} stars</p>
                   </div>
                     <div className="desc-AND-slogan">
                       <span className="slogan-computer">{getItem.slogan}</span>
                       <p className="desc-computer-about">{getItem.desc}</p>
                     </div>
                       <div className="container-price-count-buy">
                         <p className="price-computer-about">${(getItem.price).toFixed(2)}</p>
                            <div className="container-button-addCart">
                               <button onClick={() => addCart({
                                id: getItem.id,
                                name: getItem.title,
                                price: getItem.price,
                                image: getItem.img,
                                amountBuy: 1
                               })}>ADD TO CART</button>
                            </div>
                     </div>
               </div>
             </div>
           </div>
        )}
     </div>
   )
}
export default Buy; 