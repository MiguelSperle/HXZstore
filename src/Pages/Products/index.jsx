import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Loading from '../../components/Layout/Loading/index';

function Produtos(){

    const [products, setProducts] = useState([])
    const [getProducts, setgetProducts] = useState([])
    const [loadProducts, setLoadProducts] = useState(false);

     useEffect( () => {
      const fetchProductsAll = async() => {
        setLoadProducts(true) // loading
        const url = '/api/products'
        try {
          const response = await axios.get(url)
          const products = response.data.products
          setLoadProducts(false) // loading
           return setgetProducts(products)
           
        }catch(e){
          console.log(e)
        }
      }
      fetchProductsAll()
     }, [])

     
     useEffect(() => {
      setProducts(getProducts)
    }, [getProducts])

     function LookCategories(e){
      let optionSelected = e.target.options[e.target.selectedIndex].value // pega o value do option

      if(optionSelected === 'all'){ // se optionSelect === value (all) do option
        return setProducts(getProducts) // vai retornar todos os produtos
       }  

        const filterProduct = getProducts.filter( (product) => product.category === optionSelected)
        return  setProducts(filterProduct)
      }

      function topSiteProducts(){
        window.scrollTo(0, 0)
      }
    
    return (
        <div className="container-products-all">
            <select onChange={LookCategories}  name="category" id="category">
               <option value="all">
                All
               </option>

               <option value='computer'>
                Computer
               </option>

               <option value='peripherals'>
                Peripherals
               </option>
            </select>
            {loadProducts && <Loading/>}
            <div className="container-products-all-grid">
              {products.map( (product) => {
                return (
                  <div key={product.id} className="container-product-info">
                    <Link to={`/Products/${product.slug}`}><img onClick={topSiteProducts} src={product.img} alt="" /></Link>
                      <div className="container-product-name-price">
                        <p className="name-product">{product.title}</p>
                        <p className="price-product">${product.price}</p>
                      </div>
                  </div>
                )
              })}
            </div>
        </div>
    )
}
export default Produtos;