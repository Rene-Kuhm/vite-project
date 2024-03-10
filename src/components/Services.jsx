import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

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
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text y imagen */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>
              Mi Oferta: Soluciones Innovadoras en Desarrollo
            </h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Soy un Desarrollador FullStack con 3 años de experiencia.
            </h3>
            <button className='btn btn-sm'>Ver Mis Trabajos</button>
          </motion.div>
          {/* services */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
            {/* services lista */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[36px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
