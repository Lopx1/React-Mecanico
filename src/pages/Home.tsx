import { ArrowRight, Shield, Wrench, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Servicio Automotriz de Excelencia
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Expertos en mantenimiento y reparación de vehículos
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Solicitar Cita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Garantía de Calidad</h3>
              <p className="text-gray-600">
                Respaldamos todos nuestros servicios con garantía
              </p>
            </div>
            <div className="text-center">
              <Wrench className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Técnicos Certificados</h3>
              <p className="text-gray-600">
                Personal altamente capacitado y experimentado
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Servicio Rápido</h3>
              <p className="text-gray-600">
                Eficiencia sin comprometer la calidad
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">20+ Años de Experiencia</h3>
              <p className="text-gray-600">
                Trayectoria probada en el sector automotriz
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesita un diagnóstico profesional?
          </h2>
          <p className="text-xl mb-8">
            Contáctenos hoy mismo para programar una revisión de su vehículo
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contactar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;