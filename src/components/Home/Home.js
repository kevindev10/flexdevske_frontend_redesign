import React from 'react';
import './Home.css';
import BannerSlider from './BannerSlider/BannerSlider';
import responsiveWebDesign from './responsive_Web_Design.png';
import bottomBanner from './bottomBanner.jpg';
import whyus from './whyus.jpg';


function Home() {
	return(
		<	>
			 <section className='pb4 banner-slider' style={{ }}>
		       	<BannerSlider/>
		    </section>
				<main>
						<article className='pv6 first-heading-and-paragraph-on-mobile'>
							<h1 className='tc  heading-on-mobile' style={{'fontSize':'1.6rem', 'marginLeft':'8.8%', 'marginRight':'8.8%'}}>Web Design & Development Nairobi</h1>
							<p className='tl pb4  paragraph-on-mobile gray  ' style={{'fontSize':'1.0rem','marginLeft':'8.8%', 'marginRight':'8.8%' }} >
								We are a professional web design company based in Nairobi, Kenya.
								We create websites uniquely crafted for your business that generate more leads, allowing you to sell your products online, and raise awareness of your brand. Our beautifully designed websites will help you stand out from the crowd and help to convert your visitors into customers.
							</p>
						</article>



						<div className='  pv5 get-your-website-main-mobile-view ' style={			  {'backgroundColor':'#f9f9f9' }}>
				       <article className='flex  pv4 get-your-website-flex-mobile-view' style={{'width':'82.4%', 'marginLeft':'8.8%', 'marginRight':'8.8%'}} >
					        <h2 className=' pr4 tl get-your-website-paragraph-mobile-view ttu'  style={{'width':'40%', 'fontSize':'1.3rem', 'marginTop':'13%'}}>
									Get a website that shows your company's products and services effectively in front of the right customers at the right time with the right message</h2>
				              	<div className='pl4 get-your-website-image-mobile-view'  style={{'width':'60%', 'marginTop':'1%'}}>
						              <img src={responsiveWebDesign} alt='responsive web design'/>
												</div>
								</article>
						</div>



						
							<article data-name="article-full-bleed-background">
								<div className="cf full-bleed-image" style ={{ backgroundImage: "url("+whyus+")" }} >
									<div className="   white full-bleed-transparent-cover " >
										<header className="  full-bleed-text-main" >
											<h3 className=" ttu full-bleed-text-header">WHY CHOOSE US</h3>
											<h4 className=" full-bleed-text-paragraph-1">Hire the Best – That’s Us!</h4>
										</header>
										<section >
											<p className="  full-bleed-text-paragraph-2" >
											Our team of experienced Web Designers & Developers has a proven track record of delivering successful web solutions covering various sectors. We are always waiting for the next challenge and are always eager to learn. Before creating your website, we take the time to learn about your company.
											</p>
											
										</section>
									</div>
								</div>
							</article>
					






				</main>

				
			
				

				<img className ='' src ={bottomBanner} alt=''/>
				<img className ='' src ={bottomBanner} alt=''/>
				<img className ='' src ={bottomBanner} alt=''/>
				<img className ='' src ={bottomBanner} alt=''/>
				
				
				


		</>
	)
}


export default Home;