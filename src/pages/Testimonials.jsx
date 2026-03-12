import { useState, useEffect } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaUsers,
  FaCalendarAlt,
  FaSmile,
  FaHeart,
  FaShare,
  FaFilter
} from 'react-icons/fa';
import { 
  Sparkles, 
  Star, 
  ChevronRight, 
  MessageCircle,
  ThumbsUp,
  Clock,
  Award,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const [filterRating, setFilterRating] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;
  
  // Calculate rating distribution
  const ratingCounts = testimonials.reduce((acc, t) => {
    acc[t.rating] = (acc[t.rating] || 0) + 1;
    return acc;
  }, {});

  // Filter and sort testimonials
  const filteredTestimonials = testimonials
    .filter(t => filterRating === 'all' || t.rating === parseInt(filterRating))
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
      if (sortBy === 'highest') return b.rating - a.rating;
      if (sortBy === 'lowest') return a.rating - b.rating;
      return 0;
    });

  const stats = [
    { icon: <FaUsers className="w-5 h-5" />, value: testimonials.length, label: "Total Reviews" },
    { icon: <FaStar className="w-5 h-5" />, value: averageRating.toFixed(1), label: "Average Rating" },
    { icon: <FaSmile className="w-5 h-5" />, value: "98%", label: "Satisfaction Rate" },
    { icon: <FaHeart className="w-5 h-5" />, value: "5+", label: "Years of Trust" },
  ];

  const ratingFilters = [
    { value: 'all', label: 'All Ratings', icon: <Star className="w-4 h-4" /> },
    { value: '5', label: '5 Stars', icon: <FaStar className="w-4 h-4" /> },
    { value: '4', label: '4 Stars', icon: <FaStar className="w-4 h-4" /> },
    { value: '3', label: '3 Stars', icon: <FaStar className="w-4 h-4" /> },
    { value: '2', label: '2 Stars', icon: <FaStar className="w-4 h-4" /> },
    { value: '1', label: '1 Star', icon: <FaStar className="w-4 h-4" /> },
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'highest', label: 'Highest Rated' },
    { value: 'lowest', label: 'Lowest Rated' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FaQuoteLeft className="absolute top-20 left-10 text-white/20 w-16 h-16 animate-float-slow" />
          <FaQuoteRight className="absolute bottom-20 right-10 text-white/20 w-20 h-20 animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative md:mt-0 mt-6">
          <div className="text-center max-w-4xl mx-auto" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-white/20 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm hover:bg-white/30 transition-colors">
              <MessageCircle className="mr-2 w-4 h-4" />
              Patient Stories
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Patient{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Testimonials
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4 leading-relaxed">
              Read what our patients have to say about their experience at Dental Care Clinic.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 sm:mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full mb-2">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-xl sm:text-2xl">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rating Summary Section */}
      <section className="py-12 sm:py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Average Rating */}
            <div className="text-center lg:text-left" data-animate="slide-left">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4 mr-2" />
                Overall Rating
              </div>
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <span className="text-5xl sm:text-6xl font-bold text-gray-900 mr-4">
                  {averageRating.toFixed(1)}
                </span>
                <div>
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'
                        } text-xl sm:text-2xl mr-1`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">out of 5 stars</p>
                </div>
              </div>
              <p className="text-gray-600">
                Based on <span className="font-semibold">{testimonials.length} verified reviews</span>
              </p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-3" data-animate="slide-right">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = ratingCounts[rating] || 0;
                const percentage = (count / testimonials.length) * 100;
                return (
                  <div key={rating} className="flex items-center gap-3">
                    <div className="flex items-center w-16 sm:w-20">
                      <span className="text-sm font-semibold mr-1">{rating}</span>
                      <FaStar className="text-yellow-400 w-3 h-3" />
                    </div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-12 text-sm text-gray-600">{count}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Sort Section */}
      <section className="py-6 sm:py-8 border-b bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-between w-full px-4 py-3 bg-purple-50 text-purple-600 rounded-lg font-semibold"
              >
                <span className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter & Sort
                </span>
                <span className="text-sm bg-purple-600 text-white px-2 py-1 rounded-full">
                  {filterRating === 'all' ? 'All' : `${filterRating} Stars`}
                </span>
              </button>
            </div>

            {/* Filter and Sort Controls - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Rating Filter */}
              <div className="flex items-center space-x-2">
                {ratingFilters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setFilterRating(filter.value)}
                    className={`flex items-center px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                      filterRating === filter.value
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-1">{filter.icon}</span>
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-semibold text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-500">
              Showing <span className="font-semibold text-purple-600">{filteredTestimonials.length}</span> of {testimonials.length} reviews
            </div>
          </div>

          {/* Mobile Filter Menu */}
          {isFilterOpen && (
            <div className="lg:hidden mt-4 space-y-4">
              {/* Rating Filter */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Filter by Rating</h4>
                <div className="grid grid-cols-3 gap-2">
                  {ratingFilters.map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => {
                        setFilterRating(filter.value);
                        setIsFilterOpen(false);
                      }}
                      className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs font-semibold ${
                        filterRating === filter.value
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <span className="mr-1">{filter.icon}</span>
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Sort by</h4>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setIsFilterOpen(false);
                  }}
                  className="w-full px-3 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTestimonials.length > 0 ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  data-animate="fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          ) : (
            // No Results State
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                <FaStar className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Reviews Found</h3>
              <p className="text-gray-600 mb-4">
                No reviews match your selected filter.
              </p>
              <button
                onClick={() => setFilterRating('all')}
                className="text-purple-600 font-semibold hover:text-purple-700"
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto" data-animate="fade-in-up">
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Share Your Experience
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Write a Review
            </h2>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              We'd love to hear about your experience at our clinic. Your feedback helps us improve and serves others in choosing the right dental care.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group inline-flex items-center justify-center px-6 py-2 text-lg font-semibold text-purple-600 bg-white rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                <FaStar className="mr-2 w-5 h-5" />
                Write a Review
              </button>
              
              <button className="group inline-flex items-center justify-center px-6 py-2 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                <FaShare className="mr-2 w-5 h-5" />
                Share on Social Media
              </button>
            </div>

            {/* Review Guidelines */}
            <div className="mt-12 text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-3">Review Guidelines:</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Share your honest experience with our services
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Mention specific treatments or staff members if applicable
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Keep your review respectful and constructive
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Your review will be verified before publishing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Testimonials;