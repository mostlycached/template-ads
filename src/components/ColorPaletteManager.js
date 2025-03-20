// src/components/ColorPaletteManager.js
import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

// Default brand palettes
// src/components/ColorPaletteManager.js - Updated PRESET_PALETTES

const PRESET_PALETTES = {
  // Modern Gradients Palette - Smooth gradient-friendly colors
  gradientMint: {
    primary: '#06D6A0',     // Bright mint
    secondary: '#1B9AAA',   // Teal blue
    background: '#F5FBEF',  // Almost white with slight mint tint
    text: '#2D3047',        // Deep navy
    button: '#06D6A0',      // Bright mint
    accent: '#EF476F'       // Bright pink
  },

  // Neon Cyberpunk Palette - Vibrant futuristic feel
  neonNight: {
    primary: '#FF2A6D',     // Electric pink
    secondary: '#D1F7FF',   // Ice blue
    background: '#05103A',  // Deep space blue
    text: '#D1F7FF',        // Ice blue
    button: '#05FFA1',      // Bright neon green
    accent: '#7678ED'       // Electric purple
  },

  // Natural Earthy Palette - Organic and calming
  earthTones: {
    primary: '#5E6472',     // Slate gray
    secondary: '#A7C4BC',   // Sage green
    background: '#F9F5F0',  // Creamy off-white
    text: '#2D2D2A',        // Almost black
    button: '#E2C2B3',      // Dusty rose
    accent: '#BF9D7E'       // Warm tan
  },

  // Monochromatic Minimal - Clean and elegant
  monochrome: {
    primary: '#232323',     // Almost black
    secondary: '#626262',   // Medium gray
    background: '#FFFFFF',  // Pure white
    text: '#232323',        // Almost black
    button: '#232323',      // Almost black
    accent: '#DEDEDE'       // Light gray
  },

  // Bold Pop - Strong and playful
  boldPop: {
    primary: '#FF6B6B',     // Coral red
    secondary: '#4ECDC4',   // Turquoise
    background: '#FFFFFF',  // White
    text: '#292F36',        // Charcoal
    button: '#FF6B6B',      // Coral red
    accent: '#FFE66D'       // Sunshine yellow
  },

  // Elegant Dark Mode - Sophisticated night mode
  elegantDark: {
    primary: '#BB86FC',     // Lavender
    secondary: '#03DAC6',   // Teal
    background: '#121212',  // Dark gray
    text: '#E1E1E1',        // Near white
    button: '#BB86FC',      // Lavender
    accent: '#CF6679'       // Dusky rose
  },
  
  // Pastel Dream - Soft and gentle
  pastelDream: {
    primary: '#9896F1',     // Soft purple
    secondary: '#D59BF6',   // Lavender
    background: '#EDF7FA',  // Pale blue
    text: '#525252',        // Dark gray
    button: '#9896F1',      // Soft purple
    accent: '#FBC2EB'       // Pink
  },
  
  // Corporate Trust - Professional and reliable
  corporateTrust: {
    primary: '#0066FF',     // Trustworthy blue
    secondary: '#5E81AC',   // Steel blue
    background: '#FFFFFF',  // White
    text: '#2E3440',        // Near black
    button: '#0066FF',      // Trustworthy blue
    accent: '#ECEFF4'       // Light gray-blue
  }
};

function ColorPaletteManager({ palette, updatePalette, backgroundColor, onBackgroundColorChange }) {
  const [activeTab, setActiveTab] = useState('custom'); // 'preset' or 'custom'
  
  // Handle selecting a preset palette
  const handlePresetSelect = (presetName) => {
    if (PRESET_PALETTES[presetName]) {
      updatePalette(PRESET_PALETTES[presetName]);
    }
  };
  
  // Handle single color change
  const handleColorChange = (colorKey, value) => {
    updatePalette({
      ...palette,
      [colorKey]: value
    });
    
    // If we're changing the background color, also set the explicit backgroundColor
    // This would automatically update any components that use backgroundColor directly
    if (colorKey === 'background' && onBackgroundColorChange) {
      onBackgroundColorChange(value);
    }
  };
  
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-medium mb-4">Color Palette</h3>
      
      {/* Tab navigation */}
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'preset' 
            ? 'border-b-2 border-blue-500 text-blue-600' 
            : 'text-gray-500'}`}
          onClick={() => setActiveTab('preset')}
        >
          Preset Palettes
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'custom' 
            ? 'border-b-2 border-blue-500 text-blue-600' 
            : 'text-gray-500'}`}
          onClick={() => setActiveTab('custom')}
        >
          Custom Palette
        </button>
      </div>
      
      {/* Preset Palettes Tab */}
      {activeTab === 'preset' && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          {Object.entries(PRESET_PALETTES).map(([name, colors]) => (
            <button
              key={name}
              className="border border-gray-300 rounded p-3 hover:bg-gray-50"
              onClick={() => handlePresetSelect(name)}
            >
              <div className="text-sm font-medium mb-2 capitalize">{name}</div>
              <div className="flex gap-1">
                {Object.values(colors).map((color, index) => (
                  <div 
                    key={index}
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      )}
      
      {/* Custom Palette Tab */}
      {activeTab === 'custom' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Primary</label>
              <ColorPicker
                color={palette.primary}
                onChange={(color) => handleColorChange('primary', color)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Secondary</label>
              <ColorPicker
                color={palette.secondary}
                onChange={(color) => handleColorChange('secondary', color)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Background</label>
              <ColorPicker
                color={palette.background}
                onChange={(color) => handleColorChange('background', color)}
              />
              {backgroundColor && backgroundColor !== palette.background && (
                <div className="mt-1 text-xs text-yellow-600">
                  Note: Template has a custom background override.
                </div>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Text</label>
              <ColorPicker
                color={palette.text}
                onChange={(color) => handleColorChange('text', color)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Button</label>
              <ColorPicker
                color={palette.button}
                onChange={(color) => handleColorChange('button', color)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Accent</label>
              <ColorPicker
                color={palette.accent}
                onChange={(color) => handleColorChange('accent', color)}
              />
            </div>
          </div>
          
          <div className="pt-3 border-t border-gray-200">
            <div className="text-sm font-medium mb-2">Preview</div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: palette.background }}>
              <div className="flex justify-between mb-2">
                <div className="h-6 w-20" style={{ backgroundColor: palette.primary }}></div>
                <div className="h-6 w-20" style={{ backgroundColor: palette.secondary }}></div>
              </div>
              <div className="mb-2" style={{ color: palette.text }}>Sample Text</div>
              <div className="flex justify-between">
                <div className="rounded px-3 py-1" style={{ backgroundColor: palette.button, color: '#fff' }}>
                  Button
                </div>
                <div className="h-6 w-6 rounded-full" style={{ backgroundColor: palette.accent }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorPaletteManager;