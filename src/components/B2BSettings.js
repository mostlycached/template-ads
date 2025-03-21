// src/components/B2BSettings.js
import React, { useState } from 'react';
import BackgroundGallery from './BackgroundGallery';
import { objectiveData } from './B2BTemplateData';

function B2BSettings({ 
  settings, 
  handleInputChange, 
  handleImageUpload, 
  handleRemoveImage, 
  updateSettings 
}) {
  const [backgroundType, setBackgroundType] = useState(settings.backgroundType || 'color');
  
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
  
  // Get the current promotional objective data
  const currentObjective = objectiveData[settings.promotionalObjective || 'productDemo'] || objectiveData.productDemo;
  
  // Handle promotional objective change
  const handleObjectiveChange = (objective) => {
    updateSettings('promotionalObjective', objective);
    
    // Reset any objective-specific fields that might not be relevant to the new objective
    const newObjectiveData = objectiveData[objective];
    if (newObjectiveData) {
      // Set default layout for this objective if available
      if (newObjectiveData.recommendedLayout) {
        updateSettings('layoutVariant', newObjectiveData.recommendedLayout);
      }
    }
  };
  
  // Handle layout variant change
  const handleLayoutChange = (layout) => {
    updateSettings('layoutVariant', layout);
  };
  
  return (
    <div>
      {/* Company Details Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Company Details</h3>
        
        {/* Company Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Company Name</label>
          <input 
            type="text" 
            value={settings.companyName || ''} 
            onChange={(e) => handleInputChange(e, 'companyName')}
            placeholder="Enter company name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        {/* Company Logo */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Company Logo</label>
          <div className="relative">
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => handleImageUpload(e, 'ownerAccountImage')} 
              id="owner-image-upload"
              className="absolute w-px h-px opacity-0"
            />
            <label htmlFor="owner-image-upload" className="flex items-center gap-2 p-2 border border-gray-300 rounded cursor-pointer text-gray-600">
              <span>⬆️</span> Upload Company Logo
            </label>
          </div>
          
          {settings.ownerAccountImage && (
            <div className="mt-2">
              <div className="relative">
                <img 
                  src={settings.ownerAccountImage} 
                  alt="Logo Preview" 
                  className="h-16 rounded border border-gray-300"
                />
                <button 
                  className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  onClick={() => handleRemoveImage('ownerAccountImage')}
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Promotional Objective Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Promotional Objective</h3>
        <p className="text-sm text-gray-600 mb-4">
          Select the primary goal of your campaign to get recommended layouts and content options.
        </p>
        
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(objectiveData || {}).map(([key, objective]) => {
            if (!objective) return null;
            return (
              <div 
                key={key}
                className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                  settings.promotionalObjective === key ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => handleObjectiveChange(key)}
              >
                <div className="flex items-center mb-1">
                  <span className="mr-2 text-lg">{objective.icon}</span>
                  <div className="font-medium">{objective.label}</div>
                </div>
                <p className="text-xs text-gray-600">{objective.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Layout Variant Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Layout Style</h3>
        <p className="text-sm text-gray-600 mb-4">
          Choose a layout that best showcases your {currentObjective.label.toLowerCase()}.
        </p>
        
        <div className="grid grid-cols-3 gap-3">
          {(currentObjective.layouts || []).map((layout) => (
            <div 
              key={layout.id}
              className={`border rounded-lg p-3 cursor-pointer ${
                settings.layoutVariant === layout.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => handleLayoutChange(layout.id)}
            >
              <div className="flex flex-col items-center">
                <div className="border border-gray-300 rounded h-16 w-full mb-2 flex items-center justify-center text-xs text-gray-500">
                  {layout.preview}
                </div>
                <div className="font-medium text-sm text-center">{layout.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Objective-specific Content Fields */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Content</h3>
        
        {/* Headline */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Headline</label>
          <input 
            type="text" 
            value={settings.headline || ''} 
            onChange={(e) => handleInputChange(e, 'headline')}
            placeholder={currentObjective.headlinePlaceholder || "Enter compelling headline"}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <p className="text-xs text-gray-500 mt-1">
            {currentObjective.headlineTip || "Keep it concise and benefit-focused"}
          </p>
        </div>
        
        {/* Subheadline */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Subheadline</label>
          <input 
            type="text" 
            value={settings.subheadline || ''} 
            onChange={(e) => handleInputChange(e, 'subheadline')}
            placeholder={currentObjective.subheadlinePlaceholder || "Enter supporting subheadline"}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        {/* Dynamic Fields Based on Objective */}
        {currentObjective.fields && currentObjective.fields.map(field => {
          // Handle different field types
          if (field.type === 'text') {
            return (
              <div key={field.id} className="mb-4">
                <label className="block mb-2 font-medium">{field.label}</label>
                <input 
                  type="text" 
                  value={settings[field.id] || ''} 
                  onChange={(e) => handleInputChange(e, field.id)}
                  placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {field.tip && (
                  <p className="text-xs text-gray-500 mt-1">{field.tip}</p>
                )}
              </div>
            );
          }
          
          if (field.type === 'textarea') {
            return (
              <div key={field.id} className="mb-4">
                <label className="block mb-2 font-medium">{field.label}</label>
                <textarea 
                  value={settings[field.id] || ''} 
                  onChange={(e) => handleInputChange(e, field.id)}
                  placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
                  className="w-full p-2 border border-gray-300 rounded min-h-20 resize-y"
                />
                {field.tip && (
                  <p className="text-xs text-gray-500 mt-1">{field.tip}</p>
                )}
              </div>
            );
          }
          
          if (field.type === 'image') {
            return (
              <div key={field.id} className="mb-4">
                <label className="block mb-2 font-medium">{field.label}</label>
                <div className="relative">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => handleImageUpload(e, field.id)} 
                    id={`${field.id}-upload`}
                    className="absolute w-px h-px opacity-0"
                  />
                  <label htmlFor={`${field.id}-upload`} className="flex items-center gap-2 p-2 border border-gray-300 rounded cursor-pointer text-gray-600">
                    <span>⬆️</span> Upload {field.label}
                  </label>
                </div>
                
                {settings[field.id] && (
                  <div className="mt-2">
                    <div className="relative">
                      <img 
                        src={settings[field.id]} 
                        alt={`${field.label} Preview`} 
                        className="h-24 w-full object-cover rounded border border-gray-300"
                      />
                      <button 
                        className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        onClick={() => handleRemoveImage(field.id)}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                )}
                {field.tip && (
                  <p className="text-xs text-gray-500 mt-1">{field.tip}</p>
                )}
              </div>
            );
          }
          
          if (field.type === 'list') {
            // Initialize list if it doesn't exist
            if (!settings[field.id]) {
              updateSettings(field.id, field.defaultItems || ['', '', '']);
            }
            
            const listItems = settings[field.id] || [];
            
            const handleListItemChange = (index, value) => {
              const newItems = [...listItems];
              newItems[index] = value;
              updateSettings(field.id, newItems);
            };
            
            const addListItem = () => {
              updateSettings(field.id, [...listItems, '']);
            };
            
            const removeListItem = (index) => {
              const newItems = [...listItems];
              newItems.splice(index, 1);
              updateSettings(field.id, newItems);
            };
            
            return (
              <div key={field.id} className="mb-4">
                <label className="block mb-2 font-medium">{field.label}</label>
                {field.description && (
                  <p className="text-sm text-gray-600 mb-2">{field.description}</p>
                )}
                
                {listItems.map((item, index) => (
                  <div key={index} className="flex mb-2">
                    <input 
                      type="text" 
                      value={item} 
                      onChange={(e) => handleListItemChange(index, e.target.value)}
                      placeholder={`${field.itemLabel || 'Item'} ${index + 1}`}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    {listItems.length > 1 && (
                      <button 
                        onClick={() => removeListItem(index)}
                        className="ml-2 px-3 text-red-500"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                
                {listItems.length < (field.maxItems || 5) && (
                  <button 
                    onClick={addListItem}
                    className="text-blue-500 text-sm flex items-center"
                  >
                    <span className="mr-1">+</span> Add {field.itemLabel || 'Item'}
                  </button>
                )}
              </div>
            );
          }
          
          return null;
        })}
        
        {/* CTA Button */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">CTA Button</label>
          <input 
            type="text" 
            value={settings.ctaText || ''} 
            onChange={(e) => handleInputChange(e, 'ctaText')}
            placeholder={currentObjective.ctaPlaceholder || "Enter call-to-action text"}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <p className="text-xs text-gray-500 mt-1">
            {currentObjective.ctaTip || "Use action-oriented language that creates urgency"}
          </p>
        </div>
      </div>
      
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
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block mb-2 font-medium">Background Color</label>
            <p className="text-sm text-gray-600 mb-2">
              Background color is controlled through the Colors tab in the Style panel.
            </p>
          </div>
        )}
      </div>
      
      {/* Tips for this Objective */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-medium text-blue-800 mb-2 flex items-center">
          <span className="mr-2">💡</span> Tips for {currentObjective.label}
        </h4>
        <ul className="text-sm text-blue-700 space-y-1 pl-6 list-disc">
          {currentObjective.tips && currentObjective.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
      
      {/* Industry-specific Recommendations */}
      {settings.industry && currentObjective.industryTips && currentObjective.industryTips[settings.industry] && (
        <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-800 mb-2 flex items-center">
            <span className="mr-2">🎯</span> {settings.industry} Best Practices
          </h4>
          <ul className="text-sm text-green-700 space-y-1 pl-6 list-disc">
            {currentObjective.industryTips[settings.industry].map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default B2BSettings;