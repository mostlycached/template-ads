// src/components/VideoTestimonialTemplate.js
import React from 'react';
import { 
  Composition, 
  AbsoluteFill, 
  useCurrentFrame, 
  useVideoConfig, 
  spring, 
  interpolate, 
  Sequence,
  Audio
} from 'remotion';

// Utility function to calculate spring animations
const useSpringAnimation = (startFrame, damping = 12, mass = 1) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  return spring({
    frame: frame - startFrame,
    fps,
    config: {
      damping,
      mass
    }
  });
};

// Component for animated quote marks
const QuoteMark = ({ position, delay, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const opacity = spring({
    frame: frame - delay,
    fps,
    config: { mass: 0.5 }
  });
  
  const scale = interpolate(
    spring({ 
      frame: frame - delay, 
      fps, 
      config: { mass: 0.5, damping: 15 } 
    }),
    [0, 1],
    [0.5, 1]
  );
  
  const float = Math.sin((frame - delay) / 30) * 5;
  
  const style = {
    position: 'absolute',
    fontSize: 80,
    fontFamily: 'Georgia, serif',
    color: color,
    opacity: opacity * 0.3,
    transform: `scale(${scale})`,
    top: position === 'top' ? -40 + float : null,
    bottom: position === 'bottom' ? -40 - float : null,
    left: position === 'top' ? 20 : null,
    right: position === 'bottom' ? 20 : null,
  };
  
  return <div style={style}>{position === 'top' ? '"' : '"'}</div>;
};

// Animate text typing effect
const TypingText = ({ text, startFrame, speed = 0.5 }) => {
  const frame = useCurrentFrame();
  
  // Calculate how much of the text to show
  const charsToShow = Math.floor(Math.max(0, (frame - startFrame) * speed));
  const visibleText = text?.substring(0, charsToShow) || '';
  
  return <p style={{ margin: 0, lineHeight: 1.5 }}>{visibleText}</p>;
};

// Logo component with animation
const AnimatedLogo = ({ image, text, startFrame, style = {} }) => {
  const scale = useSpringAnimation(startFrame, 15, 0.5);
  const opacity = useSpringAnimation(startFrame, 12);
  
  const containerStyle = {
    opacity,
    transform: `scale(${scale})`,
    height: 50,
    ...style
  };
  
  return (
    <div style={containerStyle}>
      {image ? (
        <img src={image} alt={text} style={{ height: '100%', objectFit: 'contain' }} />
      ) : (
        <div style={{ 
          fontWeight: 'bold', 
          fontSize: 24,
          height: '100%',
          display: 'flex',
          alignItems: 'center'
        }}>
          {text}
        </div>
      )}
    </div>
  );
};

// Person component with photo and details
const PersonDetails = ({ settings, startFrame }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame - startFrame,
    [0, 20],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );
  
  const translateY = interpolate(
    frame - startFrame,
    [0, 30],
    [20, 0],
    { extrapolateRight: 'clamp' }
  );
  
  const imageScale = spring({
    frame: frame - startFrame - 5,
    fps: 30,
    config: { mass: 0.6, damping: 15 }
  });
  
  // Extract settings
  const { 
    personName, 
    personTitle, 
    personImage,
    companyName,
    primaryFont,
    secondaryFont,
    colorPalette = {} 
  } = settings;
  
  const accentColor = colorPalette.accent || '#2b5c8e';
  
  return (
    <div style={{
      opacity,
      transform: `translateY(${translateY}px)`,
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }}>
      <div style={{
        transform: `scale(${imageScale})`,
        width: 80,
        height: 80,
        borderRadius: '50%',
        overflow: 'hidden',
        border: `3px solid ${accentColor}`
      }}>
        {personImage ? (
          <img 
            src={personImage} 
            alt={personName} 
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
            fontSize: 30,
            color: '#999'
          }}>👤</div>
        )}
      </div>
      
      <div>
        <h3 style={{
          color: accentColor,
          fontFamily: primaryFont || 'Arial, sans-serif',
          fontSize: 22,
          fontWeight: 'bold',
          margin: 0
        }}>
          {personName || 'John Doe'}
        </h3>
        
        <p style={{
          fontFamily: secondaryFont || 'Georgia, serif',
          margin: '5px 0 0 0',
          fontSize: 16,
          color: colorPalette.text || '#232F3E'
        }}>
          {personTitle || 'Position'}, 
          <span style={{ color: accentColor }}> {companyName || 'Company'}</span>
        </p>
      </div>
    </div>
  );
};

// Decorative dots animation
const DecorativeDots = ({ color, count = 5, position = 'topRight' }) => {
  const frame = useCurrentFrame();
  
  const getPosition = (idx) => {
    if (position === 'topRight') {
      return {
        top: 20 + idx * 10,
        right: 20 + idx * 5
      };
    } else if (position === 'bottomLeft') {
      return {
        bottom: 20 + idx * 10,
        left: 20 + idx * 5
      };
    }
  };
  
  return Array.from({ length: count }).map((_, i) => (
    <div 
      key={i}
      style={{
        position: 'absolute',
        ...getPosition(i),
        width: 6 + i,
        height: 6 + i,
        borderRadius: '50%',
        backgroundColor: color,
        opacity: 0.1 + (i * 0.05),
        transform: `scale(${1 + Math.sin((frame + i * 10) / 20) * 0.3})`,
      }}
    />
  ));
};

