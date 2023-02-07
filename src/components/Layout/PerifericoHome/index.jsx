import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState  } from "react";

function PeripheralsHome(){
    const [produtosPeripherals, setPeripherals] = useState([])

    useEffect(() => {
      const fetchPeripherals = async() => {
        const url = '/api/products'
         try{
           const response = await axios.get(url)
           const products = response.data.products
            return setPeripherals(products)
         }catch(e){
          console.log(e)
         }
      }
      fetchPeripherals()
    },[])

      function TopSite(){
        window.scrollTo(0, 0)
      }

  return (
    <section className="section-peripherals-home">
       <h2>PERIPHERALS</h2>
        <div className="peripherals-grid">
           {produtosPeripherals.map( (peripherals) => {
            if(peripherals.category === 'peripherals'){
              return (
                <div key={peripherals.id} className="computers-info-home">
                 <Link onClick={TopSite} to={`/Products/${peripherals.slug}`}><img src={peripherals.img} alt="" /></Link>
                   <div className="peripherals-name-price-home">
                    <p className="name-peripherals">{peripherals.title}</p>
                    <p className="price-peripherals">${peripherals.price}</p>
                   </div>
                </div>
              )
            }
           })}
        </div>
     </section>
    )
}
export default PeripheralsHome;