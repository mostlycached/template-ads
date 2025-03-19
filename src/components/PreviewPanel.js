import React from 'react';
import StandardTemplate from './StandardTemplate';
import TestimonialTemplate from './TestimonialTemplate';
import EventTemplate from './EventTemplate';

function PreviewPanel({ settings, currentTemplate, processTemplate }) {
  return (
    <div className="flex-1 p-5 flex flex-col">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold">Preview</h2>
        <div className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded cursor-pointer">
          <span>{settings.companyName || 'Company'}</span>
          <span className="text-xs text-gray-500">▼</span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col gap-5">
        {/* Show description only for standard template */}
        {currentTemplate === 'standard' && (
          <div className="text-sm text-gray-600 leading-relaxed">
            {settings.description}
          </div>
        )}
        
        {/* Preview Card */}
        <div 
          className="flex-1 bg-cover bg-center rounded-lg overflow-hidden flex flex-col p-5 relative"
          style={{
            backgroundImage: settings.backgroundImage ? `url(${settings.backgroundImage})` : undefined,
            backgroundColor: settings.backgroundColor || 
              (currentTemplate === 'testimonial' ? '#f0f5fa' : 
               currentTemplate === 'event' ? '#0a2240' : undefined),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {currentTemplate === 'event' && <EventTemplate settings={settings} />}
          {currentTemplate === 'testimonial' && <TestimonialTemplate settings={settings} />}
          {currentTemplate === 'standard' && <StandardTemplate settings={settings} processTemplate={processTemplate} />}
        </div>
        
        {/* Only show tagline for standard template */}
        {currentTemplate === 'standard' && settings.tagline && (
          <div className="text-lg font-bold">
            {settings.tagline}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <button className="bg-gray-900 text-white px-4 py-2 rounded">Learn More</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <span>✓</span> Save Campaign
          </button>
        </div>
        
        <div className="text-xs mt-3 text-center text-gray-500">
          Preview: {currentTemplate.charAt(0).toUpperCase() + currentTemplate.slice(1)} Template
        </div>
      </div>
    </div>
  );
}

export default PreviewPanel;