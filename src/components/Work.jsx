import { useInView } from 'react-intersection-observer';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  const { ref: refRight, inView: inViewRight } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: refLeft, inView: inViewLeft } = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div ref={refRight} className={`flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 ${inViewRight ? 'animate-fade-in-left' : ''}`}>
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Mis ultimos <br />
                trabajos
              </h2>
              <p className='max-w-sm mb-16'>
              Explora nuestra selección de proyectos destacados, que demuestran nuestra dedicación a la innovación y calidad en el desarrollo web.
              </p>
              <a href='https://github.com/Rene-Kuhm' className='btn btn-sm text-lg p-4'>Ver Todos los Projectos</a>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Projecto Titulo</span>
              </div>
            </div>
          </div>
          <div ref={refLeft} className={`flex-1 flex flex-col gap-y-10 ${inViewLeft ? 'animate-fade-in-right' : ''}`}>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Projecto Titulo</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Projecto Titulo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
