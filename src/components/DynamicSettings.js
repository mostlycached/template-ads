// src/components/DynamicSettings.js
import React, { useState } from 'react';
import BackgroundGallery from './BackgroundGallery';
import LayoutPreview from './LayoutPreview';

/**
 * Dynamic Settings Panel Component that allows customization
 * of the dynamic template with different component combinations
 */
function DynamicSettings({ 
  settings, 
  handleInputChange, 
  handleImageUpload, 
  handleRemoveImage, 
  updateSettings 
}) {
  const [backgroundType, setBackgroundType] = useState(settings.backgroundType || 'color');
  
  // Available components for dynamic templates
  const availableComponents = [
    { id: 'header', label: 'Header', required: true },
    { id: 'subtitle', label: 'Subtitle', required: false },
    { id: 'checklist', label: 'Checklist Items', required: false },
    { id: 'cta', label: 'CTA Button', required: false }
  ];
  
  // Layout options for dynamic templates
  const layoutOptions = [
    { id: 'centered', label: 'Centered', icon: '⚫' },
    { id: 'left-aligned', label: 'Left Aligned', icon: '◀' },
    { id: 'right-aligned', label: 'Right Aligned', icon: '▶' },
    { id: 'compact', label: 'Compact', icon: '▪' },
    { id: 'split', label: 'Split', icon: '◐' }
  ];
  
  // Layout variant options inspired by LinkedIn Ads
  const layoutVariants = [
    { id: 'bold-centered', label: 'Bold Centered', description: 'Large, impactful text with strong visual hierarchy' },
    { id: 'left-aligned-border', label: 'Left Border', description: 'Professional with accent border for visual interest' },
    { id: 'two-column', label: 'Two Column', description: 'Split layout with colored panel for impact' },
    { id: 'minimalist-bright', label: 'Minimalist', description: 'Clean design with bright accent for subtle emphasis' }
  ];
  
  // Current components
  const selectedComponents = settings.components || ['header'];
  
  // Handle component selection
  const toggleComponent = (componentId) => {
    // Find the component
    const component = availableComponents.find(c => c.id === componentId);
    
    // If component is required, don't allow toggle off
    if (component && component.required && selectedComponents.includes(componentId)) {
      return;
    }
    
    // Update the components array
    if (selectedComponents.includes(componentId)) {
      // Remove component
      updateSettings('components', selectedComponents.filter(id => id !== componentId));
    } else {
      // Add component
      updateSettings('components', [...selectedComponents, componentId]);
    }
  };
  
  // Handle layout selection
  const selectLayout = (layoutId) => {
    updateSettings('layout', layoutId);
  };
  
  // Handle layout variant selection
  const selectLayoutVariant = (variantId) => {
    updateSettings('layoutVariant', variantId);
  };
  
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
  
  // Handle checklist item change
  const handleChecklistItemChange = (index, value) => {
    const newItems = [...(settings.checklistItems || ['', '', ''])];
    newItems[index] = value;
    updateSettings('checklistItems', newItems);
  };
  
  // Add new checklist item
  const addChecklistItem = () => {
    const newItems = [...(settings.checklistItems || []), ''];
    updateSettings('checklistItems', newItems);
  };
  
  // Remove checklist item
  const removeChecklistItem = (index) => {
    const newItems = [...(settings.checklistItems || [])];
    newItems.splice(index, 1);
    updateSettings('checklistItems', newItems);
  };
  
  // Handle custom background upload
  const handleCustomBackgroundUpload = (e) => {
    handleImageUpload(e, 'backgroundImage');
    updateSettings('backgroundGalleryImage', null);
    setBackgroundType('upload');
    updateSettings('backgroundType', 'upload');
  };
  
  return (
    <div>
      {/* Template Components Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Template Components</h3>
        <p className="text-sm text-gray-600 mb-4">
          Select which components to include in your template. The Header is required.
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {availableComponents.map(component => (
            <div 
              key={component.id}
              className={`
                border rounded-lg p-3 cursor-pointer
                ${selectedComponents.includes(component.id) 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:bg-gray-50'}
                ${component.required ? 'opacity-75 cursor-not-allowed' : ''}
              `}
              onClick={() => !component.required && toggleComponent(component.id)}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedComponents.includes(component.id)}
                  onChange={() => {}}
                  disabled={component.required}
                  className="mr-2"
                />
                <div>
                  <div className="font-medium">{component.label}</div>
                  {component.required && (
                    <div className="text-xs text-blue-600">Required</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pre-defined Component Combinations */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Quick Templates</h4>
          <div className="grid grid-cols-2 gap-2">
            <button 
              className="p-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
              onClick={() => updateSettings('components', ['header', 'checklist', 'cta'])}
            >
              Header + Checklist + CTA
            </button>
            <button 
              className="p-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
              onClick={() => updateSettings('components', ['header', 'subtitle', 'cta'])}
            >
              Header + Subtitle + CTA
            </button>
            <button 
              className="p-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
              onClick={() => updateSettings('components', ['header', 'cta'])}
            >
              Header + CTA
            </button>
            <button 
              className="p-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
              onClick={() => updateSettings('components', ['header', 'subtitle'])}
            >
              Header + Subtitle
            </button>
          </div>
        </div>
      </div>
      
      {/* Layout Options */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Layout Style</h3>
        
        {/* Layout Variants - LinkedIn-inspired templates */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">Design Template</label>
          <p className="text-sm text-gray-600 mb-3">
            Choose from professionally designed templates inspired by top-performing LinkedIn ads.
          </p>
          
          {/* Layout Preview */}
          <div className="mb-3">
            <LayoutPreview 
              layoutVariant={settings.layoutVariant || 'bold-centered'} 
              components={selectedComponents}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {layoutVariants.map(variant => (
              <div
                key={variant.id}
                className={`
                  border rounded-lg p-3 cursor-pointer relative
                  ${settings.layoutVariant === variant.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300 hover:bg-gray-50'}
                `}
                onClick={() => selectLayoutVariant(variant.id)}
              >
                <div className="font-medium mb-1">{variant.label}</div>
                <div className="text-xs text-gray-600">{variant.description}</div>
                
                {settings.layoutVariant === variant.id && (
                  <div className="absolute top-2 right-2 text-blue-500">✓</div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Basic Layout Options */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Basic Alignment</label>
          <div className="grid grid-cols-3 gap-2">
            {layoutOptions.map(option => (
              <button
                key={option.id}
                className={`
                  p-2 border rounded text-center
                  ${settings.layout === option.id 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-300 hover:bg-gray-50'}
                `}
                onClick={() => selectLayout(option.id)}
              >
                <span className="text-xl block mb-1">{option.icon}</span>
                <span className="text-xs">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Content</h3>
        
        {/* Header Settings */}
        {selectedComponents.includes('header') && (
          <div className="mb-4">
            <label className="block mb-2 font-medium">Header Text</label>
            <input 
              type="text" 
              value={settings.header || ''} 
              onChange={(e) => handleInputChange(e, 'header')}
              placeholder="Enter compelling header text"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <p className="text-xs text-gray-500 mt-1">
              Strong headers are clear, concise, and focused on benefits.
            </p>
          </div>
        )}
        
        {/* Subtitle Settings */}
        {selectedComponents.includes('subtitle') && (
          <div className="mb-4">
            <label className="block mb-2 font-medium">Subtitle Text</label>
            <textarea 
              value={settings.subtitle || ''} 
              onChange={(e) => handleInputChange(e, 'subtitle')}
              placeholder="Enter supporting subtitle text"
              className="w-full p-2 border border-gray-300 rounded h-20 resize-y"
            />
          </div>
        )}
        
        {/* Checklist Settings */}
        {selectedComponents.includes('checklist') && (
          <div className="mb-4">
            <label className="block mb-2 font-medium">Checklist Items</label>
            <p className="text-sm text-gray-600 mb-2">
              Add 3-5 key benefits or features as bullet points
            </p>
            
            {(settings.checklistItems || ['', '', '']).map((item, index) => (
              <div key={index} className="flex mb-2">
                <input 
                  type="text" 
                  value={item} 
                  onChange={(e) => handleChecklistItemChange(index, e.target.value)}
                  placeholder={`Benefit/Feature ${index + 1}`}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {(settings.checklistItems || []).length > 1 && (
                  <button 
                    onClick={() => removeChecklistItem(index)}
                    className="ml-2 px-3 text-red-500"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            
            {(settings.checklistItems || []).length < 7 && (
              <button 
                onClick={addChecklistItem}
                className="text-blue-500 text-sm flex items-center"
              >
                <span className="mr-1">+</span> Add Item
              </button>
            )}
          </div>
        )}
        
        {/* CTA Settings */}
        {selectedComponents.includes('cta') && (
          <div className="mb-4">
            <label className="block mb-2 font-medium">CTA Button Text</label>
            <input 
              type="text" 
              value={settings.ctaText || ''} 
              onChange={(e) => handleInputChange(e, 'ctaText')}
              placeholder="Enter CTA text"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <p className="text-xs text-gray-500 mt-1">
              Strong CTAs use action verbs like "Get", "Download", "Start", "Try", etc.
            </p>
          </div>
        )}
      </div>
      
      {/* Background Settings */}
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
            
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="bg-gradient"
                checked={backgroundType === 'gradient'}
                onChange={() => handleBackgroundTypeChange('gradient')}
                className="text-blue-600"
              />
              <label htmlFor="bg-gradient">Gradient</label>
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
        
        {backgroundType === 'gradient' && (
          <div className="mb-4">
            <label className="block mb-2 font-medium">Background Gradient</label>
            <p className="text-sm text-gray-600 mb-2">
              Gradient backgrounds can be configured in the Style panel using the Smart Gradient generator.
            </p>
          </div>
        )}
      </div>
      
      {/* Visual Elements */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Visual Elements</h3>
        
        {/* Decorative Elements Toggle */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="show-decorative"
            checked={settings.showDecorative || false}
            onChange={(e) => updateSettings('showDecorative', e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="show-decorative">Show decorative elements</label>
        </div>
        
        <p className="text-sm text-gray-500">
          Decorative elements add visual interest but should be used sparingly to maintain a clean, professional look.
        </p>
      </div>
    </div>
  );
}

export default DynamicSettings;