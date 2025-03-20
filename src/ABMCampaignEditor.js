// src/ABMCampaignEditor.js
import React, { useState, useEffect } from 'react';
import EditorPanel from './components/EditorPanel';
import PreviewPanel from './components/PreviewPanel';
import templatePresets from './components/templatePresets';
import { ASPECT_RATIOS } from './components/AspectRatioSelector';

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

  // Functions
  function updateSettings(key, value) {
    setTemplateSettings(prevSettings => ({
      ...prevSettings,
      [key]: value
    }));
  }

  function switchTemplate(templateName) {
    if (templatePresets[templateName]) {
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

  // Get current aspect ratio details
  const currentRatio = ASPECT_RATIOS[templateSettings.aspectRatio || 'landscape'];

  // Effect to update UI when template changes
  useEffect(() => {
    console.log(`Template changed to: ${currentTemplate}`);
  }, [currentTemplate, templateSettings]);

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
    </div>
  );
}

export default ABMCampaignEditor;