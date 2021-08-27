import React from 'react';
import {Link} from 'react-router-dom';
import ourMission from './ourMission.jpg';
import './Footer.css'

function Footer() {
  return (
      <div>
         
       	<div className="cover bg-left bg-center-l" style={{"backgroundImage": "url("+ourMission+")","height":"65vh" }}>
									<article className="bg-black-80 " style={{"height":"65vh"}}>
										
										<section className="footer " style={{'paddingTop':'15vh',}}>
										
                      
                        


                       
                          <div className='flex footer-flex'>


                            <div className='w-50-l width-100-cname'>
                              <Link exact="true" to='/' className='no-underline white'  >
                              <p className=' ml5 mb3 footer-company-name dim pointer'  style={{ 'fontSize':'3.0rem' ,'fontFamily':'Audiowide' }}> Flex DevsKe </p>
                              </Link>	
                              <div className='gray ml5 footer-all-social-icons'>
                                <a href="https://web.facebook.com/Flex-DevsKe-111123327891531" target="blank" rel="noreferrer" className='no-underline gray'>	<i className=" fab fa-facebook-square fa-4x mr3  footer-social-facebook"></i> </a>
                                <a href="https://twitter.com/home?logout=1625046868916" target="blank" rel="noreferrer" className='no-underline gray'>   <i className="fab fa-twitter-square  fa-4x mr3 footer-social-twitter"></i> </a>
                                <i className="fab fa-instagram-square fa-4x mr3 footer-social-instagram"></i>
                                <a href="https://wa.me/0789563415" target="blank" rel="noreferrer" className='no-underline gray'>	<i className=" fab fa-whatsapp-square fa-4x mr3  footer-social-whatsapp"></i> </a>
                              </div>
                            </div>
                            

                            <div className='w-50-r ml4   width-100-phn-no'>
                              <a href="tel:+254789563415" className='no-underline	white phn-no fw8 dim athelas  ' style={{ 'fontSize':'3.0rem' }}>+254 789 563 415</a><br/>
                              <p className='pv3 email-us'>
                                <a href="mailto:sales@flexdevske.co.ke"  className='  white no-underline dim email-us-font ' style={{ 'fontSize':'25px' , }}>sales@flexdevske.co.ke </a>							
                              </p>
                              
                              <p className='mv3 nairob-kenya white' style={{ 'fontSize':'15px'  }}>Flex DevsKe - NAIROBI, KENYA </p>


                              <div className='bb b--white footer-horizontal-line'></div>
                              <div className='flex footer-terms-main'>	
                                <p className='pv3 mr4 dim pointer footer-terms white' style={{ 'fontSize':'12px' ,}}>TERMS</p>
                                <p className='pv3 mr4 dim pointer footer-privacy white' style={{ 'fontSize':'12px' , }}>PRIVACY POLICY</p>
                                <p className='pv3 dim pointer footer-google white' style={{ 'fontSize':'12px'  }}>OUR GOOGLE REVIEWS </p>
                              </div>

                            </div>	


                          </div>	
                        

                     




										
										</section>
									</article>
								</div> 

          

       
      </div>
  )
}

  export default Footer;