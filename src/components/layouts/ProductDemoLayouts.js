// src/components/layouts/ProductDemoLayouts.js
import React from 'react';
import { BulletPoint } from './SharedLayouts';

/**
 * Feature Focus Layout
 * Designed for product demos and feature showcases
 */
export const featureFocus = ({ settings, colors, fonts }) => {
  const features = settings.productFeatures || ["Feature one", "Feature two", "Feature three"];
  
  return (
    <div className="h-full w-full flex flex-col p-6">
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
      
      <div className="flex-1 flex flex-col justify-center">
        {/* Header */}
        <h1 
          className="text-2xl font-bold mb-3" 
          style={{ color: colors.text, fontFamily: fonts.primary }}
        >
          {settings.headline || "See how our product streamlines your workflow"}
        </h1>
        
        {/* Subheader */}
        <p 
          className="text-lg mb-5" 
          style={{ color: colors.text, fontFamily: fonts.secondary }}
        >
          {settings.subheadline || "Experience our intuitive interface and powerful features"}
        </p>
        
        <div className="flex flex-1 items-center">
          {/* Product Image */}
          <div className="w-1/2 pr-6">
            {settings.productImage ? (
              <img 
                src={settings.productImage} 
                alt="Product Screenshot" 
                className="rounded-lg shadow-lg w-full" 
              />
            ) : (
              <div 
                className="rounded-lg w-full h-48 flex items-center justify-center" 
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <span style={{ color: colors.primary }}>Product Screenshot</span>
              </div>
            )}
          </div>
          
          {/* Features List */}
          <div className="w-1/2">
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
          </div>
        </div>
        
        {/* CTA Button */}
        <button 
          className="px-6 py-3 mt-5 text-white font-bold rounded-lg self-start"
          style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
        >
          {settings.ctaText || "Request a Demo"}
        </button>
      </div>
    </div>
  );
};

/**
 * Product Showcase Layout
 * Designed for product demos with larger image focus
 */
export const productShowcase = ({ settings, colors, fonts }) => {
  const features = settings.productFeatures || ["Feature one", "Feature two", "Feature three"];
  
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
        {settings.headline || "See how our product streamlines your workflow"}
      </h1>
      
      <div className="flex-1 flex flex-col">
        {/* Large Product Image */}
        <div className="flex-1 flex items-center justify-center my-4">
          {settings.productImage ? (
            <img 
              src={settings.productImage} 
              alt="Product Screenshot" 
              className="rounded-lg shadow-lg max-h-full max-w-full object-contain" 
            />
          ) : (
            <div 
              className="rounded-lg w-3/4 h-48 flex items-center justify-center" 
              style={{ backgroundColor: `${colors.primary}20` }}
            >
              <span style={{ color: colors.primary }}>Product Screenshot</span>
            </div>
          )}
        </div>
        
        {/* Features List - Horizontal */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 p-3 rounded-lg text-center"
            >
              <div 
                className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center" 
                style={{ backgroundColor: colors.accent }}
              >
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <p style={{ color: colors.text, fontFamily: fonts.secondary }}>{feature}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <button 
          className="px-6 py-3 text-white font-bold rounded-lg mx-auto"
          style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
        >
          {settings.ctaText || "Request a Demo"}
        </button>
      </div>
    </div>
  );
};