// src/components/BackgroundGallery.js
import React, { useState, useEffect, useMemo, useCallback } from 'react';

/**
 * Optimized BackgroundGallery component with pagination, lazy loading,
 * and performance optimizations to handle large image libraries
 */
function BackgroundGallery({ selectedImage, onSelect, onUpload }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12; // Show 12 images per page (4x3 grid)
  
  // Define image categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'abstract', name: 'Abstract' },
    { id: 'business', name: 'Business' },
    { id: 'nature', name: 'Nature' },
    { id: 'technology', name: 'Technology' },
    { id: 'gradients', name: 'Gradients' },
    { id: 'patterns', name: 'Patterns' }
  ];
  
  // Background images - imported from your existing list
  // In a real implementation, you might want to load these dynamically
  const backgroundImages = useMemo(() => [
    { 
      "id": "abstract-1", 
      "url": "/backgrounds/abstract/tree-silhouette.jpg", 
      "title": "Tree Silhouette",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-2", 
      "url": "/backgrounds/abstract/yellow-arches.jpg", 
      "title": "Yellow Arches",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-3", 
      "url": "/backgrounds/abstract/colorful-bokeh.jpg", 
      "title": "Colorful Bokeh",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-4", 
      "url": "/backgrounds/abstract/modern-architecture.jpg", 
      "title": "Modern Architecture",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-5", 
      "url": "/backgrounds/abstract/diagonal-pencils.jpg", 
      "title": "Diagonal Pencils",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-6", 
      "url": "/backgrounds/abstract/dark-hallway.jpg", 
      "title": "Dark Hallway",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-7", 
      "url": "/backgrounds/abstract/lemon-bubbles.jpg", 
      "title": "Lemon Bubbles",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-8", 
      "url": "/backgrounds/abstract/colorful-pattern.jpg", 
      "title": "Colorful Pattern",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-9", 
      "url": "/backgrounds/abstract/color-blur.jpg", 
      "title": "Color Blur",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-10", 
      "url": "/backgrounds/abstract/geometric-building.jpg", 
      "title": "Geometric Building",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-11", 
      "url": "/backgrounds/abstract/paint-splash.jpg", 
      "title": "Paint Splash",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-12", 
      "url": "/backgrounds/abstract/frost-glass-ball.jpg", 
      "title": "Frost Glass Ball",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-13", 
      "url": "/backgrounds/abstract/desk-setup.jpg", 
      "title": "Desk Setup",
      "categories": ["abstract"]
    },
    { 
      "id": "abstract-14", 
      "url": "/backgrounds/abstract/green-gradient.jpg", 
      "title": "Green Gradient",
      "categories": ["abstract"]
    },
    { 
      "id": "patterns-1", 
      "url": "/backgrounds/patterns/pexels-joaojesusdesign-925728.jpg", 
      "title": "Pattern Design",
      "categories": ["patterns"]
    },
    { 
      "id": "patterns-2", 
      "url": "/backgrounds/patterns/orange-slices.jpg", 
      "title": "Orange Slices",
      "categories": ["patterns"]
    },
    { 
      "id": "technology-1", 
      "url": "/backgrounds/technology/business-presentation.jpg", 
      "title": "Business Presentation",
      "categories": ["technology"]
    },
    { 
      "id": "technology-2", 
      "url": "/backgrounds/technology/laptop-code.jpg", 
      "title": "Laptop Code",
      "categories": ["technology"]
    },
    { 
      "id": "technology-3", 
      "url": "/backgrounds/technology/whiteboard-planning.jpg", 
      "title": "Whiteboard Planning",
      "categories": ["technology"]
    },
    { 
      "id": "technology-4", 
      "url": "/backgrounds/technology/data-center.jpg", 
      "title": "Data Center",
      "categories": ["technology"]
    },
    { 
      "id": "technology-5", 
      "url": "/backgrounds/technology/metal-gears.jpg", 
      "title": "Metal Gears",
      "categories": ["technology"]
    },
    { 
      "id": "technology-6", 
      "url": "/backgrounds/technology/computer-motherboard.jpg", 
      "title": "Computer Motherboard",
      "categories": ["technology"]
    },
    { 
      "id": "technology-7", 
      "url": "/backgrounds/technology/pexels-energepic-com-27411-159888.jpg", 
      "title": "Tech Workspace",
      "categories": ["technology"]
    },
    { 
      "id": "business-1", 
      "url": "/backgrounds/business/pexels-fauxels-3184460.jpg", 
      "title": "Business Meeting",
      "categories": ["business"]
    },
    { 
      "id": "business-2", 
      "url": "/backgrounds/business/businessman-phone.jpg", 
      "title": "Businessman on Phone",
      "categories": ["business"]
    },
    { 
      "id": "business-3", 
      "url": "/backgrounds/business/pexels-fauxels-3183197.jpg", 
      "title": "Work Collaboration",
      "categories": ["business"]
    },
    { 
      "id": "business-4", 
      "url": "/backgrounds/business/smiling-woman-street.jpg", 
      "title": "Smiling Woman on Street",
      "categories": ["business"]
    },
    { 
      "id": "business-5", 
      "url": "/backgrounds/business/pexels-helenalopesph-933964.jpg", 
      "title": "Professional Team",
      "categories": ["business"]
    },
    { 
      "id": "gradients-1", 
      "url": "/backgrounds/gradients/soft-gradient.jpg", 
      "title": "Soft Gradient",
      "categories": ["gradients"]
    },
    { 
      "id": "gradients-2", 
      "url": "/backgrounds/gradients/dark-gradient.jpg", 
      "title": "Dark Gradient",
      "categories": ["gradients"]
    },
    { 
      "id": "gradients-3", 
      "url": "/backgrounds/gradients/pastel-gradient.jpg", 
      "title": "Pastel Gradient",
      "categories": ["gradients"]
    },
    { 
      "id": "gradients-4", 
      "url": "/backgrounds/gradients/pexels-hngstrm-1939485.jpg", 
      "title": "Gradient Art",
      "categories": ["gradients"]
    },
    { 
      "id": "gradients-5", 
      "url": "/backgrounds/gradients/colorful-gradient.jpg", 
      "title": "Colorful Gradient",
      "categories": ["gradients"]
    },
    { 
      "id": "nature-1", 
      "url": "/backgrounds/nature/sprouting-plant.jpg", 
      "title": "Sprouting Plant",
      "categories": ["nature"]
    },
    { 
      "id": "nature-2", 
      "url": "/backgrounds/nature/pexels-francesco-ungaro-2325447.jpg", 
      "title": "Serene Landscape",
      "categories": ["nature"]
    },
    { 
      "id": "nature-3", 
      "url": "/backgrounds/nature/yellow-flower.jpg", 
      "title": "Yellow Flower",
      "categories": ["nature"]
    },
    { 
      "id": "nature-4", 
      "url": "/backgrounds/nature/pexels-freestockpro-1227513.jpg", 
      "title": "Forest Path",
      "categories": ["nature"]
    },
    { 
      "id": "nature-5", 
      "url": "/backgrounds/nature/chameleon-closeup.jpg", 
      "title": "Chameleon Close-Up",
      "categories": ["nature"]
    },
    { 
      "id": "nature-6", 
      "url": "/backgrounds/nature/beach-waves.jpg", 
      "title": "Beach Waves",
      "categories": ["nature"]
    },
    { 
      "id": "nature-7", 
      "url": "/backgrounds/nature/green-hand-plant.jpg", 
      "title": "Hand Holding Plant",
      "categories": ["nature"]
    },
    { 
      "id": "nature-8", 
      "url": "/backgrounds/nature/cherry-blossom.jpg", 
      "title": "Cherry Blossom",
      "categories": ["nature"]
    },
    { 
      "id": "nature-9", 
      "url": "/backgrounds/nature/sunset-mountains.jpg", 
      "title": "Sunset Over Mountains",
      "categories": ["nature"]
    }
  ], []);
  
  // Filter images with debounce to prevent performance issues
  useEffect(() => {
    setIsLoading(true);
    
    const filterTimer = setTimeout(() => {
      let filtered = [...backgroundImages];
      
      // Filter by category
      if (activeCategory !== 'all') {
        filtered = filtered.filter(image => 
          image.categories.includes(activeCategory)
        );
      }
      
      // Filter by search term
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(image => 
          image.title.toLowerCase().includes(term)
        );
      }
      
      setFilteredImages(filtered);
      setCurrentPage(1); // Reset to first page when filters change
      setIsLoading(false);
    }, 300); // 300ms debounce
    
    return () => clearTimeout(filterTimer);
  }, [searchTerm, activeCategory, backgroundImages]);
  
  // Calculate pagination values
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  
  // Only compute current images when needed
  const currentImages = useMemo(() => {
    return filteredImages.slice(
      (currentPage - 1) * imagesPerPage,
      currentPage * imagesPerPage
    );
  }, [filteredImages, currentPage, imagesPerPage]);
  
  // Handle page changes with memoization
  const goToPage = useCallback((pageNumber) => {
    const validPage = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(validPage);
  }, [totalPages]);
  
  // Generate page numbers for pagination
  const pageNumbers = useMemo(() => {
    const result = [];
    const maxPageButtons = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = startPage + maxPageButtons - 1;
    
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      result.push(i);
    }
    
    return result;
  }, [currentPage, totalPages]);
  
  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
  };
  
  // Handle category selection
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };
  
  // Optimized image selection handler
  const handleImageSelect = useCallback((id, url) => {
    onSelect(id, url);
  }, [onSelect]);
  
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-5">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">Background Gallery</h3>
          
          {/* Custom upload button */}
          <div className="relative">
            <input 
              type="file" 
              accept="image/*" 
              onChange={onUpload} 
              id="custom-bg-upload"
              className="absolute w-px h-px opacity-0"
            />
            <label 
              htmlFor="custom-bg-upload" 
              className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm cursor-pointer"
            >
              <span>⬆️</span> Upload Custom
            </label>
          </div>
        </div>
        
        {/* Search input */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search backgrounds..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 pl-8 border border-gray-300 rounded"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              ✕
            </button>
          )}
        </div>
        
        {/* Category tabs - scrollable on mobile */}
        <div className="flex flex-nowrap gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-3 py-1 text-sm rounded whitespace-nowrap ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Loading state */}
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Gallery grid */}
          {filteredImages.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4" style={{ minHeight: '230px' }}>
                {currentImages.map(image => (
                  <div 
                    key={image.id}
                    onClick={() => handleImageSelect(image.id, image.url)}
                    className={`relative cursor-pointer rounded-lg overflow-hidden h-24 transition-all ${
                      selectedImage === image.id || selectedImage === image.url
                        ? 'ring-2 ring-blue-600 scale-95'
                        : 'hover:opacity-90'
                    }`}
                  >
                    {/* Lazy load images for better performance */}
                    <img 
                      src={image.url} 
                      alt={image.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="100"
                      height="75"
                    />
                    {(selectedImage === image.id || selectedImage === image.url) && (
                      <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        ✓
                      </div>
                    )}
                    {/* Display image title on hover */}
                    <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 text-white text-xs p-1 opacity-0 hover:opacity-100 transition-opacity">
                      {image.title}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-1 mt-4">
                  <button
                    onClick={() => goToPage(1)}
                    disabled={currentPage === 1}
                    className={`px-2 py-1 rounded border ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    &laquo;
                  </button>
                  
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-2 py-1 rounded border ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    &lsaquo;
                  </button>
                  
                  {pageNumbers.map(number => (
                    <button
                      key={number}
                      onClick={() => goToPage(number)}
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${
                        currentPage === number
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'bg-white text-blue-600 hover:bg-blue-50 border'
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-2 py-1 rounded border ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    &rsaquo;
                  </button>
                  
                  <button
                    onClick={() => goToPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className={`px-2 py-1 rounded border ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    &raquo;
                  </button>
                </div>
              )}
              
              {/* Results counter */}
              <div className="text-xs text-gray-500 text-center mt-2">
                Showing {(currentPage - 1) * imagesPerPage + 1} to {Math.min(currentPage * imagesPerPage, filteredImages.length)} of {filteredImages.length} images
              </div>
            </>
          ) : (
            <div className="text-center py-6 text-gray-500">
              No matching backgrounds found. Try a different search term or category.
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default BackgroundGallery;