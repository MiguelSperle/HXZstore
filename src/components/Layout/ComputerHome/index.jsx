import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState  } from "react";

function ComputerHome(){

  const [produtosComputer, setComputer] = useState([])
  
  useEffect(() => {
    const fetchComputer = async() => {
      const url = '/api/products'
      try{
         const response = await axios.get(url)
         const products = response.data.products
           return setComputer(products)
      }catch(e){
        console.log(e)
      }
    }
    fetchComputer()
  },[])

  function TopSite(){
    window.scrollTo(0, 0)
  }
  
   return (
     <section className="section-computer-home">
       <h2>COMPUTERS</h2>
        <div className="computers-grid">
           {produtosComputer.map( (computer) => {
            if(computer.category === 'computer'){
              return (
                <div key={computer.id} className="computers-info-home">
                  <Link onClick={TopSite} to={`/Products/${computer.slug}`}><img src={computer.img} alt="" /></Link>
                   <div className="computers-name-price-home">
                    <p className="name-computers">{computer.title}</p>
                    <p className="price-computers">${computer.price}</p>
                   </div>
                </div>
              )
            }
           })}
        </div>
     </section>
   )
}
export default ComputerHome;