import { useState } from 'react';
import { slidData } from './DataSlider';



function Slider (){
     const [i , setI] = useState(0);

     function nxtSlid(){
          if(i == slidData.length - 1){
               setI( 0 );
          }else{
               setI( i + 1 );
          }
     }

     return (
          <main>
               <h3>{slidData[i].name}</h3>
               <img src={slidData[i].url} alt='' width={300} height={450} />
               <p>{slidData[i].description}</p>
               <button onClick={nxtSlid}>Next</button>
          </main>
     )
}


export default Slider ;