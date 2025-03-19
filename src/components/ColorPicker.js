import React from 'react';

// Color Picker Component
function ColorPicker({ color, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-10 h-10 border-none cursor-pointer"
      />
      <span className="font-mono">{color}</span>
    </div>
  );
}

export default ColorPicker;