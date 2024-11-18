import { Star, User } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Carlos Rodríguez",
      date: "15 marzo 2024",
      rating: 5,
      comment: "Excelente servicio. Repararon mi coche en tiempo récord y el precio fue muy razonable. Totalmente recomendado."
    },
    {
      name: "Ana García",
      date: "10 marzo 2024",
      rating: 5,
      comment: "Personal muy profesional y atento. Me explicaron todo el proceso de reparación detalladamente."
    },
    {
      name: "Miguel Ángel Pérez",
      date: "5 marzo 2024",
      rating: 4,
      comment: "Buen servicio y atención al cliente. El único inconveniente fue el tiempo de espera para la cita."
    },
    {
      name: "Laura Martínez",
      date: "1 marzo 2024",
      rating: 5,
      comment: "Increíble atención y profesionalidad. Mi coche quedó como nuevo después del mantenimiento."
    },
    {
      name: "David Sánchez",
      date: "25 febrero 2024",
      rating: 5,
      comment: "Los mejores mecánicos de la zona. Siempre confío en ellos para el mantenimiento de mi vehículo."
    },
    {
      name: "Isabel López",
      date: "20 febrero 2024",
      rating: 4,
      comment: "Muy buenos profesionales. Precios competitivos y trabajo de calidad."
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Reseñas de Clientes
          </h1>
          <p className="text-xl text-gray-600">
            Lo que opinan nuestros clientes sobre nuestro servicio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Has sido nuestro cliente?
          </h2>
          <p className="text-lg mb-6">
            Nos encantaría conocer tu opinión sobre nuestro servicio
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Dejar una Reseña
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;