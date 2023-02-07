import './index.css'
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import NavBar from './components/Layout/NavBar/index';
import Home from './components/Layout/Home/index';
import Footer from './components/Layout/Footer/index';
import Products from './Pages/Products/index';
import Buy from './Pages/BuyProducts/index';
import About from './Pages/About/index';
import Cart from './Pages/CartProducts/index';
import Support from './Pages/SupportClient/index';
import Success from './Pages/SuccessForm/index';
import { ProductsProvider } from './Providers/useProducts';


function App() {
 
  return (
    <>
     <ProductsProvider>
     <Router>
        <NavBar/> {/*HEADER*/}
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/Products' element={<Products/>}/>
             <Route path='/Products/:slug' element={<Buy/>}/>
             <Route path='/About' element={<About/>}/>
             <Route path='/Cart' element={<Cart/>}/>
             <Route path='/Support' element={<Support/>}/>
             <Route path='/Success' element={<Success/>}/>
          </Routes>
          <Footer/> {/*FOOTER*/}
      </Router>
     </ProductsProvider>
    </>
  )
}
export default App
