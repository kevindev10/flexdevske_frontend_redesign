import React from 'react';
import './Home.css';
import BannerSlider from './BannerSlider/BannerSlider';
import bottomBanner from './bottomBanner.jpg';


function Home() {
	return(
		<	>
			 <section className='pb4 banner-slider' style={{ }}>
		       	<BannerSlider/>
		    </section>
				<main>
						<article className='pv6 first-heading-and-paragraph-on-mobile'>
							<h1 className='tc  ph4 heading-on-mobile' style={{'fontSize':'1.7rem', }}>Web Design & Development Specialists</h1>
							<p className='tl pb4 ph5 paragraph-on-mobile gray  ' style={{'fontSize':'1.1rem', }} >
								We are a professional web design company based in Nairobi, Kenya.
								We create websites uniquely crafted for your business that generate more leads, allowing you to sell your products online, and raise awareness of your brand. Our beautifully designed websites will help you stand out from the crowd and help to convert your visitors into customers.
							</p>
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