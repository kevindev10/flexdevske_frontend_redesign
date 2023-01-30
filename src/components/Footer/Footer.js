import React from 'react';
import {Link} from 'react-router-dom';
import footerBackground from './footer-background.jpg';
import './Footer.css'

function Footer() {
  return (
      <div>
         
       	<div className="cover bg-left bg-center-l background-height" style={{"backgroundImage": "url("+footerBackground+")","height":"60vh" }}>
									<article className="bg-black-80 background-cover " style={{"height":"60vh"}}>
										
										<section className="footer " style={{'paddingTop':'10vh',}}>
										
                      
                        


                       
                          <div className='flex footer-flex'>


                            <div className='w-50-l width-100-cname'>
                              <Link exact="true" to='/' className='no-underline white' aria-label="The Flex DevsKe website"  >
                              <p className=' ml5 mb3 footer-company-name dim pointer'  style={{ 'fontSize':'3.3rem' ,'fontFamily':'Audiowide' }} > Flex DevsKe </p>
                              </Link>	
                              <div className='gray ml5 footer-all-social-icons'>
                                <a href="https://web.facebook.com/Flex-DevsKe-111123327891531" target="blank" rel="noreferrer" className='no-underline gray' aria-label="The Flex DevsKe Facebook link" >	<i className=" fab fa-facebook-square fa-4x mr3  footer-social-facebook"></i> </a>

                                <a href="https://twitter.com/FDevske" target="blank" rel="noreferrer" className='no-underline gray' aria-label="The Flex DevsKe Twitter link">   <i className="fab fa-twitter-square  fa-4x mr3 footer-social-twitter"></i> </a>

                                <i className="fab fa-instagram-square fa-4x mr3 footer-social-instagram"></i>

                                <a href="https://wa.me/message/O2J5L6G63TQXB1" target="blank" rel="noreferrer" className='no-underline gray' aria-label="The Flex DevsKe WhatsApp chat link">	<i className=" fab fa-whatsapp-square fa-4x mr3  footer-social-whatsapp"></i> </a>
                              </div>
                            </div>
                            

                            <div className='w-50-r ml4   width-100-phn-no'>
                              <div className= ''>
                              <a href="tel:+254789563415" className='no-underline	white phn-no  dim   ' style={{ 'fontSize':'1.8rem' }}>+254 789 563 415</a><br/>
                              </div>
                              
                              <div className= 'mt2'>
                              <a href="tel:+254721490923" className='no-underline	white phn-no dim   ' style={{ 'fontSize':'1.8rem' }}>+254 721 490 923</a><br/>
                              </div>
                              

                              <p className='pt3 email-us'>
                                <a href="mailto:sales@flexdevske.co.ke" target="blank" rel="noreferrer" className='  white no-underline dim  email-us-font ' style={{ 'fontSize':'1.2rem' , }}>sales@flexdevske.co.ke 
                                </a><br/>	
                                </p>
                              <p className='pb3 mt2 email-us'>  
                                <a href="mailto:flexdevske@gmail.com" target="blank" rel="noreferrer"  className='  white no-underline dim email-us-font ' style={{ 'fontSize':'1.2rem' , }}>flexdevske@gmail.com
                                </a>		

                              </p>
                              
                              
                              <p className='mv2 nairob-kenya white' style={{ 'fontSize':'1.0rem'  }}>Flex DevsKe - NAIROBI, KENYA </p>


                              <div className='bb b--white footer-horizontal-line'></div>
                              <div className='flex footer-terms-main'>	
                                <p className='pv3 mr4 dim pointer footer-terms white' style={{ 'fontSize':'0.8rem' ,}}>TERMS</p>
                                <p className='pv3 mr4 dim pointer footer-privacy white' style={{ 'fontSize':'0.8rem' , }}>PRIVACY POLICY</p>
                                <p className='pv3 dim pointer footer-google white' style={{ 'fontSize':'0.8rem'  }}>OUR GOOGLE REVIEWS </p>
                              </div>

                            </div>	


                          </div>	
                        

                     




										
										</section>
                    <div style={{textAlign:'center', color:'white', paddingTop:'5%', marginBottom:'5%',fontSize:'1rem'}}>
                        
                            Flex DevsKe &reg; {new Date().getFullYear()}
                     
                    </div>
									</article>
								</div> 

          

       
      </div>
  )
}

  export default Footer;