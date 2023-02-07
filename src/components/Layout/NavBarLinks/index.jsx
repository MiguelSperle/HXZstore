import { Link } from 'react-router-dom';

function NavLinks({open, setOpen}){

    function TopSite(){
        window.scrollTo(0, 0)
        setOpen(false)
    }

    return (
        <nav className={open ? 'container-links off' : 'container-links '}>
           <ul>
              <Link onClick={TopSite}  className='link-nav' to='/'><li>HOME</li></Link>
              <Link onClick={TopSite}  className='link-nav' to='/Products'><li>PRODUCTS</li></Link>
              <Link onClick={TopSite} className='link-nav' to='/About'><li>ABOUT</li></Link>
           </ul>
        </nav>
   
    )
}
export default NavLinks;