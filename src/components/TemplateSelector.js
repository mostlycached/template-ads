// src/components/TemplateSelector.js
import React, { useState, useEffect, useRef } from 'react';

function TemplateSelector({ currentTemplate, switchTemplate, resetTemplate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  // Handle click outside to close the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    
    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  // Handle template selection
  const handleTemplateSelect = (templateName) => {
    switchTemplate(templateName);
    setIsMenuOpen(false); // Close the menu after selection
  };
  
  return (
    <div className="mb-5">
      <div className="flex flex-col relative" ref={menuRef}>
        <button 
          className="bg-gray-900 text-white px-5 py-2 rounded mb-2 flex items-center justify-between"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>
            {currentTemplate.charAt(0).toUpperCase() + currentTemplate.slice(1)} Template
          </span>
          <span className="ml-2">
            {isMenuOpen ? '▲' : '▼'}
          </span>
        </button>
        
        {isMenuOpen && (
          <div className="bg-white border border-gray-300 rounded shadow-lg p-2 absolute mt-12 z-10 w-full">
            <button 
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${currentTemplate === 'standard' ? 'bg-blue-50 text-blue-700' : ''}`} 
              onClick={() => handleTemplateSelect('standard')}
            >
              Standard
            </button>
            <button 
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${currentTemplate === 'testimonial' ? 'bg-blue-50 text-blue-700' : ''}`} 
              onClick={() => handleTemplateSelect('testimonial')}
            >
              Testimonial
            </button>
            <button 
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${currentTemplate === 'event' ? 'bg-blue-50 text-blue-700' : ''}`} 
              onClick={() => handleTemplateSelect('event')}
            >
              Event
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-3">
        <button 
          className="text-sm text-gray-600 underline hover:text-gray-800"
          onClick={resetTemplate}
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}

export default TemplateSelector;