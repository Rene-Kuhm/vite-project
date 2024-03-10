import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <div className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img  */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text  */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>Acerca de mi</h2>
            <h3 className='h3 mb-4'>
              Soy un Desarrollador FullStack con 3 años de experiencia.
            </h3>
            <p className='mb-6 text-2xl'>
            Soy un Desarrollador Full Stack apasionado por transformar ideas en soluciones digitales impactantes, especializado en JavaScript, React, Node.js, y SQL. Mi experiencia abarca desde el diseño de interfaces hasta la implementación de sistemas complejos, siempre con el objetivo de mejorar la experiencia del usuario y alcanzar metas comerciales. Me motiva el aprendizaje continuo y la innovación tecnológica, buscando constantemente desafíos que impulsan mi crecimiento profesional.
            </p>
            {/* stats  */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Años de <br /> experiencia
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projectos <br /> Completados
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Clientes <br /> Satisfechos
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
            <a href='https://github.com/Rene-Kuhm' className='btn btn-sm text-lg p-4'>My Porfolio</a >
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
