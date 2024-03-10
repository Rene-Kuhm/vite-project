import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Footer = () => {
  return (
    <footer className='py-16 p-20 mt-10 mb-20 lg:mb-32  text-white'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='flex flex-col items-center justify-center'>
          <h2 className='text-lg lg:text-xl mb-2'>Conéctate con Nosotros</h2>
          <p className='mb-6 text-sm lg:text-base'>Síguenos en nuestras redes sociales y mantente actualizado.</p>
          {/* Redes sociales o información de contacto aquí */}
          <div className='flex gap-4'>
            <a href='#' className='text-accent'>Facebook</a>
            <a href='#' className='text-accent'>Twitter</a>
            <a href='#' className='text-accent'>LinkedIn</a>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='mt-8  text-center'>
          <p className='text-xs lg:text-sm'>© {new Date().getFullYear()} René Kuhm. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
