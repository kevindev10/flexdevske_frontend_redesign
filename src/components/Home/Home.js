import React from 'react';
import './Home.css';
import BannerSlider from './BannerSlider/BannerSlider';
import responsiveWebDesign from './responsive_Web_Design.png';
import bottomBanner from './bottomBanner.jpg';



function Home() {
	return(
		<	>
			 <section className='pb4 banner-slider' style={{ }}>
		       	<BannerSlider/>
		    </section>
				<main>
						<article className='pv6 first-heading-and-paragraph-on-mobile'>
							<h1 className='tc  ph4 heading-on-mobile' style={{'fontSize':'1.6rem', }}>Web Design & Development Nairobi</h1>
							<p className='tl pb4 ph5 paragraph-on-mobile gray  ' style={{'fontSize':'1.0rem', }} >
								We are a professional web design company based in Nairobi, Kenya.
								We create websites uniquely crafted for your business that generate more leads, allowing you to sell your products online, and raise awareness of your brand. Our beautifully designed websites will help you stand out from the crowd and help to convert your visitors into customers.
							</p>
						</article>



						<div className=' mb4 pv5 get-your-website-main-mobile-view ' style={			  {'backgroundColor':'#f9f9f9' }}>
				       <article className='flex  pv4 get-your-website-flex-mobile-view' style={{'width':'82.4%', 'marginLeft':'8.8%', 'marginRight':'8.8%'}} >
					        <h2 className=' pr4 tl get-your-website-paragraph-mobile-view ttu'  style={{'width':'40%', 'fontSize':'1.3rem', 'marginTop':'13%'}}>
									Get a website that shows your company's products and services effectively in front of the right customers at the right time with the right message</h2>
				              	<div className='pl4 get-your-website-image-mobile-view'  style={{'width':'60%', 'marginTop':'1%'}}>
						              <img src={responsiveWebDesign} alt='responsive web design'/>
												</div>
								</article>
						</div>





				</main>

				
			
				

				<img className ='' src ={bottomBanner} alt=''/>
				<img className ='' src ={bottomBanner} alt=''/>
				<img className ='' src ={bottomBanner} alt=''/>
				<img className ='' src ={bottomBanner} alt=''/>
				
				
				


		</>
	)
}


export default Home;