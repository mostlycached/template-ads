// src/components/TemplateStyleManager.js
import React, { useState } from 'react';
import { AspectRatioSelector } from './AspectRatioSelector';
import ColorPaletteManager from './ColorPaletteManager';
import FontSelector from './FontSelector';

// Default palette to use if none exists
const DEFAULT_PALETTE = {
  primary: '#3758f9',
  secondary: '#5AC8FA',
  background: '#ffffff',
  text: '#333333',
  button: '#3758f9',
  accent: '#FF2D55'
};

function TemplateStyleManager({ settings, updateSettings }) {
  const [activeTab, setActiveTab] = useState('colors'); // 'colors', 'fonts', 'layout'
  
  // Initialize colorPalette if it doesn't exist
  if (!settings.colorPalette) {
    // This ensures we have a palette object to work with
    updateSettings('colorPalette', DEFAULT_PALETTE);
  }
  
  // Handler for color palette updates
  const handlePaletteUpdate = (newPalette) => {
    updateSettings('colorPalette', newPalette);
    
    // Also update element-specific colors if they're using palette values
    if (!settings.backgroundColor) updateSettings('backgroundColor', newPalette.background);
    if (!settings.accentColor) updateSettings('accentColor', newPalette.accent);
    if (!settings.buttonBackgroundColor) updateSettings('buttonBackgroundColor', newPalette.button);
    if (!settings.headerColor) updateSettings('headerColor', newPalette.text);
  };
  
  return (
    <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
      <div className="flex border-b border-gray-200">
        <button
          className={`py-3 px-4 font-medium ${activeTab === 'colors' 
            ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-500' 
            : 'text-gray-600 hover:bg-gray-50'}`}
          onClick={() => setActiveTab('colors')}
        >
          Colors
        </button>
        <button
          className={`py-3 px-4 font-medium ${activeTab === 'fonts' 
            ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-500' 
            : 'text-gray-600 hover:bg-gray-50'}`}
          onClick={() => setActiveTab('fonts')}
        >
          Typography
        </button>
        <button
          className={`py-3 px-4 font-medium ${activeTab === 'layout' 
            ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-500' 
            : 'text-gray-600 hover:bg-gray-50'}`}
          onClick={() => setActiveTab('layout')}
        >
          Layout
        </button>
      </div>
      
      <div className="p-4">
        {/* Colors Tab */}
        {activeTab === 'colors' && (
          <div>
            <ColorPaletteManager 
              palette={settings.colorPalette || DEFAULT_PALETTE} 
              updatePalette={handlePaletteUpdate} 
            />
            
            <div className="text-sm text-gray-500 mb-4">
              Adjust the color palette above to set the overall color scheme, or override individual element colors below.
            </div>
            
            {/* Individual color overrides section - rendered based on template type */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="font-medium mb-3">Element Color Overrides</h3>
              
              {/* This section would be template-specific */}
              {/* Show only relevant override controls based on current template */}
            </div>
          </div>
        )}
        
        {/* Fonts Tab */}
        {activeTab === 'fonts' && (
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <FontSelector
                label="Primary Font"
                description="Used for headings and important text"
                value={settings.primaryFont || 'Arial, sans-serif'}
                onChange={(value) => updateSettings('primaryFont', value)}
              />
              
              <FontSelector
                label="Secondary Font"
                description="Used for body text and supporting content"
                value={settings.secondaryFont || 'Arial, sans-serif'}
                onChange={(value) => updateSettings('secondaryFont', value)}
              />
            </div>
            
            <div className="text-sm text-gray-500 mb-4">
              Set your primary and secondary fonts above, or override individual element fonts below.
            </div>
            
            {/* Individual font overrides section - rendered based on template type */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="font-medium mb-3">Element Font Overrides</h3>
              
              {/* This section would be template-specific */}
              {/* Show only relevant override controls based on current template */}
            </div>
          </div>
        )}
        
        {/* Layout Tab */}
        {activeTab === 'layout' && (
          <div>
            <AspectRatioSelector
              selectedRatio={settings.aspectRatio || 'landscape'}
              onChange={(value) => updateSettings('aspectRatio', value)}
            />
            
            {/* Additional layout settings could go here */}
            <div className="text-sm text-gray-500 mb-4">
              Adjust the aspect ratio to fit your ad placement needs.
            </div>
            
            {/* Layout presets section */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="font-medium mb-3">Layout Variations</h3>
              <p className="text-sm text-gray-500 mb-4">
                Choose a layout variation for your selected template.
              </p>
              
              {/* This section would be template-specific */}
              {/* Show layout options based on current template */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TemplateStyleManager;