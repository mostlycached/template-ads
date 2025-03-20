// src/components/PreviewPanel.js
import React from 'react';
import StandardTemplate from './StandardTemplate';
import TestimonialTemplate from './TestimonialTemplate';
import EventTemplate from './EventTemplate';

// Template-specific default background colors as fallbacks
const TEMPLATE_DEFAULT_BACKGROUNDS = {
  standard: '#000000',    // Black background for standard template
  testimonial: '#f0f5fa', // Light blue background for testimonial
  event: '#0a2240'        // Dark blue background for event
};

function PreviewPanel({ settings, currentTemplate, processTemplate, aspectRatio }) {
  // Extract color palette with fallback
  const palette = settings.colorPalette || {};
  
  // Calculate aspect ratio styles using CSS padding technique
  const aspectRatioStyle = {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: `${(aspectRatio.height / aspectRatio.width) * 100}%`,
    overflow: 'hidden'
  };

  // Style for the content that needs to fill the aspect ratio container
  const contentStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  // IMPORTANT: Changed priority order - palette takes precedence
  // Priority: 1. Palette background, 2. Explicit backgroundColor setting, 3. Template default, 4. Generic fallback
  const backgroundColor = 
    palette.background || 
    settings.backgroundColor || 
    TEMPLATE_DEFAULT_BACKGROUNDS[currentTemplate] || 
    '#ffffff';

  // Background styling based on template settings
  const backgroundStyle = {
    backgroundImage: settings.backgroundImage ? `url(${settings.backgroundImage})` : undefined,
    backgroundColor: backgroundColor,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  // Font settings for preview text
  const primaryFont = settings.primaryFont || 'Arial, sans-serif';
  
  return (
    <div className="flex-1 p-5 flex flex-col">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold">Preview</h2>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
            {aspectRatio.label}
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col gap-5">
        {/* Show description only for standard template */}
        {currentTemplate === 'standard' && settings.description && (
          <div 
            className="text-sm text-gray-600 leading-relaxed"
            style={{ 
              fontFamily: settings.descriptionFont || settings.secondaryFont || 'Arial, sans-serif' 
            }}
          >
            {settings.description}
          </div>
        )}
        
        {/* Preview Card with Aspect Ratio */}
        <div style={aspectRatioStyle} className="rounded-lg overflow-hidden">
          <div 
            style={{...contentStyle, ...backgroundStyle}}
            className="p-5"
          >
            {currentTemplate === 'event' && <EventTemplate settings={settings} />}
            {currentTemplate === 'testimonial' && <TestimonialTemplate settings={settings} />}
            {currentTemplate === 'standard' && <StandardTemplate settings={settings} processTemplate={processTemplate} />}
          </div>
        </div>
        
        {/* Only show tagline for standard template */}
        {currentTemplate === 'standard' && settings.tagline && (
          <div 
            className="text-lg font-bold"
            style={{ 
              fontFamily: settings.taglineFont || settings.primaryFont || 'Arial, sans-serif',
              color: palette.primary || '#333333'
            }}
          >
            {settings.tagline}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button 
              className="bg-gray-900 text-white px-4 py-2 rounded"
              style={{ fontFamily: settings.secondaryFont || 'Arial, sans-serif' }}
            >
              Learn More
            </button>
            <button 
              className="bg-gray-200 text-gray-800 px-3 py-2 rounded flex items-center gap-1"
              style={{ fontFamily: settings.secondaryFont || 'Arial, sans-serif' }}
            >
              <span>↓</span> Export
            </button>
          </div>
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
            style={{ fontFamily: settings.secondaryFont || 'Arial, sans-serif' }}
          >
            <span>✓</span> Save Campaign
          </button>
        </div>
        
        <div className="text-xs mt-3 text-center text-gray-500">
          Preview: {currentTemplate.charAt(0).toUpperCase() + currentTemplate.slice(1)} Template | {aspectRatio.value}
        </div>
        
      </div>
    </div>
  );
}

export default PreviewPanel;