// src/components/templatePresets.js
// Template presets with explicit color palettes and background settings
const templatePresets = {
  standard: {
    companyName: 'Apple',
    ownerAccountImage: null,
    backgroundImage: null,
    backgroundGalleryImage: 'abstract-1', // Default gallery image ID
    backgroundType: 'gallery', // 'gallery', 'upload', or 'color'
    aspectRatio: 'landscape', // Default aspect ratio for standard template
    
    // Color palette - explicitly defined
    colorPalette: {
      primary: '#007AFF',   // Apple blue
      secondary: '#5AC8FA', // Apple light blue
      background: '#000000', // Black
      text: '#FFFFFF',      // White
      button: '#007AFF',    // Apple blue
      accent: '#FF2D55'     // Apple pink
    },
    
    // Font settings
    primaryFont: 'Helvetica, Arial, sans-serif',
    secondaryFont: 'Helvetica, Arial, sans-serif',
    
    // Template-specific content
    header: 'Hey, {{companyName}}',
    ctaText: 'Learn More',
    tagline: 'Dropped calls? Not with Nextiva.',
    description: "Always be there when your customers need you. Nextiva's industry-leading uptime ensures reliable connections for a seamless experience every time."
  },
  
  testimonial: {
    companyName: 'Amazon',
    partnerName: 'Manatal',
    ownerAccountImage: null,
    partnerImage: null,
    personImage: null,
    aspectRatio: 'square', // Default aspect ratio for testimonial template
    
    // Color palette - explicitly defined
    colorPalette: {
      primary: '#232F3E',   // Amazon dark blue
      secondary: '#FF9900', // Amazon orange
      background: '#f0f5fa', // Light blue background
      text: '#232F3E',      // Dark text
      button: '#FF9900',    // Orange button
      accent: '#2b5c8e'     // Medium blue accent
    },
    
    // Background settings
    backgroundType: 'solid', // 'solid' or 'gradient'
    backgroundColor: '#f0f5fa', // This will still be used for gradient backgrounds
    
    // Gradient settings (for when backgroundType is 'gradient')
    gradientType: 'linear',
    gradientDirection: '135deg',
    gradientStops: [
      { color: '#f0f5fa', position: 0 },
      { color: '#dae7f2', position: 100 }
    ],
    
    // Font settings
    primaryFont: 'Arial, sans-serif',
    secondaryFont: 'Georgia, serif',
    
    // Template-specific content
    personQuote: '"Humans crave connection, and everything in life is about connecting with others. In the recruitment process, humans will still be interwoven, and AI will help automate tasks that were once done manually."',
    personName: 'Jonathan Kidder',
    personTitle: 'Senior Technical Recruiter',
    companyDescription: 'Amazon',
    ctaText: 'Learn More'
  },
  
  event: {
    companyName: 'Univar Solutions',
    partnerName: 'Stle',
    ownerAccountImage: null,
    partnerImage: null,
    aspectRatio: 'portrait', // Default aspect ratio for event template
    
    // Color palette - explicitly defined
    colorPalette: {
      primary: '#0a2240',   // Dark blue
      secondary: '#f7941d', // Orange
      background: '#0a2240', // Dark blue background
      text: '#FFFFFF',      // White text
      button: '#f7941d',    // Orange button
      accent: '#f7941d'     // Orange accent
    },
    
    // Font settings
    primaryFont: '"Segoe UI", Helvetica, Arial, sans-serif',
    secondaryFont: 'Arial, sans-serif',
    
    // Template-specific content
    eventTitle: 'Chlorinated paraffins compared to alternative chemistries',
    eventType: 'WEBINAR',
    
    speaker1Image: null,
    speaker1Name: 'JOHN HARDY',
    speaker1Title: 'Application development specialist',
    speaker1Company: 'Univar Solutions',
    
    speaker2Image: null,
    speaker2Name: 'ROB STEFAN',
    speaker2Title: 'Application development specialist',
    speaker2Company: 'Univar Solutions',
    
    ctaText: 'Register Now'
  },
  
  // New Video Testimonial template
  videoTestimonial: {
    // Inherit most of the static testimonial settings
    companyName: 'Amazon',
    partnerName: 'Manatal',
    ownerAccountImage: null,
    partnerImage: null,
    personImage: null,
    
    // Color palette - explicitly defined
    colorPalette: {
      primary: '#232F3E',   // Amazon dark blue
      secondary: '#FF9900', // Amazon orange
      background: '#f0f5fa', // Light blue background
      text: '#232F3E',      // Dark text
      button: '#FF9900',    // Orange button
      accent: '#2b5c8e'     // Medium blue accent
    },
    
    // Font settings
    primaryFont: 'Arial, sans-serif',
    secondaryFont: 'Georgia, serif',
    
    // Content presets
    personQuote: '"Humans crave connection, and everything in life is about connecting with others. In the recruitment process, humans will still be interwoven, and AI will help automate tasks that were once done manually."',
    personName: 'Jonathan Kidder',
    personTitle: 'Senior Technical Recruiter',
    companyDescription: 'Amazon',
    
    // Video-specific settings
    videoDuration: 15, // in seconds
    animationSpeed: 'fast', // slow, medium, fast
    quoteAnimationStyle: 'typing', // typing, fadein, wordbyword
    speakerRevealTiming: 10, // seconds into video when speaker appears
    videoFormat: 'mp4', // mp4, webm, gif
    videoQuality: 'medium', // low, medium, high
    
    // Audio settings
    backgroundMusic: 'corporate1', // ID of the selected background music
    musicVolume: 80, // Volume percentage (0-100)
    musicFadeIn: true,
    musicFadeOut: true,
    
    // Fixed settings for video
    aspectRatio: 'square',
    templateType: 'video'
  },
  
  // New Dynamic Template
  dynamic: {
    companyName: 'Acme Corp',
    ownerAccountImage: null,
    backgroundType: 'color', // 'gallery', 'upload', 'color', or 'gradient'
    aspectRatio: 'landscape', // Default aspect ratio
    
    // Components settings
    components: ['header', 'checklist', 'cta'], // Default components
    layout: 'centered', // Default layout
    
    // Color palette
    colorPalette: {
      primary: '#1F2937',   // Dark blue-gray
      secondary: '#4B5563', // Medium gray
      background: '#F9FAFB', // Light gray background
      text: '#1F2937',      // Dark text
      button: '#3B82F6',    // Bright blue button
      accent: '#3B82F6'     // Bright blue accent
    },
    
    // Font settings
    primaryFont: 'Arial, sans-serif',
    secondaryFont: 'Georgia, serif',
    
    // Content presets
    header: 'Streamline Your Workflow',
    subtitle: 'Our platform helps teams collaborate more effectively and get more done in less time.',
    checklistItems: [
      'Increase productivity by 35%',
      'Reduce meeting time by 50%',
      'Seamless integration with your tools'
    ],
    ctaText: 'Start Free Trial',
    
    // Visual settings
    showDecorative: true
  }
};

export default templatePresets;