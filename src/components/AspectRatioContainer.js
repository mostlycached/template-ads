// src/components/AspectRatioContainer.js
import React from 'react';
import { ASPECT_RATIOS } from './AspectRatioSelector';

/**
 * AspectRatioContainer - A component that maintains a specific aspect ratio
 * @param {string} ratio - Key of the aspect ratio from ASPECT_RATIOS
 * @param {object} style - Additional styles to apply to the container
 * @param {string} className - Additional classes to apply to the container
 * @param {React.ReactNode} children - Content to render inside the container
 */
function AspectRatioContainer({ ratio = 'landscape', style = {}, className = '', children }) {
  // Get the aspect ratio details
  const aspectRatio = ASPECT_RATIOS[ratio] || ASPECT_RATIOS.landscape;
  
  // Calculate the padding-bottom percentage based on height/width
  const paddingBottom = `${(aspectRatio.height / aspectRatio.width) * 100}%`;
  
  return (
    <div 
      className={`relative w-full ${className}`} 
      style={{ ...style, paddingBottom }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        {children}
      </div>
    </div>
  );
}

export default AspectRatioContainer;