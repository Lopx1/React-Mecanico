import { Users, Award, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1613214049841-8ebf8d1e0897?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sobre Nosotros
              </h1>
              <p className="text-xl">
                Más de 20 años de experiencia en el sector automotriz
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 mb-4">
              Fundado en 2003, AutoTech Pro nació con la visión de proporcionar servicios automotrices de la más alta calidad en Madrid. A lo largo de los años, hemos crecido y evolucionado, manteniéndonos siempre a la vanguardia de la tecnología automotriz.
            </p>
            <p className="text-gray-600">
              Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha permitido construir una sólida reputación en la comunidad, convirtiéndonos en el taller de confianza para miles de conductores.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Equipo Experto</h3>
              <p className="text-gray-600">
                Técnicos certificados con años de experiencia
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certificaciones</h3>
              <p className="text-gray-600">
                Reconocidos por las principales marcas
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2">
              <ThumbsUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Satisfacción Garantizada</h3>
              <p className="text-gray-600">
                Miles de clientes satisfechos avalan nuestro trabajo
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Integridad</h3>
              <p className="text-gray-600">
                Trabajamos con honestidad y transparencia en cada servicio
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Excelencia</h3>
              <p className="text-gray-600">
                Buscamos la perfección en cada reparación
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Compromiso</h3>
              <p className="text-gray-600">
                Dedicados a superar las expectativas de nuestros clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;