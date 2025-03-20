// 1. First, let's create a component for aspect ratio selection

// src/components/AspectRatioSelector.js
import React from 'react';

const ASPECT_RATIOS = {
  square: {
    label: 'Square (1:1)',
    value: '1:1',
    width: 1,
    height: 1
  },
  landscape: {
    label: 'Landscape (16:9)',
    value: '16:9',
    width: 16,
    height: 9
  },
  portrait: {
    label: 'Portrait (4:5)',
    value: '4:5',
    width: 4,
    height: 5
  },
  linkedin: {
    label: 'LinkedIn (1.91:1)',
    value: '1.91:1',
    width: 1.91,
    height: 1
  },
  facebook: {
    label: 'Facebook (1.91:1)',
    value: '1.91:1',
    width: 1.91,
    height: 1
  },
  twitter: {
    label: 'Twitter (16:9)',
    value: '16:9',
    width: 16,
    height: 9
  },
  instagram: {
    label: 'Instagram (1:1)',
    value: '1:1',
    width: 1,
    height: 1
  },
  instagramStory: {
    label: 'Instagram Story (9:16)',
    value: '9:16',
    width: 9,
    height: 16
  }
};

function AspectRatioSelector({ selectedRatio, onChange }) {
  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium">Aspect Ratio</label>
      <select
        value={selectedRatio}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      >
        {Object.entries(ASPECT_RATIOS).map(([key, ratio]) => (
          <option key={key} value={key}>
            {ratio.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Export both the component and the ratio constants
export { AspectRatioSelector, ASPECT_RATIOS };