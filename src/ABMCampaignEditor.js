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
      // Preserve certain settings when switching templates
      const companyName = templateSettings.companyName;
      const aspectRatio = templateSettings.aspectRatio;
      const ownerAccountImage = templateSettings.ownerAccountImage;
      const colorPalette = templateSettings.colorPalette || DEFAULT_COLOR_PALETTE;
      const primaryFont = templateSettings.primaryFont;
      const secondaryFont = templateSettings.secondaryFont;
      
      setCurrentTemplate(templateName);
      
      const newSettings = {
        ...templatePresets[templateName],
        companyName,
        aspectRatio,
        ownerAccountImage,
        primaryFont,
        secondaryFont
      };
      
      // Ensure color palette exists in the new template
      if (!newSettings.colorPalette) {
        newSettings.colorPalette = colorPalette;
      }
      
      setTemplateSettings(newSettings);
    }
  }

  function resetTemplate() {
    // Preserve company name and logo when resetting
    const companyName = templateSettings.companyName;
    const ownerAccountImage = templateSettings.ownerAccountImage;
    
    const newSettings = {
      ...templatePresets[currentTemplate],
      companyName,
      ownerAccountImage
    };
    
    // Ensure color palette exists after reset
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

  // Effect to ensure color palette always exists
  useEffect(() => {
    if (!templateSettings.colorPalette) {
      updateSettings('colorPalette', DEFAULT_COLOR_PALETTE);
    }
  }, [templateSettings]);

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