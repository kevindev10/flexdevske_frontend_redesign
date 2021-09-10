import React, { Component } from "react";
import { Link } from "react-router-dom";
import moneyTree from "./moneyTree.jpg";
import onlinePresence from "./onlinePresence.mp4";
import trust from "./trust.jpg";
import "./Blog001.css";
import Disqus from "disqus-react"

class Blog001 extends Component {
  render(){

    const disqusShortname = "https-www-flexdevske-co-ke"
    const disqusConfig = {
    url: "http://localhost:3000/blog",
    identifier: "article-id",
    title: "The Importance Of Having A Website For Your Business In 2021/2022"
    
  }



    return (
      <>
        <div className='blog-everything' style={{ width: "82.4%", marginLeft: "8.8%", marginRight: "8.8%" }}>
          <div className="flex mt4 blog-flex">
            <main className="mr3 blog-main" style={{ width: "70%" }}>
              <article>
                <header>
                  <h1 className='main-heading-font'
                    style={{
                      fontSize: "2.25rem",
                      lineHeight: "50px",
                      color: "#1a1718",
                    }}
                  >
                    The Importance Of Having A Website For Your Business In
                    2021/2022{" "}
                  </h1>
                  <div
                    className="byline author-address mt4 flex"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <address
                      className="author  mr2 "
                      style={{ fontStyle: "normal" }}
                    >
                      Post by |{" "}
                      <a
                        rel="author"
                        href="mailto:flexdevske@gmail.com"
                        className="fw8 no-underline tracked ml1"
                        style={{ fontSize: "1.0rem" }}
                      >
                        Admin
                      </a>
                    </address>{" "}
                    <time
                      pubdate="true"
                      dateTime="2021-09-13"
                      title="September 13th, 2021"
                      className="  fw8  ml3 tracked  author-address-date"
                      style={{ fontSize: "0.95rem" }}
                    >
                      September 13th, 2021.
                    </time>
                  </div>
                </header>
                <p
                  className="mt4 pb3 "
                  style={{
                    fontSize: "1.0rem",
                    lineHeight: "26px",
                    color: "#323a45",
                  }}
                >
                  Once you start thinking about it, it is easy to get excited
                  about the opportunities that arise from having a website.
                  However, in my experience as a website designer, many businesses
                  in Kenya still do not understand the value of having one. A
                  website not only helps businesses promote and sell their
                  products and services, but it also allows them to distinguish
                  themselves from their competitors, especially for customers who
                  rely heavily on the Internet to learn everything about a
                  company.
                </p>
                <p
                  className="mb4 "
                  style={{
                    fontSize: "1.0rem",
                    lineHeight: "26px",
                    color: "#323a45",
                  }}
                >
                  A website is one of the most crucial business assets for sharing
                  information, building credibility, and standing out in crowded
                  marketplaces. Here at
                  <Link to="/contact" className="fw8 ph1 black no-underline dim">
                    Flex devsKe
                  </Link>
                  we offer web design and development services that help
                  businesses exploit their untapped potential in the online
                  marketplace. The following are the reasons why your business
                  needs a website in 2021-2022
                </p>
  
                <img
                  src={moneyTree}
                  alt="money tree"
                  className="pv2 mb4"
                  style={{ width: "100%" }}
                />
              </article>
  
              <article className="mv4">
                <header>
                  <h2
                    className='h2-heading-font'
                    style={{
                      fontSize: "1.8rem",
                      lineHeight: "50px",
                      color: "#1a1718",
                    }}
                  >
                    What is a website?{" "}
                  </h2>
                </header>
                <section>
                  <p
                    className="mt4 pb3 "
                    style={{
                      fontSize: "1.0rem",
                      lineHeight: "26px",
                      color: "#323a45",
                    }}
                  >
                    A
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines"
                      target="blank"
                      rel="noreferrer"
                      className="fw8 ph1 black no-underline dim"
                    >
                      website
                    </a>
                    is a collection of linked web pages(documents) hosted on a
                    domain.
                    <br />A domain name (or just 'domain') is the name of a
                    website e.g www.mybiashara.co.ke, that gets hosted by an
                    <a
                      href="https://domains.safaricom.co.ke/"
                      target="blank"
                      rel="noreferrer"
                      className="fw8 ph1 black no-underline dim"
                    >
                      Internet Service Provider - ISP.
                    </a>
                    <br />
                    Hosting refers to an online service that allows you to publish
                    your website files onto the internet. So, anyone who has
                    access to the internet has access to your website.
                  </p>
                </section>
  
                <section
                  className=" tc"
                  style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{ maxWidth: "100%" }}
                  >
                    <source src={onlinePresence} type="video/mp4" />
                  </video>
                </section>
              </article>
  
              <article className="mv4">
                <header>
                  <h2
                    className='h2-heading-font'
                    style={{
                      fontSize: "1.8rem",
                      lineHeight: "50px",
                      color: "#1a1718",
                    }}
                  >
                    Be in control of your online presence{" "}
                  </h2>
                </header>
                <section>
                  <p
                    className="mt4 pb3 "
                    style={{
                      fontSize: "1.0rem",
                      lineHeight: "26px",
                      color: "#323a45",
                    }}
                  >
                    A well put together, professional website will clearly outline
                    the products or services you provide, and it gives your
                    customer a better idea of what your business stands for. It
                    improves your chances of being found online by controlling the
                    information about your business in a manner that cannot be
                    achieved by using social media alone. Inaccurate or outdated
                    information about your business ultimately results in lost
                    business.
                  </p>
                  <p
                    className="pb3 "
                    style={{
                      fontSize: "1.0rem",
                      lineHeight: "26px",
                      color: "#323a45",
                    }}
                  >
                    A website gives you complete control over your content, making
                    your online presence precisely as you would like it to appear.
                    It doesn’t matter what type of business you own - your
                    presence and conduct on the web matters to your customers.
                  </p>
                </section>
  
                <section
                  className=" tc"
                  style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{ maxWidth: "100%" }}
                  >
                    <source src={onlinePresence} type="video/mp4" />
                  </video>
                </section>
              </article>
  
