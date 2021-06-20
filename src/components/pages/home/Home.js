import React from "react";
import HomeCarousel from "./homeCarousal.jsx";
import "./homeStyle.css";
import vector from "./home_imgs/vecter.svg";
import BtnDiscussYourProjectWithUsHome from "./BtnDiscussYourProjectWithUsHome";
import BtnViewOurProjectsHome from "./BtnViewOurProjectsHome";



function Home() {
  return (
    <div className="home-body"> 
      <img className="nav-vector" src={vector} alt=" nav vector" />

      <HomeCarousel />
      <div className="home_description">
        <p className="paragraph-1">
          We get super excited when we can provide complete transparency and accountability in our 
          partner’s businesses, while providing mind blowing user experiences for their customers.
        </p>
        <p className="paragraph-2">
          NectaTech  understands the value of a business' personal flavour and flair. We leverage 
          tried and tested software components that we’ve built, enabling your business’ unique spark to truly scale digitally.
        </p>
        <div className="home-container">
          <BtnDiscussYourProjectWithUsHome />
          <BtnViewOurProjectsHome />
        </div>

      </div>

    </div>
  );
}

export default Home;
