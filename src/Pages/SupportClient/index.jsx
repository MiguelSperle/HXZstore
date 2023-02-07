import { IconLogo } from '../../components/svg/iconLogo/iconLogo';

function Support(){
   return (
    <div className="container-support">
      <div className="container-support-text">
        <h2>customer support</h2>
          <IconLogo/>
           <form action="https://api.staticforms.xyz/submit" method='POST' className='container-form-support'>
            <input type="hidden" name='accessKey' value='0aa73920-2721-41b9-9e5c-80ed46221378'/>
            <input type="hidden" name='redirectTo' value='http://127.0.0.1:5173/Success' />
              <label htmlFor="inputName">FULL NAME</label>
              <input placeholder='Enter your name' type="text" id='inputName' name='name' required />
         
          
              <label htmlFor="inputEmailAddress">EMAIL</label>
              <input placeholder='Enter your email' type="email" name='email' id='inputEmailAddress' required />


              <label htmlFor="textAreaMessage">Message</label>
              <textarea placeholder='Enter your doubt' name="message" id="textAreaMessage" cols="30" rows="10"></textarea>
           
               <div className='container-send'>
                 <button className='button-submit-form' type='submit'>send</button>
               </div>
           </form>
      </div>
    </div>
   )
}
export default Support;