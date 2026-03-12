import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  Star,
  Clock,
  Users,
  Shield,
  Award,
  Heart,
  ChevronRight,
  Play,
  Phone,
  MapPin,
} from "lucide-react";
import { FaTooth, FaSmile, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

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
      { threshold: 0.1 },
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const bgImages = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=2000&q=80",
  ];
  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <Users className="w-5 h-5" />,
      value: "10,000+",
      label: "Happy Patients",
    },
    {
      icon: <Award className="w-5 h-5" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      value: "50+",
      label: "Expert Dentists",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      value: "98%",
      label: "Satisfaction",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen Background Slideshow */}
      <div className="absolute inset-0">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Dental clinic ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {bgImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-white"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated background elements - Overlay effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating icons - Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FaTooth className="absolute top-20 left-10 text-white/10 w-24 h-24 animate-float-slow" />
        <FaSmile className="absolute bottom-20 right-10 text-white/10 w-32 h-32 animate-float-delayed" />
        <Star className="absolute top-40 right-20 text-white/10 w-16 h-16 animate-float" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 z-10 mt-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="text-center lg:text-left space-y-8 text-white"
            data-animate="fade-in-up"
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 text-white backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in hover:bg-white/30 transition-colors">
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to Modern Dental Care
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Your Smile Is Our{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
                  Priority
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C70 3 230 3 298 10"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#93c5fd" />
                      <stop offset="100%" stopColor="#5eead4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience exceptional dental care in a comfortable, modern
              environment. Your journey to a healthier smile starts here with
              our expert team.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl"
                >
                  <div className="text-white/80 mb-1 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/book-appointment"
                className="group relative inline-flex items-center justify-center px-6 py-2 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-full overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Calendar className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Book Appointment</span>
                <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center justify-center px-6 py-2 text-base sm:text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full hover:bg-white/30 hover:border-white transform hover:scale-105 transition-all duration-300"
              >
                <Star className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Our Services
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-8">
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
                <span className="ml-3 text-sm text-gray-300">
                  <span className="font-semibold text-white">2k+</span> happy
                  patients
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <FaCheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">Verified Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
