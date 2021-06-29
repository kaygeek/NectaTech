import React from "react";
import "./Projects.css";
import img_1 from "./projects_images/img_1.svg";
import img_2 from "./projects_images/img_2.svg";
import img_3 from "./projects_images/img_3.svg";
import img_4 from "./projects_images/img_4.svg";
import img_5 from "./projects_images/img_5.svg";
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Link} from "react-router-dom"




function Projects() {

  //  scrollTo(offset) {
  //   scroller.scrollTo("scroll-to-element", {
  //     duration: 800,
  //     delay: 0,
  //     smooth: "easeInOutQuart",
  //     offset: offset
  //   });
  // }

  

  return (
    <div className="content-body">
      <div className="projects-container">
        <h1> Our Projects </h1>
        <p>
          Have a look at some of our projects to see how NectaTech can help you
          take your business to the next level with a cultivated personal
          digital presence that will grow and change, as the times and tech do.
        </p>
      </div>
      <div className="projects-hex-gallery">

      <div className="hex">
               {/* activeClass="active" offset={-55} smooth={true} duration={1000} spy={true} */}
               <Link to="scrumpro"  className="hex">
                 <img src={img_1} alt="ScrumPro" />
               </Link>
            </div>
                 {/* activeClass="active" offset={-55} smooth={true} duration={1000} spy={true} */}
            <div className="hex">
               <Link to="playpro"   className="hex">
                  <img src={img_2} alt="PLAYPRO" />
               </Link>
            </div>      
     
              {/* activeClass="active" offset={-55} smooth={true} duration={1000} spy={true} */}
            <div className="hex">
               <Link to="nectatrack"  className="hex">
                 <img src={img_3} alt="NectaTrack" />
              </Link>
            </div>
            <div className="hex">
               {/* activeClass="active" offset={-55} smooth={true} duration={1000} spy={true} */}
               <Link to="necta"    className="hex">
                 <img src={img_4} alt="necta" />
              </Link>
            </div>
              <div className="hex">
               {/* activeClass="active" offset={-55} smooth={true} duration={1000} spy={true} */}
               <Link to="bloomweddings"   className="hex">
                 <img src={img_5} alt="Bloom Weddings" />
               </Link>
             </div>

      </div>
    </div>
  );
}

export default Projects;
