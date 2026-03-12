import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaQuoteRight, FaShare, FaHeart } from 'react-icons/fa';
import { ThumbsUp, MessageCircle, MoreHorizontal } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  const truncateContent = (content, limit = 150) => {
    if (content.length <= limit) return content;
    return isExpanded ? content : content.substring(0, limit) + '...';
  };

  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Card Header */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="relative">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
                loading="lazy"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</h4>
              <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
            </div>
          </div>
          
          {/* Share button */}
          <button className="text-gray-400 hover:text-purple-600 transition-colors">
            <FaShare className="w-4 h-4" />
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex mr-3">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`${
                  i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'
                } w-4 h-4 sm:w-5 sm:h-5 mr-1 transition-all group-hover:scale-110`}
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-500">{testimonial.rating}.0</span>
        </div>

        {/* Testimonial Content */}
        <div className="relative">
          <FaQuoteLeft className="absolute -top-2 -left-2 text-gray-100 w-8 h-8" />
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-6 pr-4">
            "{truncateContent(testimonial.content)}"
          </p>
          
          {/* Read More Button */}
          {testimonial.content.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-600 text-sm font-semibold mt-2 hover:text-purple-700 transition-colors"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            {/* Date */}
            <div className="flex items-center text-gray-400 text-xs">
              <span>{testimonial.date}</span>
            </div>
            
            {/* Like Button */}
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-1 text-xs transition-colors ${
                liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
            >
              <FaHeart className={`w-3 h-3 ${liked ? 'fill-current' : ''}`} />
              <span>{liked ? 'Liked' : 'Like'}</span>
            </button>
          </div>

          {/* Reply Button */}
          <button className="flex items-center space-x-1 text-gray-400 hover:text-purple-600 transition-colors text-xs">
            <MessageCircle className="w-3 h-3" />
            <span>Reply</span>
          </button>
        </div>
      </div>

      {/* Verified Badge */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-2">
        <div className="flex items-center text-green-600 text-xs">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Verified Patient
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;