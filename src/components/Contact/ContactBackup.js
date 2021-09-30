import React,{Component} from 'react';
import './Contact.css';
import banner from './banner.jpg';
import Button from '@material-ui/core/Button';
import Footer from '../Footer/Footer';
import Tawk from '../Tawk/Tawk';
import WhatsappButton from '../WhatsappButton/WhatsappButton';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';


const intialState ={
			sent:1,
			email:'',
			companyType:'sme-website',
			phone:'',
			message:'',
			websiteType:'new-website',
			pages:'1-5',
			urgency:'1-2-weeks',
			companyName:'',
			yourName:'',
			
		}
class Contact extends Component {
	


	constructor(props){
		super(props);
		this.state = intialState;
		this.myRef = React.createRef();

		this.onButtonSubmit = this.onButtonSubmit.bind(this)
	}


	
	onYourNameChange = (event) =>{
		this.setState({yourName:event.target.value})
		
	}

	onEmailChange = (event) =>{
		this.setState({email:event.target.value})
	}

	onCompanyTypeChange = (event) =>{
		this.setState({companyType:event.target.value})
	}

	onPhoneChange = (event) =>{
		this.setState({phone:event.target.value})
	}

	onMessageChange = (event) =>{
		this.setState({message:event.target.value})
	}

	onWebsiteTypeChange = (event) => {
		this.setState({websiteType:event.target.value})
	}

	onPagesChange = (event) =>{
		this.setState({pages:event.target.value})
	}

	onUrgencyChange = (event) =>{
		this.setState({urgency:event.target.value})
	}

	onCompanyNameChange  = (event) =>{
		this.setState({companyName:event.target.value})

	}

	handleFruitChange = (event) => {
		
    this.setState({fruitType: event.target.value});
    
  }





