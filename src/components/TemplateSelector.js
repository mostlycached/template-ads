import React from 'react';

function TemplateSelector({ currentTemplate, switchTemplate, resetTemplate }) {
  return (
    <div className="mb-5">
      <div className="flex flex-col">
        <button 
          className="bg-gray-900 text-white px-5 py-2 rounded mb-2"
          onClick={() => {
            const templateMenu = document.getElementById('template-menu');
            if (templateMenu) {
              templateMenu.classList.toggle('hidden');
            }
          }}
        >
          Change Template
        </button>
        
        <div id="template-menu" className="hidden bg-white border border-gray-300 rounded shadow-lg p-2 absolute mt-12 z-10">
          <button 
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${currentTemplate === 'standard' ? 'bg-blue-50 text-blue-700' : ''}`} 
            onClick={() => switchTemplate('standard')}
          >
            Standard
          </button>
          <button 
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${currentTemplate === 'testimonial' ? 'bg-blue-50 text-blue-700' : ''}`} 
            onClick={() => switchTemplate('testimonial')}
          >
            Testimonial
          </button>
          <button 
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${currentTemplate === 'event' ? 'bg-blue-50 text-blue-700' : ''}`} 
            onClick={() => switchTemplate('event')}
          >
            Event
          </button>
        </div>
      </div>
      
      <div className="mt-3">
        <button 
          className="text-sm text-gray-600 underline hover:text-gray-800"
          onClick={resetTemplate}
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}

export default TemplateSelector;