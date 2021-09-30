import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Contact.css';
import { Form, Field } from "react-final-form";
import banner from './banner.jpg';
import ReCAPTCHA from "react-google-recaptcha";
import Footer from '../Footer/Footer';
import Tawk from '../Tawk/Tawk';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import WhatsappButton from '../WhatsappButton/WhatsappButton';









const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));



const required = value => (value ? undefined : "*Required");
const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);




 



class Contact extends Component {

  constructor(props){
		super(props);
	
      this.state ={
        reCaptcha :'',
        apiResponseMessage:'',
        sent:false
      }
      this.myRef = React.createRef();
		
	}

  onReCaptureChange = (value) =>{
		
		this.setState({reCaptcha:value})
		
	}


  onSubmit = async values => {
   
    await sleep(300);
   
    ReactGA.event({
      category:'Button',
      action:'Clicked send button from get a free quote'
    })

    fetch('http://192.168.100.4:3001/contactUs', {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
      
      email:values.email,
      phone:values.phone,
      message:values.message,
      yourName:values.name,
			websiteType:values.websiteType,
      companyType:values.companyType,
      pages:values.pages,
      urgency:values.urgency,
      captcha:this.state.reCaptcha
      
     
      })
    })
    .then(response =>response.json())
    .then(data => {
      
       if (data.success===false){
         this.setState({sent:false})
         this.setState({apiResponseMessage:data.msg})
         

				this.myRef.current.scrollIntoView({ behavior: 'smooth',block: 'center',	inline: 'center'})
	
				
			}else if(data.success===true){
        this.setState({sent:true})
        this.setState({apiResponseMessage:data.msg})
         

				this.myRef.current.scrollIntoView({ behavior: 'smooth',block: 'center',	inline: 'center'})
      }
      
    })

   this.captcha.reset();

    
  };

 

 

  render(){


    

    return(

      <>
   
                    <Helmet>
                      <title>Contact us</title>
                      <meta name="description" content="Get A free Quote" />
                    </Helmet>
                
   
   
   
                  <div className='div-background-images  'style={{"backgroundImage": "url(" + banner + ") ",  }}>
      
                     <article className="bg-black-60 our-work-background-cover ">
      
                              <section  >
                                <h1  className='white tl  our-work-header header-on-mobile header-margin-top-on-mobile-fix' style={{'fontSize':'4.6rem','marginLeft':'8.8%', 'marginRight':'8.8%' }} >
                                GET IN TOUCH
                                </h1>
      
                                
                                <p className='white tl header-paragraph-1-on-mobile marginTop-on-mobile-fix' style={{'fontSize':'1.0rem','marginLeft':'8.8%', 'marginRight':'8.8%','marginTop':'-4vh' }} >
                                Whether you are stopping by to say ‘hi’ or to talk about your next website, get in touch, we can’t wait to hear from you.
                                </p>
                          
                              </section>
                          
      
                                            
                  </article>  
      
                </div> 
      
              <main>
                  <div className='pv4 flex contact-main-flex' style={{'width':'82.4%' ,'marginLeft':'8.8%', 'marginRight':'8.8%'}}>
      
                        <article className='contact-getintouch-width' style={{'width':'40%'}}>
                                      
                        <h2 className="  mb3 mt4 tl contact-headings-on-mobile" style={{'fontSize':'1.8rem' }}>
                          CONTACT US
      
                        </h2>
                        <h2 className="  mt4   mb4 " style={{'color':'#3F1717', 'fontSize':'1.4rem'}}>
                          
                          Telephone <i className="fas fa-phone fa-1x ml3 blue"></i>
                        </h2>
                        
                        <a href="tel:0789563415" className='instead-of-gray no-underline ' style={{ 'fontSize':'1.0rem'}}> (+254) 0789563415</a><br/><br/>
      
                        <a href="tel:0721490923" className='instead-of-gray no-underline' style={{ 'fontSize':'1.0rem'}}>(+254) 0721490923</a><br/>
      
      
                        <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>
      
      
      
      
                        <h2 className="  mt0   mb4 " style={{'color':'#3F1717', 'fontSize':'1.4rem'}}>
                          
                          WhatsApp <i className=" fab fa-whatsapp-square fa-1x ml3 green "></i>
                        </h2>
                        
                        <a href="https://wa.me/254789563415" target="blank" rel="noreferrer" className='no-underline instead-of-gray'  style={{ 'fontSize':'1.0rem'}}>	(+254) 0789563415  </a>
      
      
                        <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>
      
      
      
      
                        <h2 className="  mt0  mb4  " style={{'color':'#3F1717',  'fontSize':'1.4rem'}}>
                          Email <i className="fa fa-envelope fa-1x ml3 blue" aria-hidden="true"></i>
                          </h2>
                          <p className='pv3 email-us'>
                          <a href="mailto:sales@flexdevske.co.ke"  className=' instead-of-gray no-underline dim '  style={{"wordWrap": "breakWord", 'fontSize':'1.0rem'}} >sales@flexdevske.co.ke </a>							
                        </p>
      
                        <a href="mailto:flexdevske@gmail.com"  className=' instead-of-gray no-underline dim  '  style={{"wordWrap": "breakWord", 'fontSize':'1.0rem'}} >flexdevske@gmail.com </a>		
                          
                        
      
      
                        <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>
      
      
      
      
                        <h2 className="f4 mid-instead-of-gray lh-title mt0  fw9 mb4" style={{'color':'#3F1717', 'fontSize':'1.4rem'}}>
                          Address <i className="fa fa-map-marker fa-1x ml3 red" aria-hidden="true"></i>
                        </h2>
                        <p className="f4   instead-of-gray  "  style={{"wordWrap": "breakWord", 'fontSize':'1.0rem'}}> 
                        P.O BOX 26560 00504, </p><br/>
                        <p className="f4   instead-of-gray  "  style={{"wordWrap": "breakWord", 'fontSize':'1.0rem'}}> Nairobi, Kenya. </p>
                        <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>
                          
                        
                        
      
                      </article>
      
      
      
                      <div className='contact-getfreequote-width' style={{'width':'60%'}} >
                      <h2  className=" mb3 mt4 tl contact-headings-on-mobile" style={{'fontSize':'1.9rem', }}>GET A FREE QUOTE!</h2>

                      <div>


                                { !this.state.sent ?
                                (




                                  <article className="br2 ba  b--black-10 mv4    getfreequote-main" style={{'backgroundColor':'#FBFBFB'}} >
                                              <main className="pa4 actual-form-padding  ">

                                              <p className="  ph0 mh0 pv2" style={{'color':'#3F1717', 'fontSize':'1.0rem' }}>
                                                Thanks for contacting Flex DevsKe. How can we help you today
                                              </p>

                                                  <Form
                                                
                                                onSubmit={this.onSubmit}
                                                render={({ handleSubmit, reset, submitting, pristine, values }) => (
                                                  <form   onSubmit={handleSubmit}>
                                                

																									<div className=' pv2 tl flex  mt4 flex-select-on-mobile select-options-property-font' style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>
																										<label className='w-30 select-label-on-mobile '>Type of website :</label>
																										<Field name="websiteType" component="select" className=" select-bx-stylin  instead-of-gray br2 pv3 ph3 w-70 shadow-5 input-box-styling" style={{ 'fontSize':'1.0rem', 'backgroundColor':'#FBFBFB'}} >
																											<option/>
																											<option value="new-website">I need a new website</option>
									         													   <option value="website-redesign">I need  a redesign of my current website</option>
																										
																										</Field>
                                                    
																									</div>




                                                  <div className=' pv2 tl flex  mt4 flex-select-on-mobile select-options-property-font' style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>
																										<label className='w-30  select-label-on-mobile  '>Website category :</label>
																										<Field name="companyType" component="select" className=" select-bx-stylin  instead-of-gray br2 pv3 ph3 w-70 shadow-5 input-box-styling" style={{ 'fontSize':'1.0rem', 'backgroundColor':'#FBFBFB'}} >
																										<option/>	
                                                    <option value="personal-website">Personal website</option>
                                                    <option value="startup-website" >Startup business </option>
                                                    <option value="sme-website" >Small and medium-sized enterprises ( SME )</option>
                                                    <option value="corporate-website">Corporate</option>
                                                    <option value="ngo-local-website">Non profit organization ( LOCAL ) </option>
                                                    <option value="ngo-intenational-website">Non profit organization ( INTERNATIONAL ) </option>
                                                    <option value="e-commerce-website">E-commerce ( COMING SOON!)</option>
																										
																										</Field>
																									</div>



                                                  <Field name="message" validate={required}>
                                                    {({ input, meta }) => (
                                                      <div  className="mt4" >
                            
                                                        <label className="db   f4 pb3 select-options-property-font"
                                                        htmlFor="message" 
                                                        style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>
                                                         Okay great — We'd love to help you with this project. Can you explain a little more about what you exactly need?
                                                        </label>
                                                      <textarea {...input}
                                                        type="text"
                                                        placeholder="Your message"
                                                        className="input-box-styling tl  br2 shadow-5  instead-of-gray  pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                                        rows="15" 
                                                        cols="50" />
                                                        {meta.error && meta.touched && <span className='meta-era'>{meta.error}</span>}
                                                      </div>
                                                    )}
                                                  </Field>
                      



                                                  <div className=' pv2 tl flex  mt4 flex-select-on-mobile  select-options-property-font' style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>
																										<label className='w-30  select-label-on-mobile '>	Number of website pages - Estimate :</label>
																										<Field name="pages" component="select" className=" select-bx-stylin  instead-of-gray br2 pv3 ph3 w-70 shadow-5 input-box-styling" style={{ 'fontSize':'1.0rem', 'backgroundColor':'#FBFBFB'}} >
                                                        <option/>
                                                        <option value="1-5"> 1 to 5</option>
                                                        <option value=" 6-10">6 to 10 </option>
                                                        <option value="11-20">11 to 20</option>
                                                                          
																										</Field>
																									</div>


                                                  <div className=' pv2 tl flex  mt4 flex-select-on-mobile  select-options-property-font' style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>
																										<label className='w-30  select-label-on-mobile '>	How soon do you require the website :</label>
																										<Field name="urgency"  component="select" className=" select-bx-stylin  instead-of-gray br2 pv3 ph3 w-70 shadow-5 input-box-styling" style={{ 'fontSize':'1.0rem', 'backgroundColor':'#FBFBFB'}} >
                                                      <option/>
                                                      <option value="1-2-weeks"> 1 to 2 weeks</option>
                                                      <option value=" 3-4-weeks">3 to 4 weeks </option>
                                                      <option value="1-2-months">1 to 2 months</option>
                                                                          
																										</Field>
																									</div>







                                                    <Field name="name" validate={required}  >
                                                      {({ input, meta }) => (
                                                        <div className="mt3 flex input-boxes-flex-on-mobile ">
                            
                                                          <label className="w-30 db  select-options-property-font" 
                                                          htmlFor="yourName"
                                                          style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>
                                                          Name :
                                                          </label>
                            
                                                          <input {...input} 
                                                          type="text" 
                                                          
                                                          className="input-box-styling instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
                                                          style={{ 'fontSize':'1.0rem'}}
                                                          />
                                                          {meta.error && meta.touched && <span className='meta-era'>{meta.error}</span>}
                                                        </div>
                                                      )}
                                                    </Field>
                            
                                                    
                                                    <Field name="email" validate={required}  >
                                                      {({ input, meta }) => (
                                                        <div className="mt3 flex input-boxes-flex-on-mobile">
                            
                                                          <label className="w-30 db  select-options-property-font"
                                                          htmlFor="email-address" 
                                                          style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>
                                                          Email :
                                                          </label>
                            
                                                          <input {...input} 
                                                          type="text" 
                                                          
                                                          className=" input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
                                                          />
                                                          {meta.error && meta.touched && <span className='meta-era'>{meta.error}</span>}
                                                        </div>
                                                      )}
                                                    </Field>
                                                    
                            
                            
                            
                            
                                                  <Field  name="phone" validate={composeValidators(required, mustBeNumber)}
                                                  >
                            
                                                    {({ input, meta }) => (
                                                      <div  className="mv3 flex input-boxes-flex-on-mobile">
                            
                                                        <label
                                                        className="w-30 db  select-options-property-font " 
                                                        htmlFor="phone"
                                                        style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>
                                                        Phone No. :
                                                        </label>
                                                        <input {...input}
                                                        type="text" 
                                                        
                                                        className="input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70 " 
                                                        />
                                                        {meta.error && meta.touched && <span className='meta-era'>{meta.error}</span>}
                                                      </div>
                                                    )}
                                                  </Field>
                            
                            
                                                
                                                 
                      
                      
                      
                                                  
                                                  <p className=' red pv4 dim  fw8' style={{ 'fontSize':'1.0rem'}}>* Fill in all details before sending.</p>
                                                  <h2 ref={this.myRef}  className=' orange tl dim fw8' style={{'fontSize':'1.0rem'}}>{this.state.apiResponseMessage}</h2>	
                                                  
                                                  <div className='pt2 pb4 reCaptcha-on-mobile'  >
                                                      <ReCAPTCHA
                                                        key="normal-recaptcha"
                                                        size="normal"
                                                        sitekey="6LegIIMcAAAAAOC219gt52xjBR1lzsdDDHTyzP4o"
                                                        onChange={this.onReCaptureChange}
                                                        ref={e => (this.captcha = e)}
                                                        theme="dark"
                                                      />
                      
                                                  </div>
                                                      
                                                  
                                                
                      
                      
                                
                                                      <div className="buttons">
                                                        <Button variant="contained"  
                                                        type="submit"
                                                        disabled={submitting}
                                                        className='button-links-on-mobile ' 
                                                        style={{'backgroundColor':'black', 'color':'white', 'fontSize':'1.0rem', 'padding':'10px 30px 10px 30px', }} 
                                                        >
                                                          SEND
                                                        </Button>
                                                        
                                                      </div>
                                                      
                                                          </form>
                                                        )}
                                                     />
                                                  </main>
                                    </article>





                                 ):
                                 (



                                  <div>
                                      <h2 ref={this.myRef}   className=' orange tl dim fw8' style={{'fontSize':'1.2rem'}}>{this.state.apiResponseMessage}</h2>
                                    <div className ='mt2 pv2'>
                                   

                                    <Button  variant="contained"
                                    className='button-links-on-mobile ' 
                                    style={{'backgroundColor':'black', 'color':'white', 'fontSize':'1.0rem', 'padding':'10px 30px 10px 30px', }}
                                    onClick={()=> window.location.reload()}
                                    >
                                      GET A NEW QOUTE
                                    </Button>
                
                                    </div>
                                      
                                            
                                
                                  </div>	






                                  )}


                      </div>

                      
      
              </div>  
              </div>
              
              </main>


              <Tawk/>

            <footer	>
              <Footer/>
            </footer>
						<WhatsappButton/>
       
      </>   
       
      );



  }
 
}


export default Contact;
