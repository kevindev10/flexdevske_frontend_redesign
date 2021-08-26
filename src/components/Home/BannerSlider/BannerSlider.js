import React,{Component} from 'react';
import './BannerSlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner0 from './banner0.jpg'
import banner from './banner.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';





export default class AutoPlay extends Component {
  render() {
    const settings = {
      arrow:false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 10000,
      fade: true,
    };
    return (
      <div>
       
        
        <Slider {...settings}>



        <div >
                  <h3>
                    
                                    
                  <div className=" banner-slider-main " style={{"backgroundImage": "url(" + banner0 + ") ", "objectFit":"100%" , }} >
                      <div className=" banner-slider-semi-transparent-cover cover-color-0">
                        <nav className="dt w-100 mw8 center"> 
                            <div className="dtc v-mid tr pa3">
                            </div>
                        </nav> 
                       
                        <div className=" banner-slider-paragraph-positioning  " >
                        <h2 className=" mb0 slider-paragraph-on-mobile1" style={{'fontSize':'1.2rem'}}> Web Design & Development</h2>
                          <p className=" fw8  mt5 company-name-font  slider-paragraph-on-mobile2" >Flex DevsKe</p>
                           
                            
                        </div>
                      </div>
                    </div> 
                

                  </h3>  
              </div>










             <div >
                  <h3>
                    
                                    
                  <div className=" banner-slider-main " style={{"backgroundImage": "url(" + banner + ") ", "objectFit":"100%" , }} >
                      <div className=" banner-slider-semi-transparent-cover cover-color-1">
                        <nav className="dt w-100 mw8 center"> 
                            <div className="dtc v-mid tr pa3">
                            </div>
                        </nav> 
                       
                        <div className=" banner-slider-paragraph-positioning  " >
                        <h2 className=" mb0 slider-paragraph-on-mobile1" style={{'fontSize':'1.2rem'}}>Let's keep it simple</h2>
                          <p className=" fw8  mt5   slider-paragraph-on-mobile2" style={{'fontSize':'3.8rem' }}>We build websites that work</p>
                           
                            
                        </div>
                      </div>
                    </div> 
                

                  </h3>  
              </div>



             <div >
                  <h3>
                    
                                    
                  <div className=" banner-slider-main " style={{"backgroundImage": "url(" + banner2 + ") ", "objectFit":"100%" ,}} >
                      <div className=" banner-slider-semi-transparent-cover cover-color-2">
                        <nav className="dt w-100 mw8 center"> 
                            <div className="dtc v-mid tr pa3">
                            </div>
                        </nav> 
                         
                        <div className=" banner-slider-paragraph-positioning  " >
                        <h2 className=" mb0 slider-paragraph-on-mobile1" style={{'fontSize':'1.2rem'}}>Let's keep it simple</h2>
                          <p className=" fw8  mt5  slider-paragraph-on-mobile2" style={{'fontSize':'3.8rem', }}>We build websites that inspire</p>
                           
                            
                        </div>
                      </div>
                    </div> 
                   
                    

                  </h3>  
              </div>


             <div >
                  <h3>
                    
                                    
                  <div className=" banner-slider-main " style={{"backgroundImage": "url(" + banner3 + ") ", "objectFit":"100%" ,}} >
                      <div className=" banner-slider-semi-transparent-cover cover-color-3">
                        <nav className="dt w-100 mw8 center"> 
                            <div className="dtc v-mid tr pa3">
                            </div>
                        </nav> 
                         
                        <div className=" banner-slider-paragraph-positioning  " >
                        <h2 className="mb0 slider-paragraph-on-mobile1" style={{'fontSize':'1.2rem'}}>Let's keep it simple</h2>
                          <p className=" fw8  mt5  slider-paragraph-on-mobile2" style={{'fontSize':'3.8rem', }}>We build websites that deliver </p>
                          
                            
                        </div>
                      </div>
                    </div> 
                   
                   
                    

                  </h3>  
              </div>


                   

        </Slider>
      </div>
    );
  }
}
