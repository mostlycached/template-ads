// src/components/BackgroundMusicSelector.js
import React, { useState, useRef, useEffect } from 'react';
import AdvancedMusicControls from './AdvancedMusicControls';

// Music library metadata (in a real app, this would come from your backend)
const MUSIC_LIBRARY = [
  {
    id: 'corporate1',
    name: 'Corporate Upbeat',
    artist: 'AudioStock',
    duration: 120,
    bpm: 110,
    mood: 'Inspiring',
    src: '/music/corporate-upbeat.mp3',
    preview: true
  },
  {
    id: 'corporate2',
    name: 'Corporate Inspirational',
    artist: 'AudioStock',
    duration: 90,
    bpm: 95,
    mood: 'Motivational',
    src: '/music/corporate-inspirational.mp3',
    preview: true
  },
  {
    id: 'ambient1',
    name: 'Ambient Calm',
    artist: 'AudioStock',
    duration: 180,
    bpm: 75,
    mood: 'Relaxing',
    src: '/music/ambient-calm.mp3',
    preview: true
  },
  {
    id: 'uplifting1',
    name: 'Uplifting Business',
    artist: 'AudioStock',
    duration: 110,
    bpm: 118,
    mood: 'Positive',
    src: '/music/uplifting-business.mp3',
    preview: true
  }
];

function BackgroundMusicSelector({ selectedMusic, onMusicSelect, videoDuration, settings, updateSettings }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [volume, setVolume] = useState(80);
  const audioRef = useRef(null);
  
  // Stop audio playback when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);
  
  // Handle music selection
  const handleSelectMusic = (trackId) => {
    onMusicSelect(trackId);
    
    // Stop current playback if switching tracks
    if (audioRef.current && currentTrack !== trackId) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };
  
  // Toggle audio preview
  const togglePlayback = (trackId) => {
    const track = MUSIC_LIBRARY.find(t => t.id === trackId);
    
    if (!track) return;
    
    // If we're already playing this track, pause it
    if (isPlaying && currentTrack === trackId) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    
    // If we're playing a different track, switch to this one
    if (currentTrack !== trackId) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      // Create a new audio element
      const audio = new Audio(track.src);
      audio.volume = volume / 100;
      
      // Set up the audio element
      audioRef.current = audio;
      setCurrentTrack(trackId);
      
      // Play the audio
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error('Error playing audio:', error);
        // In a real app, show a user-friendly error
      });
    } else {
      // Resume playing the current track
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  
  // Stop audio playback
  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };
  
  // Update volume
  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };
  
  // Calculate fit for video duration
  const getMusicFitLabel = (trackDuration) => {
    if (!videoDuration) return '';
    
    const ratio = trackDuration / videoDuration;
    
    if (ratio < 0.9) return '(too short)';
    if (ratio > 2) return '(much longer)';
    if (ratio > 1.5) return '(longer)';
    if (ratio >= 0.9 && ratio <= 1.1) return '(perfect fit)';
    
    return '';
  };
  
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Background Music</h3>
        
        {/* Volume Control */}
        <div className="flex items-center">
          <span className="text-gray-600 mr-2 text-sm">Volume:</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20"
          />
          <span className="text-xs text-gray-500 ml-1">{volume}%</span>
        </div>
      </div>
      
      {/* Music Library */}
      <div className="space-y-2 mb-4">
        {/* No music option */}
        <div 
          className={`p-3 border rounded-lg ${selectedMusic === 'none' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
        >
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="music"
                value="none"
                checked={selectedMusic === 'none'}
                onChange={() => handleSelectMusic('none')}
                className="mr-2"
              />
              <span className="font-medium">No Background Music</span>
            </label>
          </div>
        </div>
        
        {MUSIC_LIBRARY.map(track => (
          <div 
            key={track.id}
            className={`p-3 border rounded-lg ${selectedMusic === track.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
          >
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer flex-1">
                <input
                  type="radio"
                  name="music"
                  value={track.id}
                  checked={selectedMusic === track.id}
                  onChange={() => handleSelectMusic(track.id)}
                  className="mr-2"
                />
                <div>
                  <div className="font-medium">{track.name}</div>
                  <div className="text-xs text-gray-500">
                    {track.mood} • {track.bpm} BPM • {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')} 
                    <span className="ml-1 text-blue-600">{getMusicFitLabel(track.duration)}</span>
                  </div>
                </div>
              </label>
              
              {track.preview && (
                <button
                  onClick={() => togglePlayback(track.id)}
                  className={`p-2 rounded-full ${isPlaying && currentTrack === track.id ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                >
                  {isPlaying && currentTrack === track.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Advanced Music Settings */}
      {selectedMusic !== 'none' && (
        <AdvancedMusicControls 
          settings={settings || {}}
          updateSettings={updateSettings || (() => {})}
          selectedMusic={selectedMusic}
          musicLibrary={MUSIC_LIBRARY}
        />
      )}
      
      <div className="text-xs text-gray-500 mt-4">
        <p>All tracks are royalty-free and licensed for commercial use. Final render will use the full quality version.</p>
      </div>
    </div>
  );
}

export default BackgroundMusicSelector;