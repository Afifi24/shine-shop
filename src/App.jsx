import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className='bg-[#0B0B0B] min-h-screen font-maitree  '>
      <div>
          <Header/>
          <Hero/>
          <Contact/>
          <Footer/>
      </div>
    </div>
  )
}

export default App