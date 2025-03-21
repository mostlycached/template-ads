// src/components/layouts/SharedLayouts.js
import React from 'react';

/**
 * Helper component to create bullet points with different styles
 */
export const BulletPoint = ({ text, color, bulletStyle = 'checkmark' }) => {
  let iconElement;
  
  switch (bulletStyle) {
    case 'circle':
      iconElement = <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: color }}></div>;
      break;
    case 'number':
      iconElement = (
        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold" 
          style={{ backgroundColor: color, color: '#fff' }}>
          •
        </div>
      );
      break;
    case 'checkmark':
    default:
      iconElement = (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill={color} />
        </svg>
      );
  }
  
  return (
    <div className="flex items-start mb-3">
      {iconElement}
      <span className="ml-2">{text}</span>
    </div>
  );
};

/**
 * Split Layout
 * Versatile layout with clear division between image and text
 * Can be used by multiple promotional objectives
 */
export const splitLayout = ({ settings, colors, fonts, promotionalObjective }) => {
  let contentSection;
  
  // Determine content based on promotional objective
  switch (promotionalObjective) {
    case 'productDemo':
      const features = settings.productFeatures || ["Feature one", "Feature two", "Feature three"];
      contentSection = (
        <>
          <h1 
            className="text-2xl font-bold mb-3" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "See how our product streamlines your workflow"}
          </h1>
          
          <p 
            className="text-lg mb-5" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "Experience our intuitive interface and powerful features"}
          </p>
          
          <div className="mb-4">
            {features.map((feature, index) => (
              <BulletPoint 
                key={index} 
                text={feature} 
                color={colors.accent} 
                bulletStyle="checkmark" 
              />
            ))}
          </div>
          
          {settings.productBenefits && (
            <p 
              className="text-sm mb-5" 
              style={{ color: colors.text, fontFamily: fonts.secondary }}
            >
              {settings.productBenefits}
            </p>
          )}
        </>
      );
      break;
      
    case 'caseStudy':
      const results = settings.keyResults || ["Result one", "Result two", "Result three"];
      contentSection = (
        <>
          {settings.clientName && (
            <div className="mb-3">
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: `${colors.accent}30`, color: colors.accent }}
              >
                {settings.industryVertical || 'Case Study'}
              </span>
            </div>
          )}
          
          <h1 
            className="text-2xl font-bold mb-3" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "How our client achieved impressive results"}
          </h1>
          
          <div className="mb-5">
            {results.map((result, index) => (
              <BulletPoint 
                key={index} 
                text={result} 
                color={colors.accent} 
                bulletStyle="number" 
              />
            ))}
          </div>
          
          {settings.testimonialQuote && (
            <div 
              className="p-4 rounded-lg mb-4 italic"
              style={{ backgroundColor: `${colors.primary}15`, color: colors.text }}
            >
              "{settings.testimonialQuote}"
            </div>
          )}
        </>
      );
      break;
      
    case 'webinarPromo':
      const topics = settings.eventTopics || ["Topic one", "Topic two", "Topic three"];
      contentSection = (
        <>
          <div className="mb-3">
            <span 
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{ backgroundColor: colors.accent, color: 'white' }}
            >
              {settings.eventType || "WEBINAR"}
            </span>
          </div>
          
          <h1 
            className="text-2xl font-bold mb-3" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "Join our upcoming webinar"}
          </h1>
          
          <p 
            className="text-lg mb-5" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "Learn valuable insights from industry experts"}
          </p>
          
          {settings.eventDate && (
            <div 
              className="flex items-center mb-4"
              style={{ color: colors.text }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" fill={colors.accent} />
              </svg>
              <span className="ml-2" style={{ fontFamily: fonts.secondary }}>
                {settings.eventDate}
              </span>
            </div>
          )}
          
          <div className="mb-4">
            {topics.map((topic, index) => (
              <BulletPoint 
                key={index} 
                text={topic} 
                color={colors.accent} 
                bulletStyle="checkmark" 
              />
            ))}
          </div>
        </>
      );
      break;
      
    case 'solutionPromo':
      const benefits = settings.solutionPoints || ["Benefit one", "Benefit two", "Benefit three"];
      contentSection = (
        <>
          <h1 
            className="text-2xl font-bold mb-3" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "Struggling with this problem?"}
          </h1>
          
          <p 
            className="text-lg mb-5" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "Discover how our solution resolves this challenge"}
          </p>
          
          {settings.impactStatement && (
            <div 
              className="p-3 rounded-lg mb-4 inline-block"
              style={{ backgroundColor: `${colors.accent}20`, color: colors.text }}
            >
              <span className="font-bold" style={{ fontFamily: fonts.primary }}>
                {settings.impactStatement}
              </span>
            </div>
          )}
          
          <div className="mb-4">
            {benefits.map((benefit, index) => (
              <BulletPoint 
                key={index} 
                text={benefit} 
                color={colors.accent} 
                bulletStyle="checkmark" 
              />
            ))}
          </div>
          
          {settings.painPoint && (
            <p 
              className="text-sm mb-5" 
              style={{ color: colors.text, fontFamily: fonts.secondary }}
            >
              {settings.painPoint}
            </p>
          )}
        </>
      );
      break;
      
    default:
      contentSection = (
        <>
          <h1 
            className="text-2xl font-bold mb-3" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "Compelling headline goes here"}
          </h1>
          
          <p 
            className="text-lg mb-5" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "Supportive subheadline with additional information"}
          </p>
        </>
      );
  }
  
  return (
    <div className="h-full w-full flex">
      {/* Left Side - Color Block with Content */}
      <div 
        className="w-1/2 p-6 flex flex-col justify-center"
        style={{ backgroundColor: `${colors.primary}15` }}
      >
        {/* Company Logo */}
        {settings.ownerAccountImage && (
          <div className="mb-6">
            <img 
              src={settings.ownerAccountImage} 
              alt={settings.companyName || "Company"} 
              className="h-10 object-contain" 
            />
          </div>
        )}
        
        {contentSection}
        
        {/* CTA Button */}
        <button 
          className="px-6 py-3 mt-4 text-white font-bold rounded-lg self-start"
          style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
        >
          {settings.ctaText || "Call to Action"}
        </button>
      </div>
      
      {/* Right Side - Image */}
      <div className="w-1/2 flex items-center justify-center p-6">
        {/* Product Demo Image */}
        {promotionalObjective === 'productDemo' && (
          settings.productImage ? (
            <img 
              src={settings.productImage} 
              alt="Product Screenshot" 
              className="rounded-lg shadow-lg max-h-full max-w-full object-contain" 
            />
          ) : (
            <div 
              className="rounded-lg w-full h-64 flex items-center justify-center" 
              style={{ backgroundColor: `${colors.primary}10` }}
            >
              <span style={{ color: colors.primary }}>Product Screenshot</span>
            </div>
          )
        )}
        
        {/* Case Study Image */}
        {promotionalObjective === 'caseStudy' && (
          settings.clientLogo ? (
            <div className="flex flex-col items-center">
              <img 
                src={settings.clientLogo} 
                alt={settings.clientName || "Client"} 
                className="max-h-32 max-w-full object-contain mb-6" 
              />
              <span 
                className="text-lg font-bold"
                style={{ color: colors.primary, fontFamily: fonts.primary }}
              >
                {settings.clientName || "Client Name"}
              </span>
            </div>
          ) : (
            <div 
              className="rounded-lg w-48 h-48 flex items-center justify-center" 
              style={{ backgroundColor: `${colors.primary}20` }}
            >
              <span style={{ color: colors.primary }}>Client Logo</span>
            </div>
          )
        )}
        
        {/* Webinar Speaker Image */}
        {promotionalObjective === 'webinarPromo' && (
          settings.speakerImage ? (
            <div className="flex flex-col items-center">
              <img 
                src={settings.speakerImage} 
                alt={settings.speakerName || "Speaker"} 
                className="w-48 h-48 object-cover rounded-full mb-4" 
              />
              <h4 
                className="text-xl font-bold text-center" 
                style={{ color: colors.text, fontFamily: fonts.primary }}
              >
                {settings.speakerName || "Speaker Name"}
              </h4>
              <p 
                className="text-center" 
                style={{ color: `${colors.text}99`, fontFamily: fonts.secondary }}
              >
                {settings.speakerTitle || "Speaker Title"}
              </p>
            </div>
          ) : (
            <div 
              className="rounded-full w-48 h-48 flex items-center justify-center" 
              style={{ backgroundColor: `${colors.primary}20` }}
            >
              <span style={{ color: colors.primary }}>👤</span>
            </div>
          )
        )}
        
        {/* Solution Image */}
        {promotionalObjective === 'solutionPromo' && (
          settings.solutionImage ? (
            <img 
              src={settings.solutionImage} 
              alt="Solution" 
              className="rounded-lg shadow-lg max-h-full max-w-full object-contain" 
            />
          ) : (
            <div 
              className="rounded-lg w-full h-64 flex items-center justify-center" 
              style={{ backgroundColor: `${colors.primary}10` }}
            >
              <span style={{ color: colors.primary }}>Solution Image</span>
            </div>
          )
        )}
        
        {/* Default Image for other promotional objectives */}
        {!['productDemo', 'caseStudy', 'webinarPromo', 'solutionPromo'].includes(promotionalObjective) && (
          <div 
            className="rounded-lg w-full h-64 flex items-center justify-center" 
            style={{ backgroundColor: `${colors.primary}10` }}
          >
            <span style={{ color: colors.primary }}>Image</span>
          </div>
        )}
      </div>
    </div>
  );
};