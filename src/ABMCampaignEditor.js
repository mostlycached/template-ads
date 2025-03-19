import React, { useState } from 'react';
import EditorPanel from './components/EditorPanel';
import PreviewPanel from './components/PreviewPanel';
import templatePresets from './components/templatePresets';

function ABMCampaignEditor() {
  // State
  const [currentTemplate, setCurrentTemplate] = useState('standard');
  const [templateSettings, setTemplateSettings] = useState(templatePresets.standard);

  // Functions
  function updateSettings(key, value) {
    setTemplateSettings(prevSettings => ({
      ...prevSettings,
      [key]: value
    }));
  }

  function switchTemplate(templateName) {
    if (templatePresets[templateName]) {
      const companyName = templateSettings.companyName;
      setCurrentTemplate(templateName);
      setTemplateSettings({
        ...templatePresets[templateName],
        companyName
      });
    }
  }

  function resetTemplate() {
    const companyName = templateSettings.companyName;
    setTemplateSettings({
      ...templatePresets[currentTemplate],
      companyName
    });
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
        />
      </div>
    </div>
  );
}

export default ABMCampaignEditor;