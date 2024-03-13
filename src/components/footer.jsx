import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <footer className='py-16 p-20 mt-10 mb-20 lg:mb-32 text-white'>
      <div className='container mx-auto'>
        <div ref={ref} className={`flex flex-col items-center justify-center ${inView ? 'animate-fade-in-up' : ''}`}>
          <h2 className='text-lg lg:text-xl mb-2'>Conéctate con Nosotros</h2>
          <p className='mb-6 text-sm lg:text-base'>Síguenos en nuestras redes sociales y mantente actualizado.</p>
          <div className='flex gap-4'>
            <a href='https://www.facebook.com/kuhm.rene/' className='text-accent'>Facebook</a>
            <a href='https://twitter.com/REPARO22' className='text-accent'>Twitter</a>
            <a href='https://github.com/Rene-Kuhm' className='text-accent'>Github</a>
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