              <article className="mv4">
                <header>
                  <h2
                    className='h2-heading-font'
                    style={{
                      fontSize: "1.8rem",
                      lineHeight: "50px",
                      color: "#1a1718",
                    }}
                  >
                    Generate more leads{" "}
                  </h2>
                </header>
                <section>
                  <p
                    className="mt4 pb3 "
                    style={{
                      fontSize: "1.0rem",
                      lineHeight: "26px",
                      color: "#323a45",
                    }}
                  >
                    Today, people spend most of their waking hours staring at
                    screens. Be it a computer, tablet, or mobile screen. Having a
                    website for your business allows new and existing clients to
                    have access to your business 24/7. Meaning sales and bookings
                    can be made at all hours of the day from any location, whereas
                    brick and mortar businesses only work if clients come to your
                    premises.
                  </p>
                  <p
                    className="pb3 "
                    style={{
                      fontSize: "1.0rem",
                      lineHeight: "26px",
                      color: "#323a45",
                    }}
                  >
                    A website also allows you to share updates on products or
                    services that your business offers in a timely fashion,
                    drawing users back more often.
                  </p>
                </section>
  
                <section
                  className=" tc"
                  style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{ maxWidth: "100%" }}
                  >
                    <source src={onlinePresence} type="video/mp4" />
                  </video>
                </section>
              </article>
  
              <article className="mv4">
                <header>
                  <h2
                    className='h2-heading-font'
                    style={{
                      fontSize: "1.8rem",
                      lineHeight: "50px",
                      color: "#1a1718",
                    }}
                  >
                    Increase the credibility of your business{" "}
                  </h2>
                </header>
                <section>
                  <p
                    className="mt4 pb3 "
                    style={{
                      fontSize: "1.0rem",
                      lineHeight: "26px",
                      color: "#323a45",
                    }}
                  >
                    Having a website gives your business legitimacy. When people
                    search for your product or service online, you want to appear
                    in those search results.
                    <br />
                    Additionally, having your own domain
                    name(www.mybiashara.co.ke) gives your email
                    address(myemail@mybiashara.co.ke) additional legitimacy - if
                    you are sending an email from a personal
                    email(myemail@yahoo.com), potential customers may not take you
                    as seriously.
                  </p>
                  <p
                    className="pb3 "
                    style={{
                      fontSize: "1.0rem",
                      lineHeight: "26px",
                      color: "#323a45",
                    }}
                  >
                    Websites can also provide a map and directions to the
                    company’s shops or offices for visitors to find their location
                    easily.
                  </p>
  
                  <p
                    className="pb3 "
                    style={{
                      fontSize: "1.0rem",
                      lineHeight: "26px",
                      color: "#323a45",
                    }}
                  >
                    Finally, you can spotlight your businesses achievements on
                    your website for everyone to see, showcasing any awards or
                    that speak to its credibility.
                  </p>
                </section>
  
                <img
                  src={trust}
                  alt="trust"
                  className="pv2 mb4"
                  style={{ width: "100%" }}
                />
              </article>
  
              <article className="mv4">
                <header>
                  <h2
                    className='h2-heading-font'
                    style={{
                      fontSize: "1.8rem",
                      lineHeight: "50px",
                      color: "#1a1718",
                    }}
                  >
                    Other key benefits of having a website{" "}
                  </h2>
                </header>
                <section>
                  <ul className="ml4">
                    <li className="mt3 pb2">
                      Be found online as simply having a website creates a point
                      of contact for customers.{" "}
                    </li>
                    <li className=" pb2">
                      24/7 availability and accessibility which is convenient for
                      consumers.{" "}
                    </li>
                    <li className=" pb2">
                      Gain a competitive advantage over businesses that don’t have
                      websites.{" "}
                    </li>
                    <li className=" pb2">
                      {" "}
                      A website is an online, cost-efficient brochure of the goods
                      and services you offer.{" "}
                    </li>
                  </ul>
                </section>
              </article>
  
              <article className="mv4">
                <section>
                  <p
                    className="mt4 pb3 "
                    style={{
                      fontSize: "1.0rem",
                      lineHeight: "26px",
                      color: "#323a45",
                    }}
                  >
                    In summary, if you’re looking for a way to expand your reach
                    and find new customers, it’s time to start thinking seriously
                    about a website for your business.It is a gateway to
                    communicate with prospective clients, and If done correctly,
                    it will be your sales force and aftermarket care division
                    rolled into one.
                    <br /> A website is the most crucial business asset for
                    sharing information, building credibility, and standing out in
                    crowded marketplaces.
                  </p>
                </section>
              </article>
  
              <article className="mv4">
                <section>
                  <p
                    className="mt4 pb3 "
                    style={{
                      fontSize: "1.0rem",
                      lineHeight: "26px",
                      color: "#323a45",
                    }}
                  >
                    To get started,
                    <Link
                      to="/contact"
                      className="fw8 ph1 black no-underline dim"
                    >
                      Contact us
                    </Link>
                    for a free quote.
                  </p>
                </section>
              </article>
            </main>
  
            <div className="ml3" style={{ width: "30%" }}>
              <p>
                Note that the development build is not optimized. To create a
                production build, use npm run build.
              </p>
            </div>
          </div>
        </div>


         <section  className='mv5 disqus-on-mobile' style={{ width: "50%", marginLeft: "8.8%", marginRight: "41.2%" }}>
         <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />

                    
           </section>           
        

      </>
    );
  }
  
}

export default Blog001;
