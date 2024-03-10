import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

export const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text  */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Mis ultimos <br />
                trabajos
              </h2>
              <p className='max-w-sm mb-16'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                iure nam blanditiis non, rem consectetur ratione. Quis odit
                ducimus doloribus!
              </p>
              <button className='btn btn-sm'>Ver Todos los Projectos</button>
            </div>
            {/* imagen */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div></div>
              {/* image */}
              <img src={Img1} alt='' />
              {/* pretitulo */}
              <div>UI/UX Design</div>
              {/* titulo */}
              <div>
                <span>Projecto Titulo</span>
              </div>
            </div>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </section>
  )
}
