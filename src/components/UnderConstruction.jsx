import PropTypes from 'prop-types';
import constructionImage from '../assets/PAGINA.png';

const UnderConstruction = ({ setSection }) => { // Asegurándose de que setSection se recibe como prop
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <img src={constructionImage} alt="En Construcción" className="max-w-xs mb-8" />
      <h1 className="text-4xl lg:text-6xl font-bold mb-4">En Construcción</h1>
      <p className="text-lg lg:text-xl mb-8">
        Estamos trabajando para brindarte una experiencia increíble. ¡Vuelve pronto!
      </p>
      <button
        onClick={() => setSection('home')} // Asegurándose de que setSection se invoca correctamente
        className="btn btn-lg"
      >
        Volver al Inicio
      </button>
    </div>
  );
};

UnderConstruction.propTypes = {
  setSection: PropTypes.func.isRequired,
};

export default UnderConstruction;