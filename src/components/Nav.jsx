
import { BiHomeAlt } from 'react-icons/bi'; // Cambio para 'BiUser' a 'BiUserCircle' para mejorar la representación
import { BsClipboardData, BsBriefcase, BsGearFill } from 'react-icons/bs'; // Añadido 'BsGearFill' para servicios
import { FaRegAddressBook } from 'react-icons/fa'; // Nuevo icono para contactos
import { Link } from 'react-scroll';

const navLinks = [
  { to: 'home', offset: -70, Icon: BiHomeAlt, type: 'internal' },
  { to: 'about', offset: -70, Icon: BsClipboardData, type: 'internal' },
  { to: 'services', offset: -70, Icon: BsGearFill, type: 'internal' }, // Actualizado el icono para 'services'
  { to: 'work', offset: -70, Icon: BsBriefcase, type: 'internal' },
  // Eliminado el enlace a 'blog'
  { to: 'contact', offset: -70, Icon: FaRegAddressBook, type: 'internal' }, // Actualizado el icono para 'contact'
];

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          {navLinks.map(({ to, offset, Icon}) => (
            <Link
              key={to}
              to={to}
              offset={offset}
              activeClass='text-white'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white'
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
