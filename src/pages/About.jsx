import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  FaCheckCircle, 
  FaUsers, 
  FaSmile, 
  FaAward,
  FaTooth,
  FaClinicMedical,
  FaHandHoldingHeart,
  FaStar,
  FaCalendarCheck,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Shield,
  Clock,
  Target,
  Users,
  ChevronRight
} from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: <FaSmile className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />, value: "10,000+", label: "Happy Patients", color: "blue" },
    { icon: <FaAward className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />, value: "15+", label: "Years Experience", color: "green" },
    { icon: <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />, value: "20+", label: "Expert Staff", color: "purple" },
    { icon: <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />, value: "100%", label: "Satisfaction", color: "pink" },
  ];

  const team = [
    {
      name: "Dr. John Smith",
      role: "Lead Dentist",
      qualifications: "DDS, MS",
      experience: "20+ years",
      description: "With over 20 years of experience, Dr. Smith specializes in cosmetic and restorative dentistry.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "dr.smith@dentalcare.com"
      }
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Orthodontist",
      qualifications: "DDS, MS Ortho",
      experience: "15+ years",
      description: "Dr. Johnson is an expert in braces and aligners, helping patients achieve perfect smiles.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "dr.johnson@dentalcare.com"
      }
    },
    {
      name: "Dr. Michael Chen",
      role: "Periodontist",
      qualifications: "DDS, MS Perio",
      experience: "12+ years",
      description: "Specializing in gum health and dental implants, Dr. Chen ensures optimal oral health.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "dr.chen@dentalcare.com"
      }
    }
  ];

  const values = [
    {
      icon: <FaCheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every procedure, using the latest techniques and technology."
    },
    {
      icon: <FaUsers className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Compassion",
      description: "We treat every patient with kindness, understanding, and respect."
    },
    {
      icon: <FaAward className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Integrity",
      description: "We're honest, transparent, and always act in our patients' best interests."
    },
    {
      icon: <FaHandHoldingHeart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Patient-Centered",
      description: "Your comfort and satisfaction are our top priorities in everything we do."
    }
  ];

  const timeline = [
    { year: "2010", event: "Clinic Founded", description: "Started as a small practice with 2 dentists", icon: <FaClinicMedical /> },
    { year: "2015", event: "Expansion", description: "Moved to larger facility with modern equipment", icon: <FaAward /> },
    { year: "2018", event: "Team Growth", description: "Added specialists and expanded services", icon: <FaUsers /> },
    { year: "2024", event: "10,000+ Patients", description: "Celebrated serving over 10,000 happy patients", icon: <FaSmile /> },
  ];

  const facilities = [
    {
      title: "Modern Equipment",
      description: "State-of-the-art dental technology for precise diagnosis and treatment",
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      title: "Comfortable Environment",
      description: "Relaxing atmosphere with amenities to make your visit pleasant",
      icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency services for urgent dental needs",
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      title: "Insurance Accepted",
      description: "We work with most major insurance providers",
      icon: <FaCheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FaTooth className="absolute top-20 left-10 text-white/20 w-16 h-16 animate-float-slow" />
          <FaStar className="absolute bottom-20 right-10 text-white/20 w-20 h-20 animate-float-delayed" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative md:mt-0 mt-6">
          <div className="text-center max-w-4xl mx-auto" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-white/20 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm hover:bg-white/30 transition-colors">
              <FaTooth className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
              Welcome to Dental Care Clinic
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Dental Care
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4 leading-relaxed">
              We're dedicated to providing exceptional dental care in a comfortable, 
              welcoming environment. Your smile is our passion.
            </p>
          
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1" data-animate="slide-left">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5 hover:bg-blue-200 transition-colors">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                Your Trusted Partner in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  Dental Health
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p className="text-base sm:text-lg leading-relaxed">
                  Founded in 2010, Dental Care Clinic has grown from a small practice 
                  to a comprehensive dental care center serving thousands of patients. 
                  Our commitment to excellence and patient-centered care has made us 
                  a trusted name in the community.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  We believe that everyone deserves a beautiful, healthy smile. That's 
                  why we combine state-of-the-art technology with compassionate care 
                  to deliver the best possible outcomes for our patients.
                </p>
              </div>
              
              {/* Timeline */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="text-blue-600 mb-2 flex justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="font-bold text-blue-600 text-sm sm:text-base">{item.year}</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-800">{item.event}</div>
                  </div>
                ))}
              </div>

              <Link 
                to="/book-appointment" 
                className="group inline-flex w-full sm:w-auto items-center justify-center px-6 py-2 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-full hover:from-blue-700 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaCalendarCheck className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Book Your Visit
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Image with floating cards */}
            <div className="order-1 lg:order-2 relative mb-8 lg:mb-0" data-animate="slide-right">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1168&q=80"
                  alt="Dental Care Clinic Interior"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-4 sm:-bottom-5 -left-4 sm:-left-5 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 max-w-[160px] sm:max-w-[180px] animate-float">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FaAward className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Certified</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-800">ISO Certified</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 sm:-top-5 -right-4 sm:-right-5 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 max-w-[160px] sm:max-w-[180px] animate-float-delayed">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Rating</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-800">4.9 ★ (2.5k)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center text-white p-6 sm:p-8 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                data-animate="fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Mission &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Values
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We're guided by principles that put our patients first.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                data-animate="fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                  <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Our Facilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Modern &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
                Comfortable
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experience dental care in a relaxing, state-of-the-art environment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                data-animate="fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-green-100 rounded-lg text-green-600">
                    {facility.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{facility.title}</h3>
                  <p className="text-sm text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Expert Team
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
                Specialists
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experienced professionals dedicated to your oral health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                data-animate="fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-center space-x-4">
                      <a href={member.social.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                        <span className="text-sm">in</span>
                      </a>
                      <a href={member.social.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors">
                        <span className="text-sm">𝕏</span>
                      </a>
                      <a href={`mailto:${member.social.email}`} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                        <FaEnvelope className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-semibold text-base sm:text-lg">{member.role}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {member.experience}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{member.qualifications}</p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{member.description}</p>
                  
                  {/* Contact button for mobile */}
                  <div className="mt-4 sm:hidden">
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="inline-flex items-center text-blue-600 text-sm font-semibold"
                    >
                      <FaEnvelope className="mr-2" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-600 to-teal-600 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-white/20 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm">
              <FaClinicMedical className="mr-2 w-4 h-4" />
              Get Started Today
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
              Ready to Transform Your Smile?
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied patients who trust us with their dental care
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-6 py-2 text-base sm:text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto"
              >
                <FaClinicMedical className="mr-2 w-5 h-5" />
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:5551234567"
                className="group inline-flex items-center justify-center px-6 py-2 text-base sm:text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <FaPhone className="mr-2 w-5 h-5" />
                Call Us: (555) 123-4567
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 sm:mt-16">
              <div className="flex items-center justify-center space-x-2 text-white/80">
                <FaPhone className="w-4 h-4" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white/80">
                <FaEnvelope className="w-4 h-4" />
                <span className="text-sm">info@dentalcare.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white/80">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span className="text-sm">123 Dental St, City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;