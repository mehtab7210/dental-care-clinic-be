import { useState, useEffect } from 'react';
import { FaTimes, FaExpand, FaDownload, FaShare } from 'react-icons/fa';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryGrid = ({ category = 'all' }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredImages, setFilteredImages] = useState([]);

  const images = [
    { 
      id: 1, 
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1168&q=80", 
      alt: 'Modern dental clinic reception', 
      category: 'clinic',
      description: 'Our welcoming reception area with comfortable seating'
    },
    { 
      id: 2, 
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
      alt: 'Modern dental treatment room', 
      category: 'clinic',
      description: 'State-of-the-art treatment room with modern equipment'
    },
    { 
      id: 3, 
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80", 
      alt: 'Happy patient with beautiful smile', 
      category: 'patients',
      description: 'One of our happy patients showing off their new smile'
    },
    { 
      id: 4, 
      src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
      alt: 'Advanced dental equipment', 
      category: 'equipment',
      description: 'Latest dental technology for precise treatments'
    },
    { 
      id: 5, 
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
      alt: 'Professional dental staff team', 
      category: 'staff',
      description: 'Our dedicated team of dental professionals'
    },
    { 
      id: 6, 
      src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1168&q=80", 
      alt: 'Comfortable reception area', 
      category: 'clinic',
      description: 'Relaxing waiting area with amenities'
    },
    { 
      id: 7, 
      src: "https://images.unsplash.com/photo-1584637603470-3526f1c9b1f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
      alt: 'Dental x-ray machine', 
      category: 'equipment',
      description: 'Digital X-ray system for accurate diagnosis'
    },
    { 
      id: 8, 
      src: "https://images.unsplash.com/photo-1598256989801-5e32c5f8109a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
      alt: 'Dental chair with equipment', 
      category: 'equipment',
      description: 'Modern dental chair with integrated technology'
    },
    { 
      id: 9, 
      src: "https://images.unsplash.com/photo-1629909615123-392d32c144f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1168&q=80", 
      alt: 'Dental consultation in progress', 
      category: 'staff',
      description: 'Doctor consulting with patient about treatment options'
    },
    { 
      id: 10, 
      src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1168&q=80", 
      alt: 'Sterilization area', 
      category: 'clinic',
      description: 'State-of-the-art sterilization equipment'
    },
    { 
      id: 11, 
      src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
      alt: 'Dental instruments', 
      category: 'equipment',
      description: 'High-quality dental instruments'
    },
    { 
      id: 12, 
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
      alt: 'Team meeting', 
      category: 'staff',
      description: 'Our team discussing patient care'
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      const filtered = category === 'all' 
        ? images 
        : images.filter(img => img.category === category);
      setFilteredImages(filtered);
      setIsLoading(false);
    }, 500);
  }, [category]);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(selectedImage.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `dental-care-${selectedImage.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedImage.alt,
        text: selectedImage.description,
        url: window.location.href,
      });
    } else {
      alert('Share feature not supported on this browser');
    }
  };

  // Loading Skeleton
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="animate-pulse">
            <div className="bg-gray-200 h-64 rounded-lg"></div>
            <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (filteredImages.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
          <FaImages className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">No Images Found</h3>
        <p className="text-gray-600">No images available in this category.</p>
      </div>
    );
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(image, index)}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
            data-animate="fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-w-4 aspect-h-3">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-semibold">{image.alt}</p>
                  <p className="text-white/80 text-xs mt-1">{image.description}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  image.category === 'clinic' ? 'bg-blue-100 text-blue-600' :
                  image.category === 'patients' ? 'bg-green-100 text-green-600' :
                  image.category === 'equipment' ? 'bg-purple-100 text-purple-600' :
                  'bg-pink-100 text-pink-600'
                }`}>
                  {image.category}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Count */}
      <div className="mt-8 text-center text-sm text-gray-500">
        Showing {filteredImages.length} image{filteredImages.length !== 1 ? 's' : ''}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={handleCloseModal}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-gray-300 z-20 p-2 bg-black/20 rounded-full backdrop-blur-sm transition-all hover:scale-110"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 sm:left-4 text-white hover:text-gray-300 z-20 p-2 bg-black/20 rounded-full backdrop-blur-sm transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 text-white hover:text-gray-300 z-20 p-2 bg-black/20 rounded-full backdrop-blur-sm transition-all hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-7xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 rounded-b-lg">
              <h3 className="text-white text-base sm:text-lg font-semibold mb-1">
                {selectedImage.alt}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm">
                {selectedImage.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-3 mt-3">
                <button
                  onClick={handleDownload}
                  className="flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white text-xs hover:bg-white/30 transition-colors"
                >
                  <FaDownload className="w-3 h-3 mr-1" />
                  Download
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white text-xs hover:bg-white/30 transition-colors"
                >
                  <FaShare className="w-3 h-3 mr-1" />
                  Share
                </button>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs sm:text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;