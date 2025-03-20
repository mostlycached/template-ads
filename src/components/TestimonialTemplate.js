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
  
  // Get the background
  const isGradientBackground = settings.backgroundType === 'gradient';
  
  // Create the style
  const containerStyle = {
    width: '100%',
    height: '100%',
    position: 'relative'
  };
  
  // The main background
  if (isGradientBackground && settings.backgroundColor && 
      (settings.backgroundColor.includes('linear-gradient') || 
       settings.backgroundColor.includes('radial-gradient'))) {
    containerStyle.backgroundImage = settings.backgroundColor;
  } else {
    containerStyle.backgroundColor = palette.background || DEFAULT_COLORS.background;
  }
  
  // Other colors - use ONLY palette colors
  const accentColor = palette.accent || DEFAULT_COLORS.accent;
  const textColor = palette.text || DEFAULT_COLORS.text;
  
  // Font handling
  const primaryFont = settings.primaryFont || 'Arial, sans-serif';
  const secondaryFont = settings.secondaryFont || 'Georgia, serif';
  
  const processedQuote = settings.personQuote?.replace(/{{companyName}}/g, settings.companyName || 'Company') || '';
  
  return (
    <div style={containerStyle}>
      {/* Content wrapper */}
      <div className="flex flex-col h-full" style={{ color: textColor }}>
        {/* Top logos */}
        <div className="flex justify-between items-start p-5">
          {/* Company logo */}
          <div className="h-16">
            {settings.ownerAccountImage ? (
              <img src={settings.ownerAccountImage} alt={settings.companyName} className="h-full object-contain" />
            ) : (
              <div className="text-xl font-bold" style={{ fontFamily: primaryFont }}>
                {settings.companyName}
              </div>
            )}
          </div>
          
          {/* Partner logo */}
          <div className="h-16">
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
        <div className="flex flex-1 items-center px-5">
          <div className="flex w-full">
            {/* Quote section */}
            <div className="flex-1 pr-4">
              <div 
                className="p-5 rounded-lg mb-4"
                style={{ backgroundColor: accentColor }}
              >
                <p 
                  className="text-white text-lg"
                  style={{ fontFamily: secondaryFont }}
                >
                  {processedQuote}
                </p>
              </div>
              
              <div className="ml-2">
                <h3 
                  className="text-xl font-bold"
                  style={{ 
                    color: accentColor,
                    fontFamily: primaryFont
                  }}
                >
                  {settings.personName}
                </h3>
                <p 
                  style={{ fontFamily: secondaryFont }}
                  className="text-gray-600"
                >
                  {settings.personTitle}, 
                  <span style={{ color: accentColor }}> {settings.companyDescription || settings.companyName}</span>
                </p>
              </div>
            </div>
            
            {/* Person image */}
            <div className="w-1/3 flex justify-end">
              {settings.personImage ? (
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <img 
                    src={settings.personImage} 
                    alt={settings.personName} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">👤</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Decorative elements - dots pattern */}
        <div className="absolute top-2 right-2">
          <div className="grid grid-cols-5 gap-1">
            {[...Array(10)].map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full"
                style={{ 
                  backgroundColor: `rgba(43, 92, 142, ${1 - (index % 5) * 0.1})` 
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-2 left-2">
          <div className="grid grid-cols-5 gap-1">
            {[...Array(10)].map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full"
                style={{ 
                  backgroundColor: `rgba(43, 92, 142, ${1 - (index % 5) * 0.1})` 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialTemplate;