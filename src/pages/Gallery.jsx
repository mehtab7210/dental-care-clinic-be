import { useState, useEffect } from "react";
import GalleryGrid from "../components/GalleryGrid";
import {
  FaCamera,
  FaVideo,
  FaImages,
  FaClinicMedical,
  FaUsers,
  FaCog,
  FaSmile,
  FaPlay,
} from "react-icons/fa";
import {
  Sparkles,
  Camera,
  ChevronRight,
  Filter,
  Grid,
  LayoutGrid,
} from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      id: "all",
      name: "All Photos",
      icon: <FaImages className="w-4 h-4" />,
      color: "blue",
    },
    {
      id: "clinic",
      name: "Clinic",
      icon: <FaClinicMedical className="w-4 h-4" />,
      color: "green",
    },
    {
      id: "patients",
      name: "Patients",
      icon: <FaSmile className="w-4 h-4" />,
      color: "purple",
    },
    {
      id: "equipment",
      name: "Equipment",
      icon: <FaCog className="w-4 h-4" />,
      color: "orange",
    },
    {
      id: "staff",
      name: "Staff",
      icon: <FaUsers className="w-4 h-4" />,
      color: "pink",
    },
  ];

  const stats = [
    { icon: <FaImages className="w-5 h-5" />, value: "100+", label: "Photos" },
    { icon: <FaVideo className="w-5 h-5" />, value: "10+", label: "Videos" },
    {
      icon: <FaCamera className="w-5 h-5" />,
      value: "5+",
      label: "Virtual Tours",
    },
    {
      icon: <FaUsers className="w-5 h-5" />,
      value: "50+",
      label: "Happy Patients",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FaCamera className="absolute top-20 left-10 text-white/20 w-16 h-16 animate-float-slow" />
          <FaVideo className="absolute bottom-20 right-10 text-white/20 w-20 h-20 animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative md:mt-0 mt-6">
          <div
            className="text-center max-w-4xl mx-auto"
            data-animate="fade-in-up"
          >
            <div className="inline-flex items-center bg-white/20 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm hover:bg-white/30 transition-colors">
              <Camera className="mr-2 w-4 h-4" />
              Our Gallery
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Visual{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Tour
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4 leading-relaxed">
              Take a look inside our modern facility, meet our team, and see our
              state-of-the-art equipment.
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

      {/* Category Filter Section */}
      <section className="py-8 sm:py-10 border-b bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-between w-full px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-semibold"
            >
              <span className="flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filter Gallery
              </span>
              <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded-full">
                {activeCategory === "all"
                  ? "All"
                  : categories.find((c) => c.id === activeCategory)?.name}
              </span>
            </button>
          </div>

          {/* Category Filters - Desktop */}
          <div className="hidden lg:flex items-center justify-center space-x-3">
            {categories.map((category) => {
              const colors = {
                blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
                green: "bg-green-100 text-green-600 hover:bg-green-200",
                purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
                orange: "bg-orange-100 text-orange-600 hover:bg-orange-200",
                pink: "bg-pink-100 text-pink-600 hover:bg-pink-200",
              };
              const activeColors = {
                blue: "bg-blue-600 text-white",
                green: "bg-green-600 text-white",
                purple: "bg-purple-600 text-white",
                orange: "bg-orange-600 text-white",
                pink: "bg-pink-600 text-white",
              };

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? activeColors[category.color]
                      : colors[category.color]
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Mobile Filter Menu */}
          {isFilterOpen && (
            <div className="lg:hidden grid grid-cols-2 gap-2 mt-4">
              {categories.map((category) => {
                const colors = {
                  blue: "bg-blue-100 text-blue-600",
                  green: "bg-green-100 text-green-600",
                  purple: "bg-purple-100 text-purple-600",
                  orange: "bg-orange-100 text-orange-600",
                  pink: "bg-pink-100 text-pink-600",
                };
                const activeColors = {
                  blue: "bg-blue-600 text-white",
                  green: "bg-green-600 text-white",
                  purple: "bg-purple-600 text-white",
                  orange: "bg-orange-600 text-white",
                  pink: "bg-pink-600 text-white",
                };

                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setIsFilterOpen(false);
                    }}
                    className={`flex items-center justify-center px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeCategory === category.id
                        ? activeColors[category.color]
                        : colors[category.color]
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid category={activeCategory} />
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-white/20 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm">
              <FaVideo className="mr-2 w-4 h-4" />
              Virtual Tour
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Take a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Virtual Tour
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Experience our clinic from the comfort of your home
            </p>
          </div>
          <div
            className="relative max-w-5xl mx-auto group"
            data-animate="fade-in-up"
          >
            <div className="aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&modestbranding=1&rel=0"
                title="Clinic Virtual Tour"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaPlay className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
              </div>
            </div>
          </div>

          {/* Video Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { label: "Duration", value: "3:45 min" },
              { label: "Rooms Featured", value: "12" },
              { label: "Equipment Shown", value: "25+" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Our Clinic in Person?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a visit and see our facility for yourself
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center px-6 py-2 text-base sm:text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <FaCamera className="mr-2" />
              Book a Tour
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2 text-base sm:text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
