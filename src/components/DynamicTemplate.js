// src/components/DynamicTemplate.js
import React from 'react';
import layoutVariants from './DynamicTemplateLayouts';

/**
 * Dynamic Template component that renders different combinations of components
 * Supports Header, Subtitle, Checklist, and CTA in different layouts
 */
function DynamicTemplate({ settings }) {
  // Extract palette and font settings
  const palette = settings.colorPalette || {};
  const backgroundColor = settings.backgroundType === 'color' 
    ? (palette.background || '#ffffff')
    : undefined;
  const textColor = palette.text || '#232F3E';
  const accentColor = palette.accent || '#3758f9';
  const ctaColor = palette.button || accentColor;
  
  // Font settings
  const primaryFont = settings.primaryFont || 'Arial, sans-serif';
  const secondaryFont = settings.secondaryFont || 'Georgia, serif';
  
  // Components to display
  const components = settings.components || ['header'];
  
  // Layout style and variant
  const layout = settings.layout || 'centered';
  const layoutVariant = settings.layoutVariant || 'bold-centered';
  
  // Background style based on settings
  const backgroundStyle = {};
  
  if (settings.backgroundType === 'gallery' || settings.backgroundType === 'upload') {
    if (settings.backgroundImage) {
      backgroundStyle.backgroundImage = `url(${settings.backgroundImage})`;
      backgroundStyle.backgroundSize = 'cover';
      backgroundStyle.backgroundPosition = 'center';
    } else {
      backgroundStyle.backgroundColor = palette.background || '#ffffff';
    }
  } else if (settings.backgroundType === 'gradient' && settings.backgroundColor && 
            (settings.backgroundColor.includes('linear-gradient') || 
             settings.backgroundColor.includes('radial-gradient'))) {
    backgroundStyle.backgroundImage = settings.backgroundColor;
  } else {
    backgroundStyle.backgroundColor = backgroundColor;
  }
  
  // Check if we have a layout variant available
  const LayoutComponent = layoutVariants[layoutVariant];
  
  // If we have a specialized layout component, use it
  if (LayoutComponent) {
    // Apply basic alignment to the container
    const containerStyle = {
      ...backgroundStyle,
      display: 'flex',
      justifyContent: layout === 'left-aligned' ? 'flex-start' : 
                     layout === 'right-aligned' ? 'flex-end' : 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      padding: '20px'
    };
    
    return (
      <div style={containerStyle} className="relative overflow-hidden">
        <LayoutComponent 
          settings={settings} 
          components={components} 
          layout={layout}
        />
        
        {/* Decorative Elements */}
        {settings.showDecorative && !(layoutVariant === 'two-column' || layoutVariant === 'minimalist-bright') && (
          <>
            {/* Top right corner decorative element */}
            <div style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.2, zIndex: 0 }}>
              <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="20" fill={accentColor} />
                <circle cx="70" cy="20" r="10" fill={accentColor} />
              </svg>
            </div>
            
            {/* Bottom left decorative dots */}
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', opacity: 0.2, zIndex: 0 }}>
              <svg width="60" height="20" viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill={accentColor} />
                <circle cx="20" cy="10" r="5" fill={accentColor} />
                <circle cx="35" cy="5" r="5" fill={accentColor} />
                <circle cx="50" cy="10" r="5" fill={accentColor} />
              </svg>
            </div>
          </>
        )}
      </div>
    );
  }
  
  // Fallback to basic layout if no specialized layout component
  return (
    <div style={{ ...backgroundStyle, height: '100%', padding: '20px' }} className="relative">
      {/* Company Logo */}
      {settings.ownerAccountImage && (
        <div style={{ 
          position: 'absolute', 
          top: '20px', 
          left: layout === 'right-aligned' ? 'auto' : '20px',
          right: layout === 'right-aligned' ? '20px' : 'auto',
          height: '40px'
        }}>
          <img 
            src={settings.ownerAccountImage} 
            alt={settings.companyName || 'Company'} 
            style={{ height: '100%', objectFit: 'contain' }} 
          />
        </div>
      )}
      
      {/* Content Container */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: layout === 'left-aligned' ? 'flex-start' : 
                   layout === 'right-aligned' ? 'flex-end' : 'center',
        justifyContent: 'center',
        textAlign: layout === 'left-aligned' ? 'left' : 
                  layout === 'right-aligned' ? 'right' : 'center',
        width: '100%',
        height: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        zIndex: 1
      }}>
        {/* Header */}
        {components.includes('header') && (
          <h1 style={{ 
            fontFamily: primaryFont,
            color: textColor,
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px',
            maxWidth: '100%'
          }}>
            {settings.header || 'Your Compelling Header'}
          </h1>
        )}
        
        {/* Subtitle */}
        {components.includes('subtitle') && (
          <h2 style={{ 
            fontFamily: secondaryFont,
            color: textColor,
            fontSize: '16px',
            lineHeight: '1.4',
            marginBottom: '16px',
            maxWidth: '100%'
          }}>
            {settings.subtitle || 'Supporting subtitle text that expands on your header'}
          </h2>
        )}
        
        {/* Checklist */}
        {components.includes('checklist') && (
          <div style={{ 
            alignSelf: layout === 'right-aligned' ? 'flex-end' : 
                      layout === 'left-aligned' ? 'flex-start' : 'center',
            width: 'fit-content',
            marginBottom: components.includes('cta') ? '20px' : '0',
            marginTop: '10px'
          }}>
            {(settings.checklistItems || ['First key benefit point', 'Second important feature', 'Third compelling reason']).map((item, index) => (
              <div 
                key={index}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '12px',
                  textAlign: 'left'
                }}
              >
                <div style={{ marginRight: '10px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill={accentColor} fillOpacity="0.2" />
                    <path d="M8 12L11 15L16 9" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ 
                  fontFamily: secondaryFont,
                  color: textColor,
                  fontSize: '14px',
                  lineHeight: '1.4'
                }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* CTA Button */}
        {components.includes('cta') && (
          <button style={{
            backgroundColor: ctaColor,
            color: '#ffffff',
            fontFamily: primaryFont,
            border: 'none',
            borderRadius: '4px',
            padding: '10px 20px',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: 'pointer',
            marginTop: '20px'
          }}>
            {settings.ctaText || 'Learn More'}
          </button>
        )}
      </div>
      
      {/* Decorative Elements */}
      {settings.showDecorative && (
        <>
          {/* Top right corner decorative element */}
          <div style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.2, zIndex: 0 }}>
            <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="20" fill={accentColor} />
              <circle cx="70" cy="20" r="10" fill={accentColor} />
            </svg>
          </div>
          
          {/* Bottom left decorative dots */}
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', opacity: 0.2, zIndex: 0 }}>
            <svg width="60" height="20" viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill={accentColor} />
              <circle cx="20" cy="10" r="5" fill={accentColor} />
              <circle cx="35" cy="5" r="5" fill={accentColor} />
              <circle cx="50" cy="10" r="5" fill={accentColor} />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

export default DynamicTemplate;