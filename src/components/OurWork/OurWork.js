import React, { useEffect } from "react";
import "./OurWork.css";
import banner from "./banner.jpg";
import lushroomFurnitureWebsite from "./lushroomFurnitureWebsite.jpg";
import gigaPlantWebsite from "./gigaPlantWebsite.jpg";
import waterLifeWebsite from "./waterLifeWebsite.jpg";
import bionistMerchantsWebsite from "./bionistMerchantsWebsite.jpg";
import instruousConstructionWebsite from "./instruousConstructionWebsite.jpg";
import Footer from "../Footer/Footer";
import Button from "@material-ui/core/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import Tawk from "../Tawk/Tawk";

function OurWork() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <div
        className="div-background-images  "
        style={{ backgroundImage: "url(" + banner + ") " }}
      >
        <article className="bg-black-60 our-work-background-cover ">
          <section>
            <h1
              className="white tl  our-work-header header-on-mobile "
              style={{
                fontSize: "4.6rem",
                marginLeft: "8.8%",
                marginRight: "8.8%",
              }}
            >
              OUR WORK
            </h1>

            <h2
              className="white tl header-subheading-on-mobile"
              style={{
                fontSize: "1.6rem",
                marginLeft: "8.8%",
                marginRight: "8.8%",
              }}
            >
              Some of our recent Website Design & Development Projects{" "}
            </h2>
            <p
              className="white tl header-paragraph-1-on-mobile"
              style={{
                fontSize: "1.0rem",
                marginLeft: "8.8%",
                marginRight: "8.8%",
                marginTop: "2vh",
                lineHeight: "26px",
              }}
            >
              Our websites and apps don’t just look good, they perform, they
              convert. If you are looking to generate enquiries, increase sales
              or maximise awareness we have the in-house web design and
              development teams in place to achieve this.
            </p>
          </section>
        </article>
      </div>

      <main className="pv5 cards-backgound-color cards-padding-vertical-on-mobile ">
        <div>
          <section
            className="portfolio-on-mobile-width"
            style={{ width: "82.4%", marginLeft: "8.8%", marginRight: "8.8%" }}
          >
            <article className=" ph3 ph0-l portfolio-on-mobile-article-padding">
              <div className="flex flex-column flex-row-ns portfolio-on-mobile-main">
                <div className="w-100 w-50-ns pr3-ns order-2 order-1-ns bg-white portfolio-on-mobile-pararaph-width">
                  <h2
                    className=" mt0 tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding  "
                    style={{ fontSize: "1.6rem" }}
                  >
                    LUSHROOM FURNITURE
                  </h2>
                  <p
                    className=" ph4 tc pt2  portfolio-on-mobile-pararaph-sub-head-padding"
                    style={{ fontSize: "1.0rem" , }}
                  >
                    Website Design / Development
                  </p>
                  <div className="tc pt4">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://lushroom.furniture.flexdevske.co.ke/"
                      className="white no-underline"
                    >
                      <Button
                        variant="contained"
                        className="button-links-on-mobile"
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          fontSize: "0.75rem",
                          padding: "9px",
                        }}
                      >
                        {" "}
                        VIEW DETAILS
                      </Button>
                    </a>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-offset="50"
                  data-aos-delay="200"
                  data-aos-duration="11000"
                  className=" order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width"
                >
                  <img
                    src={lushroomFurnitureWebsite}
                    className="db portfolio-on-mobile-actual-img"
                    alt="Lushroom furniture website."
                  />
                </div>
              </div>
            </article>
          </section>

          <section
            className="portfolio-on-mobile-width"
            style={{ width: "82.4%", marginLeft: "8.8%", marginRight: "8.8%" }}
          >
            <article className="portfolio-on-mobile-article-second-paragraph">
              <span
                className="db  ph3 ph0-l no-underline black portfolio-on-mobile-article-padding "
                href="#0"
              >
                <div className="flex flex-column flex-row-ns portfolio-on-mobile-main">
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-offset="50"
                    data-aos-delay="200"
                    data-aos-duration="11000"
                    className=" mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width-second-image "
                  >
                    <img
                      src={gigaPlantWebsite}
                      className="db"
                      alt=" Giga plant website."
                    />
                  </div>
                  <div className="w-100 w-50-ns pl3-ns bg-white portfolio-on-mobile-pararaph-width">
                    <h2
                      className="  mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding-second-paragraph"
                      style={{ fontSize: "1.6rem" }}
                    >
                      GIGA . PLANT & EQUIPMENT{" "}
                    </h2>
                    <p
                      className=" ph4 tc pt2 portfolio-on-mobile-pararaph-sub-head-padding"
                      style={{ fontSize: "1.0rem" }}
                    >
                      Website Design / Development
                    </p>
                    <div className="tc pt4">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://giga.plant.and.equipment.flexdevske.co.ke/"
                        className="white no-underline"
                      >
                        <Button
                          variant="contained"
                          className="button-links-on-mobile"
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontSize: "0.75rem",
                            padding: "9px",
                          }}
                        >
                          {" "}
                          VIEW DETAILS
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </span>
            </article>
          </section>

          <section
            className="portfolio-on-mobile-width"
            style={{ width: "82.4%", marginLeft: "8.8%", marginRight: "8.8%" }}
          >
            <article className=" ph3 ph0-l portfolio-on-mobile-article-padding">
              <div className="flex flex-column flex-row-ns portfolio-on-mobile-main">
                <div className="w-100 w-50-ns pr3-ns order-2 order-1-ns bg-white portfolio-on-mobile-pararaph-width">
                  <h2
                    className=" mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding "
                    style={{ fontSize: "1.6rem" }}
                  >
                    WATER LIFE NGO
                  </h2>
                  <p
                    className=" ph4 tc pt2 portfolio-on-mobile-pararaph-sub-head-padding"
                    style={{ fontSize: "1.0rem" }}
                  >
                    Website Design / Development
                  </p>
                  <div className="tc pt4">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://water.life.flexdevske.co.ke/"
                      className="white no-underline"
                    >
                      <Button
                        variant="contained"
                        className="button-links-on-mobile"
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          fontSize: "0.75rem",
                          padding: "9px",
                        }}
                      >
                        {" "}
                        VIEW DETAILS
                      </Button>
                    </a>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-offset="50"
                  data-aos-delay="200"
                  data-aos-duration="11000"
                  className=" order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width"
                >
                  <img
                    src={waterLifeWebsite}
                    className="db"
                    alt="Water life website."
                  />
                </div>
              </div>
            </article>
          </section>

          <section
            className="portfolio-on-mobile-width"
            style={{ width: "82.4%", marginLeft: "8.8%", marginRight: "8.8%" }}
          >
            <article className="portfolio-on-mobile-article-second-paragraph">
              <span
                className="db  ph3 ph0-l no-underline black portfolio-on-mobile-article-padding "
                href="#0"
              >
                <div className="flex flex-column flex-row-ns portfolio-on-mobile-main">
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-offset="50"
                    data-aos-delay="200"
                    data-aos-duration="11000"
                    className=" mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width-second-image "
                  >
                    <img
                      src={bionistMerchantsWebsite}
                      className="db"
                      alt=" Bionist merchants website."
                    />
                  </div>
                  <div className="w-100 w-50-ns pl3-ns bg-white portfolio-on-mobile-pararaph-width">
                    <h2
                      className=" mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding-second-paragraph"
                      style={{ fontSize: "1.6rem" }}
                    >
                      BIONIST MERCHANTS
                    </h2>
                    <p
                      className=" ph4 tc pt2 portfolio-on-mobile-pararaph-sub-head-padding "
                      style={{ fontSize: "1.0rem" }}
                    >
                      Website Design / Development
                    </p>
                    <div className="tc pt4">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://bionist.merchants.flexdevske.co.ke/"
                        className="white no-underline"
                      >
                        {" "}
                        <Button
                          variant="contained"
                          className="button-links-on-mobile"
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            fontSize: "0.75rem",
                            padding: "9px",
                          }}
                        >
                          {" "}
                          VIEW DETAILS
                        </Button>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </span>
            </article>
          </section>

          <section
            className="portfolio-on-mobile-width"
            style={{ width: "82.4%", marginLeft: "8.8%", marginRight: "8.8%" }}
          >
            <article className=" ph3 ph0-l portfolio-on-mobile-article-padding">
              <div className="flex flex-column flex-row-ns portfolio-on-mobile-main">
                <div className="w-100 w-50-ns pr3-ns order-2 order-1-ns bg-white portfolio-on-mobile-pararaph-width">
                  <h2
                    className="f5  mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding"
                    style={{ fontSize: "1.6rem" }}
                  >
                    INSTRUOUS CONSTRUCTION
                  </h2>
                  <p
                    className=" ph4 tc pt2  portfolio-on-mobile-pararaph-sub-head-padding"
                    style={{ fontSize: "1.0rem" }}
                  >
                    Website Design / Development
                  </p>

                  <div className="tc pt4">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://instruous.construction.flexdevske.co.ke/"
                      className="white no-underline"
                    >
                      {" "}
                      <Button
                        variant="contained"
                        className="button-links-on-mobile"
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          fontSize: "0.75rem",
                          padding: "9px",
                        }}
                      >
                        {" "}
                        VIEW DETAILS
                      </Button>
                    </a>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-offset="50"
                  data-aos-delay="200"
                  data-aos-duration="11000"
                  className=" order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width"
                >
                  <img
                    src={instruousConstructionWebsite}
                    className="db"
                    alt=" Instruous construction website."
                  />
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>

      <Tawk />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default OurWork;
