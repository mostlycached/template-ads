// src/components/layouts/PartnershipPromoLayouts.js
import React from 'react';
import { BulletPoint } from './SharedLayouts';

/**
 * Partner Layout
 * Focuses on the partnership between two companies
 */
export const partnerLayout = ({ settings, colors, fonts }) => {
  const benefits = settings.integrationBenefits || ["Benefit one", "Benefit two", "Benefit three"];
  
  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Company + Partner Logos */}
      <div className="flex items-center mb-6">
        {/* Company Logo */}
        <div className="flex-1">
          {settings.ownerAccountImage ? (
            <img 
              src={settings.ownerAccountImage} 
              alt={settings.companyName || "Company"} 
              className="h-10 object-contain" 
            />
          ) : (
            <div 
              className="font-bold" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              {settings.companyName || "Your Company"}
            </div>
          )}
        </div>
        
        {/* Plus Sign */}
        <div 
          className="mx-4 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: colors.accent, color: 'white' }}
        >
          +
        </div>
        
        {/* Partner Logo */}
        <div className="flex-1 flex justify-end">
          {settings.partnerLogo ? (
            <img 
              src={settings.partnerLogo} 
              alt="Partner" 
              className="h-10 object-contain" 
            />
          ) : (
            <div 
              className="font-bold" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              Partner
            </div>
          )}
        </div>
      </div>
      
      {/* Header */}
      <h1 
        className="text-2xl font-bold mb-2 text-center" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "Better Together"}
      </h1>
      
      <p 
        className="mb-5 text-center" 
        style={{ color: colors.text, fontFamily: fonts.secondary }}
      >
        {settings.subheadline || "Seamlessly integrate to enhance your workflow"}
      </p>
      
      <div className="flex-1 flex flex-col">
        {/* Integration Benefits */}
        <div 
          className="p-5 rounded-lg mb-5 flex-1"
          style={{ backgroundColor: `${colors.primary}15` }}
        >
          <h3 
            className="font-bold mb-4 text-center" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            Integration Benefits
          </h3>
          
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
        </div>
        
        {/* Integration Image */}
        {settings.integrationImage && (
          <div className="flex justify-center mb-5">
            <img 
              src={settings.integrationImage} 
              alt="Integration" 
              className="max-h-32 rounded" 
            />
          </div>
        )}
        
        {/* CTA Section */}
        <div className="flex items-center justify-between">
          {/* Compatibility Info */}
          {settings.compatibilityInfo ? (
            <div style={{ color: colors.text, fontFamily: fonts.secondary }}>
              {settings.compatibilityInfo}
            </div>
          ) : (
            <div></div>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 text-white font-bold rounded-lg"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Explore the Integration"}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Integration Layout
 * Focuses on the technical integration between products
 */
export const integrationLayout = ({ settings, colors, fonts }) => {
  const benefits = settings.integrationBenefits || ["Benefit one", "Benefit two", "Benefit three"];
  
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
      
      {/* Integration Badge */}
      <div className="mb-3">
        <span 
          className="px-3 py-1 rounded-full text-xs font-bold"
          style={{ backgroundColor: colors.accent, color: 'white' }}
        >
          INTEGRATION
        </span>
      </div>
      
      {/* Header */}
      <h1 
        className="text-2xl font-bold mb-2" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "Better Together"}
      </h1>
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Integration Details */}
        <div className="w-full md:w-1/2 md:pr-6 flex flex-col justify-center">
          <p 
            className="mb-5" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "Seamlessly integrate to enhance your workflow"}
          </p>
          
          {/* Integration Benefits */}
          <div className="mb-5">
            <h3 
              className="font-bold mb-3" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              Key Benefits:
            </h3>
            
            {benefits.map((benefit, index) => (
              <BulletPoint 
                key={index} 
                text={benefit} 
                color={colors.accent} 
                bulletStyle="checkmark" 
              />
            ))}
          </div>
          
          {/* Compatibility Info */}
          {settings.compatibilityInfo && (
            <div 
              className="p-3 rounded-lg mb-5 inline-block"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <span 
                className="text-sm" 
                style={{ color: colors.text, fontFamily: fonts.secondary }}
              >
                {settings.compatibilityInfo}
              </span>
            </div>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Explore the Integration"}
          </button>
        </div>
        
        {/* Right Side - Visual */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          {/* Partner Logo Display */}
          <div 
            className="p-5 rounded-lg mb-4 w-full flex flex-col items-center"
            style={{ backgroundColor: `${colors.primary}10` }}
          >
            {/* Connected Logos */}
            <div className="flex items-center mb-4">
              {/* Company Logo (Small) */}
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'white' }}
              >
                {settings.ownerAccountImage ? (
                  <img 
                    src={settings.ownerAccountImage} 
                    alt={settings.companyName || "Company"} 
                    className="max-h-10 max-w-10 object-contain" 
                  />
                ) : (
                  <span style={{ color: colors.primary, fontFamily: fonts.primary }}>
                    Co.
                  </span>
                )}
              </div>
              
              {/* Connection Line */}
              <div 
                className="mx-2 h-1 w-12"
                style={{ backgroundColor: colors.accent }}
              ></div>
              
              {/* Partner Logo */}
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'white' }}
              >
                {settings.partnerLogo ? (
                  <img 
                    src={settings.partnerLogo} 
                    alt="Partner" 
                    className="max-h-10 max-w-10 object-contain" 
                  />
                ) : (
                  <span style={{ color: colors.primary, fontFamily: fonts.primary }}>
                    Partner
                  </span>
                )}
              </div>
            </div>
            
            {/* Integration Image (if provided) */}
            {settings.integrationImage && (
              <img 
                src={settings.integrationImage} 
                alt="Integration" 
                className="mt-3 max-h-24 rounded" 
              />
            )}
          </div>
          
          {/* Flow Diagram */}
          <div className="w-full px-4">
            <div className="flex justify-between">
              <div 
                className="text-center"
                style={{ color: colors.text, fontFamily: fonts.secondary }}
              >
                <div 
                  className="w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.accent, color: 'white' }}
                >
                  1
                </div>
                <div className="text-xs">Connect</div>
              </div>
              <div 
                className="text-center"
                style={{ color: colors.text, fontFamily: fonts.secondary }}
              >
                <div 
                  className="w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.accent, color: 'white' }}
                >
                  2
                </div>
                <div className="text-xs">Configure</div>
              </div>
              <div 
                className="text-center"
                style={{ color: colors.text, fontFamily: fonts.secondary }}
              >
                <div 
                  className="w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.accent, color: 'white' }}
                >
                  3
                </div>
                <div className="text-xs">Use</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Combined Value Layout
 * Emphasizes the combined value of two products
 */
