import React from 'react';

function StandardTemplate({ settings, processTemplate }) {
  return (
    <>
      <div className="flex justify-between items-start">
        {/* Logo area */}
        <div className="text-2xl font-bold">
          {settings.ownerAccountImage ? (
            <img src={settings.ownerAccountImage} alt="Logo" className="h-8" />
          ) : (
            <div>Nextiva</div>
          )}
        </div>
        
        {/* Company icon */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-xl">🍎</span>
        </div>
      </div>
      
      {/* Card content */}
      <div className="mt-auto">
        <h2 
          className="text-2xl mb-5"
          style={{ color: settings.headerColor }}
        >
          {processTemplate(settings.header)}
        </h2>
        
        <button
          className="px-5 py-2 rounded-full text-sm"
          style={{
            backgroundColor: settings.buttonBackgroundColor,
            color: settings.buttonTextColor
          }}
        >
          {settings.ctaText}
        </button>
      </div>
    </>
  );
}

export default StandardTemplate;