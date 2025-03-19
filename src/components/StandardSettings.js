import React from 'react';
import ColorPicker from './ColorPicker';

function StandardSettings({ settings, handleInputChange, handleImageUpload, handleRemoveImage, updateSettings }) {
  return (
    <>
      {/* Background Image */}
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
                className="h-16 w-full object-cover rounded border border-gray-300"
              />
              <button 
                className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                onClick={() => handleRemoveImage('backgroundImage')}
              >
                ×
              </button>
            </div>
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
      
      {/* Header Color */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Header Color</label>
        <div className="relative">
          <ColorPicker 
            color={settings.headerColor || '#FFFFFF'} 
            onChange={(color) => updateSettings('headerColor', color)} 
          />
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
      
      {/* Button Background Color */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Button Background Color</label>
        <div className="relative">
          <ColorPicker 
            color={settings.buttonBackgroundColor || '#3758f9'} 
            onChange={(color) => updateSettings('buttonBackgroundColor', color)} 
          />
        </div>
      </div>
      
      {/* Button Text Color */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Button Text Color</label>
        <div className="relative">
          <ColorPicker 
            color={settings.buttonTextColor || '#FFFFFF'} 
            onChange={(color) => updateSettings('buttonTextColor', color)} 
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