export const combinedLayout = ({ settings, colors, fonts }) => {
  const benefits = settings.integrationBenefits || ["Benefit one", "Benefit two", "Benefit three"];
  
  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Header */}
      <h1 
        className="text-2xl font-bold mb-2 text-center" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "Better Together"}
      </h1>
      
      <div className="flex-1 flex flex-col">
        {/* Logos Display */}
        <div className="flex justify-center items-center mb-6">
          {/* Company Logo */}
          <div 
            className="p-4 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${colors.primary}10` }}
          >
            {settings.ownerAccountImage ? (
              <img 
                src={settings.ownerAccountImage} 
                alt={settings.companyName || "Company"} 
                className="h-12 object-contain" 
              />
            ) : (
              <div 
                className="h-12 w-12 rounded flex items-center justify-center"
                style={{ backgroundColor: colors.primary }}
              >
                <span style={{ color: 'white', fontFamily: fonts.primary }}>
                  Co.
                </span>
              </div>
            )}
          </div>
          
          {/* Plus Icon */}
          <div 
            className="mx-4 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: colors.accent, color: 'white' }}
          >
            +
          </div>
          
          {/* Partner Logo */}
          <div 
            className="p-4 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${colors.primary}10` }}
          >
            {settings.partnerLogo ? (
              <img 
                src={settings.partnerLogo} 
                alt="Partner" 
                className="h-12 object-contain" 
              />
            ) : (
              <div 
                className="h-12 w-12 rounded flex items-center justify-center"
                style={{ backgroundColor: colors.accent }}
              >
                <span style={{ color: 'white', fontFamily: fonts.primary }}>
                  P
                </span>
              </div>
            )}
          </div>
        </div>
        
        <p 
          className="mb-5 text-center" 
          style={{ color: colors.text, fontFamily: fonts.secondary }}
        >
          {settings.subheadline || "Seamlessly integrate to enhance your workflow"}
        </p>
        
        {/* Combined Value Overview */}
        <div 
          className="p-5 rounded-lg mb-6 flex-1"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}20, ${colors.accent}20)` 
          }}
        >
          <div className="text-center mb-4">
            <h3 
              className="font-bold" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              Combined Value
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg bg-white bg-opacity-70"
              >
                <div 
                  className="w-8 h-8 rounded-full mb-2 flex items-center justify-center"
                  style={{ backgroundColor: colors.accent, color: 'white' }}
                >
                  {index + 1}
                </div>
                <div 
                  className="text-sm" 
                  style={{ color: colors.text, fontFamily: fonts.secondary }}
                >
                  {benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          {/* Compatibility Info */}
          {settings.compatibilityInfo ? (
            <div 
              className="text-sm" 
              style={{ color: colors.text, fontFamily: fonts.secondary }}
            >
              {settings.compatibilityInfo}
            </div>
          ) : (
            <div></div>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 text-white font-bold rounded-lg"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Explore the Integration"}
          </button>
        </div>
      </div>
    </div>
  );
};