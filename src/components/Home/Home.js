import React from 'react';
import './Home.css';
import banner from './banner.jpeg';
import bottomBanner from './bottomBanner.jpg';


function Home() {
	return(
		<div>
			 <div>
				<div className ='spacer '></div>
				<img className ='banner' src ={banner} alt=''/>
			</div>
				

				<img className ='' src ={bottomBanner} alt=''/>
				<img className ='' src ={bottomBanner} alt=''/>
				<img className ='' src ={bottomBanner} alt=''/>
				<img className ='' src ={bottomBanner} alt=''/>
				
				
				


		</div>
	)
}


export default Home;