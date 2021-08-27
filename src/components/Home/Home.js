import React from 'react';
import './Home.css';
import BannerSlider from './BannerSlider/BannerSlider';
import responsiveWebDesign from './responsive_Web_Design.png';
import whyus from './whyus.jpg';
import responsiveDesign from './responsiveWebDesign.mp4';
import ourMission from './ourMission.jpg';
import Footer from '../Footer/Footer';


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




		




							<div className='pv5' style={{'backgroundColor':'white'}}>
								
								<article className='flex ideal-web-flex-on-mobile' style={{'width':'82.4%', 'marginLeft':'8.8%', 'marginRight':'8.8%'}}>
									<section className='w-50  impre-des-image-on-mobile' style={{'paddingTop':'5vh','paddingBottom':'5vh'}}>
											<video  autoPlay loop muted playsInline  preload="auto" style={{'maxWidth':'100%'}}>
												<source src={responsiveDesign} type="video/mp4"/>
											</video>
											
									</section>


									<section className='w-50 pl4 tl ideal-web-headNpara-on-mobile' style={{'paddingTop':'15%'}}>
										<h2 className=' impre-des-heading-on-mobile' style={{'fontSize':'1.6rem'}}>Responsive Web Design
									  </h2>
										<p className='gray  impre-des-paragraph-on-mobile' style={{'fontSize':'1rem', 'paddingTop':'3vh'}}>We build responsive
										websites that looks great no matter it’s viewed on a computer, mobile
										or tablet. Delight and impress your visitors with a highly user-friendly
										website.
										</p>
									</section>

									
								</article>
							</div>
				

							


								<div className="cover bg-left bg-center-l" style={{"backgroundImage": "url("+ourMission+")","height":"100vh" }}>
									<article className="bg-black-80 " style={{"height":"100vh"}}>
										
										<section className=" " style={{'paddingTop':'45vh',}}>
											<h2 className="white our-mission-heading-on-mobile" style={{'fontSize':'4.6rem', 'marginLeft':'8.8%', 'marginRight':'8.8%'}}>Our Mission </h2>
											<p className="white mt3" style={{'fontSize':'1.0rem', 'marginLeft':'8.8%', 'marginRight':'8.8%'}}>Our mission is to alter the dynamics of the industry by providing trusted, supportive and quality web solution services to the clients that view our partnership as a strategic driver for their success.</p>
										
										</section>
									</article>
								</div> 
							



				</main>

				
			
				<footer>
					<Footer/>
				</footer>

				
				
				


		</>
	)
}


export default Home;