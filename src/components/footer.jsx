import { useInView } from 'react-intersection-observer';
import { FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <footer className=' py-16 p-20 mt-10 mb-20 lg:mb-32 text-white'>
      <div className='container mx-auto'>
        <div ref={ref} className={`flex flex-col items-center justify-center space-y-6 ${inView ? 'animate-fade-in-up' : ''}`}>
          <h2 className='text-lg lg:text-xl'>Conéctate con Nosotros</h2>
          <p className='text-sm lg:text-base'>Síguenos en nuestras redes sociales y mantente actualizado.</p>
          <div className='flex gap-6 text-2xl'>
            <a href='https://www.facebook.com/kuhm.rene/' className='hover:text-blue-600'><FaFacebookF /></a>
            <a href='https://twitter.com/REPARO22' className='hover:text-blue-400'><FaTwitter /></a>
            <a href='https://github.com/Rene-Kuhm' className='hover:text-gray-300'><FaGithub /></a>
          </div>
        </div>
        <div className={`mt-8 text-center ${inView ? 'animate-fade-in-up' : ''}`}>
          <p className='text-xs lg:text-sm'>© {new Date().getFullYear()} René Kuhm. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
