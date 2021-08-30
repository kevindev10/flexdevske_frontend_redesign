import React from 'react';
import {Link} from 'react-router-dom';
import './OurWork.css'
import banner from './banner.jpg'
import bottomImg1 from	'./bottomImg1.jpg';
import bottomImg2 from	'./bottomImg2.jpg';
import bottomImg3 from	'./bottomImg3.jpg';
import bottomImg4 from	'./bottomImg4.jpg';
import bottomImg5 from	'./bottomImg5.jpg';
import Footer from '../Footer/Footer';



function OurWork() {
	return(
		<>
			 
				
				 <div className='div-background-images slider-image-size-on-mobile 'style={{"backgroundImage": "url(" + banner + ") ",  }}>

            <article className="bg-black-60 our-work-background-cover ">

                        <section  >
                          <h1  className='white tl  our-work-header header-paragraph-1-on-mobile ' style={{'fontSize':'4.6rem','marginLeft':'8.8%', 'marginRight':'8.8%' }} >
                          OUR WORK
                          </h1>

                          <h2 className='white tl' style={{'fontSize':'1.6rem','marginLeft':'8.8%', 'marginRight':'8.8%', }} >Some of our recent Website Design & Development Projects  </h2>
                          <p className='white tl' style={{'fontSize':'1.0rem','marginLeft':'8.8%', 'marginRight':'8.8%', 'marginTop':'2vh' }} >
                          Our websites and apps don’t just look good, they perform, they convert. If you are looking to generate enquiries, increase sales or maximise awareness we have the in-house web design and development teams in place to achieve this.
                          </p>
                    
                        </section>
	                   

                      	              
	         </article>  

         </div>  
	    





	    		<div className='pv5 cards-backgound-color cards-padding-vertical-on-mobile ' >
				<div>
						<section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
						  
						  <article class=" ph3 ph0-l portfolio-on-mobile-article-padding">
						    <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
						      <div class="w-100 w-50-ns pr3-ns order-2 order-1-ns bg-white portfolio-on-mobile-pararaph-width">
						        <h1 class="f5  mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding  ">LUSHROOM FURNITURE</h1>
						        <p class="f5 f5-l lh-copy   ph4 tc pt2">
						          Website Design / Development
						        </p>
						        <div className='tc pt4'>
						        	<a target="_blank" rel="noreferrer" href="https://lushroom.furniture.flexdevske.co.ke/"> <button className='pa2 grow  shadow-5 f7 buttonMiddle-styling2  button-links-on-mobile' >VIEW DETAILS</button> </a>
						        </div>
						        
						      </div>
						      <div class=" order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width">
						        <img src={bottomImg1} class="db" alt="dimly lit room with a computer interface terminal."/>
						      </div>
						    </div>
						   
						  </article>
						  </section>

						  <section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
							  
							  <article class="portfolio-on-mobile-article-second-paragraph">
							    <p class="db  ph3 ph0-l no-underline black portfolio-on-mobile-article-padding " href="#0">
							      <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
							        <div class=" mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width-second-image ">
							          <img src={bottomImg2} class="db" alt=" dimly lit room with a computer interface terminal."/>
							        </div>
							        <div class="w-100 w-50-ns pl3-ns bg-white portfolio-on-mobile-pararaph-width">
							          <h1 class="f5   mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding-second-paragraph">GIGA . PLANT & EQUIPMENT </h1>
							          <p class="f5 f5-l lh-copy ph4 tc pt2">
							            Website Design / Development
							          </p>
							            <div className='tc pt4'>
											<a target="_blank" rel="noreferrer" href="https://giga.plant.and.equipment.flexdevske.co.ke/"> <button className='pa2 grow  shadow-5 f7 buttonMiddle-styling2  button-links-on-mobile' >VIEW DETAILS</button> </a>								        </div>
							         
							        </div>
							      </div>
							    </p>
							  </article>
							 </section> 

<section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
						  
						  <article class=" ph3 ph0-l portfolio-on-mobile-article-padding">
						    <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
						      <div class="w-100 w-50-ns pr3-ns order-2 order-1-ns bg-white portfolio-on-mobile-pararaph-width">
						        <h1 class="f5  mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding  ">WATER LIFE NGO</h1>
						        <p class="f5 f5-l lh-copy   ph4 tc pt2">
						         Website Design / Development
						        </p>
						        <div className='tc pt4'>
									<a target="_blank" rel="noreferrer" href="https://water.life.flexdevske.co.ke/"> <button className='pa2 grow  shadow-5 f7 buttonMiddle-styling2  button-links-on-mobile' >VIEW DETAILS</button> </a>						        </div>
						        
						      </div>
						      <div class=" order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width">
						        <img src={bottomImg3} class="db" alt="dimly lit room with a computer interface terminal."/>
						      </div>
						    </div>
						   
						  </article>
						  </section>



							 <section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
							  
							  <article class="portfolio-on-mobile-article-second-paragraph">
							    <p class="db  ph3 ph0-l no-underline black portfolio-on-mobile-article-padding " href="#0">
							      <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
							        <div class=" mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width-second-image ">
							          <img src={bottomImg4} class="db" alt=" dimly lit room with a computer interface terminal."/>
							        </div>
							        <div class="w-100 w-50-ns pl3-ns bg-white portfolio-on-mobile-pararaph-width">
							          <h1 class="f5   mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding-second-paragraph">BIONIST MERCHANTS</h1>
							          <p class="f5 f5-l lh-copy ph4 tc pt2">
							          Website Design / Development
							          </p>
							            <div className='tc pt4'>
											<a target="_blank" rel="noreferrer" href="https://bionist.merchants.flexdevske.co.ke/"> <button className='pa2 grow  shadow-5 f7 buttonMiddle-styling2  button-links-on-mobile' >VIEW DETAILS</button> </a>								        </div>
							         
							        </div>
							      </div>
							    </p>
							  </article>
							 </section>


							 <section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
						  
						  <article class=" ph3 ph0-l portfolio-on-mobile-article-padding">
						    <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
						      <div class="w-100 w-50-ns pr3-ns order-2 order-1-ns bg-white portfolio-on-mobile-pararaph-width">
						        <h1 class="f5  mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding">INSTRUOUS CONSTRUCTION</h1>
						        <p class="f5 f5-l lh-copy ph4 tc pt2">
						         Website Design / Development
						        </p>

					            <div className='tc pt4'>
									<a target="_blank" rel="noreferrer" href="https://instruous.construction.flexdevske.co.ke/"> <button className='pa2 grow  shadow-5 f7 buttonMiddle-styling2  button-links-on-mobile' >VIEW DETAILS</button> </a>						        </div>

						      </div>
						      <div class=" order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width">
						        <img src={bottomImg5} class="db" alt=" dimly lit room with a computer interface terminal."/>
						      </div>
						    </div>
						   
						  </article>
						  </section>
				</div>
			</div>





			  <footer>
          <Footer/>
        </footer>


		
		</>


	);
}

export default OurWork;