import { 
  Car, 
  Gauge, 
  Battery, 
  Cog, 
  Thermometer,
  Wrench,
  AlertTriangle,
  Radio
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Mantenimiento General",
      description: "Servicios completos de mantenimiento preventivo y correctivo para mantener su vehículo en óptimas condiciones."
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Diagnóstico Computarizado",
      description: "Análisis detallado del sistema electrónico de su vehículo para identificar problemas con precisión."
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Sistema Eléctrico",
      description: "Reparación y mantenimiento de todos los componentes eléctricos del vehículo."
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Transmisión",
      description: "Servicio especializado en sistemas de transmisión manual y automática."
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Aire Acondicionado",
      description: "Mantenimiento y reparación de sistemas de climatización."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Frenos",
      description: "Servicio completo de sistema de frenos, incluyendo pastillas, discos y calibración."
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Suspensión",
      description: "Diagnóstico y reparación de sistemas de suspensión y dirección."
    },
    {
      icon: <Radio className="h-8 w-8" />,
      title: "Sistemas Multimedia",
      description: "Instalación y reparación de sistemas de audio, video y navegación."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-600">
            Ofrecemos una amplia gama de servicios automotrices con la más alta calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Necesita un servicio específico?
          </h2>
          <p className="text-lg mb-6">
            Contáctenos para discutir sus necesidades específicas y obtener una evaluación personalizada
          </p>
          <a 
            href="/contacto"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;