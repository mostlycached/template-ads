// src/components/EditorPanel.js
import React, { useState } from 'react';
import StandardSettings from './StandardSettings';
import TestimonialSettings from './TestimonialSettings';
import EventSettings from './EventSettings';
import TemplateSelector from './TemplateSelector';
import { AspectRatioSelector } from './AspectRatioSelector';
import TemplateStyleManager from './TemplateStyleManager';

function EditorPanel({ 
  settings, 
  currentTemplate, 
  switchTemplate, 
  resetTemplate, 
  handleInputChange, 
  handleImageUpload, 
  handleRemoveImage, 
  updateSettings 
}) {
  const [activeTab, setActiveTab] = useState('content'); // 'content', 'style'
  
  return (
    <div className="flex-1 p-5 border-r border-gray-200 overflow-y-auto flex flex-col">
      {/* Template Selection */}
      <TemplateSelector 
        currentTemplate={currentTemplate}
        switchTemplate={switchTemplate}
        resetTemplate={resetTemplate}
      />
      
      {/* Tab Navigation */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex">
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'content' 
              ? 'border-b-2 border-blue-500 text-blue-600' 
              : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('content')}
          >
            Content
          </button>
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'style' 
              ? 'border-b-2 border-blue-500 text-blue-600' 
              : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('style')}
          >
            Style & Layout
          </button>
        </div>
      </div>
      
      {/* Content Tab */}
      {activeTab === 'content' && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-5">Creative Content</h2>
          
          {/* Company Name - show for all templates */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">Company Name</label>
            <input 
              type="text" 
              value={settings.companyName || ''} 
              onChange={(e) => handleInputChange(e, 'companyName')}
              placeholder="Enter company name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          {/* Company Logo - show for all templates */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">Company Logo</label>
            <div className="relative">
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => handleImageUpload(e, 'ownerAccountImage')} 
                id="owner-image-upload"
                className="absolute w-px h-px opacity-0"
              />
              <label htmlFor="owner-image-upload" className="flex items-center gap-2 p-2 border border-gray-300 rounded cursor-pointer text-gray-600">
                <span>⬆️</span> Upload Company Logo
              </label>
            </div>
            
            {settings.ownerAccountImage && (
              <div className="mt-2">
                <div className="relative">
                  <img 
                    src={settings.ownerAccountImage} 
                    alt="Logo Preview" 
                    className="h-16 rounded border border-gray-300"
                  />
                  <button 
                    className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => handleRemoveImage('ownerAccountImage')}
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Template-specific content settings */}
          {currentTemplate === 'testimonial' && (
            <TestimonialSettings 
              settings={settings}
              handleInputChange={handleInputChange}
              handleImageUpload={handleImageUpload}
              handleRemoveImage={handleRemoveImage}
              updateSettings={updateSettings}
            />
          )}
          
          {currentTemplate === 'event' && (
            <EventSettings 
              settings={settings}
              handleInputChange={handleInputChange}
              handleImageUpload={handleImageUpload}
              handleRemoveImage={handleRemoveImage}
              updateSettings={updateSettings}
            />
          )}
          
          {currentTemplate === 'standard' && (
            <StandardSettings 
              settings={settings}
              handleInputChange={handleInputChange}
              handleImageUpload={handleImageUpload}
              handleRemoveImage={handleRemoveImage}
              updateSettings={updateSettings}
            />
          )}
        </div>
      )}
      
      {/* Style Tab */}
      {activeTab === 'style' && (
        <TemplateStyleManager 
          settings={settings}
          updateSettings={updateSettings}
        />
      )}
      
      <div className="mt-auto pt-5">
        <button className="bg-gray-900 text-white px-5 py-2 rounded">Add New Creative</button>
      </div>
    </div>
  );
}

export default EditorPanel;