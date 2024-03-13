import { BsArrowUpRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    name: 'UI/UX Design',
    description:
      "UI/UX Design se centra en la creación de interfaces atractivas y experiencias de usuario intuitivas, asegurando que cada aspecto visual y de interacción funcione armoniosamente para ofrecer una navegación fluida y satisfacer las necesidades del usuario final.",
    link: 'Leer más',
  },
  {
    name: 'Development',
    description:
      "Development engloba el proceso técnico de construcción y mantenimiento de software, abarcando desde el desarrollo de aplicaciones web y móviles hasta sistemas complejos, con el objetivo de convertir ideas en soluciones funcionales y eficientes.",
    link: 'Leer más',
  },
  {
    name: 'Digital Marketing',
    description:
      "Digital Marketing optimiza la presencia en línea mediante publicidad y contenido para impulsar la visibilidad y el engagement, fomentando el crecimiento comercial.",
    link: 'Leer más',
  },
  {
    name: 'Product Branding',
    description:
      "Product Branding fortalece la identidad de un producto, creando una conexión distintiva y duradera con los consumidores a través de elementos visuales, narrativas y valores de marca.",
    link: 'Leer más',
  },
];

const Services = () => {
  const { ref: refRight, inView: inViewRight } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: refLeft, inView: inViewLeft } = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div ref={refRight} className={`flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 ${inViewRight ? 'animate-fade-in-left' : ''}`}>
            <h2 className='h2 text-accent mb-6'>
              Mi Oferta: Soluciones Innovadoras en Desarrollo
            </h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Soy un Desarrollador FullStack con 3 años de experiencia.
            </h3>
            <a className='btn btn-sm text-lg p-4' href='https://github.com/Rene-Kuhm'>Ver Mis Trabajos</a>
          </div>
          <div ref={refLeft} className={`flex-1 ${inViewLeft ? 'animate-fade-in-right' : ''}`}>
            <div>
              {services.map((service, index) => (
                <div className='border-b border-white/20 h-[146px] mb-[36px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {service.description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href='#' className='text-gradient text-sm'>
                      {service.link}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
