import { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import {
  FaPhone,
  FaTooth,
  FaClock,
  FaShieldAlt,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaAward,
  FaAmbulance,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import {
  Sparkles,
  Calendar,
  ArrowRight,
  AlertCircle,
  ChevronRight,
  Clock,
  Heart,
  Shield,
  Zap,
  ThumbsUp,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [isVisible, setIsVisible] = useState({});
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Filter categories
  const categories = [
    { id: "all", name: "All Services", icon: <FaTooth className="w-4 h-4" /> },
    {
      id: "preventive",
      name: "Preventive",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      id: "restorative",
      name: "Restorative",
      icon: <FaClock className="w-4 h-4" />,
    },
    {
      id: "cosmetic",
      name: "Cosmetic",
      icon: <Sparkles className="w-4 h-4" />,
    },
    { id: "surgical", name: "Surgical", icon: <Zap className="w-4 h-4" /> },
  ];

  // Filter services
  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    {
      icon: <FaUsers className="w-5 h-5" />,
      value: "10,000+",
      label: "Happy Patients",
    },
    {
      icon: <FaAward className="w-5 h-5" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <FaStar className="w-5 h-5" />,
      value: "4.9",
      label: "Patient Rating",
    },
    {
      icon: <FaCheckCircle className="w-5 h-5" />,
      value: "50+",
      label: "Expert Dentists",
    },
  ];

  const features = [
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Certified Experts",
      description:
        "All our dentists are board-certified with years of experience",
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Early morning and evening appointments available",
    },
    {
      icon: <FaTooth className="w-6 h-6" />,
      title: "Modern Technology",
      description: "State-of-the-art dental equipment for precise treatment",
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Emergency services available around the clock",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FaTooth className="absolute top-20 left-10 text-white/20 w-16 h-16 animate-float-slow" />
          <Sparkles className="absolute bottom-20 right-10 text-white/20 w-20 h-20 animate-float-delayed" />
        </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative md:mt-0 mt-6">
          <div className="text-center max-w-4xl mx-auto" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-white/20 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm hover:bg-white/30 transition-colors">
              <FaTooth className="mr-2 w-4 h-4" />
              Comprehensive Dental Care
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Our Dental{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Services
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4 leading-relaxed">
              We offer a comprehensive range of dental services to meet all your
              oral health needs. From routine check-ups to complex procedures,
              we're here for you.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 sm:mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full mb-2">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-xl sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 sm:py-8 border-b bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar */}
           <div className="relative w-full lg:flex-1 lg:max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center justify-between w-full px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-semibold"
              >
                <span className="flex items-center">
                  <FaFilter className="mr-2" />
                  Filter Services
                </span>
                <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded-full">
                  {selectedCategory === "all" ? "All" : selectedCategory}
                </span>
              </button>
            </div>

            {/* Category Filters - Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-blue-600">
                {filteredServices.length}
              </span>{" "}
              of {services.length} services
            </div>
          </div>

          {/* Mobile Filter Menu */}
          {filterOpen && (
            <div className="lg:hidden mt-4 grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setFilterOpen(false);
                  }}
                  className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  data-animate="fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="transform hover:-translate-y-2 transition-all duration-300 h-full"
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          ) : (
            // No Results State
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                <FaSearch className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No Services Found
              </h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any services matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Experience the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Dental Care Difference
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                data-animate="fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                className="group text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 rounded-xl mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/women/${i}.jpg`}
                    alt="Patient"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="ml-3 text-sm text-gray-600">
                <span className="font-semibold">2k+</span> happy patients
              </span>
            </div>
            <div className="flex items-center">
              <ThumbsUp className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-600">
                98% satisfaction rate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-red-500 to-red-600 rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
                <FaAmbulance className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                Dental Emergency?
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Don't wait! We provide 24/7 emergency dental services. Call us
                now for immediate assistance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:5551234567"
                  className="group inline-flex items-center justify-center px-6 py-2 text-base sm:text-lg font-semibold text-red-600 bg-white rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  <FaPhone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Call: (555) 123-4567</span>
                </a>

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-6 py-2 text-base sm:text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <AlertCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Emergency Info
                </Link>
              </div>

              {/* Emergency Info Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10">
                {[
                  { label: "Response Time", value: "< 30 mins" },
                  { label: "Availability", value: "24/7" },
                  { label: "Insurance", value: "Accepted" },
                  { label: "Payment", value: "Flexible" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3"
                  >
                    <div className="text-xs text-white/80">{item.label}</div>
                    <div className="text-sm sm:text-base font-bold">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-teal-600 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-3xl mx-auto" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              <Calendar className="w-4 h-4 mr-2" />
              Get Started Today
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Schedule Your Visit?
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Take the first step towards a healthier smile. Book your
              appointment today!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-appointment"
                className="group inline-flex items-center justify-center px-6 py-2 text-base sm:text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Book Appointment
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-6 py-2 text-base sm:text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-white/80 text-sm">
              <a
                href="tel:5551234567"
                className="hover:text-white transition-colors"
              >
                📞 (555) 123-4567
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href="mailto:info@dentalcare.com"
                className="hover:text-white transition-colors"
              >
                ✉️ info@dentalcare.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
