const Location = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ubicación
          </h1>
          <p className="text-xl text-gray-600">
            Encuentranos fácilmente en el centro de Madrid
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.89671525837625!2d-55.231052341368525!3d-34.7799049711737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9575441c093c120d%3A0x6375b302d60a668b!2sAv.%20Aparicio%20Saravia%20404%2C%2020300%20Pan%20de%20Az%C3%BAcar%2C%20Departamento%20de%20Maldonado!5e0!3m2!1sen!2suy!4v1731959007603!5m2!1sen!2suy" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Cómo Llegar</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg mb-2">Estamos en Pan de Azucar</h3>
                  <p className="text-gray-600">
                    - Frente a la estación DISA<br />
                    - A 15 Minutos de Piriapolis<br />
                    - En la calle Aparicio Saravia al costado de la ruta 9
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Información Adicional</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Nos encontramos en una zona de fácil acceso con múltiples opciones de transporte. 
                  Contamos con una zona de espera cómoda mientras realizamos el servicio a su vehículo.
                </p>
                <p className="text-gray-600">
                  Si necesita ayuda para llegar, no dude en contactarnos:
                  <br />
                  <span className="font-medium">+34 123 456 789</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;