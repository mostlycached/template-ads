// src/components/LayoutPreview.js
import React from 'react';

/**
 * Simple preview component to show layout options in the settings panel
 */
function LayoutPreview({ layoutVariant, components, layout = 'centered' }) {
  // Get alignment classes based on layout
  const getAlignmentClasses = () => {
    switch (layout) {
      case 'left-aligned':
        return 'items-start text-left';
      case 'right-aligned':
        return 'items-end text-right';
      case 'centered':
      default:
        return 'items-center text-center';
    }
  };
  
  // Simple previews for each layout variant
  const previewComponents = {
    'bold-centered': (
      <div className={`h-full flex flex-col justify-center p-2 ${getAlignmentClasses()}`}>
        <div className="bg-blue-500 h-2 w-16 mb-2 rounded"></div>
        <div className="bg-gray-800 h-4 w-32 mb-2 rounded"></div>
        {components.includes('subtitle') && <div className="bg-gray-400 h-2 w-24 mb-2 rounded"></div>}
        {components.includes('checklist') && (
          <div className={`flex flex-col my-2 ${getAlignmentClasses()}`}>
            <div className="flex items-center mb-1">
              <div className="bg-blue-500 h-2 w-2 mr-1 rounded-full"></div>
              <div className="bg-gray-400 h-2 w-16 rounded"></div>
            </div>
            <div className="flex items-center mb-1">
              <div className="bg-blue-500 h-2 w-2 mr-1 rounded-full"></div>
              <div className="bg-gray-400 h-2 w-14 rounded"></div>
            </div>
          </div>
        )}
        {components.includes('cta') && <div className="bg-blue-500 h-3 w-20 mt-2 rounded"></div>}
      </div>
    ),
    
    'left-aligned-border': (
      <div className={`h-full flex items-center p-2 ${layout === 'right-aligned' ? 'justify-end' : layout === 'centered' ? 'justify-center' : 'justify-start'}`}>
        <div className="bg-blue-500 h-12 w-1 mr-2"></div>
        <div className={`flex flex-col ${getAlignmentClasses()}`}>
          <div className="bg-gray-800 h-3 w-28 mb-2 rounded"></div>
          {components.includes('subtitle') && <div className="bg-gray-400 h-2 w-24 mb-2 rounded"></div>}
          {components.includes('checklist') && (
            <div className="flex flex-col my-1">
              <div className="flex items-center mb-1">
                <div className="bg-blue-500 h-2 w-2 mr-1 rounded-full"></div>
                <div className="bg-gray-400 h-2 w-16 rounded"></div>
              </div>
              <div className="flex items-center mb-1">
                <div className="bg-blue-500 h-2 w-2 mr-1 rounded-full"></div>
                <div className="bg-gray-400 h-2 w-14 rounded"></div>
              </div>
            </div>
          )}
          {components.includes('cta') && <div className="bg-blue-500 h-3 w-16 mt-2 rounded"></div>}
        </div>
      </div>
    ),
    
    'two-column': (
      <div className="h-full flex">
        <div className="w-2/5 bg-blue-500 p-2 flex items-center justify-center">
          <div className="bg-white h-3 w-20 rounded"></div>
        </div>
        <div className="w-3/5 p-2 flex flex-col justify-center">
          {components.includes('subtitle') && <div className="bg-gray-400 h-2 w-24 mb-2 rounded"></div>}
          {components.includes('checklist') && (
            <div className="flex flex-col my-1">
              <div className="flex items-center mb-1">
                <div className="bg-blue-500 h-3 w-3 mr-1 rounded-full flex items-center justify-center">
                  <div className="bg-white h-1 w-1"></div>
                </div>
                <div className="bg-gray-400 h-2 w-16 rounded"></div>
              </div>
              <div className="flex items-center mb-1">
                <div className="bg-blue-500 h-3 w-3 mr-1 rounded-full flex items-center justify-center">
                  <div className="bg-white h-1 w-1"></div>
                </div>
                <div className="bg-gray-400 h-2 w-14 rounded"></div>
              </div>
            </div>
          )}
          {components.includes('cta') && <div className="bg-blue-500 h-3 w-16 mt-1 rounded"></div>}
        </div>
      </div>
    ),
    
    'minimalist-bright': (
      <div className="h-full flex flex-col p-2 relative">
        <div className="bg-blue-500 h-1 absolute top-0 left-0 right-0"></div>
        <div className={`bg-gray-300 h-2 w-8 mb-4 mt-1 ${layout === 'right-aligned' ? 'self-end' : layout === 'centered' ? 'self-center' : 'self-start'}`}></div>
        <div className={`flex-1 flex flex-col justify-center ${getAlignmentClasses()}`}>
          <div className="bg-gray-800 h-3 w-28 mb-2 rounded"></div>
          {components.includes('subtitle') && <div className="bg-gray-400 h-2 w-24 mb-2 rounded"></div>}
          {components.includes('checklist') && (
            <div className="flex flex-col my-1">
              <div className="flex items-center mb-1">
                <div className="bg-blue-500 h-2 w-2 mr-1 rounded-full"></div>
                <div className="bg-gray-400 h-2 w-16 rounded"></div>
              </div>
              <div className="flex items-center mb-1">
                <div className="bg-blue-500 h-2 w-2 mr-1 rounded-full"></div>
                <div className="bg-gray-400 h-2 w-14 rounded"></div>
              </div>
            </div>
          )}
        </div>
        {components.includes('cta') && (
          <div className={`bg-blue-500 h-3 w-16 mt-2 rounded ${layout === 'right-aligned' ? 'self-end' : layout === 'centered' ? 'self-center' : 'self-start'}`}></div>
        )}
      </div>
    )
  };
  
  const preview = previewComponents[layoutVariant] || previewComponents['bold-centered'];
  
  return (
    <div className="border border-gray-300 rounded h-24 overflow-hidden">
      {preview}
    </div>
  );
}

export default LayoutPreview;