// Audio component for background music
const BackgroundMusic = ({ settings }) => {
  const { fps } = useVideoConfig();
  
  // Extract music settings
  const musicId = settings.backgroundMusic;
  const volume = (settings.musicVolume ?? 80) / 100;
  const fadeIn = settings.musicFadeIn ?? true;
  const fadeOut = settings.musicFadeOut ?? true;
  const fadeInDuration = (settings.musicFadeInDuration ?? 1) * fps; // convert to frames
  const fadeOutDuration = (settings.musicFadeOutDuration ?? 2) * fps; // convert to frames
  const startTime = (settings.musicStartTime ?? 0); // in seconds
  
  if (!musicId || musicId === 'none') return null;
  
  // In a real implementation, you would have actual paths to music files
  // This is a simplified mapping for demonstration
  const getMusicPath = (id) => {
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
  
  const src = getMusicPath(musicId);
  
  if (!src) return null;
  
  // For local development without Remotion rendering, we need to manually construct the full URL
  const fullSrc = src.startsWith('http') ? src : window.location.origin + src;
  
  return (
    <Audio
      src={fullSrc}
      volume={volume}
      startFrom={startTime}
      endAt={1000} // Set a large number for longer tracks
      fadeIn={fadeIn ? fadeInDuration : undefined}
      fadeOut={fadeOut ? fadeOutDuration : undefined}
    />
  );
};

// Main Testimonial Video Component
const VideoTestimonial = ({ settings }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  
  // Extract settings with defaults
  const palette = settings.colorPalette || {};
  const backgroundColor = palette.background || '#f0f5fa';
  const accentColor = palette.accent || '#2b5c8e';
  const textColor = palette.text || '#232F3E';
  
  // Get fonts
  const primaryFont = settings.primaryFont || 'Arial, sans-serif';
  const secondaryFont = settings.secondaryFont || 'Georgia, serif';
  
  // Animation timing (in frames)
  const logoStartFrame = 5;
  const quoteBlockStartFrame = 30;
  const quoteTextStartFrame = quoteBlockStartFrame + 15;
  const personRevealFrame = quoteTextStartFrame + 90; // Start person reveal after quote animation
  
  // Calculate quote block animations
  const quoteBlockOpacity = spring({
    frame: frame - quoteBlockStartFrame,
    fps,
    config: { mass: 0.5 }
  });
  
  const quoteBlockScale = interpolate(
    spring({
      frame: frame - quoteBlockStartFrame,
      fps,
      config: { mass: 0.5 }
    }),
    [0, 1],
    [0.95, 1]
  );
  
  // Process the quote text
  const quoteText = settings.personQuote?.replace(/{{companyName}}/g, settings.companyName || 'Company') || 
    "Humans crave connection, and everything in life is about connecting with others. AI helps automate tasks that were once done manually.";
  
  return (
    <AbsoluteFill style={{
      backgroundColor,
      padding: 40,
      fontFamily: secondaryFont,
      color: textColor,
    }}>
      {/* Top logos section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 60
      }}>
        {/* Company logo */}
        <AnimatedLogo
          image={settings.ownerAccountImage}
          text={settings.companyName || 'Company'}
          startFrame={logoStartFrame}
        />
        
        {/* Partner logo */}
        <AnimatedLogo
          image={settings.partnerImage}
          text={settings.partnerName ? settings.partnerName.charAt(0) : 'P'}
          startFrame={logoStartFrame + 10}
          style={!settings.partnerImage ? {
            width: 50,
            height: 50,
            backgroundColor: accentColor,
            color: 'white',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            fontWeight: 'bold',
          } : {}}
        />
      </div>
      
      {/* Main content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 40
      }}>
        {/* Quote block */}
        <div style={{
          backgroundColor: accentColor,
          color: 'white',
          padding: 30,
          borderRadius: 8,
          marginBottom: 30,
          fontFamily: secondaryFont,
          fontSize: 24,
          position: 'relative',
          opacity: quoteBlockOpacity,
          transform: `scale(${quoteBlockScale})`,
          lineHeight: 1.4
        }}>
          {/* Quote marks */}
          <QuoteMark position="top" delay={quoteBlockStartFrame + 5} color="white" />
          <QuoteMark position="bottom" delay={quoteBlockStartFrame + 15} color="white" />
          
          {/* Quote text with typing animation */}
          <TypingText
            text={quoteText}
            startFrame={quoteTextStartFrame}
            speed={0.6}
          />
        </div>
        
        {/* Person information */}
        <PersonDetails
          settings={settings}
          startFrame={personRevealFrame}
        />
      </div>
      
      {/* Decorative elements */}
      <DecorativeDots 
        color={accentColor} 
        count={6} 
        position="topRight" 
      />
      
      <DecorativeDots 
        color={accentColor} 
        count={4} 
        position="bottomLeft" 
      />
      
      {/* Background Music */}
      <BackgroundMusic settings={settings} />
    </AbsoluteFill>
  );
};

// Composition setup
const VideoTestimonialComposition = () => {
  return (
    <Composition
      id="VideoTestimonial"
      component={VideoTestimonial}
      durationInFrames={180}
      fps={30}
      width={1080}
      height={1080}
      defaultProps={{
        settings: {
          // Default placeholder settings
          companyName: "Acme Inc",
          ownerAccountImage: null,
          partnerName: "Testimonials Inc",
          partnerImage: null,
          personImage: null,
          personName: "John Smith",
          personTitle: "Senior Director",
          personQuote: "This product completely transformed how we approach customer relationships. The implementation was smooth and the results were immediate.",
          primaryFont: "Arial, sans-serif",
          secondaryFont: "Georgia, serif",
          colorPalette: {
            primary: "#232F3E",
            secondary: "#FF9900",
            background: "#f0f5fa",
            text: "#232F3E",
            button: "#FF9900",
            accent: "#2b5c8e"
          }
        }
      }}
    />
  );
};

export { VideoTestimonial, VideoTestimonialComposition };