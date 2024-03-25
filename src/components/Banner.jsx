import PropTypes from 'prop-types';
import { FaYoutube, FaGithub, FaTwitter } from 'react-icons/fa'
import Image from '../assets/avatar.svg'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'

const Banner = ({ setSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Ajustado para una mejor detección de la entrada en viewport
    triggerOnce: true, // Evita repetir la animación, mejorando la experiencia de usuario
  })

  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] m-12 flex items-center'
      id='home'
      ref={ref}
    >
      <div className='container mx-auto m-20'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div
            className={`flex-1 text-center font-secondary lg:text-left ${
              inView ? 'animate-fade-in-up' : ''
            }`}
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.8] lg:leading-none'>
              Soluciones Web <span>Innovadoras</span>
            </h1>
            <div
              className='mb-8 p-3 font-secondary font-semibold uppercase leading-[1]'
              style={{ minHeight: '150px' }}
            >
              <span className='text-white mr-4'>Transformando ideas en</span>
              <TypeAnimation
                sequence={[
                  'realidad digital.',
                  2000,
                  'experiencias únicas.',
                  2000,
                  'soluciones efectivas.',
                  2000,
                  'proyectos exitosos.',
                  2000,
                ]}
                speed={50}
                className='text-gradient'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <p className='mb-8 max-w-lg text-2xl mx-auto lg:mx-0'>
              En <strong className='text-gradient'>Tecnodespegue</strong>,
              creemos en el poder de la tecnología para cambiar el mundo. Con un
              enfoque personalizado y las últimas tendencias en desarrollo web,
              te ayudamos a llevar tu negocio al siguiente nivel. Descubre cómo
              podemos transformar tu idea en una solución digital que destaque.
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a
            href='https://steady-entremet-c3571b.netlify.app' // Cambia el href para prevenir la recarga de la página
            onClick={(e) => {
              e.preventDefault(); // Previene el comportamiento por defecto del enlace
              setSection('my-portfolio'); // Actualiza el estado para mostrar la sección de portafolio
            }}
            className='text-gradient btn-link'
          >
           <button className='btn btn-lg'>Mi Portafolio</button> 
          </a>
            </div>
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaYoutube />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaTwitter />
              </a>
            </div>
          </div>
          <div
            className={`hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] ${
              inView ? 'animate-fade-in-down' : ''
            }`}
          >
            <img src={Image} alt='Avatar' />
          </div>
        </div>
      </div>
    </section>
  )
}
Banner.propTypes = {
  setSection: PropTypes.func.isRequired,
}

export default Banner
