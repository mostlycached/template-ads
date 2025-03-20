// src/components/StandardTemplate.js
import React from 'react';

// Default colors for fallbacks
const DEFAULT_COLORS = {
  text: '#FFFFFF',
  button: '#3758f9'
};

function StandardTemplate({ settings, processTemplate }) {
  // Extract color palette with fallback
  const palette = settings.colorPalette || {};
  
  // Use specific overrides or fallback to palette values
  const headerColor = settings.headerColor || palette.text || DEFAULT_COLORS.text;
  const buttonBgColor = settings.buttonBackgroundColor || palette.button || DEFAULT_COLORS.button;
  const buttonTextColor = settings.buttonTextColor || '#FFFFFF';
  
  // Font handling
  const primaryFont = settings.primaryFont || 'Helvetica, Arial, sans-serif';
  const secondaryFont = settings.secondaryFont || 'Helvetica, Arial, sans-serif';
  
  // Element-specific font overrides
  const headerFont = settings.headerFont || primaryFont;
  const buttonFont = settings.buttonFont || secondaryFont;
  
  return (
    <>
      <div className="flex justify-between items-start">
        {/* Logo area */}
        <div className="text-2xl font-bold" style={{ fontFamily: primaryFont }}>
          {settings.ownerAccountImage ? (
            <img src={settings.ownerAccountImage} alt="Logo" className="h-8" />
          ) : (
            <div>Nextiva</div>
          )}
        </div>
        
        {/* Company icon */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-xl">🍎</span>
        </div>
      </div>
      
      {/* Card content */}
      <div className="mt-auto">
        <h2 
          className="text-2xl mb-5"
          style={{ 
            color: headerColor,
            fontFamily: headerFont
          }}
        >
          {processTemplate(settings.header)}
        </h2>
        
        <button
          className="px-5 py-2 rounded-full text-sm"
          style={{
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
            fontFamily: buttonFont
          }}
        >
          {settings.ctaText}
        </button>
      </div>
    </>
  );
}

export default StandardTemplate;