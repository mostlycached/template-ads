// src/components/AudioHelper.js
/**
 * Helper function to play background music directly
 */

// Global audio object
let audioInstance = null;

// Map music ID to file path
const getMusicPath = (id) => {
  if (!id || id === 'none') return null;
  
  switch(id) {
    case 'corporate1':
      return '/music/corporate-upbeat.mp3';
    case 'corporate2':
      return '/music/corporate-inspirational.mp3';
    case 'ambient1':
      return '/music/ambient-calm.mp3';
    case 'ambient2':
      return '/music/ambient-technology.mp3';
    case 'uplifting1':
      return '/music/uplifting-business.mp3';
    default:
      return null;
  }
};

// Play audio function
export const playBackgroundMusic = (musicId, volume = 0.5) => {
  if (!musicId || musicId === 'none') {
    stopBackgroundMusic();
    return;
  }
  
  const musicPath = getMusicPath(musicId);
  if (!musicPath) return;
  
  // Stop any currently playing audio
  stopBackgroundMusic();
  
  // Create and configure new audio
  audioInstance = new Audio(musicPath);
  audioInstance.volume = volume;
  audioInstance.loop = true;
  
  // Play the audio with a try-catch to handle potential errors
  try {
    const playPromise = audioInstance.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error('Audio playback error:', error);
      });
    }
  } catch (error) {
    console.error('Audio playback error:', error);
  }
};

// Stop audio function
export const stopBackgroundMusic = () => {
  if (audioInstance) {
    audioInstance.pause();
    audioInstance = null;
  }
};