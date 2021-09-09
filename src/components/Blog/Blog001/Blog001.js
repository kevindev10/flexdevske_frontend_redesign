import React from 'react';
import{Link} from 'react-router-dom';
import moneyTree from './moneyTree.jpg';
import WhatIsAWebsite from './WhatIsAWebsite.mp4';



function Blog001() {
 return(
   <>
      <div style={{'width':'82.4%', 'marginLeft':'8.8%', 'marginRight':'8.8%'}} >


        <div className='flex mt4'>


          <div className='mr3' style={{'width':'70%'}}>
              
                <article>
                  <header>
                    <h1 style={{'fontSize':'2.25rem', 'lineHeight':'50px', 'color':'#1a1718'}}>The Importance Of Having A Website For Your Business In 2021/2022 </h1>
                      <div className="byline  mt4 flex" style={{'fontSize':'0.8rem',}}>
                          <address className="author  mr2 " style={{'fontStyle':'normal',}} >Post by | <a rel="author" href="mailto:flexdevske@gmail.com" className='fw8 no-underline tracked ml1' style={{'fontSize':'1.0rem',}} >Admin</a></address>  <time pubdate datetime="2021-09-13" title="September 13th, 2021" className='  fw8  ml3 tracked' style={{'fontSize':'0.95rem',}}>September 13th, 2021.</time>
                      </div>
                   
                  </header>
                  <p className ='mt4 pb3 ' style={{'fontSize':'1.0rem', 'lineHeight':'26px', 'color':'#323a45'}}>
                  Once you start thinking about it, it is easy to get excited about the opportunities that arise from having a website. However, in my experience as a website designer, many businesses in Kenya still do not understand the value of having one. A website not only helps businesses promote and sell their products and services, but it also allows them to distinguish themselves from their competitors, especially for customers who rely heavily on the Internet to learn everything about a company. 
                  </p>
                  <p className ='mb4 ' style={{'fontSize':'1.0rem', 'lineHeight':'26px', 'color':'#323a45'}}>
                  A website is one of the most crucial business assets for sharing information, building credibility, and standing out in crowded marketplaces.
                   Here at 
                   <Link  to='/contact' className='fw8 ph1 black no-underline dim'>Flex devsKe</Link>
                   we offer web design and development services that help businesses exploit their untapped potential in the online marketplace. The following are the reasons why your business needs a website in 2021-2022 
                  </p>

                  <img src={moneyTree} alt='money tree' className='pv2 mb4'style={{'width':'100%', }}/>

                </article> 



                <article className='mv4'>
								
										<header>
											<h2 style={{'fontSize':'1.8rem', 'lineHeight':'50px', 'color':'#1a1718'}}>What is a website?  </h2>
											
										</header>
										<section >
											<p className ='mt4 pb3 ' style={{'fontSize':'1.0rem', 'lineHeight':'26px', 'color':'#323a45'}}>
                        A                         
                        <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines" target="blank" rel="noreferrer" className='fw8 ph1 black no-underline dim'>website</a>
                         is a collection of linked web pages(documents) hosted on a domain.<br/>
                        A domain name (or just 'domain') is the name of a website e.g www.mybiashara.co.ke, that gets hosted by an 
                        
                        <a href="https://domains.safaricom.co.ke/" target="blank" rel="noreferrer" className='fw8 ph1 black no-underline dim'>Internet Service Provider - ISP.</a><br/>

                        Hosting refers to an online service that allows you to publish your website files onto the internet. So, anyone who has access to the internet has access to your website.

											</p>
											
										</section>

                    <section className=' tc' style={{'paddingTop':'5vh','paddingBottom':'5vh'}}>
											<video  autoPlay loop muted playsInline  preload="auto" style={{'maxWidth':'100%'}}>
												<source src={WhatIsAWebsite} type="video/mp4"/>
											</video>
											
									</section>
									
						  	</article>



            </div>
          





            <div className='ml3' style={{'width':'30%'}}>
                <p>
                  
                  Note that the development build is not optimized.
                  To create a production build, use npm run build.
                  
                </p>
            </div>







        </div>
          
       

      </div>
    
   </>
 )
}

export default Blog001;