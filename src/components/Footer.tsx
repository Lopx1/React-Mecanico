import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +34 123 456 789
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@autotechpro.es
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Calle Principal 123, Madrid
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Lunes a Viernes: 8:00 - 19:00
              </p>
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Sábados: 9:00 - 14:00
              </p>
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Domingos: Cerrado
              </p>
            </div>
          </div>

          <div>
  <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
  <div className="flex space-x-4">
    {/* Facebook Link */}
    <a 
      href="https://www.facebook.com/facebook" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-blue-300"
    >
      <Facebook className="h-6 w-6" />
    </a>
    {/* Instagram Link */}
    <a 
      href="https://www.instagram.com/instagram" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-blue-300"
    >
      <Instagram className="h-6 w-6" />
    </a>
  </div>
</div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} AutoTech Pro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;