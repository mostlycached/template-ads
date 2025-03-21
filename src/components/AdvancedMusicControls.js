// src/components/AdvancedMusicControls.js
import React, { useState } from 'react';

function AdvancedMusicControls({ 
  settings, 
  updateSettings, 
  selectedMusic, 
  musicLibrary 
}) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  // Find the selected track from the library
  const selectedTrack = musicLibrary.find(track => track.id === selectedMusic);
  
  // Default settings
  const musicVolume = settings.musicVolume ?? 80;
  const fadeIn = settings.musicFadeIn ?? true;
  const fadeOut = settings.musicFadeOut ?? true;
  const fadeInDuration = settings.musicFadeInDuration ?? 1; // seconds
  const fadeOutDuration = settings.musicFadeOutDuration ?? 2; // seconds
  const startTime = settings.musicStartTime ?? 0; // seconds
  
  // Handle volume change
  const handleVolumeChange = (e) => {
    updateSettings('musicVolume', parseInt(e.target.value));
  };
  
  // Toggle fade in/out
  const toggleFadeIn = () => {
    updateSettings('musicFadeIn', !fadeIn);
  };
  
  const toggleFadeOut = () => {
    updateSettings('musicFadeOut', !fadeOut);
  };
  
  // Update fade durations
  const handleFadeInDurationChange = (e) => {
    updateSettings('musicFadeInDuration', parseFloat(e.target.value));
  };
  
  const handleFadeOutDurationChange = (e) => {
    updateSettings('musicFadeOutDuration', parseFloat(e.target.value));
  };
  
  // Update start time
  const handleStartTimeChange = (e) => {
    updateSettings('musicStartTime', parseFloat(e.target.value));
  };
  
  if (!selectedTrack) return null;
  
  return (
    <div className="mt-4 bg-gray-50 rounded-lg p-3 border border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-sm font-medium">Music Settings</h4>
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-xs text-blue-600 hover:text-blue-800"
        >
          {showAdvanced ? 'Hide Advanced' : 'Show Advanced'}
        </button>
      </div>
      
      {/* Basic Controls */}
      <div className="mb-3">
        <label className="block text-xs mb-1">Volume</label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="100"
            value={musicVolume}
            onChange={handleVolumeChange}
            className="flex-1"
          />
          <span className="text-xs text-gray-600 w-8 text-right">{musicVolume}%</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 mb-3">
        <label className="flex items-center gap-1 text-sm">
          <input
            type="checkbox"
            checked={fadeIn}
            onChange={toggleFadeIn}
          />
          Fade In
        </label>
        
        <label className="flex items-center gap-1 text-sm">
          <input
            type="checkbox"
            checked={fadeOut}
            onChange={toggleFadeOut}
          />
          Fade Out
        </label>
      </div>
      
      {/* Advanced Controls */}
      {showAdvanced && (
        <div className="pt-3 border-t border-gray-200 space-y-3">
          {fadeIn && (
            <div>
              <label className="block text-xs mb-1">Fade In Duration (seconds)</label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.5"
                  value={fadeInDuration}
                  onChange={handleFadeInDurationChange}
                  className="flex-1"
                />
                <span className="text-xs text-gray-600 w-8 text-right">{fadeInDuration}s</span>
              </div>
            </div>
          )}
          
          {fadeOut && (
            <div>
              <label className="block text-xs mb-1">Fade Out Duration (seconds)</label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.5"
                  value={fadeOutDuration}
                  onChange={handleFadeOutDurationChange}
                  className="flex-1"
                />
                <span className="text-xs text-gray-600 w-8 text-right">{fadeOutDuration}s</span>
              </div>
            </div>
          )}
          
          <div>
            <label className="block text-xs mb-1">Start Time (seconds)</label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max={Math.min(30, selectedTrack.duration - 10)}
                step="1"
                value={startTime}
                onChange={handleStartTimeChange}
                className="flex-1"
              />
              <span className="text-xs text-gray-600 w-8 text-right">{startTime}s</span>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 pt-2">
            <p>Adjust these settings to fine-tune how the music plays in your video. For example, start later in the track to skip intros.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdvancedMusicControls;