import  { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/footer';
import NotFoundPage from './components/404'; // Asegúrate de importar tu página 404 aquí

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      // Extrae el hash de la URL (excluyendo el símbolo '#')
      const hash = window.location.hash.replace('#', '');
      // Actualiza el estado con la sección actual basada en el hash
      setCurrentSection(hash || 'home');
    };

    // Escucha los cambios en el hash de la URL
    window.addEventListener('hashchange', handleHashChange);

    // Llama a handleHashChange en la carga inicial en caso de que haya un hash
    handleHashChange();

    // Limpieza: remueve el event listener cuando el componente se desmonte
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Función para determinar qué componente se debe renderizar
  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Banner />
            <About />
            <Services />
            <Work />
            <Contact />
          </>
        );
      case 'about':
      case 'services':
      case 'work':
      case 'contact':
        // Aquí puedes añadir lógica para renderizar solo la sección específica si lo deseas
        return <NotFoundPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Nav />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
