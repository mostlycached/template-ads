// src/components/B2BTemplatePresets.js

// Default presets for B2B templates by promotional objective
export const b2bTemplatePresets = {
    // Product Demo/Showcase
    productDemo: {
      companyName: 'Acme Software',
      promotionalObjective: 'productDemo',
      layoutVariant: 'featureFocus',
      headline: 'See how our platform streamlines your workflow',
      subheadline: 'Experience our intuitive interface and powerful features',
      productFeatures: [
        'Automated workflow management',
        'Real-time collaboration tools',
        'Customizable reporting dashboard',
        'Seamless third-party integrations'
      ],
      productBenefits: 'Our solution helps you save time and reduce costs while improving team productivity.',
      ctaText: 'Request a Demo',
      backgroundType: 'color',
      
      // Color palette
      colorPalette: {
        primary: '#2563eb',
        secondary: '#60a5fa',
        background: '#ffffff',
        text: '#1f2937',
        button: '#2563eb',
        accent: '#7c3aed'
      },
      
      // Font settings
      primaryFont: '"Inter", sans-serif',
      secondaryFont: '"Inter", sans-serif',
    },
    
    // Case Study
    caseStudy: {
      companyName: 'Acme Solutions',
      promotionalObjective: 'caseStudy',
      layoutVariant: 'testimonialsLayout',
      headline: 'How TechCorp achieved 40% faster deployments',
      subheadline: 'Learn how our solution delivered measurable results',
      clientName: 'TechCorp',
      industryVertical: 'Technology',
      keyResults: [
        '40% faster application deployments',
        '65% reduction in configuration errors',
        '$250,000 annual cost savings'
      ],
      testimonialQuote: 'The implementation was seamless, and we started seeing benefits within weeks. Our team is now able to focus on innovation instead of maintenance.',
      ctaText: 'Read Full Case Study',
      backgroundType: 'color',
      
      // Color palette
      colorPalette: {
        primary: '#10b981',
        secondary: '#d1fae5',
        background: '#f9fafb',
        text: '#1f2937',
        button: '#10b981',
        accent: '#f59e0b'
      },
      
      // Font settings
      primaryFont: '"Inter", sans-serif',
      secondaryFont: '"Georgia", serif',
    },
    
    // Webinar/Event
    webinarPromo: {
      companyName: 'Acme Education',
      promotionalObjective: 'webinarPromo',
      layoutVariant: 'eventLayout',
      headline: 'Join our webinar: The Future of AI in Healthcare',
      subheadline: 'Learn how emerging technologies are transforming patient care',
      eventDate: 'June 15, 2025 | 1:00 PM ET',
      eventType: 'WEBINAR',
      speakerName: 'Dr. Sarah Johnson',
      speakerTitle: 'Chief Medical Innovation Officer',
      eventTopics: [
        'AI-powered diagnostic tools and their accuracy',
        'Implementing AI solutions in clinical workflows',
        'Regulatory considerations and compliance',
        'Future trends and emerging technologies'
      ],
      ctaText: 'Register Now',
      backgroundType: 'color',
      
      // Color palette
      colorPalette: {
        primary: '#4f46e5',
        secondary: '#818cf8',
        background: '#ffffff',
        text: '#1f2937',
        button: '#4f46e5',
        accent: '#c026d3'
      },
      
      // Font settings
      primaryFont: '"Inter", sans-serif',
      secondaryFont: '"Inter", sans-serif',
    },
    
    // Solution to Pain Point
    solutionPromo: {
      companyName: 'Acme Security',
      promotionalObjective: 'solutionPromo',
      layoutVariant: 'problemSolutionLayout',
      headline: 'Struggling with data security vulnerabilities?',
      subheadline: 'Discover how our solution protects your sensitive information',
      painPoint: 'Companies are facing increasingly sophisticated cyber threats while struggling with limited security resources and expertise, leaving critical data vulnerable to breaches.',
      solutionPoints: [
        'Enterprise-grade encryption at rest and in transit',
        'Real-time threat monitoring and alerting',
        'Automated compliance reporting for regulatory requirements',
        'Expert security team available 24/7'
      ],
      impactStatement: 'Reduce security incidents by 85% within 90 days',
      ctaText: 'Secure Your Data',
      backgroundType: 'color',
      
      // Color palette
      colorPalette: {
        primary: '#be123c',
        secondary: '#fecdd3',
        background: '#ffffff',
        text: '#1f2937',
        button: '#be123c',
        accent: '#1d4ed8'
      },
      
      // Font settings
      primaryFont: '"Inter", sans-serif',
      secondaryFont: '"Inter", sans-serif',
    },
    
    // Free Trial/Demo Offer
    trialOffer: {
      companyName: 'Acme Analytics',
      promotionalObjective: 'trialOffer',
      layoutVariant: 'offerLayout',
      headline: 'Try Acme Analytics Pro Free for 30 Days',
      subheadline: 'Experience all premium features with no commitment',
      offerDuration: '30 days',
      offerInclusions: [
        'Full access to all premium features',
        'Personalized onboarding session',
        'Unlimited data imports and exports',
        '24/7 premium support'
      ],
      noRiskStatement: 'No credit card required. Cancel anytime.',
      ctaText: 'Start Free Trial',
      backgroundType: 'color',
      
      // Color palette
      colorPalette: {
        primary: '#0891b2',
        secondary: '#a5f3fc',
        background: '#f9fafb',
        text: '#1f2937',
        button: '#0891b2',
        accent: '#8b5cf6'
      },
      
      // Font settings
      primaryFont: '"Inter", sans-serif',
      secondaryFont: '"Inter", sans-serif',
    },
    
    // ROI/Value Calculator
    roiCalculator: {
      companyName: 'Acme Finance',
      promotionalObjective: 'roiCalculator',
      layoutVariant: 'calculatorLayout',
      headline: 'Calculate Your Potential Savings',
      subheadline: 'See how much you could save with our financial management solution',
      valueMetrics: [
        'Processing cost reduction',
        'Time savings from automation',
        'Error reduction value'
      ],
      averageResults: 'Customers save an average of $150,000 annually',
      calculatorDescription: 'Our ROI calculator provides a personalized estimate based on your current processes, team size, and industry benchmarks.',
      ctaText: 'Calculate Your ROI',
      backgroundType: 'color',
      
      // Color palette
      colorPalette: {
        primary: '#0e7490',
        secondary: '#67e8f9',
        background: '#f8fafc',
        text: '#1f2937',
        button: '#0e7490',
        accent: '#f59e0b'
      },
      
      // Font settings
      primaryFont: '"Inter", sans-serif',
      secondaryFont: '"Inter", sans-serif',
    },
    
    // Thought Leadership
    thoughtLeadership: {
      companyName: 'Acme Insights',
      promotionalObjective: 'thoughtLeadership',
      layoutVariant: 'expertiseLayout',
      headline: 'The Future of Remote Work: 2026 and Beyond',
      subheadline: 'Our perspective on evolving workplace trends',
      topicTitle: 'Remote Work Evolution: 2026 Outlook',
      expertName: 'Dr. Michael Chen',
      expertTitle: 'Chief Workplace Strategist',
      keyInsights: [
        'Hybrid work models will become the dominant organizational structure',
        'VR/AR technologies will create immersive remote collaboration experiences',
        'Location-independent compensation will reshape talent markets globally'
      ],
      ctaText: 'Read Our Analysis',
      backgroundType: 'color',
      
      // Color palette
      colorPalette: {
        primary: '#4338ca',
        secondary: '#a5b4fc',
        background: '#ffffff',
        text: '#1f2937',
        button: '#4338ca',
        accent: '#8b5cf6'
      },
      
      // Font settings
      primaryFont: '"Inter", sans-serif',
      secondaryFont: '"Georgia", serif',
    },
    
    // New Feature/Product Announcement
    productAnnouncement: {
      companyName: 'Acme Platform',
      promotionalObjective: 'productAnnouncement',
      layoutVariant: 'announcementLayout',
      headline: 'Introducing AI-Powered Analytics',
      subheadline: 'Unlock deeper insights with our new machine learning capabilities',
      productName: 'SmartInsights™',
      keyBenefits: [
        'Automatic anomaly detection and alerts',
        'Predictive forecasting with 95% accuracy',
        'Natural language query processing'
      ],
      availabilityInfo: 'Available now for all Enterprise customers',
      ctaText: 'Learn More',
      backgroundType: 'color',
      
      // Color palette
      colorPalette: {
        primary: '#1d4ed8',
        secondary: '#93c5fd',
        background: '#f9fafb',
        text: '#1f2937',
        button: '#1d4ed8',
        accent: '#0369a1'
      },
      
      // Font settings
      primaryFont: '"Inter", sans-serif',
      secondaryFont: '"Inter", sans-serif',
    },
    
    // Educational Content
    educationalContent: {
      companyName: 'Acme Academy',
      promotionalObjective: 'educationalContent',
      layoutVariant: 'resourceLayout',
      headline: 'The Complete Guide to Cloud Security',
      subheadline: 'Expert strategies for protecting your cloud infrastructure',
      contentType: 'eBook',
      learningPoints: [
        'Cloud security architecture best practices',
        'Automated compliance monitoring techniques',
        'Threat detection and incident response',
        'Zero-trust implementation framework'
      ],
      contentDescription: 'A comprehensive 45-page guide with actionable strategies, real-world examples, and expert insights on building and maintaining secure cloud environments.',
      ctaText: 'Download Free Guide',
      backgroundType: 'color',
      
      // Color palette
      colorPalette: {
        primary: '#0f766e',
        secondary: '#5eead4',
        background: '#f0fdfa',
        text: '#1f2937',
        button: '#0f766e',
        accent: '#6366f1'
      },
      
      // Font settings
      primaryFont: '"Inter", sans-serif',
      secondaryFont: '"Inter", sans-serif',
    },
    
    // Partnership/Integration
    partnershipPromo: {
      companyName: 'Acme Connect',
      promotionalObjective: 'partnershipPromo',
      layoutVariant: 'partnerLayout',
      headline: 'Acme + Salesforce: Better Together',
      subheadline: 'Seamlessly integrate to enhance your CRM workflow',
      integrationBenefits: [
        'Bi-directional data synchronization',
        'Unified customer view across platforms',
        'Automated workflow triggers between systems'
      ],
      compatibilityInfo: 'Works with all Salesforce and Acme plans',
      ctaText: 'Explore the Integration',
      backgroundType: 'color',
      
      // Color palette
      colorPalette: {
        primary: '#2563eb',
        secondary: '#bfdbfe',
        background: '#f9fafb',
        text: '#1f2937',
        button: '#2563eb',
        accent: '#7e22ce'
      },
      
      // Font settings
      primaryFont: '"Inter", sans-serif',
      secondaryFont: '"Inter", sans-serif',
    }
  };
  
  // Export individual presets for direct imports
  export const {
    productDemo,
    caseStudy,
    webinarPromo,
    solutionPromo,
    trialOffer,
    roiCalculator,
    thoughtLeadership,
    productAnnouncement,
    educationalContent,
    partnershipPromo
  } = b2bTemplatePresets;