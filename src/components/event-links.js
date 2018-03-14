import React, { Component } from 'react';


class EventLinks extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-md-12" >
      {/* <section className="section-portfolio bg-gray-light">
        <div className="container">
          {/* <div className="portfolioFilter">
            <a className="current" href="#" data-filter="*">All Categories</a>
            <a href="#" data-filter=".photography">Photography</a>
            <a href="#" data-filter=".design">Design</a>
            <a href="#" data-filter=".branding">Branding</a>
          </div> */}
          {/* <div className="portfolioContainer grid-2 with-text" style={{height: "2742.56px"}} style={{position: "relative"}}>
            <figure className="effect-jazz branding" style={{left: "0px"}} style={{top: "5px"}} style={{position: "absolute"}}>
            <figcaption>
              <div className="see-more more-btn"> */}
                {/* <div className="see-more-inner">
                  <a className="magnific btn button-line button-white btn-rounded hover-effect" href="../../common-files/images/gallery/18.jpg">ZOOM</a>
                  <a className="btn button-line button-white btn-rounded hover-effect" href="portfolio-single-fixed-text.html">SEE MORE</a>
                </div> */}
              {/* </div>
            </figcaption>
            <div className="portfolio-img">
              <img alt="" src="https://i5.walmartimages.com/asr/4336ada2-cd1d-461c-8f2e-793ce243d123_1.61088e3ca5b716e89924f3fb12aca826.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"/>
            </div>  
            <div className="portofolio-desc">
              <h4><a href="portfolio-single-fixed-text.html">Basketball</a></h4>
              <span>Art, Photography</span>
            </div>
          </figure>
           <figure class="effect-jazz design photography" style={{left: "570px"}} style={{top: "5px"}} style={{position: "absolute"}}>
            <figcaption>
              <div class="see-more more-btn">
                {/* <div class="see-more-inner">
                  <a class="magnific btn button-line button-white btn-rounded hover-effect" href="../../common-files/images/gallery/8.jpg">ZOOM</a>
                  <a class="btn button-line button-white btn-rounded hover-effect" href="portfolio-single-fixed-text.html">SEE MORE</a>
                </div> */}
              {/* </div>
            </figcaption>
            <div class="portfolio-img">
              <img alt="8" src="../../common-files/images/gallery/8.jpg"/>
            </div>  
            <div class="portofolio-desc">
              <h4><a href="portfolio-single-fixed-text.html">London Industrial</a></h4>
              <span>City, Architecture</span>
            </div>
          </figure>   */}
          {/* <figure class="effect-jazz photography" style="left: 0px; top: 461px; position: absolute;">
            <figcaption>
              <div class="see-more more-btn">
                <div class="see-more-inner">
                  <a class="magnific btn button-line button-white btn-rounded hover-effect" href="../../common-files/images/gallery/17.jpg">ZOOM</a>
                  <a class="btn button-line button-white btn-rounded hover-effect" href="portfolio-single-fixed-text.html">SEE MORE</a>
                </div>
              </div>
            </figcaption>
            <div class="portfolio-img">
              <img alt="17" src="../../common-files/images/gallery/17.jpg"/>
            </div>  
            <div class="portofolio-desc">
              <h4><a href="portfolio-single-fixed-text.html">Desktop Modern</a></h4>
              <span>Modern, Art</span>
            </div>
          </figure>
          <figure class="effect-jazz design photography" style="left: 570px; top: 461px; position: absolute;">
            <figcaption>
              <div class="see-more more-btn">
                <div class="see-more-inner">
                  <a class="magnific btn button-line button-white btn-rounded hover-effect" href="../../common-files/images/gallery/20.jpg">ZOOM</a>
                  <a class="btn button-line button-white btn-rounded hover-effect" href="portfolio-single-fixed-text.html">SEE MORE</a>
                </div>
              </div>
            </figcaption>
            <div class="portfolio-img">
              <img alt="20" src="../../common-files/images/gallery/20.jpg"/>
            </div>  
            <div class="portofolio-desc">
              <h4><a href="portfolio-single-fixed-text.html">Cooking Spicy</a></h4>
              <span>Table, Cooking</span>
            </div>
          </figure>
          <figure class="effect-jazz branding" style="left: 0px; top: 917px; position: absolute;">
            <figcaption>
              <div class="see-more more-btn">
                <div class="see-more-inner">
                  <a class="magnific btn button-line button-white btn-rounded hover-effect" href="../../common-files/images/gallery/5.jpg">ZOOM</a>
                  <a class="btn button-line button-white btn-rounded hover-effect" href="portfolio-single-fixed-text.html">SEE MORE</a>
                </div>
              </div>
            </figcaption>
            <div class="portfolio-img">
              <img alt="5" src="../../common-files/images/gallery/5.jpg"/>
            </div>  
            <div class="portofolio-desc">
              <h4><a href="portfolio-single-fixed-text.html">Season Closup</a></h4>
              <span>Landscape, Autumn</span>
            </div>
          </figure>
          <figure class="effect-jazz branding design" style="left: 570px; top: 917px; position: absolute;">
            <figcaption>
              <div class="see-more more-btn">
                <div class="see-more-inner">
                  <a class="magnific btn button-line button-white btn-rounded hover-effect" href="../../common-files/images/gallery/21.jpg">ZOOM</a>
                  <a class="btn button-line button-white btn-rounded hover-effect" href="portfolio-single-fixed-text.html">SEE MORE</a>
                </div>
              </div>
            </figcaption>
            <div class="portfolio-img">
              <img alt="21" src="../../common-files/images/gallery/21.jpg"/>
            </div>  
            <div class="portofolio-desc">
              <h4><a href="portfolio-single-fixed-text.html">Old Photography</a></h4>
              <span>Camera, Old School</span>
            </div>
          </figure>
          <figure class="effect-jazz design" style="left: 0px; top: 1373px; position: absolute;">
            <figcaption>
              <div class="see-more more-btn">
                <div class="see-more-inner">
                  <a class="magnific btn button-line button-white btn-rounded hover-effect" href="../../common-files/images/gallery/3.jpg">ZOOM</a>
                  <a class="btn button-line button-white btn-rounded hover-effect" href="portfolio-single-fixed-text.html">SEE MORE</a>
                </div>
              </div>
            </figcaption>
            <div class="portfolio-img">
              <img alt="3" src="../../common-files/images/gallery/3.jpg"/>
            </div>  
            <div class="portofolio-desc">
              <h4><a href="portfolio-single-fixed-text.html">Field in Wind</a></h4>
              <span>Landscape, Season</span>
            </div>
          </figure>
          <figure class="effect-jazz branding photography" style="left: 570px; top: 1373px; position: absolute;">
            <figcaption>
              <div class="see-more more-btn">
                <div class="see-more-inner">
                  <a class="magnific btn button-line button-white btn-rounded hover-effect" href="../../common-files/images/gallery/2.jpg">ZOOM</a>
                  <a class="btn button-line button-white btn-rounded hover-effect" href="portfolio-single-fixed-text.html">SEE MORE</a>
                </div>
              </div>
            </figcaption>
            <div class="portfolio-img">
              <img alt="2" src="../../common-files/images/gallery/2.jpg"/>
            </div>  
            <div class="portofolio-desc">
              <h4><a href="portfolio-single-fixed-text.html">Beach Time</a></h4>
              <span>Holydays, Wind</span>
            </div>
          </figure>
          <figure class="effect-jazz design" style="left: 0px; top: 1830px; position: absolute;">
            <figcaption>
              <div class="see-more more-btn">
                <div class="see-more-inner">
                  <a class="magnific btn button-line button-white btn-rounded hover-effect" href="../../common-files/images/gallery/1.jpg">ZOOM</a>
                  <a class="btn button-line button-white btn-rounded hover-effect" href="portfolio-single-fixed-text.html">SEE MORE</a>
                </div>
              </div>
            </figcaption>
            <div class="portfolio-img">
              <img alt="1" src="../../common-files/images/gallery/1.jpg"/>
            </div>  
            <div class="portofolio-desc">
              <h4><a href="portfolio-single-fixed-text.html">Industrial 2015</a></h4>
              <span>Architecture, Art</span>
            </div>
          </figure>
          <figure class="effect-jazz branding photography" style="left: 570px; top: 1830px; position: absolute;">
            <figcaption>
              <div class="see-more more-btn">
                <div class="see-more-inner">
                  <a class="magnific btn button-line button-white btn-rounded hover-effect" href="../../common-files/images/gallery/14.jpg">ZOOM</a>
                  <a class="btn button-line button-white btn-rounded hover-effect" href="portfolio-single-fixed-text.html">SEE MORE</a>
                </div>
              </div>
            </figcaption>
            <div class="portfolio-img">
              <img alt="14" src="../../common-files/images/gallery/14.jpg"/>
            </div>  
            <div class="portofolio-desc">
              <h4><a href="portfolio-single-fixed-text.html">Sea Landscape</a></h4>
              <span>Sea, Photography</span>
            </div>
          </figure>
          <figure class="effect-jazz branding design" style="left: 0px; top: 2286px; position: absolute;">
            <figcaption>
              <div class="see-more more-btn">
                <div class="see-more-inner">
                  <a class="magnific btn button-line button-white btn-rounded hover-effect" href="../../common-files/images/gallery/15.jpg">ZOOM</a>
                  <a class="btn button-line button-white btn-rounded hover-effect" href="portfolio-single-fixed-text.html">SEE MORE</a>
                </div>
              </div>
            </figcaption>
            <div class="portfolio-img">
              <img alt="15" src="../../common-files/images/gallery/15.jpg"/>
            </div>  
            <div class="portofolio-desc">
              <h4><a href="portfolio-single-fixed-text.html">Closup Field</a></h4>
              <span>Landscape, Blur</span>
            </div>
          </figure>
          <figure class="effect-jazz branding photography" style="left: 570px; top: 2286px; position: absolute;">
            <figcaption>
              <div class="see-more more-btn">
                <div class="see-more-inner">
                  <a class="magnific btn button-line button-white btn-rounded hover-effect" href="../../common-files/images/gallery/16.jpg">ZOOM</a>
                  <a class="btn button-line button-white btn-rounded hover-effect" href="portfolio-single-fixed-text.html">SEE MORE</a>
                </div>
              </div>
            </figcaption>
            <div class="portfolio-img">
              <img alt="16" src="../../common-files/images/gallery/16.jpg"/>
            </div>  
            <div class="portofolio-desc">
              <h4><a href="portfolio-single-fixed-text.html">Coffee Breakfeast</a></h4>
              <span>Art, Photography</span>
            </div>
          </figure> */} */}
          {/* </div>
        </div>    
      </section> */}
        
    

            </div>
        )
    }
}

export default EventLinks