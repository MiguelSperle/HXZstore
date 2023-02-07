import { Link } from 'react-router-dom';

function Success(){
   return (
      <div className="container-success">
         <div className='container-success-text'>
           <h2>Support received your message, we will contact you!</h2>
           <Link to='/'><p>Back for main page</p></Link>
         </div>
      </div>
   )
}
export default Success;