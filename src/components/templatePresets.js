// src/components/templatePresets.js
// Template presets with explicit color palettes
const templatePresets = {
  standard: {
    companyName: 'Apple',
    ownerAccountImage: null,
    backgroundImage: null,
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
    
    // Explicit background color for the template
    backgroundColor: '#000000',
    
    // Font settings
    primaryFont: 'Helvetica, Arial, sans-serif',
    secondaryFont: 'Helvetica, Arial, sans-serif',
    
    // Template-specific content
    header: 'Hey, {{companyName}}',
    headerColor: '#FFFFFF', // Default: will use palette.text if not overridden
    headerFont: '', // Default: will use primaryFont if not set
    
    ctaText: 'Learn More',
    buttonBackgroundColor: '', // Default: will use palette.button if not overridden
    buttonTextColor: '#FFFFFF',
    buttonFont: '', // Default: will use secondaryFont if not set
    
    tagline: 'Dropped calls? Not with Nextiva.',
    taglineFont: '', // Default: will use primaryFont if not set
    
    description: "Always be there when your customers need you. Nextiva's industry-leading uptime ensures reliable connections for a seamless experience every time.",
    descriptionFont: '' // Default: will use secondaryFont if not set
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
    
    // Explicit background color for the template
    backgroundColor: '#f0f5fa',
    
    // Font settings
    primaryFont: 'Arial, sans-serif',
    secondaryFont: 'Georgia, serif',
    
    // Template-specific content
    accentColor: '#2b5c8e',     // Default: will use palette.accent if not set
    
    personQuote: '"Humans crave connection, and everything in life is about connecting with others. In the recruitment process, humans will still be interwoven, and AI will help automate tasks that were once done manually."',
    personQuoteFont: '', // Default: will use secondaryFont if not set
    
    personName: 'Jonathan Kidder',
    personNameFont: '', // Default: will use primaryFont if not set
    
    personTitle: 'Senior Technical Recruiter',
    personTitleFont: '', // Default: will use secondaryFont if not set
    
    companyDescription: 'Amazon',
    
    ctaText: 'Learn More',
    buttonBackgroundColor: '#FF9900', // Default: will use palette.button if not set
    buttonTextColor: '#FFFFFF'
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
    
    // Explicit background color for the template
    backgroundColor: '#0a2240',
    
    // Font settings
    primaryFont: '"Segoe UI", Helvetica, Arial, sans-serif',
    secondaryFont: 'Arial, sans-serif',
    
    // Template-specific content  
    accentColor: '#f7941d',     // Default: will use palette.accent if not set
    
    eventTitle: 'Chlorinated paraffins compared to alternative chemistries',
    eventTitleFont: '',  // Default: will use primaryFont if not set
    
    eventType: 'WEBINAR',
    eventTypeFont: '',   // Default: will use secondaryFont if not set
    
    speaker1Image: null,
    speaker1Name: 'JOHN HARDY',
    speaker1Title: 'Application development specialist',
    speaker1Company: 'Univar Solutions',
    speaker1Font: '',    // Default: will use primaryFont if not set
    
    speaker2Image: null,
    speaker2Name: 'ROB STEFAN',
    speaker2Title: 'Application development specialist',
    speaker2Company: 'Univar Solutions',
    speaker2Font: '',    // Default: will use primaryFont if not set
    
    ctaText: 'Register Now',
    buttonBackgroundColor: '#f7941d', // Default: will use palette.button if not set
    buttonTextColor: '#FFFFFF',
    buttonFont: ''       // Default: will use secondaryFont if not set
  }
};

export default templatePresets;