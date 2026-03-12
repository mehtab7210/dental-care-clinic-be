import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner
} from 'react-icons/fa';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Headphones,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('message');
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Contact form data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Phone",
      details: ["(555) 123-4567", "(555) 987-6543"],
      action: "Call now",
      link: "tel:5551234567",
      color: "blue"
    },
    {
      icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      details: ["info@dentalcare.com", "appointments@dentalcare.com"],
      action: "Send email",
      link: "mailto:info@dentalcare.com",
      color: "green"
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Address",
      details: ["123 Dental Street", "New York, NY 10001"],
      action: "Get directions",
      link: "https://maps.google.com",
      color: "purple"
    },
    {
      icon: <FaClock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Office Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM", "Sun: Closed"],
      action: "Book appointment",
      link: "/book-appointment",
      color: "orange"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "#", label: "Facebook", color: "bg-blue-600" },
    { icon: <FaTwitter />, url: "#", label: "Twitter", color: "bg-sky-500" },
    { icon: <FaInstagram />, url: "#", label: "Instagram", color: "bg-pink-600" },
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn", color: "bg-blue-700" },
  ];

  const faqs = [
    {
      question: "How quickly do you respond?",
      answer: "We typically respond within 24 hours during business days."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we work with most major insurance providers."
    },
    {
      question: "Can I book online?",
      answer: "Yes! Use our online booking system or call us directly."
    }
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
          <Mail className="absolute top-20 left-10 text-white/20 w-16 h-16 animate-float-slow" />
          <Headphones className="absolute bottom-20 right-10 text-white/20 w-20 h-20 animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative md:mt-0 mt-6">
          <div className="text-center max-w-4xl mx-auto" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-white/20 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm hover:bg-white/30 transition-colors">
              <MessageCircle className="mr-2 w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Contact{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Us
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4 leading-relaxed">
              Have questions? We're here to help. Reach out to us anytime.
            </p>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 sm:mt-12">
              <a href="tel:5551234567" className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 group-hover:bg-white/30 transition-colors">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold">Call Us</div>
              </a>
              <a href="mailto:info@dentalcare.com" className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 group-hover:bg-white/30 transition-colors">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold">Email Us</div>
              </a>
              <Link to="/book-appointment" className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 group-hover:bg-white/30 transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold">Book Now</div>
              </Link>
              <a href="#map" className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 group-hover:bg-white/30 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold">Directions</div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => {
              const colors = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600',
                orange: 'bg-orange-100 text-orange-600',
              };
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6"
                  data-animate="fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl ${colors[info.color]} mb-4 group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm sm:text-base text-gray-600">{detail}</p>
                    ))}
                  </div>
                  <a
                    href={info.link}
                    className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 group"
                  >
                    {info.action}
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div data-animate="slide-left">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-8 py-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Send us a Message</h2>
                  <p className="text-white/80 text-sm">We'll get back to you within 24 hours</p>
                </div>

                {/* Form Body */}
                <div className="p-6 sm:p-8">
                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                      <div className="flex items-center">
                        <FaCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                        <p className="text-green-700 text-sm">
                          Thank you for your message! We'll get back to you soon.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone Field (Optional) */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Phone Number <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('subject', { required: 'Subject is required' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                          errors.subject ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="How can we help you?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-red-500 text-xs">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        rows="5"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Tell us about your inquiry..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>

                    {/* Form Footer */}
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info & Map */}
            <div className="space-y-8" data-animate="slide-right">
              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    to="/faq"
                    className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700"
                  >
                    View all FAQs
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden" id="map">
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Find Us
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    Visit us at our convenient location in the heart of the city.
                  </p>
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.98510768458417!3d40.75889697932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1644262073400!5m2!1sen!2sus"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Clinic Location"
                    className="w-full h-full object-cover"
                  ></iframe>
                </div>
                <div className="p-4 bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1 text-blue-600" />
                    123 Dental Street, New York, NY 10001
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm font-semibold hover:text-blue-700"
                  >
                    Directions
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Connect With Us
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Follow us on social media for updates and dental health tips.
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-3 rounded-xl hover:scale-110 transition-transform duration-300`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              <Mail className="w-4 h-4 mr-2" />
              Newsletter
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter for the latest updates and dental health tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white border-2 border-white/50"
              />
              <button className="px-6 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;