import React, {useEffect} from 'react'


import Header from './components/header/header'
import Experience from './components/Experience/Experience'
import Nav from './components/nav/nav'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonial'
import Services from './components/services/services'
import About from './components/about/about'



 const App = () => {
  

  return (
    <>
    
     <Header /> 
    
    <Nav></Nav>

    <About/>
    
    <Experience />

    <Portfolio></Portfolio>
    <Testimonials></Testimonials>
    <Services></Services>
    </>
    
  )
}

export default App;