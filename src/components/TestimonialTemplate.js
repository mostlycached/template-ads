// src/components/TestimonialTemplate.js
import React from 'react';

// Default colors for fallbacks
const DEFAULT_COLORS = {
  background: '#f0f5fa',
  accent: '#2b5c8e',
  text: '#232F3E',
  button: '#2b5c8e'
};

function TestimonialTemplate({ settings }) {
  // Extract color palette with fallback
  const palette = settings.colorPalette || {};
  
  // Use specific overrides or fallback to palette values
  const backgroundColor = settings.backgroundColor || palette.background || DEFAULT_COLORS.background;
  const accentColor = settings.accentColor || palette.accent || DEFAULT_COLORS.accent;
  const textColor = palette.text || DEFAULT_COLORS.text;
  const buttonBgColor = settings.buttonBackgroundColor || palette.button || DEFAULT_COLORS.button;
  const buttonTextColor = settings.buttonTextColor || '#FFFFFF';
  
  // Font handling
  const primaryFont = settings.primaryFont || 'Arial, sans-serif';
  const secondaryFont = settings.secondaryFont || 'Georgia, serif';
  
  // Element-specific font overrides
  const personQuoteFont = settings.personQuoteFont || secondaryFont;
  const personNameFont = settings.personNameFont || primaryFont;
  const personTitleFont = settings.personTitleFont || secondaryFont;
  
  const processedQuote = settings.personQuote?.replace(/{{companyName}}/g, settings.companyName || 'Company') || '';
  
  return (
    <div 
      className="relative h-full flex flex-col"
      style={{ 
        backgroundColor: backgroundColor,
        color: textColor
      }}
    >
      {/* Top logos */}
      <div className="flex justify-between items-start mb-4">
        {/* Company logo */}
        <div className="h-12">
          {settings.ownerAccountImage ? (
            <img src={settings.ownerAccountImage} alt={settings.companyName} className="h-full object-contain" />
          ) : (
            <div 
              className="text-xl font-bold"
              style={{ fontFamily: primaryFont }}
            >
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
              className="text-white h-12 w-12 flex items-center justify-center rounded-md"
              style={{ 
                backgroundColor: accentColor,
                fontFamily: primaryFont
              }}
            >
              <span className="text-xl">
                {settings.partnerName ? settings.partnerName.charAt(0) : 'M'}
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-1 items-center">
        <div className="flex">
          {/* Quote section */}
          <div className="flex-1 pr-4">
            <div 
              className="p-5 rounded-lg mb-4"
              style={{ backgroundColor: accentColor }}
            >
              <p 
                className="text-white text-lg"
                style={{ fontFamily: personQuoteFont }}
              >
                {processedQuote}
              </p>
            </div>
            
            <div className="ml-2">
              <h3 
                className="text-xl font-bold"
                style={{ 
                  color: accentColor,
                  fontFamily: personNameFont
                }}
              >
                {settings.personName}
              </h3>
              <p 
                style={{ fontFamily: personTitleFont }}
                className="text-gray-600"
              >
                {settings.personTitle}, 
                <span style={{ color: accentColor }}> {settings.companyDescription}</span>
              </p>
            </div>
          </div>
          
          {/* Person image */}
          <div className="w-1/3 flex justify-end">
            {settings.personImage ? (
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src={settings.personImage} 
                  alt={settings.personName} 
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-48 h-48 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-4xl text-gray-500">👤</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative elements - dots pattern */}
      <div className="absolute top-0 right-0">
        <div className="grid grid-cols-8 gap-2">
          {[...Array(16)].map((_, index) => (
            <div 
              key={index} 
              className="w-2 h-2 rounded-full"
              style={{ 
                backgroundColor: `rgba(43, 92, 142, ${1 - (index % 8) * 0.1})` 
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0">
        <div className="grid grid-cols-7 gap-2">
          {[...Array(14)].map((_, index) => (
            <div 
              key={index} 
              className="w-2 h-2 rounded-full"
              style={{ 
                backgroundColor: `rgba(43, 92, 142, ${1 - (index % 7) * 0.1})` 
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialTemplate;