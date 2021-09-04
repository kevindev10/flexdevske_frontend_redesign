import React,{useEffect} from 'react';
import tawkTo from "tawkto-react";


function Tawk() {

  const tawkToPropertyId = '61332bac649e0a0a5cd48f16'





 

var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/61332bac649e0a0a5cd48f16/1fenu56lg';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);


// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey

const tawkToKey = '96a6b542cef6342de64d1fc797a34aa1716d61f0'

useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey)
}, [])


  return (
    <div>
      
    </div>
    
   
  );
}

export default Tawk;
