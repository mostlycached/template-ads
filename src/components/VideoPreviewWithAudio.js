// src/components/VideoPreviewWithAudio.js
import React, { useState, useEffect, useRef } from 'react';
import { playBackgroundMusic, stopBackgroundMusic } from './AudioHelper';

function VideoPreviewWithAudio({ settings }) {
  const [animationFrame, setAnimationFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const containerRef = useRef(null);
  
  // Extract settings with defaults
  const palette = settings.colorPalette || {};
  const backgroundColor = palette.background || '#f0f5fa';
  const accentColor = palette.accent || '#2b5c8e';
  const textColor = palette.text || '#232F3E';
  
  // Check for music settings
  const hasMusic = settings.backgroundMusic && settings.backgroundMusic !== 'none';
  
  // Animation loop
  useEffect(() => {
    if (!isPlaying) return;
    
    let rafId;
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      
      // Calculate current frame based on elapsed time and speed factor
      const fps = 30;
      const speedFactor = settings.animationSpeed === 'slow' ? 0.7 : 
                          settings.animationSpeed === 'fast' ? 1.5 : 1;
      const totalFrames = (settings.videoDuration || 10) * fps;
      
      const currentFrame = Math.min(
        Math.floor((elapsed * speedFactor) / (1000 / fps)), 
        totalFrames - 1
      );
      
      setAnimationFrame(currentFrame);
      
      // Loop animation when it reaches the end
      if (currentFrame >= totalFrames - 1) {
        startTimeRef.current = timestamp;
      } else {
        rafId = requestAnimationFrame(animate);
      }
    };
    
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isPlaying, settings.animationSpeed, settings.videoDuration]);
  
  // Calculate animation states based on current frame
  const fps = 30;
  const logoOpacity = Math.min(1, animationFrame / 15);
  
  // Quote block animation
  const quoteStartFrame = 30;
  const quoteBlockOpacity = Math.min(1, (animationFrame - quoteStartFrame) / 15);
  const quoteBlockScale = 0.95 + (0.05 * Math.min(1, (animationFrame - quoteStartFrame) / 15));
  
  // Quote text animation
  const quoteTextStartFrame = quoteStartFrame + 15;
  const typeSpeed = 0.6;
  const quoteText = settings.personQuote || 
    "We've seen incredible results since implementing this solution.";
  const charsToShow = Math.floor(Math.max(0, (animationFrame - quoteTextStartFrame) * typeSpeed));
  const visibleQuote = quoteText.substring(0, charsToShow);
  
  // Person details animation
  const speakerRevealFrame = (settings.speakerRevealTiming || 5) * fps;
  const personOpacity = Math.min(1, (animationFrame - speakerRevealFrame) / 20);
  const personTranslateY = Math.max(0, 20 - (animationFrame - speakerRevealFrame));
  
  // Toggle play/pause
  const togglePlayPause = () => {
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    
    // Handle audio if enabled
    if (audioEnabled && hasMusic) {
      if (newPlayingState) {
        playBackgroundMusic(
          settings.backgroundMusic, 
          (settings.musicVolume || 80) / 100
        );
      } else {
        stopBackgroundMusic();
      }
    }
  };
  
  // Restart animation
  const restartAnimation = () => {
    startTimeRef.current = null;
    setAnimationFrame(0);
    setIsPlaying(true);
    
    // Restart audio if enabled
    if (audioEnabled && hasMusic) {
      playBackgroundMusic(
        settings.backgroundMusic, 
        (settings.musicVolume || 80) / 100
      );
    }
  };
  
  // Toggle audio
  const toggleAudio = () => {
    const newAudioState = !audioEnabled;
    setAudioEnabled(newAudioState);
    
    if (newAudioState && isPlaying && hasMusic) {
      playBackgroundMusic(
        settings.backgroundMusic, 
        (settings.musicVolume || 80) / 100
      );
    } else {
      stopBackgroundMusic();
    }
  };
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopBackgroundMusic();
    };
  }, []);
  
  return (
    <div className="relative">
      {/* Video preview container */}
      <div 
        ref={containerRef}
        className="relative overflow-hidden rounded-lg"
        style={{
          backgroundColor,
          aspectRatio: '1/1',
          position: 'relative'
        }}
        onClick={togglePlayPause}
      >
        {/* Content wrapper */}
        <div className="absolute inset-0 p-5 flex flex-col">
          {/* Top logos section */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            opacity: logoOpacity,
            height: 60
          }}>
            {/* Company logo */}
            <div style={{ height: 50 }}>
              {settings.ownerAccountImage ? (
                <img src={settings.ownerAccountImage} alt={settings.companyName} style={{ height: '100%', objectFit: 'contain' }} />
              ) : (
                <div style={{ 
                  fontWeight: 'bold', 
                  fontSize: 20,
                  fontFamily: settings.primaryFont || 'Arial, sans-serif'
                }}>
                  {settings.companyName || 'Company'}
                </div>
              )}
            </div>
            
            {/* Partner logo */}
            <div>
              {settings.partnerImage ? (
                <img src={settings.partnerImage} alt={settings.partnerName} style={{ height: 50, objectFit: 'contain' }} />
              ) : (
                <div style={{ 
                  width: 40,
                  height: 40,
                  backgroundColor: accentColor,
                  color: 'white',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: settings.primaryFont || 'Arial, sans-serif'
                }}>
                  {settings.partnerName ? settings.partnerName.charAt(0) : 'P'}
                </div>
              )}
            </div>
          </div>
          
          {/* Main content */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 30
          }}>
            {/* Quote block */}
            <div style={{
              backgroundColor: accentColor,
              color: 'white',
              padding: 20,
              borderRadius: 8,
              marginBottom: 20,
              fontFamily: settings.secondaryFont || 'Georgia, serif',
              fontSize: 18,
              position: 'relative',
              opacity: quoteBlockOpacity,
              transform: `scale(${quoteBlockScale})`,
              lineHeight: 1.4
            }}>
              {/* Quote marks */}
              <div style={{
                position: 'absolute',
                top: -15,
                left: 15,
                fontSize: 50,
                color: 'rgba(255,255,255,0.3)'
              }}>"</div>
              
              {/* Quote text with typing animation */}
              <p style={{ margin: 0, paddingLeft: 5, paddingRight: 5 }}>
                {visibleQuote}
              </p>
            </div>
            
            {/* Person information */}
            <div style={{
              opacity: personOpacity,
              transform: `translateY(${personTranslateY}px)`,
              display: 'flex',
              alignItems: 'center',
              gap: 15
            }}>
              {/* Person image */}
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                overflow: 'hidden',
                border: `3px solid ${accentColor}`
              }}>
                {settings.personImage ? (
                  <img 
                    src={settings.personImage} 
                    alt={settings.personName} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    color: '#999'
                  }}>👤</div>
                )}
              </div>
              
              <div>
                <h3 style={{
                  color: accentColor,
                  fontFamily: settings.primaryFont || 'Arial, sans-serif',
                  fontSize: 16,
                  fontWeight: 'bold',
                  margin: 0
                }}>
                  {settings.personName || 'John Doe'}
                </h3>
                
                <p style={{
                  fontFamily: settings.secondaryFont || 'Georgia, serif',
                  margin: '4px 0 0 0',
                  fontSize: 14,
                  color: textColor
                }}>
                  {settings.personTitle || 'Position'}, 
                  <span style={{ color: accentColor }}> {settings.companyName || 'Company'}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video controls overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          {!isPlaying && (
            <button
              className="bg-black bg-opacity-60 text-white rounded-full w-16 h-16 flex items-center justify-center"
              onClick={togglePlayPause}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {/* Video progress bar */}
      <div className="mt-2 bg-gray-200 rounded-full h-1.5 overflow-hidden">
        <div 
          className="bg-blue-600 h-full" 
          style={{ width: `${(animationFrame / ((settings.videoDuration || 10) * fps)) * 100}%` }}
        ></div>
      </div>
      
      {/* Video controls */}
      <div className="flex items-center justify-between mt-2">
        <button
          onClick={togglePlayPause}
          className="text-gray-700 hover:text-gray-900"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
        
        <div className="text-xs text-gray-500">
          {Math.floor(animationFrame / fps)}s / {settings.videoDuration || 10}s
        </div>
        
        <button
          onClick={restartAnimation}
          className="text-gray-700 hover:text-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
          </svg>
        </button>
      </div>
      
      {/* Audio button */}
      <div className="mt-3 flex justify-between items-center">
        <button
          onClick={toggleAudio}
          className={`px-3 py-1 rounded text-sm flex items-center gap-1 ${
            audioEnabled 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {audioEnabled ? (
            <>
              <span>🔊</span> Audio On
            </>
          ) : (
            <>
              <span>🔇</span> Audio Off
            </>
          )}
        </button>
        
        <div className="text-xs text-gray-500">
          {audioEnabled && hasMusic ? "Music will play with animation" : ""}
        </div>
      </div>
      
      {/* Video rendering status indicator */}
      <div className="mt-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-xs text-gray-600">Preview Mode</span>
        </div>
        
        <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
          Render Video
        </button>
      </div>
    </div>
  );
}

export default VideoPreviewWithAudio;