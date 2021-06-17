import React, { useState } from "react";
import "./HexagonGallery.css";
import team from "./Team";
import { Card } from 'antd';
import BtnContactAbout from "./BtnContactAbout.jsx";
import BtnViewOurProjectsAbout from "./ViewOurProjectsAbout.jsx";
import CardEntry from "./CardEntry";
import img_1 from "./about_images/img_1.svg";
import img_2 from "./about_images/img_2.svg";
import img_3 from "./about_images/img_3.svg";
import img_4 from "./about_images/img_4.svg";
import img_5 from "./about_images/img_5.svg";
import img_6 from "./about_images/img_6.svg";
import img_7 from "./about_images/img_7.svg";


function HandleClick(teamMembers){
  return(
   <CardEntry   
      key= {teamMembers.id}
      name= {teamMembers.name}
      jobTitle = {teamMembers.jobTitle}
      description = {teamMembers.description}
      />
    );
  }



function HexagonGallery() {

  // const [bruce, courtney, kgaugelo, merveille, megan, carmyn] = team;
  // const [note, setnote] = useState("");

  // const [card, setcard] = useState("");
 
// function HandleClick() {
//   if (key === 'courtney') setCard(
//     { 

//     })


// }

// function handleClick(){
//   setCard(
//   
//   );
// }



  


//   function HandleClickBruce() {
//     setnote(
//       <div>
//         <Card style={{marginBottom:"10rem"}} className="card">
//           <div className="card-container">
//             <img src={img_1}></img>
//             <div className="card-content">
//               <div className="title">
//                 <h3 className="name">{bruce.name}</h3>
//                 <p className="job-title">{bruce.jobTitle}</p>
//               </div>
//               <p className="card-description">{bruce.description}</p>
//             </div>
//           </div>
//         </Card>
//         <div className="BtnAbout-container">
//         <BtnContactAbout />
//         <BtnViewOurProjectsAbout />
//         </div>
//       </div>

//     );
//   }
//   function HandleClickCourtney() {
//     setnote(
//       <div>
//         <Card style={{marginBottom:"10rem"}} className="card">
//           <div className="card-container">
//             <img src={img_3}></img>
//             <div className="card-content">
//               <div className="title">
//                 <h3 className="name">{courtney.name}</h3>
//                 <p className="job-title">{courtney.jobTitle}</p>
//               </div>
//               <p className="card-description">{courtney.description}</p>
//             </div>
//           </div>
//         </Card>
//         <div className="BtnAbout-container">
//         <BtnContactAbout />
//         <BtnViewOurProjectsAbout />
//         </div>
//       </div>

//     );
//   }

//   function HandleClickKgaugelo() {
//     setnote(
//       <div>
//         <Card style={{marginBottom:"10rem"}} className="card">
//           <div className="card-container">
//             <img src={img_4}></img>
//             <div className="card-content">
//               <div className="title">
//                 <h3 className="name">{kgaugelo.name}</h3>
//                 <p className="job-title">{kgaugelo.jobTitle}</p>
//               </div>
//               <p className="card-description">{kgaugelo.description}</p>
//             </div>
//          </div>
//         </Card>

//         <div className="BtnAbout-container">
//         <BtnContactAbout />
//         <BtnViewOurProjectsAbout />
//         </div>
//       </div>

//     );
//   }

//   function HandleClickMerveille() {
//     setnote(
//       <div>
//         <Card style={{marginBottom:"10rem"}} className="card">
//           <div className="card-container">
//             <img src={img_5}></img>
//             <div className="card-content">
//               <div className="title">
//                 <h3 className="name">{merveille.name}</h3>
//                 <p className="job-title">{merveille.jobTitle}</p>

//               </div>
//               <p className="card-description">{merveille.description}</p>
//             </div>
//            </div>
//         </Card>

//         <div className="BtnAbout-container">
//         <BtnContactAbout />
//         <BtnViewOurProjectsAbout />
//         </div>
//       </div>

//     );
//   }

//   function HandleClickMegan() {
//     setnote(
//       <div>
//         <Card  style={{marginBottom:"10rem"}} className="card">
//           <div className="card-container">
//             <img src={img_6}></img>
//             <div className="card-content">
//               <div className="title">
//                 <h2 className="name">{megan.name}</h2>
//                 <p className="job-title">{megan.jobTitle}</p>
//               </div>
//               <p className="card-description">{megan.description}</p>
//             </div>
//           </div>
//         </Card>

//         <div className="BtnAbout-container">
//         <BtnContactAbout />
//         <BtnViewOurProjectsAbout />
//         </div>
//       </div>

//     );
//   }

//   function HandleClickCarmyn() {
//     setnote(
//       <div>



//         <Card style={{marginBottom:"10rem"}} className="card">
//           <div className="card-container">
//             <img src={img_7}></img>
//             <div className="card-content">
//               <div className="title">
//                 <h3 className="name">{carmyn.name}</h3>
//                 <p className="job-title">{carmyn.jobTitle}</p>
//               </div>
//               <p className="card-description">{carmyn.description}</p>
//             </div>
//           </div>
//         </Card>
//         <div className="BtnAbout-container">
//         <BtnContactAbout />
//         <BtnViewOurProjectsAbout />
//         </div>
//      </div>
//     );
//   }

const [card, setcard] = useState(""); 

function GotClicked(){
  setcard(<div>
    {team.map(HandleClick)}
  </div>
  );
  
}
{/* border: "3px solid #faed5b" */}
  return (
    <div>
      {/* <div>
        {team.map(createEntry)}
      </div> */}
      
      {/* <div className="hexagon-gallery">
        <div onClick={GotClicked} className="hex">
          <img  src={img_1} alt="Bruce" />
          <div>
            <h2>Bruce Kay</h2>
          </div>
        </div>

        <div className="hex">
          <img src={img_2} alt="NectaBee" />
        </div>

        <div onClick={HandleClickCourtney} className="hex">
          <img src={img_3} alt="Courtney" />
          <h2>Courtney Joote</h2>
        </div>
        <div onClick={HandleClickKgaugelo} className="hex">
          <img src={img_4} alt="Kgaugelo" />
          <h2>Kgaugelo Marakalla</h2>
        </div>
        <div onClick={HandleClickMerveille} className="hex">
          <img src={img_5} alt="Merveille" />
          <h2>Merveille Van Eck Kay</h2>
        </div>
        <div onClick={HandleClickMegan} className="hex">
          <img src={img_6} alt="Megan" />
          <h2>Megan Serfontein</h2>
        </div>
        <div onClick={HandleClickCarmyn} className="hex">
          <img src={img_7} alt="Carmyn" />
          <h2>Carmyn vM</h2>
        </div>
      </div> */}
      

      

      {/* {note} */}
      
    </div>
  );

}

export default HexagonGallery;