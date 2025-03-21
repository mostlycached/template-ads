// src/components/PreviewPanel.js - Update to include DynamicTemplate
import React from 'react';
import StandardTemplate from './StandardTemplate';
import TestimonialTemplate from './TestimonialTemplate';
import EventTemplate from './EventTemplate';
import VideoPreviewWithAudio from './VideoPreviewWithAudio';
import DynamicTemplate from './DynamicTemplate';
import B2BTemplate from './B2BTemplate';

// Template-specific default backgrounds as fallbacks
const TEMPLATE_DEFAULT_BACKGROUNDS = {
  standard: '#000000',    // Black background for standard template
  testimonial: '#f0f5fa', // Light blue background for testimonial
  event: '#0a2240',       // Dark blue background for event
  videoTestimonial: '#f0f5fa',  // Light blue background for video testimonial
  dynamic: '#F9FAFB'      // Light gray background for dynamic template
};

function PreviewPanel({ settings, currentTemplate, processTemplate, aspectRatio }) {
  // Extract color palette with fallback
  const palette = settings.colorPalette || {};
  
  // Determine if this is a video template
  const isVideoTemplate = currentTemplate === 'videoTestimonial';
  
  // For non-video templates, calculate aspect ratio styles
  const aspectRatioStyle = !isVideoTemplate ? {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: `${(aspectRatio.height / aspectRatio.width) * 100}%`,
    overflow: 'hidden'
  } : {};

  // Style for the content that needs to fill the aspect ratio container
  const contentStyle = !isVideoTemplate ? {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  } : {};

  // Priority: 1. Palette background, 2. Explicit backgroundColor setting, 3. Template default, 4. Generic fallback
  const backgroundColor = 
    palette.background || 
    settings.backgroundColor || 
    TEMPLATE_DEFAULT_BACKGROUNDS[currentTemplate] || 
    '#ffffff';

  // Background styling based on template settings
  const backgroundStyle = !isVideoTemplate ? {
    backgroundImage: settings.backgroundImage ? `url(${settings.backgroundImage})` : undefined,
    backgroundColor: backgroundColor,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};
  
  // Font settings for preview text
  const primaryFont = settings.primaryFont || 'Arial, sans-serif';
  
  return (
    <div className="flex-1 p-5 flex flex-col">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold">Preview</h2>
        <div className="flex items-center gap-2">
          {/* Only show aspect ratio badge for non-video templates */}
          {!isVideoTemplate && (
            <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
              {aspectRatio.label}
            </div>
          )}
          
          {/* Show video badge for video templates */}
          {isVideoTemplate && (
            <div className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-md text-sm flex items-center">
              <span className="mr-1">🎬</span> Video
            </div>
          )}
          
          {/* Show dynamic badge for dynamic template */}
          {currentTemplate === 'dynamic' && (
            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm flex items-center">
              <span className="mr-1">⚡</span> Dynamic
            </div>
          )}
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
        
        {/* Preview Container: Handle differently for video vs static templates */}
        {isVideoTemplate ? (
          <div className="rounded-lg overflow-hidden">
            <VideoPreviewWithAudio settings={settings} />
          </div>
        ) : (
          <div style={aspectRatioStyle} className="rounded-lg overflow-hidden">
            <div 
              style={{...contentStyle, ...backgroundStyle}}
              className="p-5"
            >
              {currentTemplate === 'event' && <EventTemplate settings={settings} />}
              {currentTemplate === 'testimonial' && <TestimonialTemplate settings={settings} />}
              {currentTemplate === 'standard' && <StandardTemplate settings={settings} processTemplate={processTemplate} />}
              {currentTemplate === 'dynamic' && <DynamicTemplate settings={settings} />}
              {currentTemplate === 'b2bTemplate' && <B2BTemplate settings={settings} />}
            </div>
          </div>
        )}
        
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
          Preview: {formatTemplateName(currentTemplate)} Template 
          {!isVideoTemplate ? ` | ${aspectRatio.value}` : ' | Video'}
        </div>
      </div>
    </div>
  );
}

// Helper to format template name
function formatTemplateName(name) {
  const formatted = name.replace(/([A-Z])/g, ' $1');
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export default PreviewPanel;