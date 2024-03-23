import { useState, useEffect } from 'react'
import Contact from './Contact.jsx'

const Header = () => {
  const [page] = useState('home')
   // Estado para controlar la visibilidad del texto
   const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
    const handleScroll = () => {
      // Establece isVisible en true solo si el scroll está en el tope de la página
      setIsVisible(window.pageYOffset < 50);
    };

    // Agrega el event listener cuando el componente se monta
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  {
    /*const handleButtonClick = () => {
    setPage('contact');
  };*/
  }

  const renderContent = () => {
    if (page === 'home') {
      return (
        <header className={`fixed top-0 left-0 w-full z-50 py-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='container mx-auto'>
            <div className='flex justify-center items-center'>
              <a href='#'>
                <p className='text-center text-gradient text-2xl md:text-5xl  lg:text-5xl xl:text-5xl font-bold '>
                  Tecnodespegue
                </p>
              </a>
              {/*<button className="btn btn-sm" onClick={handleButtonClick}>Contactame</button>*/}
            </div>
          </div>
        </header>
      )
    } else if (page === 'contact') {
      return <Contact />
    }
  }

  return <div>{renderContent()}</div>
}

export default Header
