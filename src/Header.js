import { useState } from 'react';
import './Header.css';

function Header({logoName , fLink , sLink , tLink}){


     const [myLogo , setmyLogo] = useState(logoName);

     
     const chngLogo = e => {
          setmyLogo(e.target.innerText)
          e.target.innerText = myLogo
     }

     return (
          <nav className="navbar">
               <div className="logo">
                    <h1>{myLogo}</h1>
               </div>
               <div className="rightLinks">
                    <ul>
                         <li><button onClick={chngLogo} >{fLink}</button></li>
                         <li><button onClick={chngLogo} >{sLink}</button></li>
                         <li><button onClick={chngLogo} >{tLink}</button></li>
                    </ul>
               </div>
          </nav>
     )
}

export default Header ;