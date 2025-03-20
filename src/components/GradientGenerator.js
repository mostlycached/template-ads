// src/components/GradientGenerator.js
import React, { useState, useEffect } from 'react';

/**
 * Simplified Smart Gradient Generator - Creates aesthetically pleasing gradients with just one button
 */
function GradientGenerator({ colorPalette, settings, updateSettings }) {
  // State for gradient string
  const [gradientString, setGradientString] = useState('');
  
  /**
   * Converts hex color to HSL
   */
  const hexToHSL = (hex) => {
    hex = hex.replace(/^#/, '');
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;
    
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: h = 0;
      }
      h /= 6;
    }
    
    return { h: h * 360, s: s * 100, l: l * 100 };
  };
  
  /**
   * Converts HSL color to hex
   */
  const hslToHex = (hsl) => {
    let { h, s, l } = hsl;
    h /= 360;
    s /= 100;
    l /= 100;
    
    let r, g, b;
    
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    
    const toHex = (x) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };
  
  /**
   * Generates an analogous color
   */
  const generateAnalogousColor = (baseColor, hueShift, saturationAdjust = 0, lightnessAdjust = 0) => {
    const hsl = hexToHSL(baseColor);
    
    hsl.h = (hsl.h + hueShift) % 360;
    if (hsl.h < 0) hsl.h += 360;
    
    hsl.s = Math.min(100, Math.max(0, hsl.s + saturationAdjust));
    hsl.l = Math.min(100, Math.max(0, hsl.l + lightnessAdjust));
    
    return hslToHex(hsl);
  };
  
  /**
   * Creates a new random gradient
   */
  const generateRandomGradient = () => {
    // Get base color from palette
    const backgroundColor = colorPalette?.background || '#f0f5fa';
    const baseHSL = hexToHSL(backgroundColor);
    
    // Random gradient type (linear/radial)
    const gradientType = Math.random() > 0.3 ? 'linear' : 'radial';
    
    // Random direction
    let direction;
    if (gradientType === 'linear') {
      const angles = [45, 135, 180, 225]; 
      direction = `${angles[Math.floor(Math.random() * angles.length)]}deg`;
    } else {
      const positions = ['circle at center', 'circle at top left', 'circle at bottom right'];
      direction = positions[Math.floor(Math.random() * positions.length)];
    }
    
    // Generate colors
    let colors;
    if (Math.random() > 0.5) {
      // 2-color gradient
      const secondColor = generateAnalogousColor(
        backgroundColor, 
        Math.random() > 0.5 ? 30 : -30,
        Math.random() * 20, 
        baseHSL.l > 50 ? -20 : 20
      );
      colors = [backgroundColor, secondColor];
    } else {
      // 3-color gradient
      const colorA = generateAnalogousColor(backgroundColor, -30, Math.random() * 20, baseHSL.l > 70 ? -30 : 0);
      const colorB = backgroundColor;
      const colorC = generateAnalogousColor(backgroundColor, 30, Math.random() * 20, baseHSL.l < 30 ? 30 : 0);
      colors = [colorA, colorB, colorC];
    }
    
    // Create gradient stops
    const stops = colors.map((color, index) => ({
      color,
      position: index * (100 / (colors.length - 1))
    }));
    
    // Adjust middle stop for more visual interest if 3 colors
    if (stops.length === 3) {
      stops[1].position = 50 + (Math.random() * 10 - 5);
    }
    
    // Build gradient string
    const colorStopsString = stops
      .sort((a, b) => a.position - b.position)
      .map(stop => `${stop.color} ${stop.position}%`)
      .join(', ');
    
    const newGradientString = gradientType === 'linear' 
      ? `linear-gradient(${direction}, ${colorStopsString})` 
      : `radial-gradient(${direction}, ${colorStopsString})`;
    
    // Update state
    setGradientString(newGradientString);
    
    // Update settings
    updateSettings('gradientType', gradientType);
    updateSettings('gradientDirection', direction);
    updateSettings('gradientStops', stops);
    updateSettings('backgroundType', 'gradient');
    updateSettings('backgroundColor', newGradientString);
  };
  
  // Initialize with a random gradient
  useEffect(() => {
    if (!settings.backgroundType || settings.backgroundType !== 'gradient') {
      generateRandomGradient();
    } else if (settings.backgroundColor && 
        (settings.backgroundColor.includes('linear-gradient') || 
         settings.backgroundColor.includes('radial-gradient'))) {
      setGradientString(settings.backgroundColor);
    }
  }, []);
  
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Smart Gradient Background</h3>
        <button 
          onClick={generateRandomGradient}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
        >
          Generate New Gradient
        </button>
      </div>
      
      {/* Gradient Preview */}
      <div 
        className="w-full h-24 rounded-lg mb-4"
        style={{ 
          backgroundImage: gradientString,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      ></div>
      
      <div className="text-xs text-gray-500 p-3 bg-gray-50 rounded-md">
        <p>Click "Generate New Gradient" to create harmonious gradients that complement your brand colors.</p>
      </div>
    </div>
  );
}

export default GradientGenerator;