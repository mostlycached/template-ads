// src/components/layouts/TrialOfferLayouts.js
import React from 'react';
import { BulletPoint } from './SharedLayouts';

/**
 * Offer Layout
 * Focuses on the trial offer details
 */
export const offerLayout = ({ settings, colors, fonts }) => {
  const inclusions = settings.offerInclusions || ["Feature one", "Feature two", "Feature three"];
  
  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Company Logo */}
      {settings.ownerAccountImage && (
        <div className="mb-4">
          <img 
            src={settings.ownerAccountImage} 
            alt={settings.companyName || "Company"} 
            className="h-10 object-contain" 
          />
        </div>
      )}
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Offer Details Side */}
        <div className="w-full md:w-3/5 md:pr-6 flex flex-col justify-center">
          {/* Trial Badge */}
          <div className="mb-3">
            <span 
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{ backgroundColor: colors.accent, color: 'white' }}
            >
              {settings.offerDuration ? `${settings.offerDuration} FREE TRIAL` : 'FREE TRIAL'}
            </span>
          </div>
          
          {/* Header */}
          <h1 
            className="text-2xl font-bold mb-2" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "Try our product free for 14 days"}
          </h1>
          
          <p 
            className="text-lg mb-5" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "Experience all premium features with no commitment"}
          </p>
          
          {/* What's Included */}
          <div className="mb-5">
            <h3 
              className="font-bold mb-3" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              What's Included:
            </h3>
            
            {inclusions.map((inclusion, index) => (
              <BulletPoint 
                key={index} 
                text={inclusion} 
                color={colors.accent} 
                bulletStyle="checkmark" 
              />
            ))}
          </div>
          
          {/* No Risk Statement */}
          {settings.noRiskStatement && (
            <div 
              className="p-3 rounded-lg inline-block mb-5"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <span style={{ color: colors.text, fontFamily: fonts.secondary }}>
                {settings.noRiskStatement}
              </span>
            </div>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Start Free Trial"}
          </button>
        </div>
        
        {/* Product Image Side */}
        <div className="w-full md:w-2/5 flex items-center justify-center">
          {settings.offerImage ? (
            <img 
              src={settings.offerImage} 
              alt="Product" 
              className="rounded-lg shadow-lg max-h-full" 
            />
          ) : (
            <div 
              className="w-full h-64 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <span className="text-6xl" style={{ color: colors.primary }}>
                🎁
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Value Layout
 * Emphasizes the value proposition of the trial
 */
export const valueLayout = ({ settings, colors, fonts }) => {
  const inclusions = settings.offerInclusions || ["Feature one", "Feature two", "Feature three"];
  
  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Company Logo */}
      {settings.ownerAccountImage && (
        <div className="mb-4">
          <img 
            src={settings.ownerAccountImage} 
            alt={settings.companyName || "Company"} 
            className="h-10 object-contain" 
          />
        </div>
      )}
      
      {/* Header */}
      <h1 
        className="text-2xl font-bold mb-2" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "Try our product free for 14 days"}
      </h1>
      
      <div className="flex-1 flex flex-col">
        {/* Three-Column Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 flex-1">
          {inclusions.slice(0, 3).map((inclusion, index) => (
            <div 
              key={index}
              className="p-5 rounded-lg flex flex-col items-center text-center"
              style={{ backgroundColor: `${colors.primary}${10 + (index * 5)}` }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: colors.accent }}
              >
                <span className="text-white text-lg">
                  {index === 0 ? '🔍' : index === 1 ? '⚡' : '📊'}
                </span>
              </div>
              <h3 
                className="font-bold mb-2" 
                style={{ color: colors.text, fontFamily: fonts.primary }}
              >
                {inclusion.split(' ').slice(0, 2).join(' ')}
              </h3>
              <p 
                className="text-sm" 
                style={{ color: colors.text, fontFamily: fonts.secondary }}
              >
                {inclusion}
              </p>
            </div>
          ))}
        </div>
        
        {/* Trial Details and CTA */}
        <div 
          className="rounded-lg p-5 flex flex-col md:flex-row items-center justify-between"
          style={{ backgroundColor: `${colors.primary}15` }}
        >
          <div>
            <div 
              className="font-bold mb-1" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              {settings.offerDuration ? `${settings.offerDuration} Free Trial` : '14-Day Free Trial'}
            </div>
            {settings.noRiskStatement && (
              <div className="text-sm" style={{ color: colors.text, fontFamily: fonts.secondary }}>
                {settings.noRiskStatement}
              </div>
            )}
          </div>
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-4 md:mt-0 text-white font-bold rounded-lg"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Start Free Trial"}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Urgency Layout
 * Creates a sense of urgency to encourage conversions
 */
export const urgencyLayout = ({ settings, colors, fonts }) => {
  const inclusions = settings.offerInclusions || ["Feature one", "Feature two", "Feature three"];
  
  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Company Logo */}
      {settings.ownerAccountImage && (
        <div className="mb-4">
          <img 
            src={settings.ownerAccountImage} 
            alt={settings.companyName || "Company"} 
            className="h-10 object-contain" 
          />
        </div>
      )}
      
      {/* Limited Time Banner */}
      <div 
        className="px-4 py-3 rounded-lg mb-4 flex items-center justify-center"
        style={{ backgroundColor: colors.accent, color: 'white' }}
      >
        <span 
          className="font-bold text-center"
          style={{ fontFamily: fonts.primary }}
        >
          ⏰ LIMITED TIME OFFER ⏰
        </span>
      </div>
      
      {/* Header */}
      <h1 
        className="text-2xl font-bold mb-2 text-center" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "Try our product free for 14 days"}
      </h1>
      
      <p 
        className="text-lg mb-5 text-center" 
        style={{ color: colors.text, fontFamily: fonts.secondary }}
      >
        {settings.subheadline || "Experience all premium features with no commitment"}
      </p>
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Inclusions */}
        <div className="w-full md:w-1/2 md:pr-6 flex flex-col">
          <div 
            className="p-4 rounded-lg mb-4"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <h3 
              className="font-bold mb-3 text-center" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              What You Get
            </h3>
            
            {inclusions.map((inclusion, index) => (
              <BulletPoint 
                key={index} 
                text={inclusion} 
                color={colors.accent} 
                bulletStyle="checkmark" 
              />
            ))}
          </div>
        </div>
        
        {/* Right Side - Call to Action */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          {/* Trial Duration */}
          <div 
            className="text-5xl font-bold mb-3 text-center" 
            style={{ color: colors.accent }}
          >
            {settings.offerDuration || "14 Days"}
          </div>
          <div 
            className="text-xl mb-5 text-center" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            Free Access
          </div>
          
          {/* No Risk Statement */}
          {settings.noRiskStatement && (
            <div 
              className="p-3 rounded-lg text-center mb-5 w-full"
              style={{ backgroundColor: `${colors.primary}10` }}
            >
              <span style={{ color: colors.text, fontFamily: fonts.secondary }}>
                {settings.noRiskStatement}
              </span>
            </div>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-8 py-4 text-white font-bold rounded-lg w-full max-w-xs text-center"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Start Free Trial Now"}
          </button>
          
          {/* Urgency Line */}
          <div 
            className="mt-3 text-sm text-center"
            style={{ color: colors.accent, fontFamily: fonts.secondary }}
          >
            Offer expires soon. Don't miss out!
          </div>
        </div>
      </div>
    </div>
  );
};