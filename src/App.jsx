import  { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/footer';
// MyPorfolio se ha eliminado de la importación aquí ya que usaremos UnderConstruction en su lugar
import UnderConstruction from './components/UnderConstruction';

 // Asegúrate de importar tu página 404 aquí

function App() {
  const [section, setSection] = useState('home');

  useEffect(() => {
    switch (section) {
      case 'home':
        document.title = 'Inicio - Tecnodespegue';
        break;
      case 'my-portfolio':
        document.title = 'Mi Portafolio - Tecnodespegue';
        break;
      // Añade más casos según sea necesario
      default:
        document.title = 'Tecnodespegue';
    }
  }, [section]);

  // Función para determinar qué componente se debe renderizar
  const renderSection = () => {
    switch (section) {
      case 'home':
        return (
          <>
            <Banner setSection={setSection} />
            <About setSection={setSection}/>
            <Services />
            <Work />
            <Contact />
          </>
        );
       
      case 'my-portfolio': // Asegúrate de que el caso coincide con el identificador usado en tus enlaces
        return <UnderConstruction setSection={setSection}/>;
      case 'about':
        return <UnderConstruction setSection={setSection}/>;
      case 'services':
      case 'work':
      case 'contact':
        // Aquí puedes seguir usando la misma lógica que antes
        // Si estás usando algo específico para renderizar estas secciones, mantenlo aquí
        return <UnderConstruction />;
      default:
        return <UnderConstruction />;
    }
  };

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Nav setSection={setSection} /> {/* No olvides pasar setSection a Nav si es necesario para actualizar la sección actual */}
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;