	onButtonSubmit = (event) =>{

		 event.preventDefault();
		 ReactGA.event({
			 category:'Button',
			 action:'Clicked send button from get a free quote'
		 })
		fetch('https://core.server10.flexdevske.co.ke/sent', {
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
			


			email:this.state.email,
			companyType:this.state.companyType,
			phone:this.state.phone,
			message:this.state.message,
			websiteType:this.state.websiteType,
			pages:this.state.pages,
			urgency:this.state.urgency,
			companyName:this.state.companyName,
			yourName:this.state.yourName,
			fruitType:this.state.fruitType
			})
		})
		.then(response =>response.json())
		.then(data => {
			if (data==="success"){
				this.setState({sent:true})
				this.myRef.current.scrollIntoView({ behavior: 'smooth',block: 'center',	inline: 'center'})
				
				
			}else{
				this.setState({sent:false})
				this.myRef.current.scrollIntoView({ behavior: 'smooth',block: 'center',	inline: 'center'})
			}

			
		})

		this.setState(intialState);

	}


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
			    			
							    <h2 className="  mb3 mt4 tl " style={{'fontSize':'1.8rem' }}>
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
			    			
			    	<h2  className=" mb3 mt4 tl " style={{'fontSize':'1.9rem', }}>GET A FREE QUOTE</h2>

			    	<div >
				    		{this.state.sent === 1 ? 
			    		(

			    		<div>

			    			<article className="br2 ba  b--black-10 mv4    getfreequote-main" style={{'backgroundColor':'#FBFBFB'}} >
								<main className="pa4 black-80  ">
								  <div className="" >
								    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
								      <legend className="  ph0 mh0" style={{'color':'#3F1717', 'fontSize':'1.0rem' }}>
								      	Thanks for contacting Flex DevsKe. How can we help you today
								      </legend>






								      <div className=' pv2 tl    mt4 select-options-property-font' style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>


						    				 Type of website :
									          <select value={this.state.websiteType} onChange={this.onWebsiteTypeChange} className=" select-bx-stylin ml2 instead-of-gray br2 pv2  ph2" style={{ 'fontSize':'1.0rem'}} >
									            <option value="new-website">I need a new website</option>
									            <option value="website-redesign">I need  a redesign of my current website</option>
									            
									          </select>

						    		
						    		    </div>




									

									<div className='pv2 tl   mt4 select-options-property-font' style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>


						    				Website category :
									          <select value={this.state.companyType} onChange ={this.onCompanyTypeChange} className=" select-bx-stylin ml2 instead-of-gray br2 pv2  ph2"  style={{ 'fontSize':'1.0rem'}}>
									            <option value="personal-website">Personal website</option>
									            <option value="startup-website">Startup business </option>
									            <option value="sme-website">Small and medium-sized enterprises ( SME )</option>
									            <option value="corporate-website">Corporate</option>
									            <option value="ngo-local-website">Non profit organization ( LOCAL ) </option>
									            <option value="ngo-intenational-website">Non profit organization ( INTERNATIONAL ) </option>
									            <option value="e-commerce-website">E-commerce ( COMING SOON!)</option>
									          </select>

						    		
						    		    </div>







								      <div className="mt5 ">
								        <label className="db   f4 pb3 select-options-property-font" htmlFor="message" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}> Okay great — We'd love to help you with this project. Can you explain a little more about what you exactly need?</label>
								        <textarea
								         onChange ={this.onMessageChange}
								         className="input-box-styling tl  br2 shadow-5  instead-of-gray  pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                         style={{ 'fontSize':'1.0rem'}}
								         type="text" 
								         name="message"
								         placeholder="Your message. "
								         id="message" 
								         
								         rows="15"
								         cols="50"
								        >
								        </textarea>

								      </div>







								      <div className='pv2 tl mt4 select-options-property-font' style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>


						    				Number of website pages - Estimate :
									          <select value={this.state.pages} onChange ={this.onPagesChange} className=" select-bx-stylin ml2 instead-of-gray br2 pv2  ph2" style={{ 'fontSize':'1.0rem'}}>
									            <option value="1-5"> 1 to 5</option>
									            <option value=" 6-10">6 to 10 </option>
									            <option value="11-20">11 to 20</option>
									           
									          </select>

						    		
						    		    </div>







									          <div className='pv2 tl mt4 select-options-property-font' style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>


							    				How soon do you require the website :
										          <select value={this.state.urgency} onChange ={this.onUrgencyChange} className=" select-bx-stylin ml2 instead-of-gray br2 pv2   ph2" style={{ 'fontSize':'1.0rem'}} >
										            <option value="1-2-weeks"> 1 to 2 weeks</option>
										            <option value=" 3-4-weeks">3 to 4 weeks </option>
										            <option value="1-2-months">1 to 2 months</option>
										           
										          </select>

							    		
							    		    </div>







								      <div className="mv3 flex input-boxes-flex-on-mobile " >
								        <label className="w-30 db  select-options-property-font " htmlFor="companyName" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>Organization name :</label>
								        <input
								        	 onChange ={this.onCompanyNameChange}
									         className="input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70 " 
                           style={{ 'fontSize':'1.0rem'}}
									         type="text" 
									         name="companyName" 
									          id="companyName"
									          
									     />
								      </div>



								      <div className="mt3 flex input-boxes-flex-on-mobile">
								        <label className="w-30 db  select-options-property-font" htmlFor="yourName" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>Your Name :</label>
								        <input
								         onChange ={this.onYourNameChange}
								         className="input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
                         style={{ 'fontSize':'1.0rem'}}
								         type="name" 
								         name="yourName" 
								          id="yourName" 
								          />

								      </div>




								      <div className="mt3 flex input-boxes-flex-on-mobile">
								        <label className="w-30 db  select-options-property-font" htmlFor="email-address" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>Email :</label>
								        <input 

								        	onChange ={this.onEmailChange}
									        className=" input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
                          style={{ 'fontSize':'1.0rem'}}
									        type="email"
									        name="email-address"  
									        id="email-address"
									        
									      />
								      </div>



								      	<div className="mv3 flex input-boxes-flex-on-mobile">
								        <label className="w-30 db  select-options-property-font " htmlFor="phone" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>Phone :</label>
								        <input
								        	 onChange ={this.onPhoneChange}
									         className="input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70 " 
                           style ={{ 'fontSize':'1.0rem'}}
									         type="tel" 
									         name="phone" 
									          id="phone"
									          
									     />
								      </div>




								      <p className=' red pv4 dim  fw8' style={{ 'fontSize':'1.0rem'}}>* Fill in all details before sending.</p>

								     
								    </fieldset>
								    
								       
								     

                      <Button variant="contained"  
                      onClick ={this.onButtonSubmit}
                      type="submit" 
                      value="Send"
                      className='button-links-on-mobile ' 
                      style={{'backgroundColor':'black', 'color':'white', 'fontSize':'1.0rem', 'padding':'10px 30px 10px 30px', }} >
                      SEND
                      </Button>
								      
								    
								    
								  </div>
								</main>
							</article>
				
			    	   </div>
				






			    		) : !this.state.sent ?

							(



								

								<div  >	
									
									
									<h2 ref={this.myRef}  className=' red dim not-sent-on-mobile' style={{'fontSize':'1.0rem'}}>*Not sent. Kindly fill in all the details.</h2>	

                  <div>

<article className="br2 ba   b--black-10 mv4    getfreequote-main" style={{'backgroundColor':'#FBFBFB'}} >
<main className="pa4 black-80  ">
  <div className="" >
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="  ph0 mh0" style={{'color':'#3F1717', 'fontSize':'1.0rem' }}>
        Thanks for contacting Flex DevsKe. How can we help you today
      </legend>






      <div className=' pv2 tl    mt4 select-options-property-font' style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>


         Type of website :
            <select value={this.state.websiteType} onChange={this.onWebsiteTypeChange} className=" select-bx-stylin ml2 instead-of-gray br2 pv2  ph2" style={{ 'fontSize':'1.0rem'}} >
              <option value="new-website">I need a new website</option>
              <option value="website-redesign">I need  a redesign of my current website</option>
              
            </select>

    
        </div>




  

  <div className='pv2 tl   mt4 select-options-property-font' style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>


        Website category :
            <select value={this.state.companyType} onChange ={this.onCompanyTypeChange} className=" select-bx-stylin ml2 instead-of-gray br2 pv2  ph2"  style={{ 'fontSize':'1.0rem'}}>
              <option value="personal-website">Personal website</option>
              <option value="startup-website">Startup business </option>
              <option value="sme-website">Small and medium-sized enterprises ( SME )</option>
              <option value="corporate-website">Corporate</option>
              <option value="ngo-local-website">Non profit organization ( LOCAL ) </option>
              <option value="ngo-intenational-website">Non profit organization ( INTERNATIONAL ) </option>
              <option value="e-commerce-website">E-commerce ( COMING SOON!)</option>
            </select>

    
        </div>







      <div className="mt5 ">
        <label className="db   f4 pb3 select-options-property-font" htmlFor="message" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}> Okay great — We'd love to help you with this project. Can you explain a little more about what you exactly need?</label>
        <textarea
         onChange ={this.onMessageChange}
         className="input-box-styling tl  br2 shadow-5  instead-of-gray  pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
         style={{ 'fontSize':'1.0rem'}}
         type="text" 
         name="message"
         placeholder="Your message. "
         id="message" 
         
         rows="15"
         cols="50"
        >
        </textarea>

      </div>







      <div className='pv2 tl mt4 select-options-property-font' style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>


        Number of website pages - Estimate :
            <select value={this.state.pages} onChange ={this.onPagesChange} className=" select-bx-stylin ml2 instead-of-gray br2 pv2  ph2" style={{ 'fontSize':'1.0rem'}}>
              <option value="1-5"> 1 to 5</option>
              <option value=" 6-10">6 to 10 </option>
              <option value="11-20">11 to 20</option>
             
            </select>

    
        </div>







            <div className='pv2 tl mt4 select-options-property-font' style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>


          How soon do you require the website :
              <select value={this.state.urgency} onChange ={this.onUrgencyChange} className=" select-bx-stylin ml2 instead-of-gray br2 pv2   ph2" style={{ 'fontSize':'1.0rem'}} >
                <option value="1-2-weeks"> 1 to 2 weeks</option>
                <option value=" 3-4-weeks">3 to 4 weeks </option>
                <option value="1-2-months">1 to 2 months</option>
               
              </select>

      
          </div>







      <div className="mv3 flex input-boxes-flex-on-mobile " >
        <label className="w-30 db  select-options-property-font " htmlFor="companyName" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>Organization name :</label>
        <input
           onChange ={this.onCompanyNameChange}
           className="input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70 " 
           style={{ 'fontSize':'1.0rem'}}
           type="text" 
           name="companyName" 
            id="companyName"
            
       />
      </div>



      <div className="mt3 flex input-boxes-flex-on-mobile">
        <label className="w-30 db  select-options-property-font" htmlFor="yourName" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>Your Name :</label>
        <input
         onChange ={this.onYourNameChange}
         className="input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
         style={{ 'fontSize':'1.0rem'}}
         type="name" 
         name="yourName" 
          id="yourName" 
          />

      </div>




      <div className="mt3 flex input-boxes-flex-on-mobile">
        <label className="w-30 db  select-options-property-font" htmlFor="email-address" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>Email :</label>
        <input 

          onChange ={this.onEmailChange}
          className=" input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
          style={{ 'fontSize':'1.0rem'}}
          type="email"
          name="email-address"  
          id="email-address"
          
        />
      </div>



        <div className="mv3 flex input-boxes-flex-on-mobile">
        <label className="w-30 db  select-options-property-font " htmlFor="phone" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>Phone :</label>
        <input
						
           onChange ={this.onPhoneChange}
           className="input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70 " 
           style ={{ 'fontSize':'1.0rem'}}
           type="tel" 
           name="phone" 
            id="phone"
            
       />
      </div>


			
                      

								      <p className=' red pv4 dim  fw8' style={{ 'fontSize':'1.0rem'}}>* Fill in all details before sending.</p>

								     
								    </fieldset>
                    <Button variant="contained"  
                      onClick ={this.onButtonSubmit}
                      type="submit" 
                      value="Send"
                      className='button-links-on-mobile ' 
                      style={{'backgroundColor':'black', 'color':'white', 'fontSize':'1.0rem', 'padding':'10px 30px 10px 30px', }} >
                      SEND
                      </Button>
								    
								  </div>
								</main>
							</article>
				
			    	   </div>
				
							

								</div>







							):

				    		 (




				    		 	<div>
				    				 <h2 ref={this.myRef}  className=' green  sent-paragraph-on-mobile mv2 pv2' style={{'fontSize':'1.0rem'}}>Sent. Thanks for getting in touch! Expect an answer from us in the next few hours.</h2>
                    <div className ='mt2 pv2'>
                    <a href="/contact" onClick="location.reload()" className=' black dim pointer' style={{'fontSize':'1.0rem'}}>Get a New Quote</a>

                    </div>
                     
                   				
								
				    			</div>	




				    		)

				    	}



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

		)
	}	

}

export default Contact;