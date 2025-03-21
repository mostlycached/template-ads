// src/components/EditorPanel.js (Updated)
import React, { useState } from 'react';
import StandardSettings from './StandardSettings';
import TestimonialSettings from './TestimonialSettings';
import EventSettings from './EventSettings';
import VideoTestimonialSettings from './VideoTestimonialSettings';
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
  
  // Determine if this is a video template
  const isVideoTemplate = currentTemplate === 'videoTestimonial';
  
  return (
    <div className="flex-1 p-5 border-r border-gray-200 overflow-y-auto flex flex-col">
      {/* Template Selection */}
      <TemplateSelector 
        currentTemplate={currentTemplate}
        switchTemplate={switchTemplate}
        resetTemplate={resetTemplate}
      />
      
      {/* Tab Navigation - Hide style tab for video templates */}
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
          
          {/* Only show Style tab for non-video templates */}
          {!isVideoTemplate && (
            <button 
              className={`py-2 px-4 font-medium ${activeTab === 'style' 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('style')}
            >
              Style & Layout
            </button>
          )}
          
          {/* Add Video Settings tab for video templates */}
          {isVideoTemplate && (
            <button 
              className={`py-2 px-4 font-medium ${activeTab === 'videoSettings' 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('videoSettings')}
            >
              Animation Settings
            </button>
          )}
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
          
          {currentTemplate === 'videoTestimonial' && (
            <VideoTestimonialSettings 
              settings={settings}
              handleInputChange={handleInputChange}
              handleImageUpload={handleImageUpload}
              handleRemoveImage={handleRemoveImage}
              updateSettings={updateSettings}
            />
          )}
        </div>
      )}
      
      {/* Style Tab - Only for non-video templates */}
      {activeTab === 'style' && !isVideoTemplate && (
        <TemplateStyleManager 
          settings={settings}
          updateSettings={updateSettings}
        />
      )}
      
      {/* Video Settings Tab - Only for video templates */}
      {activeTab === 'videoSettings' && isVideoTemplate && (
        <div className="mb-8 border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-medium mb-4">Video Rendering Settings</h3>
          
          <div className="mb-4">
            <label className="block mb-2 font-medium">Output Resolution</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                className={`p-2 border rounded text-center ${
                  (settings.videoResolution === '720p' || !settings.videoResolution) ? 
                  'border-blue-500 bg-blue-50 text-blue-700' : 
                  'border-gray-300'
                }`}
                onClick={() => updateSettings('videoResolution', '720p')}
              >
                720p
              </button>
              <button
                type="button"
                className={`p-2 border rounded text-center ${
                  settings.videoResolution === '1080p' ? 
                  'border-blue-500 bg-blue-50 text-blue-700' : 
                  'border-gray-300'
                }`}
                onClick={() => updateSettings('videoResolution', '1080p')}
              >
                1080p
              </button>
              <button
                type="button"
                className={`p-2 border rounded text-center ${
                  settings.videoResolution === '4k' ? 
                  'border-blue-500 bg-blue-50 text-blue-700' : 
                  'border-gray-300'
                }`}
                onClick={() => updateSettings('videoResolution', '4k')}
              >
                4K
              </button>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 font-medium">Add Background Music</label>
            <div className="flex items-center justify-between">
              <select
                value={settings.backgroundMusic || 'none'}
                onChange={(e) => updateSettings('backgroundMusic', e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded mr-2"
              >
                <option value="none">No Music</option>
                <option value="corporate1">Corporate Upbeat</option>
                <option value="corporate2">Corporate Inspirational</option>
                <option value="ambient1">Ambient Calm</option>
                <option value="ambient2">Ambient Technology</option>
              </select>
              
              <button
                type="button"
                className="p-2 border border-gray-300 rounded text-gray-500"
                title="Preview Music"
              >
                🔊
              </button>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 font-medium">Advanced Options</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.includeSubtitles || false}
                  onChange={(e) => updateSettings('includeSubtitles', e.target.checked)}
                  className="mr-2"
                />
                Auto-generate subtitles
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.loopVideo || false}
                  onChange={(e) => updateSettings('loopVideo', e.target.checked)}
                  className="mr-2"
                />
                Enable seamless looping
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.addWatermark || false}
                  onChange={(e) => updateSettings('addWatermark', e.target.checked)}
                  className="mr-2"
                />
                Add company logo watermark
              </label>
            </div>
          </div>
          
          <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg">
            <h4 className="font-medium text-indigo-800 mb-2 flex items-center">
              <span className="mr-2">💡</span> Video Template Tips
            </h4>
            <ul className="text-sm text-indigo-700 space-y-1 pl-6 list-disc">
              <li>Keep testimonial quotes concise for better readability</li>
              <li>High-contrast colors work best for text visibility</li>
              <li>Square format (1:1) is optimal for most social platforms</li>
              <li>Videos under 15 seconds have higher engagement rates</li>
            </ul>
          </div>
        </div>
      )}
      
      <div className="mt-auto pt-5">
        <button className="bg-gray-900 text-white px-5 py-2 rounded">
          {isVideoTemplate ? 'Render Video' : 'Add New Creative'}
        </button>
      </div>
    </div>
  );
}

export default EditorPanel;