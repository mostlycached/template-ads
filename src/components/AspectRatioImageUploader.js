// src/components/AspectRatioImageUploader.js
import React, { useState } from 'react';
import { ASPECT_RATIOS } from './AspectRatioSelector';

function AspectRatioImageUploader({ 
  label, 
  imageType, 
  currentImage, 
  aspectRatio, 
  handleImageUpload, 
  handleRemoveImage 
}) {
  const [showCropper, setShowCropper] = useState(false);
  const [cropWarning, setCropWarning] = useState(false);
  
  // Function to check if an image matches the required aspect ratio
  const checkImageAspectRatio = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const imageRatio = img.width / img.height;
        const targetRatio = ASPECT_RATIOS[aspectRatio].width / ASPECT_RATIOS[aspectRatio].height;
        
        // Allow some tolerance (5%)
        const tolerance = 0.05;
        const isWithinTolerance = Math.abs(imageRatio - targetRatio) <= tolerance;
        
        resolve({
          isCorrectRatio: isWithinTolerance,
          width: img.width,
          height: img.height,
          targetRatio
        });
      };
      img.src = URL.createObjectURL(file);
    });
  };
  
  // Override the standard image upload to check aspect ratio
  const handleImageUploadWithCheck = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const ratioCheck = await checkImageAspectRatio(file);
    
    if (ratioCheck.isCorrectRatio) {
      // Image has correct ratio, proceed
      setCropWarning(false);
      handleImageUpload(e, imageType);
    } else {
      // Show warning about incorrect aspect ratio
      setCropWarning(true);
      // You could either reject the image or offer to crop it
      // For now, we'll just show a warning and upload anyway
      handleImageUpload(e, imageType);
    }
  };
  
  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium">{label}</label>
      <div className="relative">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUploadWithCheck} 
          id={`${imageType}-upload`}
          className="absolute w-px h-px opacity-0"
        />
        <label 
          htmlFor={`${imageType}-upload`} 
          className="flex items-center gap-2 p-2 border border-gray-300 rounded cursor-pointer text-gray-600"
        >
          <span>⬆️</span> Upload Image
        </label>
      </div>
      
      {cropWarning && (
        <div className="mt-2 text-yellow-600 text-sm">
          Warning: This image does not match the {ASPECT_RATIOS[aspectRatio].label} aspect ratio.
          Results may be distorted.
        </div>
      )}
      
      {currentImage && (
        <div className="mt-2">
          <div className="relative">
            <div className="relative" style={{
              width: '100%',
              paddingBottom: `${(ASPECT_RATIOS[aspectRatio].height / ASPECT_RATIOS[aspectRatio].width) * 100}%`,
              overflow: 'hidden'
            }}>
              <img 
                src={currentImage} 
                alt={`${label} Preview`} 
                className="absolute top-0 left-0 w-full h-full object-cover border border-gray-300 rounded"
              />
            </div>
            <button 
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              onClick={() => handleRemoveImage(imageType)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AspectRatioImageUploader;