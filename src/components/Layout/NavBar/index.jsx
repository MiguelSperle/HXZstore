import { IconNavBar } from "../../svg/iconNavBar/iconNavBar";
import { IconClose } from '../../svg/IconNavBarClose/iconClose';
import { IconCart  } from "../../svg/iconCart/iconCart";
import { IconProfile } from '../../svg/iconProfile/iconProfile';
import { useState } from "react";
import { Link } from 'react-router-dom';
import NavLinks from "../NavBarLinks/index";
import { useProducts } from "../../../Providers/useProducts";

function NavBar(){
    const [open, setOpen] = useState(false)
    const { products } = useProducts();

    function topSiteCart(){
        window.scrollTo(0, 0)
    }

    return (
        <>
        <div className="container-header-all">
           <div className="container-header-part1">
           <button onClick={() => setOpen(!open)} className="button-header">
            {open === false ? <IconNavBar /> : <IconClose/> }
            </button>
               <Link onClick={topSiteCart}  className="title-header" to='/'><h1>HXZ</h1></Link>
           </div>
                <div className="container-header-look">
                   {/* {products.length > 0 && <p className="notification"></p>} */}
                   <Link onClick={topSiteCart} to='/Cart'><IconCart/></Link>
                   <Link onClick={topSiteCart} to='/Support'><IconProfile/></Link>
               </div>
        </div>
         {<NavLinks setOpen={setOpen} open={open}/>}
        </>
    )
}
export default NavBar;