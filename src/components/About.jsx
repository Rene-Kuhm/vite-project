import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <div className={`flex-1 bg-about md:bg-cover bg-no-repeat h-[640px] mix-blend-lighten bg-top ${inView ? 'animate-fade-in-left' : ''}`}>
          </div>
          {/* text */}
          <div className={`flex-1 ${inView ? 'animate-fade-in-right' : ''}`}>
            <h2 className='h2 text-accent'>Acerca de mi</h2>
            <h3 className='h3 mb-6'>
              Soy un Desarrollador FullStack con 3 años de experiencia.
            </h3>
            <p className='mb-4 text-2xl'>
            Soy un Desarrollador Full Stack apasionado por transformar ideas en soluciones digitales impactantes, especializado en JavaScript, React, Node.js, y SQL. Mi experiencia abarca desde el diseño de interfaces hasta la implementación de sistemas complejos, siempre con el objetivo de mejorar la experiencia del usuario y alcanzar metas comerciales. Me motiva el aprendizaje continuo y la innovación tecnológica, buscando constantemente desafíos que impulsan mi crecimiento profesional.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-1'>
              {/* Dynamic sections like these remain unchanged */}
              {/* ... */}
            </div>
            <div className='flex gap-x-8 items-center h-6'>
            {/*<a
            href='#my-portfolio' // Cambia el href para prevenir la recarga de la página
            onClick={(e) => {
              e.preventDefault(); 
              setSection('my-portfolio'); 
            }} className=' text-lg p-4'><button className='btn btn-lg'>My Porfolio</button></a>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

About.propTypes = {
  setSection: PropTypes.func.isRequired,
}

export default About;
