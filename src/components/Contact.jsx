import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [alertMsg, setAlertMsg] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_USER_ID)
    .then((result) => {
      console.log(result.text);
      setAlertMsg('Mensaje enviado con éxito!');
      setShowAlert(true);
      formRef.current.reset();
      setTimeout(() => setShowAlert(false), 5000);
    }, (error) => {
      console.log(error.text);
      setAlertMsg('Hubo un error al enviar el mensaje, por favor intenta de nuevo.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        {showAlert && (
          <div style={{
            backgroundColor: '#4BB543', // Verde éxito
            color: 'white',
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #4BB543',
            textAlign: 'center',
            marginBottom: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}>
            {alertMsg}
          </div>
        )}
        <div className='flex flex-col lg:flex-row '>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
              <div>
                <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                  Ponte en Contacto
                </h4>
                <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                  Vamos a <br /> Trabajar juntos!
                </h2>
              </div>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                type='text'
                placeholder='Ingrese su Nombre'
                name="name"
              />
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                type='email'
                placeholder='Ingrese su Correo'
                name="email"
              />
              <textarea
                className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                placeholder='Ingrese su Mensaje'
                name="message"
              ></textarea>
              <button type="submit" className='btn btn-lg'>Enviar Mensaje</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
