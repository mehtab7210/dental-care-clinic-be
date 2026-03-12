import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import AppointmentForm from "../components/AppointmentForm";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { 
  Sparkles, 
  Star, 
  Calendar, 
  ArrowRight, 
  Shield, 
  Heart, 
  Clock,
  ChevronRight,
  Award,
  Users
} from "lucide-react";
import { FaTooth, FaSmile, FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

const Home = () => {
  const featuredServices = services.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);
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
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, value: "10,000+", label: "Happy Patients", color: "blue" },
    { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, value: "15+", label: "Years Experience", color: "green" },
    { icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />, value: "50+", label: "Expert Dentists", color: "purple" },
    { icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />, value: "98%", label: "Satisfaction", color: "pink" },
  ];

  const benefits = [
    { icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Experienced and friendly staff" },
    { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />, text: "State-of-the-art equipment" },
    { icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Comfortable, relaxing environment" },
    { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Flexible payment options" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section - Added for social proof */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                data-animate
              >
                <div className="flex justify-center mb-1 sm:mb-2">
                  <div className="p-1.5 sm:p-2 bg-white/20 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-teal-100 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative md:mt-0 mt-6">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12" data-animate>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Quality Dental Care
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive dental care tailored to your needs with modern technology and expert care
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={service.id}
                data-animate
                style={{ animationDelay: `${index * 150}ms` }}
                className="transform hover:-translate-y-2 transition-all duration-300 h-full"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12" data-animate>
            <Link
              to="/services"
              className="group inline-flex w-full sm:w-auto items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-full hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              View All Services
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1" data-animate>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Why Choose Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Your Smile Is in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  Expert Hands
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                We combine years of experience with modern technology to provide you with the best dental care possible.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
                        <div className="text-blue-600">{benefit.icon}</div>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative mb-6 lg:mb-0" data-animate>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1168&q=80"
                  alt="Dental clinic interior"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-white rounded-lg sm:rounded-xl shadow-xl p-2 sm:p-3 max-w-[130px] sm:max-w-[150px] animate-float">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Certified</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-800">ISO Certified</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-white rounded-lg sm:rounded-xl shadow-xl p-2 sm:p-3 max-w-[130px] sm:max-w-[150px] animate-float-delayed">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg">
                    <FaSmile className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Happy</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-800">10k+ Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50"></div>
        <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12" data-animate>
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Patient Stories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Patients Say
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Real experiences from our valued patients who trusted us with their smiles
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                data-animate
                style={{ animationDelay: `${index * 150}ms` }}
                className="transform hover:-translate-y-2 transition-all duration-300 h-full"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12" data-animate>
            <Link
              to="/testimonials"
              className="group inline-flex w-full sm:w-auto items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-purple-600 bg-white border-2 border-purple-600 rounded-full hover:bg-purple-50 hover:border-purple-700 hover:text-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Read More Testimonials
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-teal-600 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white" data-animate>
              <div className="inline-flex items-center bg-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Book Now
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8">
                Take the first step towards a healthier, brighter smile. Our team is ready to provide you with exceptional care.
              </p>

              {/* Benefits Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <span className="text-xs sm:text-sm text-white/90">{benefit.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://randomuser.me/api/portraits/women/${i}.jpg`}
                      alt="Patient"
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-white"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold">1,000+</span>{' '}
                  <span className="text-white/80">appointments booked this month</span>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 lg:p-8" data-animate>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Schedule Your Visit
              </h3>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;