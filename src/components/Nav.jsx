import { BiHomeAlt, BiBook } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsGearFill } from 'react-icons/bs';
import { FaRegAddressBook } from 'react-icons/fa';
import { Link } from 'react-scroll';

const navLinks = [
  { to: 'home', name: 'Home', offset: -70, Icon: BiHomeAlt, type: 'internal' },
  { to: 'about', name: 'About', offset: -70, Icon: BsClipboardData, type: 'internal' },
  { to: 'services', name: 'Services', offset: -70, Icon: BsGearFill, type: 'internal' },
  { to: 'work', name: 'Work', offset: -70, Icon: BsBriefcase, type: 'internal' },
  { to: 'contact', name: 'Contact', offset: -70, Icon: FaRegAddressBook, type: 'internal' },
];

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-xl text-white/50'>
          {navLinks.map(({ to, name, offset, Icon }) => (
            <Link
              key={to}
              to={to}
              offset={offset}
              activeClass='text-white'
              smooth={true}
              spy={true}
              className='cursor-pointer flex flex-col items-center justify-center hover:text-white space-y-2'
            >
              <Icon />
              <span className='text-xs'>{name}</span> {/* Nombre debajo del icono */}
            </Link>
          ))}
          <a href="https://tecno-blog.com/" className='cursor-pointer flex flex-col items-center justify-center hover:text-white space-y-2'>
            <BiBook />
            <span className='text-xs'>Blog</span> {/* Añadido texto para el blog */}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
