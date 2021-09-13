import React from "react";

import './WhatsappButton.css'

function WhatsappButton (){
  return(
    <div>
        <div class="" >
          {/* <Link to='/contact'> <button className='footer-icon-carevolution buttonMiddle-styling2 dib f3 pa3 grow fw8  white ' >GET A QUOTE</button> </Link> */}
          <a href="https://wa.me/message/O2J5L6G63TQXB1" target="blank" rel="noreferrer" className='no-underline ' aria-label="The Flex DevsKe WhatsApp chat link">
            
          <i className="fab fa-whatsapp fa-4x footer-icon-carevolution  green " aria-hidden="true"></i>

          </a>

          	
        </div>
    </div>
  )
}

export default WhatsappButton;