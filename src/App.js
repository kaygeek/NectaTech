import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Projects from "./components/pages/projects/Projects";
import Contact from "./components/pages/concact/Contact";
import Footer from "./components/Footer";
import PlayPro from "./components/pages/projects/PlayPro";
import ScrumPro from "./components/pages/projects/ScrumPro";
import NectaTrack from "./components/pages/projects/NectaTrack";
import Necta from "./components/pages/projects/Necta";
import BloomWeddings from "./components/pages/projects/BloomWeddings";
import ThankYouCard from "./components/pages/concact/ThankYouCard";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/scrumpro" component={ScrumPro} />
        <Route exact path="/playpro" component={PlayPro} />
        <Route exact path="/necta-track" component={NectaTrack} />
        <Route exact path="/necta" component={Necta} />
        <Route exact path="/bloom-weddings" component={BloomWeddings} />
        <Route exact path="/thank-you-card" component={ThankYouCard} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
