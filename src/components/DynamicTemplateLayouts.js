// src/components/DynamicTemplateLayouts.js
import React from 'react';

/**
 * Layout variants for the Dynamic Template
 * These are inspired by high-performing LinkedIn ad designs
 */

// Layout 1: Bold Centered - inspired by ads with big bold text and centered layout
export const BoldCenteredLayout = ({ settings, components, layout = 'centered' }) => {
  const { header, subtitle, checklistItems, ctaText } = settings;
  const palette = settings.colorPalette || {};
  const primaryFont = settings.primaryFont || 'Arial, sans-serif';
  const secondaryFont = settings.secondaryFont || 'Georgia, serif';
  const accentColor = palette.accent || '#3B82F6';
  const textColor = palette.text || '#1F2937';
  
  // Adjust alignment based on layout
  const getContainerStyle = () => {
    const base = {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
    };
    
    // Apply text alignment based on layout
    switch (layout) {
      case 'left-aligned':
        return {
          ...base,
          alignItems: 'flex-start',
          textAlign: 'left'
        };
      case 'right-aligned':
        return {
          ...base,
          alignItems: 'flex-end',
          textAlign: 'right'
        };
      case 'centered':
      default:
        return {
          ...base,
          alignItems: 'center',
          textAlign: 'center'
        };
    }
  };
  
  return (
    <div style={getContainerStyle()}>
      {/* Company Logo */}
      {settings.ownerAccountImage && (
        <div className="mb-6">
          <img 
            src={settings.ownerAccountImage} 
            alt="Company Logo" 
            className="h-12 object-contain" 
          />
        </div>
      )}
      
      {/* Header */}
      {components.includes('header') && (
        <h1 
          style={{ 
            fontFamily: primaryFont,
            color: textColor,
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '16px',
            maxWidth: '80%',
            lineHeight: 1.2
          }}
        >
          {header || 'Your Compelling Header'}
        </h1>
      )}
      
      {/* Subtitle */}
      {components.includes('subtitle') && (
        <h2 
          style={{ 
            fontFamily: secondaryFont,
            color: textColor,
            fontSize: '16px',
            lineHeight: 1.4,
            marginBottom: '20px',
            maxWidth: '75%'
          }}
        >
          {subtitle || 'Supporting subtitle text'}
        </h2>
      )}
      
      {/* Checklist */}
      {components.includes('checklist') && (
        <div className="flex flex-col items-center mb-8">
          {(checklistItems || ['First benefit', 'Second benefit', 'Third benefit']).map((item, index) => (
            <div 
              key={index}
              className="flex items-center mb-3"
            >
              <div className="mr-2 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill={accentColor} fillOpacity="0.2" />
                  <path d="M6 10L8.5 12.5L14 7" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontFamily: secondaryFont, color: textColor }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      )}
      
      {/* CTA Button */}
      {components.includes('cta') && (
        <button 
          style={{
            backgroundColor: accentColor,
            color: '#FFFFFF',
            fontFamily: primaryFont,
            padding: '12px 24px',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '14px',
            textTransform: 'uppercase',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {ctaText || 'Learn More'}
        </button>
      )}
    </div>
  );
};

// Layout 2: Left Aligned with Border - inspired by structured LinkedIn ads
export const LeftAlignedBorderLayout = ({ settings, components, layout = 'left-aligned' }) => {
  const { header, subtitle, checklistItems, ctaText } = settings;
  const palette = settings.colorPalette || {};
  const primaryFont = settings.primaryFont || 'Arial, sans-serif';
  const secondaryFont = settings.secondaryFont || 'Georgia, serif';
  const accentColor = palette.accent || '#3B82F6';
  const textColor = palette.text || '#1F2937';
  
  // Adjust alignment based on layout
  const getContainerStyle = () => {
    const base = {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
    };
    
    // Apply alignment based on layout
    switch (layout) {
      case 'right-aligned':
        return {
          ...base,
          alignItems: 'flex-end',
        };
      case 'centered':
        return {
          ...base,
          alignItems: 'center',
        };
      case 'left-aligned':
      default:
        return {
          ...base,
          alignItems: 'flex-start',
        };
    }
  };
  
  return (
    <div style={getContainerStyle()}>
      {/* Company Logo */}
      {settings.ownerAccountImage && (
        <div className="mb-6">
          <img 
            src={settings.ownerAccountImage} 
            alt="Company Logo" 
            className="h-12 object-contain" 
          />
        </div>
      )}
      
      <div className="flex-1 flex items-center">
        <div className="border-l-4 pl-4" style={{ borderColor: accentColor }}>
          {/* Header */}
          {components.includes('header') && (
            <h1 
              style={{ 
                fontFamily: primaryFont,
                color: textColor,
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '12px',
                lineHeight: 1.2
              }}
            >
              {header || 'Your Compelling Header'}
            </h1>
          )}
          
          {/* Subtitle */}
          {components.includes('subtitle') && (
            <h2 
              style={{ 
                fontFamily: secondaryFont,
                color: textColor,
                fontSize: '16px',
                lineHeight: 1.4,
                marginBottom: '16px'
              }}
            >
              {subtitle || 'Supporting subtitle text'}
            </h2>
          )}
          
          {/* Checklist */}
          {components.includes('checklist') && (
            <div className="mb-6">
              {(checklistItems || ['First benefit', 'Second benefit', 'Third benefit']).map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center mb-2"
                >
                  <div className="mr-2 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: secondaryFont, color: textColor, fontSize: '14px' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}
          
          {/* CTA Button */}
          {components.includes('cta') && (
            <button 
              style={{
                backgroundColor: accentColor,
                color: '#FFFFFF',
                fontFamily: primaryFont,
                padding: '10px 20px',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {ctaText || 'Learn More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Layout 3: Two-Column Split - inspired by LinkedIn ads with clear separation
export const TwoColumnLayout = ({ settings, components, layout = 'split' }) => {
  const { header, subtitle, checklistItems, ctaText } = settings;
  const palette = settings.colorPalette || {};
  const primaryFont = settings.primaryFont || 'Arial, sans-serif';
  const secondaryFont = settings.secondaryFont || 'Georgia, serif';
  const accentColor = palette.accent || '#3B82F6';
  const textColor = palette.text || '#1F2937';
  
  // Note: For the two-column layout, we don't adjust much based on layout param
  // since this layout has its own specific structure
  // But we can adjust internal alignment within the columns
  
  const getTextAlignment = () => {
    switch (layout) {
      case 'right-aligned':
        return 'text-right';
      case 'centered':
        return 'text-center';
      case 'left-aligned':
      default:
        return 'text-left';
    }
  };
  
  return (
    <div className={`h-full flex p-0 overflow-hidden`}>
      {/* Left Column - Colored Background */}
      <div 
        className="w-2/5 p-6 flex flex-col justify-center" 
        style={{ backgroundColor: accentColor }}
      >
        {/* Company Logo */}
        {settings.ownerAccountImage && (
          <div className="mb-auto">
            <img 
              src={settings.ownerAccountImage} 
              alt="Company Logo" 
              className="h-10 object-contain" 
              style={{ filter: 'brightness(0) invert(1)' }} // Make logo white
            />
          </div>
        )}
        
        {/* Header on left side */}
        {components.includes('header') && (
          <h1 
            style={{ 
              fontFamily: primaryFont,
              color: '#FFFFFF',
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: 'auto',
              lineHeight: 1.2
            }}
          >
            {header || 'Your Compelling Header'}
          </h1>
        )}
      </div>
      
      {/* Right Column - Content */}
      <div className="w-3/5 p-6 flex flex-col justify-center">
        {/* Subtitle */}
        {components.includes('subtitle') && (
          <h2 
            style={{ 
              fontFamily: secondaryFont,
              color: textColor,
              fontSize: '16px',
              lineHeight: 1.4,
              marginBottom: '16px'
            }}
          >
            {subtitle || 'Supporting subtitle text'}
          </h2>
        )}
        
        {/* Checklist */}
        {components.includes('checklist') && (
          <div className="mb-6">
            {(checklistItems || ['First benefit', 'Second benefit', 'Third benefit']).map((item, index) => (
              <div 
                key={index}
                className="flex items-center mb-3"
              >
                <div 
                  className="mr-3 w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: accentColor }}
                >
                  <span style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: 'bold' }}>
                    {index + 1}
                  </span>
                </div>
                <span style={{ fontFamily: secondaryFont, color: textColor }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}
        
        {/* CTA Button */}
        {components.includes('cta') && (
          <button 
            style={{
              backgroundColor: accentColor,
              color: '#FFFFFF',
              fontFamily: primaryFont,
              padding: '10px 20px',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              alignSelf: 'flex-start'
            }}
          >
            {ctaText || 'Learn More'}
          </button>
        )}
      </div>
    </div>
  );
};

// Layout 4: Minimalist with Bright Accent - inspired by clean, modern LinkedIn ads
export const MinimalistBrightAccentLayout = ({ settings, components, layout = 'left-aligned' }) => {
  const { header, subtitle, checklistItems, ctaText } = settings;
  const palette = settings.colorPalette || {};
  const primaryFont = settings.primaryFont || 'Arial, sans-serif';
  const secondaryFont = settings.secondaryFont || 'Georgia, serif';
  const accentColor = palette.accent || '#3B82F6';
  const textColor = palette.text || '#1F2937';
  
  // Adjust alignment based on layout
  const getContainerStyle = () => {
    const base = {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
    };
    
    // Apply alignment based on layout
    switch (layout) {
      case 'right-aligned':
        return {
          ...base,
          alignItems: 'flex-end',
          textAlign: 'right',
        };
      case 'centered':
        return {
          ...base,
          alignItems: 'center',
          textAlign: 'center',
        };
      case 'left-aligned':
      default:
        return {
          ...base,
          alignItems: 'flex-start',
          textAlign: 'left',
        };
    }
  };
  
  return (
    <div style={getContainerStyle()}>
      {/* Top Bar Accent */}
      <div 
        style={{ 
          height: '8px', 
          backgroundColor: accentColor,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1
        }}
      ></div>
      
      {/* Company Logo */}
      {settings.ownerAccountImage && (
        <div className="mb-6 mt-4">
          <img 
            src={settings.ownerAccountImage} 
            alt="Company Logo" 
            className="h-12 object-contain" 
          />
        </div>
      )}
      
      <div className="flex-1 flex flex-col justify-center">
        {/* Header */}
        {components.includes('header') && (
          <h1 
            style={{ 
              fontFamily: primaryFont,
              color: textColor,
              fontSize: '28px',
              fontWeight: 'bold',
              marginBottom: '16px',
              lineHeight: 1.2,
              maxWidth: '80%'
            }}
          >
            {header || 'Your Compelling Header'}
          </h1>
        )}
        
        {/* Subtitle */}
        {components.includes('subtitle') && (
          <h2 
            style={{ 
              fontFamily: secondaryFont,
              color: textColor,
              fontSize: '16px',
              lineHeight: 1.4,
              marginBottom: '20px'
            }}
          >
            {subtitle || 'Supporting subtitle text'}
          </h2>
        )}
        
        {/* Checklist */}
        {components.includes('checklist') && (
          <div className="mb-8">
            {(checklistItems || ['First benefit', 'Second benefit', 'Third benefit']).map((item, index) => (
              <div 
                key={index}
                className="flex items-center mb-3"
              >
                <div 
                  className="mr-3 flex-shrink-0 text-lg font-bold"
                  style={{ color: accentColor }}
                >
                  •
                </div>
                <span style={{ fontFamily: secondaryFont, color: textColor }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* CTA Button */}
      {components.includes('cta') && (
        <button 
          style={{
            backgroundColor: accentColor,
            color: '#FFFFFF',
            fontFamily: primaryFont,
            padding: '12px 24px',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '14px',
            border: 'none',
            cursor: 'pointer',
            alignSelf: 'flex-start'
          }}
        >
          {ctaText || 'Learn More'}
        </button>
      )}
    </div>
  );
};

// Export all layouts 
const layouts = {
  'bold-centered': BoldCenteredLayout,
  'left-aligned-border': LeftAlignedBorderLayout,
  'two-column': TwoColumnLayout,
  'minimalist-bright': MinimalistBrightAccentLayout,
};

export default layouts;