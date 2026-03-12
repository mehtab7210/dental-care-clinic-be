import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaTooth } from "react-icons/fa";
import { Calendar, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close Menu on Route Change
  useEffect(() => {
    setIsOpen(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }, [location.pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/gallery", name: "Gallery" },
    { path: "/testimonials", name: "Testimonials" },
    { path: "/faq", name: "FAQ" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2.5"
            : "bg-white shadow-lg py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <FaTooth className="text-2xl sm:text-3xl text-blue-600" />
              <span className="text-xl sm:text-2xl font-bold text-gray-800 whitespace-nowrap">
                Dental Care
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition duration-300 hover:text-blue-600 text-sm xl:text-base whitespace-nowrap ${
                    location.pathname === link.path
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Appointment Button */}
            <Link
              to="/book-appointment"
              className="hidden lg:flex group relative items-center justify-center px-4 xl:px-6 py-2 text-sm xl:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-full overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 xl:w-5 xl:h-5 mr-1 xl:mr-2 relative z-10" />

              <span className="relative z-10 hidden xl:inline">
                Book Appointment
              </span>

              <span className="relative z-10 xl:hidden">Book</span>

              <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 ml-1 xl:ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Tablet Menu */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              <Link
                to="/book-appointment"
                className="group inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-full shadow-lg"
              >
                <Calendar className="w-4 h-4 mr-1" />
                Book Appointment
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl text-gray-600 hover:text-blue-600"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile / Tablet Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] sm:w-80 bg-white shadow-xl z-[60] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <FaTooth className="text-2xl text-blue-600" />
              <span className="text-xl font-bold text-gray-800">
                Dental Care
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-gray-600 hover:text-blue-600"
            >
              <FaTimes />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex-1 overflow-y-auto py-6 px-6">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg font-medium transition duration-300 ${
                    location.pathname === link.path
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Appointment Button */}
            <div className="mt-8 pt-8 border-t">
              <Link
                to="/book-appointment"
                onClick={() => setIsOpen(false)}
                className="group w-full inline-flex items-center justify-center px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
