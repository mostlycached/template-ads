import React from 'react';

function EventTemplate({ settings }) {
  return (
    <div className="relative h-full flex flex-col">
      {/* Top logos */}
      <div className="flex justify-between items-start mb-8">
        {/* Company logo */}
        <div className="h-12">
          {settings.ownerAccountImage ? (
            <img src={settings.ownerAccountImage} alt={settings.companyName} className="h-full object-contain" />
          ) : (
            <div className="text-xl font-bold text-white">{settings.companyName}</div>
          )}
        </div>
        
        {/* Partner logo */}
        <div className="h-12">
          {settings.partnerImage ? (
            <img src={settings.partnerImage} alt={settings.partnerName} className="h-full object-contain" />
          ) : (
            <div className="bg-white text-blue-600 h-12 w-12 flex items-center justify-center rounded-md">
              <span className="text-xl">S</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Event title */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-3">
          {settings.eventTitle}
        </h1>
        <div 
          className="inline-block px-4 py-1 rounded-sm text-sm font-bold"
          style={{ backgroundColor: settings.accentColor, color: '#fff' }}
        >
          {settings.eventType}
        </div>
      </div>
      
      {/* Speakers */}
      <div className="flex-1 flex justify-center items-center gap-8">
        {/* Speaker 1 */}
        <div className="flex flex-col items-center">
          <div className="mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-white">
            {settings.speaker1Image ? (
              <img 
                src={settings.speaker1Image} 
                alt={settings.speaker1Name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-4xl text-gray-500">👤</span>
              </div>
            )}
          </div>
          <h3 className="text-white font-bold text-lg">{settings.speaker1Name}</h3>
          <p className="text-white text-sm text-center">{settings.speaker1Title}</p>
          <p className="text-white text-sm">{settings.speaker1Company}</p>
        </div>
        
        {/* Speaker 2 */}
        <div className="flex flex-col items-center">
          <div className="mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-white">
            {settings.speaker2Image ? (
              <img 
                src={settings.speaker2Image} 
                alt={settings.speaker2Name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-4xl text-gray-500">👤</span>
              </div>
            )}
          </div>
          <h3 className="text-white font-bold text-lg">{settings.speaker2Name}</h3>
          <p className="text-white text-sm text-center">{settings.speaker2Title}</p>
          <p className="text-white text-sm">{settings.speaker2Company}</p>
        </div>
      </div>
      
      {/* CTA Button */}
      <div className="mt-8 flex justify-center">
        <button
          className="px-6 py-2 text-white font-bold rounded"
          style={{
            backgroundColor: settings.buttonBackgroundColor,
            color: settings.buttonTextColor
          }}
        >
          {settings.ctaText}
        </button>
      </div>
    </div>
  );
}

export default EventTemplate;