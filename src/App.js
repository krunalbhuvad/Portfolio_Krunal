import React from 'react'
import Header from  "./components/Header/Header";
import './App.css';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Exprience from './components/Exprience/Exprience';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Exprience/>
    <Service/>
    <Portfolio/>
    <Testimonials/>
    <Contact />
    <Footer/>

    </>
  )
}

export default App

