import React from 'react';
import Footer from '../Footer/Footer';
import Tawk from '../Tawk/Tawk';
import Blog001 from './Blog001/Blog001' ;
import banner from './banner.png';
import './Blog.css';
import WhatsappButton from '../WhatsappButton/WhatsappButton';

function Blog() {
 return(
   <>

        <div className='div-background-images-cover   'style={{"backgroundImage": "url(" + banner + ") ",  }}>

        <article className="bg-black-60  cover-banner-on-blog-page">

                    <section >
                      <p  className='white  blog-header  blog-heading-paragraph-on-mobile  ' style={{'fontSize':'1.0rem','marginLeft':'8.8%', 'marginRight':'8.8%','textAlign':'left', 'paddingLeft':'0.5%' }} >READ OUR LATEST
                      </p>
                      <h2 className='white blog-font-on-mobile ' style={{'fontSize':'4.6rem','marginLeft':'8.8%', 'marginRight':'8.8%', 'textAlign':'left'}} >BLOG
                      </h2>

                      
                     
                
                    </section>
                

                                  
        </article>  

        </div> 



      <Blog001/>

      
     <Tawk/>
     <footer>
       <Footer/>
     </footer>
     <WhatsappButton/>
   </>
 )
}


export default Blog;