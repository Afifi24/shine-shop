import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Channel from './components/Channel'
import WraperContext from './components/Context'
const App = () => {
  return (
    <div className='bg-[#0B0B0B] font-maitree  '>
      <div>
        <WraperContext>
          <Header/>
          <Hero/>
          <Channel/>
          <Contact/>
          <Footer/>
        </WraperContext>
      </div>
    </div>
  )
}

export default App