// imagenes
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 py-8'>
      <div className='container mx-auto '>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          {/* BUTTON */}
          <button className='btn btn-sm'>Contactame</button>
        </div>
      </div>
    </header>
  )
}

export default Header
