import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import AppointmentForm from '../components/AppointmentForm';
import { FaClock, FaDollarSign, FaCheckCircle } from 'react-icons/fa';

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl text-gray-600">Service not found</h2>
        <button onClick={() => navigate('/services')} className="btn-primary mt-4">
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container-custom">
        <button
          onClick={() => navigate('/services')}
          className="text-blue-600 hover:text-blue-700 mb-8 inline-flex items-center"
        >
          ← Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  {service.longDescription}
                </p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                    <FaDollarSign className="text-blue-600 mr-2" />
                    <span>{service.price}</span>
                  </div>
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                    <FaClock className="text-blue-600 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  What to Expect
                </h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Comprehensive consultation and examination</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Personalized treatment plan</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Comfortable, pain-free procedures</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Follow-up care and support</span>
                  </li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Insurance & Payment</h3>
                  <p className="text-gray-600">
                    We accept most major insurance plans and offer flexible payment options.
                    Contact us to verify your coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;