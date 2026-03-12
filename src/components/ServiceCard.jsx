import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <div className="p-6">
        <div className="text-5xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-blue-600 font-semibold">{service.price}</span>
          <span className="text-gray-500 text-sm">{service.duration}</span>
        </div>
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition duration-300"
        >
          Learn More <FaArrowRight className="ml-2 text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;