import React from 'react';
import ColorPicker from './ColorPicker';

function EventSettings({ settings, handleInputChange, handleImageUpload, handleRemoveImage, updateSettings }) {
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
      
      {/* Event Title */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Event Title</label>
        <input 
          type="text" 
          value={settings.eventTitle || ''} 
          onChange={(e) => handleInputChange(e, 'eventTitle')}
          placeholder="Enter event title"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      {/* Event Type */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Event Type</label>
        <input 
          type="text" 
          value={settings.eventType || ''} 
          onChange={(e) => handleInputChange(e, 'eventType')}
          placeholder="Enter event type"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      {/* Speaker 1 Image */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Speaker 1 Image</label>
        <div className="relative">
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => handleImageUpload(e, 'speaker1Image')} 
            id="speaker1-image-upload"
            className="absolute w-px h-px opacity-0"
          />
          <label htmlFor="speaker1-image-upload" className="flex items-center gap-2 p-2 border border-gray-300 rounded cursor-pointer text-gray-600">
            <span>⬆️</span> Upload Speaker 1 Photo
          </label>
        </div>
        
        {settings.speaker1Image && (
          <div className="mt-2">
            <div className="relative">
              <img 
                src={settings.speaker1Image} 
                alt="Speaker 1 Preview" 
                className="h-24 w-24 object-cover rounded-full border border-gray-300"
              />
              <button 
                className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                onClick={() => handleRemoveImage('speaker1Image')}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Speaker 1 fields */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Speaker 1 Name</label>
        <input 
          type="text" 
          value={settings.speaker1Name || ''} 
          onChange={(e) => handleInputChange(e, 'speaker1Name')}
          placeholder="Enter speaker name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="mb-5">
        <label className="block mb-2 font-medium">Speaker 1 Title</label>
        <input 
          type="text" 
          value={settings.speaker1Title || ''} 
          onChange={(e) => handleInputChange(e, 'speaker1Title')}
          placeholder="Enter speaker title"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="mb-5">
        <label className="block mb-2 font-medium">Speaker 1 Company</label>
        <input 
          type="text" 
          value={settings.speaker1Company || ''} 
          onChange={(e) => handleInputChange(e, 'speaker1Company')}
          placeholder="Enter speaker company"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      {/* Speaker 2 fields */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Speaker 2 Image</label>
        <div className="relative">
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => handleImageUpload(e, 'speaker2Image')} 
            id="speaker2-image-upload"
            className="absolute w-px h-px opacity-0"
          />
          <label htmlFor="speaker2-image-upload" className="flex items-center gap-2 p-2 border border-gray-300 rounded cursor-pointer text-gray-600">
            <span>⬆️</span> Upload Speaker 2 Photo
          </label>
        </div>
        
        {settings.speaker2Image && (
          <div className="mt-2">
            <div className="relative">
              <img 
                src={settings.speaker2Image} 
                alt="Speaker 2 Preview" 
                className="h-24 w-24 object-cover rounded-full border border-gray-300"
              />
              <button 
                className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                onClick={() => handleRemoveImage('speaker2Image')}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="mb-5">
        <label className="block mb-2 font-medium">Speaker 2 Name</label>
        <input 
          type="text" 
          value={settings.speaker2Name || ''} 
          onChange={(e) => handleInputChange(e, 'speaker2Name')}
          placeholder="Enter speaker name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="mb-5">
        <label className="block mb-2 font-medium">Speaker 2 Title</label>
        <input 
          type="text" 
          value={settings.speaker2Title || ''} 
          onChange={(e) => handleInputChange(e, 'speaker2Title')}
          placeholder="Enter speaker title"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="mb-5">
        <label className="block mb-2 font-medium">Speaker 2 Company</label>
        <input 
          type="text" 
          value={settings.speaker2Company || ''} 
          onChange={(e) => handleInputChange(e, 'speaker2Company')}
          placeholder="Enter speaker company"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      {/* Colors */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Background Color</label>
        <ColorPicker 
          color={settings.backgroundColor || '#0a2240'} 
          onChange={(color) => updateSettings('backgroundColor', color)} 
        />
      </div>
      
      <div className="mb-5">
        <label className="block mb-2 font-medium">Accent Color</label>
        <ColorPicker 
          color={settings.accentColor || '#f7941d'} 
          onChange={(color) => updateSettings('accentColor', color)} 
        />
      </div>
      
      <div className="mb-5">
        <label className="block mb-2 font-medium">CTA Button Text</label>
        <input 
          type="text" 
          value={settings.ctaText || ''} 
          onChange={(e) => handleInputChange(e, 'ctaText')}
          placeholder="Enter CTA text"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="mb-5">
        <label className="block mb-2 font-medium">Button Background Color</label>
        <ColorPicker 
          color={settings.buttonBackgroundColor || '#f7941d'} 
          onChange={(color) => updateSettings('buttonBackgroundColor', color)} 
        />
      </div>
      
      <div className="mb-5">
        <label className="block mb-2 font-medium">Button Text Color</label>
        <ColorPicker 
          color={settings.buttonTextColor || '#FFFFFF'} 
          onChange={(color) => updateSettings('buttonTextColor', color)} 
        />
      </div>
    </>
  );
}

export default EventSettings;