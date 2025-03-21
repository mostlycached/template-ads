// src/components/B2BTemplate.js
import React from 'react';
import * as LayoutVariants from './B2BTemplateLayouts';

/**
 * B2B Template component that renders different layouts based on selected
 * promotional objective and layout variation
 */
function B2BTemplate({ settings }) {
  // Extract settings
  const promotionalObjective = settings.promotionalObjective || 'productDemo';
  const layoutVariant = settings.layoutVariant || 'featureFocus';
  
  // Extract palette and font settings
  const palette = settings.colorPalette || {};
  
  // Colors
  const primaryColor = palette.primary || '#2563eb';
  const backgroundColor = settings.backgroundType === 'color' 
    ? (palette.background || '#ffffff')
    : undefined;
  const textColor = palette.text || '#1f2937';
  const accentColor = palette.accent || '#7c3aed';
  const buttonColor = palette.button || primaryColor;
  
  // Font settings
  const primaryFont = settings.primaryFont || '"Inter", sans-serif';
  const secondaryFont = settings.secondaryFont || '"Inter", sans-serif';
  
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
  
  // Determine which layout to render based on the selected promotional objective and layout variant
  const getLayoutComponent = () => {
    // First check if there's a specific layout for this objective and variant combination
    const specificLayoutKey = `${promotionalObjective}_${layoutVariant}`;
    
    if (LayoutVariants[specificLayoutKey]) {
      return LayoutVariants[specificLayoutKey];
    }
    
    // Fall back to just the layout variant
    if (LayoutVariants[layoutVariant]) {
      return LayoutVariants[layoutVariant];
    }
    
    // Default to the feature focus layout if nothing else matches
    return LayoutVariants.featureFocus;
  };
  
  const LayoutComponent = getLayoutComponent();
  
  return (
    <div style={backgroundStyle} className="relative h-full w-full overflow-hidden">
      <LayoutComponent 
        settings={settings}
        promotionalObjective={promotionalObjective}
        colors={{
          primary: primaryColor,
          text: textColor,
          accent: accentColor,
          button: buttonColor
        }}
        fonts={{
          primary: primaryFont,
          secondary: secondaryFont
        }}
      />
    </div>
  );
}

export default B2BTemplate;