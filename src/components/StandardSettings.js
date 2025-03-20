// src/components/StandardSettings.js
import React, { useState } from 'react';
import BackgroundGallery from './BackgroundGallery';

function StandardSettings({ settings, handleInputChange, handleImageUpload, handleRemoveImage, updateSettings }) {
  const [backgroundType, setBackgroundType] = useState(settings.backgroundType || 'gallery');
  
  // Handle background type change
  const handleBackgroundTypeChange = (type) => {
    setBackgroundType(type);
    updateSettings('backgroundType', type);
  };
  
  // Handle gallery image selection
  const handleGalleryImageSelect = (imageId, imageUrl) => {
    updateSettings('backgroundGalleryImage', imageId);
    updateSettings('backgroundImage', imageUrl);
  };
  
  // Handle custom background upload
  const handleCustomBackgroundUpload = (e) => {
    handleImageUpload(e, 'backgroundImage');
    updateSettings('backgroundGalleryImage', null);
    setBackgroundType('upload');
    updateSettings('backgroundType', 'upload');
  };
  
  return (
    <>
      {/* Background Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Background</h3>
        
        {/* Background Type Selector */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Background Type</label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="bg-gallery"
                checked={backgroundType === 'gallery'}
                onChange={() => handleBackgroundTypeChange('gallery')}
                className="text-blue-600"
              />
              <label htmlFor="bg-gallery">Image Gallery</label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="bg-upload"
                checked={backgroundType === 'upload'}
                onChange={() => handleBackgroundTypeChange('upload')}
                className="text-blue-600"
              />
              <label htmlFor="bg-upload">Custom Upload</label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="bg-color"
                checked={backgroundType === 'color'}
                onChange={() => handleBackgroundTypeChange('color')}
                className="text-blue-600"
              />
              <label htmlFor="bg-color">Solid Color</label>
            </div>
          </div>
        </div>
        
        {/* Background Content based on type */}
        {backgroundType === 'gallery' && (
          <BackgroundGallery
            selectedImage={settings.backgroundGalleryImage || settings.backgroundImage}
            onSelect={handleGalleryImageSelect}
            onUpload={handleCustomBackgroundUpload}
          />
        )}
        
        {backgroundType === 'upload' && (
          <div className="mb-5">
            <label className="block mb-2 font-medium">Background Image</label>
            <div className="relative">
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => handleImageUpload(e, 'backgroundImage')} 
                id="background-image-upload"
                className="absolute w-px h-px opacity-0"
              />
              <label htmlFor="background-image-upload" className="flex items-center gap-2 p-2 border border-gray-300 rounded cursor-pointer text-gray-600">
                <span>⬆️</span> Upload Background
              </label>
            </div>
            
            {settings.backgroundImage && (
              <div className="mt-2">
                <div className="relative">
                  <img 
                    src={settings.backgroundImage} 
                    alt="Background Preview" 
                    className="h-32 w-full object-cover rounded border border-gray-300"
                  />
                  <button 
                    className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => {
                      handleRemoveImage('backgroundImage');
                      setBackgroundType('gallery');
                      updateSettings('backgroundType', 'gallery');
                    }}
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        
        {backgroundType === 'color' && (
          <div className="mb-5">
            <label className="block mb-2 font-medium">Background Color</label>
            <p className="text-sm text-gray-600 mb-2">
              Background color is now controlled through the Colors tab in the Style panel.
            </p>
          </div>
        )}
      </div>
      
      {/* Header */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Header</label>
        <div className="relative">
          <input 
            type="text" 
            value={settings.header || ''} 
            onChange={(e) => handleInputChange(e, 'header')}
            placeholder="Enter header text"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">Company Name</span>
        </div>
      </div>
      
      {/* CTA */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">CTA</label>
        <div className="relative">
          <input 
            type="text" 
            value={settings.ctaText || ''} 
            onChange={(e) => handleInputChange(e, 'ctaText')}
            placeholder="CTA text goes here"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      
      {/* Tagline */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Tagline</label>
        <input 
          type="text" 
          value={settings.tagline || ''} 
          onChange={(e) => handleInputChange(e, 'tagline')}
          placeholder="Enter tagline"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      {/* Description */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Description</label>
        <textarea 
          value={settings.description || ''} 
          onChange={(e) => handleInputChange(e, 'description')}
          placeholder="Enter description"
          className="w-full p-2 border border-gray-300 rounded min-h-20 resize-y"
        />
      </div>
    </>
  );
}

export default StandardSettings;