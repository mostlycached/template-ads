// src/components/FontSelector.js
import React from 'react';

// Popular web-safe font families grouped by type
const FONT_OPTIONS = {
  serif: [
    { name: 'Georgia', value: 'Georgia, serif' },
    { name: 'Times New Roman', value: '"Times New Roman", Times, serif' },
    { name: 'Palatino', value: '"Palatino Linotype", "Book Antiqua", Palatino, serif' }
  ],
  sansSerif: [
    { name: 'Arial', value: 'Arial, sans-serif' },
    { name: 'Helvetica', value: 'Helvetica, Arial, sans-serif' },
    { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' },
    { name: 'Trebuchet MS', value: '"Trebuchet MS", Helvetica, sans-serif' },
    { name: 'Segoe UI', value: '"Segoe UI", Helvetica, Arial, sans-serif' }
  ],
  display: [
    { name: 'Impact', value: 'Impact, Charcoal, sans-serif' },
    { name: 'Arial Black', value: '"Arial Black", Gadget, sans-serif' },
    { name: 'Lucida Sans', value: '"Lucida Sans Unicode", "Lucida Grande", sans-serif' }
  ],
  monospace: [
    { name: 'Courier New', value: '"Courier New", Courier, monospace' },
    { name: 'Lucida Console', value: '"Lucida Console", Monaco, monospace' }
  ]
};

function FontSelector({ value, onChange, label, description }) {
  // Flatten the font options for the dropdown
  const allFonts = Object.values(FONT_OPTIONS).flat();
  
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">{label || 'Font'}</label>
      {description && <p className="text-sm text-gray-500 mb-2">{description}</p>}
      
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded bg-white"
        style={{ fontFamily: value }}
      >
        <option value="">Select a font</option>
        
        <optgroup label="Sans-serif Fonts">
          {FONT_OPTIONS.sansSerif.map((font) => (
            <option key={font.name} value={font.value} style={{ fontFamily: font.value }}>
              {font.name}
            </option>
          ))}
        </optgroup>
        
        <optgroup label="Serif Fonts">
          {FONT_OPTIONS.serif.map((font) => (
            <option key={font.name} value={font.value} style={{ fontFamily: font.value }}>
              {font.name}
            </option>
          ))}
        </optgroup>
        
        <optgroup label="Display Fonts">
          {FONT_OPTIONS.display.map((font) => (
            <option key={font.name} value={font.value} style={{ fontFamily: font.value }}>
              {font.name}
            </option>
          ))}
        </optgroup>
        
        <optgroup label="Monospace Fonts">
          {FONT_OPTIONS.monospace.map((font) => (
            <option key={font.name} value={font.value} style={{ fontFamily: font.value }}>
              {font.name}
            </option>
          ))}
        </optgroup>
      </select>
      
      {/* Preview */}
      {value && (
        <div className="mt-2 p-3 border border-gray-200 rounded">
          <p className="text-sm text-gray-500 mb-1">Preview:</p>
          <p style={{ fontFamily: value }} className="text-lg">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      )}
    </div>
  );
}

export default FontSelector;