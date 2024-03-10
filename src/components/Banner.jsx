import { FaYoutube, FaGithub, FaTwitter } from 'react-icons/fa'
import Image from '../assets/avatar.svg'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] m-12 flex items-center'
      id='home'
    >
      <div className='container mx-auto m-20'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* Text section */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.8] lg:leading-none'
            >
              Soluciones Web <span>Innovadoras</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 p-3 font-secondary font-semibold uppercase leading-[1]'
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
                className=' text-gradient'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg text-2xl mx-auto lg:mx-0'
            >
               En <strong className='text-gradient'>Tecnodespegue</strong>, creemos en el poder de la tecnología para cambiar el mundo. Con un enfoque personalizado y las últimas tendencias en desarrollo web, te ayudamos a llevar tu negocio al siguiente nivel. Descubre cómo podemos transformar tu idea en una solución digital que destaque.

            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>contactame</button>
              <a href='#' className='text-gradient btn-link'>
                My Porfolio
              </a>
            </motion.div>
            {/* Social icons */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='#'>
                <FaYoutube />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          {/* Image section */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img src={Image} alt='Avatar' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
