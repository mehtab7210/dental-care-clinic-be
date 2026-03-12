import { useState, useEffect } from "react";
import AppointmentForm from "../components/AppointmentForm";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCalendarCheck,
  FaAmbulance,
  FaCheckCircle,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import {
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Sparkles,
  Shield,
  Heart,
  Award,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const BookAppointment = () => {
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

  const benefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Same-day appointments available",
    },
    { icon: <Shield className="w-5 h-5" />, text: "Insurance accepted" },
    { icon: <Heart className="w-5 h-5" />, text: "Comfortable environment" },
    { icon: <Award className="w-5 h-5" />, text: "Expert dentists" },
  ];

  const stats = [
    { icon: <FaUsers />, value: "10,000+", label: "Happy Patients" },
    { icon: <FaCalendarCheck />, value: "500+", label: "Monthly Appointments" },
    { icon: <FaStar />, value: "4.9", label: "Patient Rating" },
    { icon: <FaCheckCircle />, value: "98%", label: "Satisfaction" },
  ];

  const quickActions = [
    {
      icon: <Phone />,
      label: "Call Now",
      action: "tel:5551234567",
      color: "bg-green-500",
    },
    {
      icon: <Mail />,
      label: "Email",
      action: "mailto:appointments@dentalcare.com",
      color: "bg-blue-500",
    },
    {
      icon: <MapPin />,
      label: "Directions",
      action: "https://maps.google.com",
      color: "bg-purple-500",
    },
    {
      icon: <Clock />,
      label: "Hours",
      action: "#hours",
      color: "bg-orange-500",
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
          <Calendar className="absolute top-20 left-10 text-white/20 w-16 h-16 animate-float-slow" />
          <Clock className="absolute bottom-20 right-10 text-white/20 w-20 h-20 animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative md:mt-0 mt-6">
          <div
            className="text-center max-w-4xl mx-auto"
            data-animate="fade-in-up"
          >
            <div className="inline-flex items-center bg-white/20 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm hover:bg-white/30 transition-colors">
              <Calendar className="mr-2 w-4 h-4" />
              Book Your Visit
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Book Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Appointment
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4 leading-relaxed">
              Schedule your visit today. We're here to provide you with the best
              dental care in a comfortable environment.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.action}
                  className={`${action.color} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 flex items-center shadow-lg`}
                >
                  {action.icon}
                  <span className="ml-2 hidden sm:inline">{action.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm hover:shadow-md transition-all transform hover:scale-105"
                data-animate="fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 text-2xl sm:text-3xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Contact Information */}
            <div className="lg:col-span-1" data-animate="slide-left">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden sticky top-24">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-6 sm:px-8 py-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Contact Information
                  </h2>
                  <p className="text-white/80 text-sm">
                    Reach out to us anytime
                  </p>
                </div>

                {/* Contact Details */}
                <div className="p-6 sm:p-8">
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <div className="bg-blue-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                        <FaPhone className="text-blue-600 w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:5551234567"
                          className="text-gray-600 hover:text-blue-600 block transition-colors"
                        >
                          (555) 123-4567
                        </a>
                        <p className="text-sm text-gray-500 mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1 text-red-500" />
                          Emergency: (555) 123-4568
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <div className="bg-green-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                        <FaEnvelope className="text-green-600 w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:appointments@dentalcare.com"
                          className="text-gray-600 hover:text-blue-600 block transition-colors"
                        >
                          appointments@dentalcare.com
                        </a>
                        <a
                          href="mailto:info@dentalcare.com"
                          className="text-sm text-gray-500 hover:text-blue-600 mt-1 block"
                        >
                          info@dentalcare.com
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <div className="bg-purple-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                        <FaMapMarkerAlt className="text-purple-600 w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Location
                        </h3>
                        <p className="text-gray-600">123 Dental Street</p>
                        <p className="text-gray-600">New York, NY 10001</p>
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div
                      className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors"
                      id="hours"
                    >
                      <div className="bg-orange-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                        <FaClock className="text-orange-600 w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Office Hours
                        </h3>
                        <div className="space-y-1 text-gray-600">
                          <p className="flex justify-between">
                            <span>Mon-Fri:</span>
                            <span className="font-medium">
                              9:00 AM - 6:00 PM
                            </span>
                          </p>
                          <p className="flex justify-between">
                            <span>Saturday:</span>
                            <span className="font-medium">
                              9:00 AM - 2:00 PM
                            </span>
                          </p>
                          <p className="flex justify-between">
                            <span>Sunday:</span>
                            <span className="font-medium text-red-500">
                              Closed
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Notice */}
                  <div className="mt-8 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-700 mb-1">
                          Emergency?
                        </p>
                        <p className="text-sm text-gray-600 mb-3">
                          Don't wait! Call our emergency line for immediate
                          assistance.
                        </p>
                        <a
                          href="tel:5551234568"
                          className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700"
                        >
                          <FaAmbulance className="mr-2" />
                          Call Emergency: (555) 123-4568
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Why book with us?
                    </h3>
                    <div className="space-y-2">
                      {benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="text-green-500 mr-2">
                            {benefit.icon}
                          </div>
                          {benefit.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Appointment Form */}
            <div className="lg:col-span-2" data-animate="slide-right">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-6 sm:px-8 py-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Schedule Your Visit
                  </h2>
                  <p className="text-white/80 text-sm">
                    Fill out the form below and we'll confirm your appointment
                  </p>
                </div>

                {/* Form */}
                <div className="p-6 sm:p-8">
                  <AppointmentForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Appointment Tips
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Prepare for Your Visit
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Arrive Early",
                description:
                  "Please arrive 15 minutes before your appointment for paperwork",
                icon: <Clock className="w-6 h-6" />,
              },
              {
                title: "Bring Documents",
                description:
                  "Insurance card, ID, and any relevant medical records",
                icon: <FaCheckCircle className="w-6 h-6" />,
              },
              {
                title: "List Medications",
                description:
                  "Bring a list of current medications and allergies",
                icon: <Heart className="w-6 h-6" />,
              },
              {
                title: "Ask Questions",
                description: "Prepare any questions you have for your dentist",
                icon: <AlertCircle className="w-6 h-6" />,
              },
            ].map((tip, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
                data-animate="fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {tip.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:5551234567"
              className="inline-flex items-center px-6 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
