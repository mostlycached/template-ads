// src/components/RemotionRenderer.js
import React, { useState, useEffect } from 'react';

/**
 * This component handles the server-side rendering process for Remotion videos.
 * In a real production environment, this would connect to a backend service 
 * that renders videos using Remotion's server-side rendering capabilities.
 */
function RemotionRenderer({ settings, onRenderComplete }) {
  const [renderStatus, setRenderStatus] = useState('idle'); // idle, preparing, rendering, completed, failed
  const [progress, setProgress] = useState(0);
  const [renderTime, setRenderTime] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState(null);
  
  // Simulate the rendering process
  const startRendering = () => {
    setRenderStatus('preparing');
    setProgress(0);
    setError(null);
    setVideoUrl(null);
    
    // Simulate preparation phase
    setTimeout(() => {
      setRenderStatus('rendering');
      
      // Simulate rendering progress updates
      const duration = settings.videoDuration || 10;
      const totalTime = duration * 1000; // Simulate longer rendering time for longer videos
      const interval = 100;
      let elapsed = 0;
      
      const progressTimer = setInterval(() => {
        elapsed += interval;
        const newProgress = Math.min(98, (elapsed / totalTime) * 100);
        setProgress(newProgress);
        
        if (newProgress >= 98) {
          clearInterval(progressTimer);
          
          // Simulate finalization phase
          setTimeout(() => {
            setProgress(100);
            setRenderStatus('completed');
            setRenderTime(totalTime / 1000);
            
            // Generate a fake video URL (in a real app, this would be a URL to the rendered video)
            const fakeUrl = `https://example.com/videos/testimonial-${Date.now()}.mp4`;
            setVideoUrl(fakeUrl);
            
            if (onRenderComplete) {
              onRenderComplete(fakeUrl);
            }
          }, 1500);
        }
      }, interval);
    }, 1000);
  };
  
  // Cancel rendering
  const cancelRendering = () => {
    if (renderStatus === 'rendering' || renderStatus === 'preparing') {
      setRenderStatus('idle');
      setProgress(0);
      setError('Rendering cancelled by user');
    }
  };
  
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="font-medium mb-4">Video Rendering</h3>
      
      {renderStatus === 'idle' && (
        <div>
          <p className="text-sm text-gray-600 mb-4">
            Ready to render your video testimonial. This process may take a few minutes 
            depending on the length and quality settings.
          </p>
          
          <button
            onClick={startRendering}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Start Rendering
          </button>
        </div>
      )}
      
      {(renderStatus === 'preparing' || renderStatus === 'rendering') && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium text-indigo-700">
              {renderStatus === 'preparing' ? 'Preparing Assets...' : 'Rendering Video...'}
            </div>
            <div className="text-sm text-gray-600">
              {Math.round(progress)}%
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">
              This may take a few minutes
            </div>
            
            <button
              onClick={cancelRendering}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      
      {renderStatus === 'completed' && (
        <div>
          <div className="flex items-center mb-3 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Video Rendered Successfully!</span>
          </div>
          
          <div className="p-3 bg-gray-50 rounded-lg mb-4">
            <div className="text-sm mb-1">
              <span className="font-medium">Render time:</span> {renderTime} seconds
            </div>
            <div className="text-sm">
              <span className="font-medium">Format:</span> {settings.videoFormat || 'MP4'}
            </div>
          </div>
          
          <div className="flex gap-2">
            <a
              href={videoUrl}
              download={`testimonial-${Date.now()}.${settings.videoFormat || 'mp4'}`}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Video
            </a>
            
            <button
              onClick={() => setRenderStatus('idle')}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50"
            >
              Render New Video
            </button>
          </div>
        </div>
      )}
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="border-t border-gray-200 pt-3 mt-4">
        <h4 className="text-sm font-medium mb-2">Video Configuration</h4>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div>
            <span className="text-gray-500">Resolution:</span> {settings.videoResolution || '1080p'}
          </div>
          <div>
            <span className="text-gray-500">Duration:</span> {settings.videoDuration || 10}s
          </div>
          <div>
            <span className="text-gray-500">Format:</span> {settings.videoFormat || 'MP4'}
          </div>
          <div>
            <span className="text-gray-500">Music:</span> {
              settings.backgroundMusic && settings.backgroundMusic !== 'none' 
                ? getMusicName(settings.backgroundMusic) 
                : 'None'
            }
          </div>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mt-4">
        <p>Note: In a production environment, video rendering would be handled by a server-side Remotion renderer.</p>
      </div>
    </div>
  );
  
  // Helper function to get music name from ID
  function getMusicName(musicId) {
    const musicMap = {
      'corporate1': 'Corporate Upbeat',
      'corporate2': 'Corporate Inspirational',
      'ambient1': 'Ambient Calm',
      'ambient2': 'Ambient Technology',
      'uplifting1': 'Uplifting Business'
    };
    
    return musicMap[musicId] || musicId;
  }
}

export default RemotionRenderer;