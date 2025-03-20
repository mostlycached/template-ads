// src/components/EventTemplate.js
import React from 'react';

// Default colors for fallbacks
const DEFAULT_COLORS = {
  background: '#0a2240',
  accent: '#f7941d',
  text: '#FFFFFF',
  button: '#f7941d'
};

function EventTemplate({ settings }) {
  // Extract color palette with fallback
  const palette = settings.colorPalette || {};
  
  // Colors - use ONLY palette colors
  const backgroundColor = palette.background || DEFAULT_COLORS.background;
  const accentColor = palette.accent || DEFAULT_COLORS.accent;
  const buttonBgColor = palette.button || DEFAULT_COLORS.button;
  const buttonTextColor = palette.primary || '#FFFFFF';
  const textColor = palette.text || DEFAULT_COLORS.text;
  
  // Font handling
  const primaryFont = settings.primaryFont || '"Segoe UI", Helvetica, Arial, sans-serif';
  const secondaryFont = settings.secondaryFont || 'Arial, sans-serif';
  
  return (
    <div 
      className="relative h-full flex flex-col"
      style={{ 
        backgroundColor: backgroundColor,
        color: textColor
      }}
    >
      {/* Top logos */}
      <div className="flex justify-between items-start mb-8">
        {/* Company logo */}
        <div className="h-12">
          {settings.ownerAccountImage ? (
            <img src={settings.ownerAccountImage} alt={settings.companyName} className="h-full object-contain" />
          ) : (
            <div className="text-xl font-bold" style={{ fontFamily: primaryFont }}>
              {settings.companyName}
            </div>
          )}
        </div>
        
        {/* Partner logo */}
        <div className="h-12">
          {settings.partnerImage ? (
            <img src={settings.partnerImage} alt={settings.partnerName} className="h-full object-contain" />
          ) : (
            <div 
              className="bg-white h-12 w-12 flex items-center justify-center rounded-md"
              style={{ color: backgroundColor }}
            >
              <span className="text-xl" style={{ fontFamily: primaryFont }}>
                {settings.partnerName ? settings.partnerName.charAt(0) : 'S'}
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Event title */}
      <div className="mb-8">
        <h1 
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: primaryFont }}
        >
          {settings.eventTitle}
        </h1>
        <div 
          className="inline-block px-4 py-1 rounded-sm text-sm font-bold"
          style={{ 
            backgroundColor: accentColor, 
            color: '#fff',
            fontFamily: secondaryFont
          }}
        >
          {settings.eventType}
        </div>
      </div>
      
      {/* Speakers */}
      <div className="flex-1 flex justify-center items-center gap-8">
        {/* Speaker 1 */}
        <div className="flex flex-col items-center">
          <div className="mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-white">
            {settings.speaker1Image ? (
              <img 
                src={settings.speaker1Image} 
                alt={settings.speaker1Name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-4xl text-gray-500">👤</span>
              </div>
            )}
          </div>
          <h3 
            className="font-bold text-lg"
            style={{ fontFamily: primaryFont }}
          >
            {settings.speaker1Name}
          </h3>
          <p 
            className="text-sm text-center"
            style={{ fontFamily: primaryFont }}
          >
            {settings.speaker1Title}
          </p>
          <p 
            className="text-sm"
            style={{ fontFamily: primaryFont }}
          >
            {settings.speaker1Company}
          </p>
        </div>
        
        {/* Speaker 2 */}
        <div className="flex flex-col items-center">
          <div className="mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-white">
            {settings.speaker2Image ? (
              <img 
                src={settings.speaker2Image} 
                alt={settings.speaker2Name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-4xl text-gray-500">👤</span>
              </div>
            )}
          </div>
          <h3 
            className="font-bold text-lg"
            style={{ fontFamily: primaryFont }}
          >
            {settings.speaker2Name}
          </h3>
          <p 
            className="text-sm text-center"
            style={{ fontFamily: primaryFont }}
          >
            {settings.speaker2Title}
          </p>
          <p 
            className="text-sm"
            style={{ fontFamily: primaryFont }}
          >
            {settings.speaker2Company}
          </p>
        </div>
      </div>
      
      {/* CTA Button */}
      <div className="mt-8 flex justify-center">
        <button
          className="px-6 py-2 font-bold rounded"
          style={{
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
            fontFamily: secondaryFont
          }}
        >
          {settings.ctaText}
        </button>
      </div>
    </div>
  );
}

export default EventTemplate;