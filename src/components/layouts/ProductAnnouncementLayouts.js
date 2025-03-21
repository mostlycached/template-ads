// src/components/layouts/ProductAnnouncementLayouts.js
import React from 'react';
import { BulletPoint } from './SharedLayouts';

/**
 * Announcement Layout
 * Focuses on promoting a new product or feature
 */
export const announcementLayout = ({ settings, colors, fonts }) => {
  const benefits = settings.keyBenefits || ["Benefit one", "Benefit two", "Benefit three"];
  
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
      
      {/* New Product Badge */}
      <div className="mb-3">
        <span 
          className="px-3 py-1 rounded-full text-xs font-bold"
          style={{ backgroundColor: colors.accent, color: 'white' }}
        >
          NEW
        </span>
        {settings.productName && (
          <span 
            className="ml-2 font-bold"
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.productName}
          </span>
        )}
      </div>
      
      {/* Header */}
      <h1 
        className="text-2xl font-bold mb-2" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "Introducing our new product"}
      </h1>
      
      <p 
        className="mb-5" 
        style={{ color: colors.text, fontFamily: fonts.secondary }}
      >
        {settings.subheadline || "Designed to solve your specific problems"}
      </p>
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="w-full md:w-1/2 md:pr-6 flex items-center justify-center">
          {settings.productImage ? (
            <img 
              src={settings.productImage} 
              alt={settings.productName || "Product"} 
              className="max-h-full rounded-lg shadow-lg" 
            />
          ) : (
            <div 
              className="w-full h-64 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <span className="text-6xl" style={{ color: colors.primary }}>
                🚀
              </span>
            </div>
          )}
        </div>
        
        {/* Benefits Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 
            className="font-bold mb-4" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            Key Benefits
          </h3>
          
          <div className="mb-5">
            {benefits.map((benefit, index) => (
              <BulletPoint 
                key={index} 
                text={benefit} 
                color={colors.accent} 
                bulletStyle="checkmark" 
              />
            ))}
          </div>
          
          {/* Availability */}
          {settings.availabilityInfo && (
            <div 
              className="p-3 rounded-lg mb-5"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <div 
                className="font-bold mb-1" 
                style={{ color: colors.text, fontFamily: fonts.primary }}
              >
                Availability:
              </div>
              <div style={{ color: colors.text, fontFamily: fonts.secondary }}>
                {settings.availabilityInfo}
              </div>
            </div>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Learn More"}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Showcase Layout
 * Emphasizes the product image with a large visual display
 */
export const showcaseLayout = ({ settings, colors, fonts }) => {
  const benefits = settings.keyBenefits || ["Benefit one", "Benefit two", "Benefit three"];
  
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
        {settings.headline || "Introducing our new product"}
      </h1>
      
      <div className="flex-1 flex flex-col">
        {/* Product Name Badge */}
        {settings.productName && (
          <div 
            className="py-2 px-4 rounded-lg inline-block mb-3 self-start"
            style={{ backgroundColor: colors.accent, color: 'white', fontFamily: fonts.primary }}
          >
            {settings.productName}
          </div>
        )}
        
        {/* Large Product Image */}
        <div className="flex-1 flex items-center justify-center my-4">
          {settings.productImage ? (
            <img 
              src={settings.productImage} 
              alt={settings.productName || "Product"} 
              className="max-h-full rounded-lg shadow-lg" 
            />
          ) : (
            <div 
              className="w-3/4 h-48 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <span className="text-6xl" style={{ color: colors.primary }}>
                🚀
              </span>
            </div>
          )}
        </div>
        
        {/* Benefits Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-3 rounded-lg text-center"
              style={{ backgroundColor: `${colors.primary}${10 + (index * 5)}` }}
            >
              <div 
                className="text-2xl mb-1"
                style={{ color: colors.accent }}
              >
                {index === 0 ? '⚡' : index === 1 ? '🔍' : '🛡️'}
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
        
        {/* Availability and CTA */}
        <div className="flex items-center justify-between">
          {settings.availabilityInfo ? (
            <div style={{ color: colors.text, fontFamily: fonts.secondary }}>
              {settings.availabilityInfo}
            </div>
          ) : (
            <div></div>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 text-white font-bold rounded-lg"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Learn More"}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Benefit Layout
 * Focuses on the benefits of the new product/feature
 */
export const benefitLayout = ({ settings, colors, fonts }) => {
  const benefits = settings.keyBenefits || ["Benefit one", "Benefit two", "Benefit three"];
  
  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-5">
        {/* Company Logo */}
        {settings.ownerAccountImage ? (
          <img 
            src={settings.ownerAccountImage} 
            alt={settings.companyName || "Company"} 
            className="h-10 object-contain" 
          />
        ) : (
          <div></div>
        )}
        
        {/* Product Badge */}
        <div 
          className="px-4 py-2 rounded-lg"
          style={{ backgroundColor: colors.accent, color: 'white' }}
        >
          <span className="text-sm font-bold" style={{ fontFamily: fonts.primary }}>
            {settings.productName ? `NEW: ${settings.productName}` : 'NEW PRODUCT'}
          </span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2 md:pr-6 flex flex-col justify-center">
          {/* Header */}
          <h1 
            className="text-2xl font-bold mb-2" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "Introducing our new product"}
          </h1>
          
          <p 
            className="mb-5" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "Designed to solve your specific problems"}
          </p>
          
          {/* Availability */}
          {settings.availabilityInfo && (
            <div 
              className="p-3 rounded-lg mb-4 inline-block"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <span 
                className="font-medium"
                style={{ color: colors.text, fontFamily: fonts.secondary }}
              >
                {settings.availabilityInfo}
              </span>
            </div>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Learn More"}
          </button>
        </div>
        
        {/* Right Side - Benefits */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div 
            className="p-5 rounded-lg"
            style={{ backgroundColor: `${colors.primary}10` }}
          >
            <h3 
              className="font-bold mb-4 text-center" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              Key Benefits
            </h3>
            
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="mb-3 p-3 rounded-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
              >
                <div className="flex items-center">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0" 
                    style={{ backgroundColor: colors.accent, color: 'white' }}
                  >
                    {index + 1}
                  </div>
                  <span style={{ color: colors.text, fontFamily: fonts.secondary }}>
                    {benefit}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Product Image (Small) */}
            {settings.productImage && (
              <div className="mt-4 flex justify-center">
                <img 
                  src={settings.productImage} 
                  alt={settings.productName || "Product"} 
                  className="h-16 rounded" 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};