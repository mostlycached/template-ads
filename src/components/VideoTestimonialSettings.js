// src/components/VideoTestimonialSettings.js
import React, { useState } from 'react';
import TestimonialSettings from './TestimonialSettings';
import BackgroundMusicSelector from './BackgroundMusicSelector';

function VideoTestimonialSettings({ settings, handleInputChange, handleImageUpload, handleRemoveImage, updateSettings }) {
  // Inherit existing testimonial settings UI
  // But extend with video-specific options
  
  // Animation speed options
  const speeds = [
    { label: 'Slow', value: 'slow' },
    { label: 'Medium', value: 'medium' },
    { label: 'Fast', value: 'fast' }
  ];
  
  // Video duration options (in seconds)
  const durations = [
    { label: '5 seconds', value: 5 },
    { label: '10 seconds', value: 10 },
    { label: '15 seconds', value: 15 },
    { label: '20 seconds', value: 20 },
    { label: '30 seconds', value: 30 }
  ];
  
  // Quote animation styles
  const animationStyles = [
    { label: 'Typing', value: 'typing' },
    { label: 'Fade In', value: 'fadein' },
    { label: 'Word by Word', value: 'wordbyword' }
  ];
  
  return (
    <div>
      {/* Inherit standard testimonial settings */}
      <TestimonialSettings 
        settings={settings}
        handleInputChange={handleInputChange}
        handleImageUpload={handleImageUpload}
        handleRemoveImage={handleRemoveImage}
        updateSettings={updateSettings}
      />
      
      {/* Video-specific settings section */}
      <div className="mt-8 border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium mb-4">Video Animation Settings</h3>
        
        {/* Background Music */}
        <BackgroundMusicSelector
          selectedMusic={settings.backgroundMusic || 'none'}
          onMusicSelect={(musicId) => updateSettings('backgroundMusic', musicId)}
          videoDuration={settings.videoDuration || 10}
          settings={settings}
          updateSettings={updateSettings}
        />
        
        {/* Animation Speed */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">Animation Speed</label>
          <select
            value={settings.animationSpeed || 'medium'}
            onChange={(e) => updateSettings('animationSpeed', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {speeds.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="text-gray-500 text-sm mt-1">
            Controls how quickly animations play in your video.
          </p>
        </div>
        
        {/* Video Duration */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">Video Duration</label>
          <select
            value={settings.videoDuration || 10}
            onChange={(e) => updateSettings('videoDuration', parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {durations.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="text-gray-500 text-sm mt-1">
            Total length of the video in seconds.
          </p>
        </div>
        
        {/* Quote Animation Style */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">Quote Animation Style</label>
          <select
            value={settings.quoteAnimationStyle || 'typing'}
            onChange={(e) => updateSettings('quoteAnimationStyle', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {animationStyles.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="text-gray-500 text-sm mt-1">
            How the testimonial quote appears in the video.
          </p>
        </div>
        
        {/* Speaker Reveal Timing */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">Speaker Reveal Timing</label>
          <div className="flex items-center">
            <input
              type="range"
              min="1"
              max={settings.videoDuration || 10}
              value={settings.speakerRevealTiming || 5}
              onChange={(e) => updateSettings('speakerRevealTiming', parseInt(e.target.value))}
              className="w-full mr-3"
            />
            <span className="text-sm font-mono">
              {settings.speakerRevealTiming || 5}s
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            When the speaker details appear (in seconds from start).
          </p>
        </div>
        
        {/* Video Output Settings */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="font-medium mb-3">Video Output Settings</h4>
          
          {/* Video Format */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">Video Format</label>
            <div className="flex space-x-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="videoFormat"
                  value="mp4"
                  checked={settings.videoFormat === 'mp4' || !settings.videoFormat}
                  onChange={() => updateSettings('videoFormat', 'mp4')}
                  className="mr-2"
                />
                MP4
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="videoFormat"
                  value="webm"
                  checked={settings.videoFormat === 'webm'}
                  onChange={() => updateSettings('videoFormat', 'webm')}
                  className="mr-2"
                />
                WebM
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="videoFormat"
                  value="gif"
                  checked={settings.videoFormat === 'gif'}
                  onChange={() => updateSettings('videoFormat', 'gif')}
                  className="mr-2"
                />
                GIF
              </label>
            </div>
          </div>
          
          {/* Video Quality */}
          <div className="mb-3">
            <label className="block mb-2 font-medium">Video Quality</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                className={`p-2 border rounded text-center ${
                  (settings.videoQuality === 'low' || !settings.videoQuality) ? 
                  'border-blue-500 bg-blue-50 text-blue-700' : 
                  'border-gray-300'
                }`}
                onClick={() => updateSettings('videoQuality', 'low')}
              >
                Low (Fast)
              </button>
              <button
                type="button"
                className={`p-2 border rounded text-center ${
                  settings.videoQuality === 'medium' ? 
                  'border-blue-500 bg-blue-50 text-blue-700' : 
                  'border-gray-300'
                }`}
                onClick={() => updateSettings('videoQuality', 'medium')}
              >
                Medium
              </button>
              <button
                type="button"
                className={`p-2 border rounded text-center ${
                  settings.videoQuality === 'high' ? 
                  'border-blue-500 bg-blue-50 text-blue-700' : 
                  'border-gray-300'
                }`}
                onClick={() => updateSettings('videoQuality', 'high')}
              >
                High (Slow)
              </button>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm mt-3">
            Higher quality results in larger file sizes and longer rendering times.
          </p>
        </div>
        
        {/* Rendering note */}
        <div className="mt-4 bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm text-yellow-800">
          <p className="font-medium">Video Rendering</p>
          <p className="mt-1">Videos are rendered on our servers and may take a few minutes to complete depending on length and quality settings.</p>
        </div>
      </div>
    </div>
  );
}

export default VideoTestimonialSettings;