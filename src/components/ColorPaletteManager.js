// src/components/ColorPaletteManager.js
import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

// Default brand palettes - can be expanded
const PRESET_PALETTES = {
  blue: {
    primary: '#1a73e8',
    secondary: '#4285f4',
    background: '#f8f9fa',
    text: '#202124',
    button: '#1a73e8',
    accent: '#fbbc04'
  },
  green: {
    primary: '#0f9d58',
    secondary: '#34a853',
    background: '#f1f3f4',
    text: '#1e1e1e',
    button: '#0f9d58',
    accent: '#ea4335'
  },
  purple: {
    primary: '#673ab7',
    secondary: '#9c27b0',
    background: '#f3e5f5',
    text: '#311b92',
    button: '#673ab7',
    accent: '#ff9800'
  },
  dark: {
    primary: '#202124',
    secondary: '#5f6368',
    background: '#303134',
    text: '#e8eaed',
    button: '#8ab4f8',
    accent: '#f28b82'
  }
};

function ColorPaletteManager({ palette, updatePalette }) {
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