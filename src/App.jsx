import Header from './components/Header'
import Banner from './components/Banner'
import Nav from './components/Nav'
import About from './components/About'
import Services from './components/Services'
import Work from './components/work'
import Contact from './components/Contact'
import Footer from './components/footer'

function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default App
