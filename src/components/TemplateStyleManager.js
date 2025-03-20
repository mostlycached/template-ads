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
    
    // Now explicitly set backgroundColor to the palette background
    // This ensures template switching works properly by keeping the two in sync
    if (newPalette.background) {
      updateSettings('backgroundColor', newPalette.background);
    }
  };
  
  // Handler for backgroundColor changes specifically
  const handleBackgroundColorChange = (color) => {
    updateSettings('backgroundColor', color);
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
              backgroundColor={settings.backgroundColor}
              onBackgroundColorChange={handleBackgroundColorChange}
            />
            
            <div className="text-sm text-gray-500 mb-4">
              The color palette controls the overall color scheme of your template. Changes to the palette will apply across all elements.
            </div>
            
            {/* Individual color overrides section - rendered based on template type */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="font-medium mb-3">
                Element Color Overrides 
                <span className="text-xs text-gray-500 ml-2">
                  (These override palette colors for specific elements)
                </span>
              </h3>
              
              {/* This section would be template-specific */}
              {/* Show only relevant override controls based on current template */}
              
              {/* Insert a note explaining how overrides work */}
              <div className="text-sm text-gray-500 p-3 bg-gray-50 rounded-lg">
                <p className="font-medium mb-1">How color precedence works:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Palette colors apply to all elements by default</li>
                  <li>Element-specific overrides will take precedence over palette colors</li>
                  <li>Any changes to the palette will update all elements that don't have overrides</li>
                </ol>
              </div>
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