import { Link } from 'react-router-dom';
import SliderHome from  '../SliderHome/index';
import ComputerHome from '../ComputerHome/index';
import PeripheralsHome from '../PerifericoHome/index';

function Home(){
  return (
    <>
    <div className="text-container">
      <img src="/img/imgHome.png" alt="" />
        <div className="text">
          <div className="content-text">
             <h1>Let's Build</h1>
             <p>Your Gaming computer online now !</p>
             {/* <Link to='/Products'><button>BUY PRODUCTS</button></Link> */}
             <button>BUY PRODUCTS</button>
          </div>
        </div>
    </div>
      <ComputerHome/>
      <PeripheralsHome/>
      <SliderHome/>
    </>
  )
}
export default Home;