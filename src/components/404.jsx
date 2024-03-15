const NotFoundPage = () => {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mb-4">Página no encontrada</p>
        <p className="mb-8">Lo sentimos, la página que estás buscando no existe.</p>
        <a href="#home" className="px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-full text-white font-semibold transition duration-200">Volver al inicio</a>
      </div>
    );
  };
  
  export default NotFoundPage;