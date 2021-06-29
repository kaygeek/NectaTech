import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Projects from "./components/pages/projects/Projects";
import Contact from "./components/pages/concact/Contact";
import Footer from "./components/Footer";
import Playpro from "./components/pages/projects/PlayPro";
import Scrumpro from "./components/pages/projects/ScrumPro";
import NectaTrack from "./components/pages/projects/NectaTrack";
import Necta from "./components/pages/projects/Necta";
import BloomWeddings from "./components/pages/projects/BloomWeddings";
import ThankYouCard from "./components/pages/concact/ThankYouCard";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Scrumpro" component={Scrumpro} />
        <Route exact path="/Playpro" component={Playpro} />
        <Route exact path="/NectaTrack" component={NectaTrack} />
        <Route exact path="/Necta" component={Necta} />
        <Route exact path="/BloomWeddings" component={BloomWeddings} />
        <Route exact path="/ThankYouCard" component={ThankYouCard} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
