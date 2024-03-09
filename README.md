## este era el primer navbar

````jsx
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase } from 'react-icons/bs'

import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='fixed top-2 lg-bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/*  nav inicio  */}
        <div className=' w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiHomeAlt />
          </Link>
          <Link
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiUser />
          </Link>
          <Link
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsClipboardData />
          </Link>
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

## se modifico el navbar para lograr fluides y reducir codigo
```jsx
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase } from 'react-icons/bs';
import { Link } from 'react-scroll';

const navLinks = [
  { to: 'home', Icon: BiHomeAlt },
  { to: 'services', Icon: BiUser },
  { to: 'about', Icon: BsClipboardData },
  { to: 'contact', Icon: BsBriefcase },
];

const Navbar = () => {
  return (
    <nav className='fixed top-2 lg-bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className=' w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          {navLinks.map(({ to, Icon }) => (
            <Link
              key={to}
              to={to}
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
````
