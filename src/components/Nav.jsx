import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase } from 'react-icons/bs';
import { Link } from 'react-scroll';

const navLinks = [
  { to: 'home', offset: -70, Icon: BiHomeAlt }, // Ajusta el offset según la altura de tu NavBar
  { to: 'about', offset: -70, Icon: BsClipboardData },
  { to: 'services', offset: -70, Icon: BiUser },
  { to: 'work', offset: -70, Icon: BsClipboardData },
  { to: 'contact', offset: -70, Icon: BsBriefcase },
];

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          {navLinks.map(({ to, offset, Icon }) => (
            <Link
              key={to}
              to={to}
              offset={offset}
              activeClass='text-white' // Añadido para mejorar la visibilidad del ícono activo
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
