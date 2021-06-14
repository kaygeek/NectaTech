import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/home/Home";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/about/About";
import Projects from "./components/pages/projects/Projects";
import Contact from "./components/pages/concact/Contact";
import Footer from "./components/Footer";
import PlayPro from "./components/pages/projects/PlayPro";
import ScrumPro from "./components/pages/projects/ScrumPro";
import NectaTrack from "./components/pages/projects/NectaTrack";
import Necta from "./components/pages/projects/Necta";
import BloomWeddings from "./components/pages/projects/BloomWeddings";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/ScrumPro" component={ScrumPro} />
        <Route exact path="/PlayPro" component={PlayPro} />
        <Route exact path="/NectaTrack" component={NectaTrack} />
        <Route exact path="/Necta" component={Necta} />
        <Route exact path="/BloomWeddings" component={BloomWeddings} />
      { /** 
      <Route path='/external' component={() => { window.location = 'https://scrumpro.co.za/'; return null;} }/>
      */}
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
