import { useState } from 'react';
import Contact from './Contact.jsx';

const Header = () => {
  const [page, setPage] = useState('home');

  const handleButtonClick = () => {
    setPage('contact');
  };

  const renderContent = () => {
    if (page === 'home') {
      return (
        <header className='fixed top-0 left-0 w-full z-50 py-8'>
          <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
              <a href='#'>
                <p className='text-gradient text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-bold'>
                  Tecnodespegue
                </p>
              </a>
              <button className="btn btn-sm" onClick={handleButtonClick}>Contactame</button>
            </div>
          </div>
        </header>
      );
    } else if (page === 'contact') {
      return <Contact />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default Header;
