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
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Switch>
      <Route path="/ScrumPro" component={ScrumPro} />
      <Route path="/PlayPro" component={PlayPro} />
      <Route path="/NectaTrack" component={NectaTrack} />
      <Route path="/Necta" component={Necta} />
      <Route path="/BloomWeddings" component={BloomWeddings} />
      <Route path='/external' component={() => { window.location = 'https://scrumpro.co.za/'; return null;} }/>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
