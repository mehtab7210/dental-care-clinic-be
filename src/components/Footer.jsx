import { Link } from 'react-router-dom';
import { FaTooth, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaTooth className="text-3xl text-blue-400" />
              <span className="text-2xl font-bold">Dental Care</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing exceptional dental care with a gentle touch. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-blue-400 transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-blue-400 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/general-dentistry" className="text-gray-400 hover:text-blue-400 transition">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services/cosmetic-dentistry" className="text-gray-400 hover:text-blue-400 transition">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services/orthodontics" className="text-gray-400 hover:text-blue-400 transition">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link to="/services/dental-implants" className="text-gray-400 hover:text-blue-400 transition">
                  Dental Implants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Dental Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@dentalcare.com</li>
              <li>
                <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition">
                  Get Directions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dental Care Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;