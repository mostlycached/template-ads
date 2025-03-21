// src/ABMCampaignEditor.js (Updated)
import React, { useState, useEffect } from 'react';
import EditorPanel from './components/EditorPanel';
import PreviewPanel from './components/PreviewPanel';
import templatePresets from './components/templatePresets';
import { ASPECT_RATIOS } from './components/AspectRatioSelector';
import RemotionRenderer from './components/RemotionRenderer';
import B2BTemplate from './components/B2BTemplate';
import B2BSettings from './components/B2BSettings';
import { b2bTemplatePresets } from './components/B2BTemplatePresets';

// Default color palette to use if template doesn't have one
const DEFAULT_COLOR_PALETTE = {
  primary: '#3758f9',
  secondary: '#5AC8FA',
  background: '#ffffff',
  text: '#333333',
  button: '#3758f9',
  accent: '#FF2D55'
};

function ABMCampaignEditor() {
  // State
  const [currentTemplate, setCurrentTemplate] = useState('standard');
  const [templateSettings, setTemplateSettings] = useState(() => {
    // Initialize with default preset
    const initialSettings = { ...templatePresets.standard };
    
    // Ensure color palette exists
    if (!initialSettings.colorPalette) {
      initialSettings.colorPalette = DEFAULT_COLOR_PALETTE;
    }
    
    return initialSettings;
  });
  
  // State for video rendering modal
  const [showRenderModal, setShowRenderModal] = useState(false);

  // Functions
  function updateSettings(key, value) {
    setTemplateSettings(prevSettings => ({
      ...prevSettings,
      [key]: value
    }));
  }

  function switchTemplate(templateName) {
    if (templateName === 'b2bTemplate') {
      // Get the default B2B template preset (product demo by default)
      const newSettings = { ...b2bTemplatePresets.productDemo };
      
      // Apply common settings
      const commonSettings = {
        companyName: templateSettings.companyName,
        aspectRatio: templateSettings.aspectRatio,
        ownerAccountImage: templateSettings.ownerAccountImage,
        primaryFont: templateSettings.primaryFont,
        secondaryFont: templateSettings.secondaryFont
      };
      
      // Apply common settings
      Object.keys(commonSettings).forEach(key => {
        if (commonSettings[key] !== undefined) {
          newSettings[key] = commonSettings[key];
        }
      });
      
      setCurrentTemplate(templateName);
      setTemplateSettings(newSettings);
    } else if (templatePresets[templateName]) {
      // Rest of the existing code for other templates
      // ...
      // Save common settings to preserve
      const commonSettings = {
        companyName: templateSettings.companyName,
        aspectRatio: templateSettings.aspectRatio,
        ownerAccountImage: templateSettings.ownerAccountImage,
        primaryFont: templateSettings.primaryFont,
        secondaryFont: templateSettings.secondaryFont
      };
      
      // Start with a fresh copy of the template preset
      const newSettings = { ...templatePresets[templateName] };   
      // Apply common settings
      Object.keys(commonSettings).forEach(key => {
        if (commonSettings[key] !== undefined) {
          newSettings[key] = commonSettings[key];
        }
      });
      
      // Ensure color palette exists
      if (!newSettings.colorPalette) {
        newSettings.colorPalette = DEFAULT_COLOR_PALETTE;
      }
      
      setCurrentTemplate(templateName);
      setTemplateSettings(newSettings);
    }
  }

  function resetTemplate() {    
    // Preserve only essential settings
    const companyName = templateSettings.companyName;
    const ownerAccountImage = templateSettings.ownerAccountImage;
    
    // Get a fresh copy of the current template preset
    const newSettings = { ...templatePresets[currentTemplate] };
    
    // Apply preserved settings
    newSettings.companyName = companyName;
    newSettings.ownerAccountImage = ownerAccountImage;
    
    // Ensure color palette exists
    if (!newSettings.colorPalette) {
      newSettings.colorPalette = DEFAULT_COLOR_PALETTE;
    }
    
    setTemplateSettings(newSettings);
  }

  function handleImageUpload(e, imageType) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateSettings(imageType, event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleInputChange(e, key) {
    updateSettings(key, e.target.value);
  }

  function handleRemoveImage(imageType) {
    updateSettings(imageType, null);
  }

  function processTemplate(text) {
    if (!text) return '';
    return text.replace(/{{companyName}}/g, templateSettings.companyName || 'Company');
  }
  
  // Handle video rendering
  function handleRenderVideo() {
    setShowRenderModal(true);
  }
  
  function handleRenderComplete(videoUrl) {
    // In a real app, you might want to save the video URL to the template settings
    updateSettings('renderedVideoUrl', videoUrl);
    
    // Don't auto-close the modal, let the user download the video first
  }

  // Get current aspect ratio details
  const currentRatio = ASPECT_RATIOS[templateSettings.aspectRatio || 'landscape'];

  // Effect to update UI when template changes
  useEffect(() => {
    console.log(`Template changed to: ${currentTemplate}`);
    
    // If switching to video template, check if we need to override aspect ratio
    if (currentTemplate === 'videoTestimonial' && templateSettings.aspectRatio !== 'square') {
      updateSettings('aspectRatio', 'square');
    }
  }, [currentTemplate, templateSettings]);
  
  // Check if current template is a video template
  const isVideoTemplate = currentTemplate === 'videoTestimonial';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h1 className="p-5 text-xl font-bold border-b border-gray-200">New ABM Campaign</h1>
      <div className="flex min-h-96">
        <EditorPanel 
          settings={templateSettings}
          currentTemplate={currentTemplate}
          switchTemplate={switchTemplate}
          resetTemplate={resetTemplate}
          handleInputChange={handleInputChange}
          handleImageUpload={handleImageUpload}
          handleRemoveImage={handleRemoveImage}
          updateSettings={updateSettings}
        />
        <PreviewPanel 
          settings={templateSettings}
          currentTemplate={currentTemplate}
          processTemplate={processTemplate}
          aspectRatio={currentRatio}
        />
      </div>
      
      {/* Video Rendering Modal */}
      {showRenderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Render Video</h2>
              <button 
                onClick={() => setShowRenderModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <RemotionRenderer 
              settings={templateSettings}
              onRenderComplete={handleRenderComplete}
            />
          </div>
        </div>
      )}
      
      {/* Render button for video templates */}
      {isVideoTemplate && (
        <div className="p-4 flex justify-end border-t border-gray-200">
          <button
            onClick={handleRenderVideo}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center"
          >
            <span className="mr-2">🎬</span>
            Render Video
          </button>
        </div>
      )}
    </div>
  );
}

export default ABMCampaignEditor;