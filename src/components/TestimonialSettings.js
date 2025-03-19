import React from 'react';
import ColorPicker from './ColorPicker';

function TestimonialSettings({ settings, handleInputChange, handleImageUpload, handleRemoveImage, updateSettings }) {
  return (
    <>
      {/* Partner Name */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Partner Name</label>
        <input 
          type="text" 
          value={settings.partnerName || ''} 
          onChange={(e) => handleInputChange(e, 'partnerName')}
          placeholder="Enter partner name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      {/* Partner Logo Image */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Partner Logo</label>
        <div className="relative">
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => handleImageUpload(e, 'partnerImage')} 
            id="partner-image-upload"
            className="absolute w-px h-px opacity-0"
          />
          <label htmlFor="partner-image-upload" className="flex items-center gap-2 p-2 border border-gray-300 rounded cursor-pointer text-gray-600">
            <span>⬆️</span> Upload Partner Logo
          </label>
        </div>
        
        {settings.partnerImage && (
          <div className="mt-2">
            <div className="relative">
              <img 
                src={settings.partnerImage} 
                alt="Partner Logo Preview" 
                className="h-16 rounded border border-gray-300"
              />
              <button 
                className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                onClick={() => handleRemoveImage('partnerImage')}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Person Image */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Person Image</label>
        <div className="relative">
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => handleImageUpload(e, 'personImage')} 
            id="person-image-upload"
            className="absolute w-px h-px opacity-0"
          />
          <label htmlFor="person-image-upload" className="flex items-center gap-2 p-2 border border-gray-300 rounded cursor-pointer text-gray-600">
            <span>⬆️</span> Upload Person Photo
          </label>
        </div>
        
        {settings.personImage && (
          <div className="mt-2">
            <div className="relative">
              <img 
                src={settings.personImage} 
                alt="Person Preview" 
                className="h-24 w-24 object-cover rounded-full border border-gray-300"
              />
              <button 
                className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                onClick={() => handleRemoveImage('personImage')}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Person Quote */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Testimonial Quote</label>
        <textarea 
          value={settings.personQuote || ''} 
          onChange={(e) => handleInputChange(e, 'personQuote')}
          placeholder="Enter testimonial quote"
          className="w-full p-2 border border-gray-300 rounded min-h-20 resize-y"
        />
      </div>
      
      {/* Person Name */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Person Name</label>
        <input 
          type="text" 
          value={settings.personName || ''} 
          onChange={(e) => handleInputChange(e, 'personName')}
          placeholder="Enter person's name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      {/* Person Title */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Person Title</label>
        <input 
          type="text" 
          value={settings.personTitle || ''} 
          onChange={(e) => handleInputChange(e, 'personTitle')}
          placeholder="Enter person's title"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      {/* Background Color */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Background Color</label>
        <ColorPicker 
          color={settings.backgroundColor || '#f0f5fa'} 
          onChange={(color) => updateSettings('backgroundColor', color)} 
        />
      </div>
      
      {/* Accent Color (Quote Box) */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Accent Color (Quote Box)</label>
        <ColorPicker 
          color={settings.accentColor || '#2b5c8e'} 
          onChange={(color) => updateSettings('accentColor', color)} 
        />
      </div>
    </>
  );
}

export default TestimonialSettings;