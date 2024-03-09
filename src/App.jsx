import Header from './components/Header'
import Banner from './components/Banner'
import Navbar from './components/Nav'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  )
}

export default App
