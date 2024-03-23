import { BsArrowUpRight } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    name: 'UI/UX Design',
    description:
      'UI/UX Design se centra en la creación de interfaces atractivas y experiencias de usuario intuitivas, asegurando que cada aspecto visual y de interacción funcione armoniosamente para ofrecer una navegación fluida y satisfacer las necesidades del usuario final.',
    link: '',
  },
  {
    name: 'Development',
    description:
      'Development engloba el proceso técnico de construcción y mantenimiento de software, abarcando desde el desarrollo de aplicaciones web y móviles hasta sistemas complejos, con el objetivo de convertir ideas en soluciones funcionales y eficientes.',
    link: '',
  },
  {
    name: 'Digital Marketing',
    description:
      'Digital Marketing optimiza la presencia en línea mediante publicidad y contenido para impulsar la visibilidad y el engagement, fomentando el crecimiento comercial.',
    link: '',
  },
  {
    name: 'Product Branding',
    description:
      'Product Branding fortalece la identidad de un producto, creando una conexión distintiva y duradera con los consumidores a través de elementos visuales, narrativas y valores de marca.',
    link: '',
  },
]

const Services = () => {
  const { ref: refRight, inView: inViewRight } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })
  const { ref: refLeft, inView: inViewLeft } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section className='section ' id='services'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row '>
          <div
            ref={refRight}
            className={`flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-10 lg:mb-0  ${
              inViewRight ? 'animate-fade-in-left' : ''
            }`}
          >
            <h2 className='h2 text-accent mb-6 '>
              Mi Oferta: Soluciones Innovadoras en Desarrollo
            </h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Soy un Desarrollador FullStack con 3 años de experiencia.
            </h3>
            <a
              className='btn btn-sm text-lg p-4'
              href='https://github.com/Rene-Kuhm'
            >
              Ver Mis Trabajos
            </a>
          </div>
          <div
            ref={refLeft}
            className={`flex-1 ${inViewLeft ? 'animate-fade-in-right' : ''}`}
          >
            <div>
              {
              services.map((service, index) => (
              <div
                className='border-b border-white/20 mb-6 md:mb-[26px] flex flex-col md:flex-row'
                key={index}
              >
                <div className='md:max-w-[446px] flex-grow'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4 md:mb-6'>
                    {service.name}
                  </h4>
                  <p className='font-secondary leading-tight'>
                    {service.description}
                  </p>
                </div>
                <div className='flex flex-col items-center md:items-end mt-4 md:mt-0'>
                  <a
                    href={service.link || '#'}
                    className='btn w-9 h-9 mb-3 md:mb-[42px] flex justify-center items-center'
                  >
                    <BsArrowUpRight />
                  </a>
                  <a
                    href={service.link || '#'}
                    className='text-gradient text-sm'
                  >
                    Learn More
                  </a>
                </div>
              </div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
