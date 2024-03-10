// imagenes


const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 py-8'>
      <div className='container mx-auto '>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href='#'>
            <p className='text-gradient text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-bold '>Tecnodespegue</p>
          </a>
          {/* BUTTON */}
          <button className='btn btn-sm'>Contactame</button>
        </div>
      </div>
    </header>
  )
}

export default Header
