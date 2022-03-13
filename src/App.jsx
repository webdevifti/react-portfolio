import React from 'react'
import Header from './components/header/HeaderComponent';
import Nav from './components/nav/NavComponent';
import About from './components/about/AboutComponent'
import Experience from './components/experience/ExperienceComponent'
import Service from './components/service/ServiceComponent'
import Portfolio from './components/portfolio/PortfolioComponent'
import Testimonial from './components/testimonial/TestimonialComponent'
import Contact from './components/contact/ContactComponent'
import Footer from './components/footer/FooterComponent'
import CTA from './components/cta/CtaComponent';


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <CTA />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App