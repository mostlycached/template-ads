// src/components/TemplateSelector.js (Updated)
import React, { useState, useEffect, useRef } from 'react';
import B2BTemplate from './B2BTemplate';
import B2BSettings from './B2BSettings';
import { b2bTemplatePresets } from './B2BTemplatePresets';

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
  
  // Format template name for display
  const formatTemplateName = (name) => {
    // Split by camelCase
    let formatted = name.replace(/([A-Z])/g, ' $1');
    // Capitalize first letter and rest of the words
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    // Special case for "b2b"
    formatted = formatted.replace(/\bb2b\b/i, 'B2B');
    return formatted;
  };
  
  // Template icons for visual distinction
  const getTemplateIcon = (templateName) => {
    switch(templateName) {
      case 'standard':
        return '📄';
      case 'testimonial':
        return '💬';
      case 'event':
        return '📅';
      case 'videoTestimonial':
        return '🎬';
      case 'dynamic':
        return '⚡';
      case 'b2bTemplate':
        return '🏢';
      default:
        return '📄';
    }
  };
  
  return (
    <div className="mb-5">
      <div className="flex flex-col relative" ref={menuRef}>
        <button 
          className="bg-gray-900 text-white px-5 py-2 rounded mb-2 flex items-center justify-between"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="flex items-center">
            <span className="mr-2">{getTemplateIcon(currentTemplate)}</span>
            <span>
              {formatTemplateName(currentTemplate)}
            </span>
          </div>
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
              <span className="mr-2">📄</span> Standard
            </button>
            <button 
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${currentTemplate === 'testimonial' ? 'bg-blue-50 text-blue-700' : ''}`} 
              onClick={() => handleTemplateSelect('testimonial')}
            >
              <span className="mr-2">💬</span> Testimonial
            </button>
            <button 
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${currentTemplate === 'event' ? 'bg-blue-50 text-blue-700' : ''}`} 
              onClick={() => handleTemplateSelect('event')}
            >
              <span className="mr-2">📅</span> Event
            </button>
            <button 
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${currentTemplate === 'videoTestimonial' ? 'bg-blue-50 text-blue-700' : ''}`} 
              onClick={() => handleTemplateSelect('videoTestimonial')}
            >
              <span className="mr-2">🎬</span> Video Testimonial
            </button>
            <button 
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${currentTemplate === 'dynamic' ? 'bg-blue-50 text-blue-700' : ''}`} 
              onClick={() => handleTemplateSelect('dynamic')}
            >
              <span className="mr-2">⚡</span> Dynamic
            </button>
            <button 
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${currentTemplate === 'b2bTemplate' ? 'bg-blue-50 text-blue-700' : ''}`} 
              onClick={() => handleTemplateSelect('b2bTemplate')}
            >
              <span className="mr-2">🏢</span> B2B Campaign
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