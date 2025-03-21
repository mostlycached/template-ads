// src/components/layouts/EducationalContentLayouts.js
import React from 'react';
import { BulletPoint } from './SharedLayouts';

/**
 * Resource Layout
 * Focuses on educational content resources like guides or ebooks
 */
export const resourceLayout = ({ settings, colors, fonts }) => {
  const learningPoints = settings.learningPoints || ["Learning point one", "Learning point two", "Learning point three"];
  
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
      
      {/* Content Type Badge */}
      <div className="mb-3">
        <span 
          className="px-3 py-1 rounded-full text-xs font-bold"
          style={{ backgroundColor: colors.accent, color: 'white' }}
        >
          {settings.contentType || "GUIDE"}
        </span>
      </div>
      
      {/* Header */}
      <h1 
        className="text-2xl font-bold mb-2" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "Learn how to master this skill"}
      </h1>
      
      <p 
        className="mb-5" 
        style={{ color: colors.text, fontFamily: fonts.secondary }}
      >
        {settings.subheadline || "Expert guide to mastering this important skill"}
      </p>
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Content Image */}
        <div className="w-full md:w-2/5 flex items-center justify-center md:pr-6">
          {settings.contentImage ? (
            <img 
              src={settings.contentImage} 
              alt="Content Preview" 
              className="max-h-full rounded-lg shadow-lg" 
            />
          ) : (
            <div 
              className="w-full h-64 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2" style={{ color: colors.primary }}>
                  📚
                </div>
                <div style={{ color: colors.primary, fontFamily: fonts.primary }}>
                  {settings.contentType || "Guide"}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Learning Points */}
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          <div 
            className="p-5 rounded-lg mb-5"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <h3 
              className="font-bold mb-4" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              What You'll Learn
            </h3>
            
            {learningPoints.map((point, index) => (
              <BulletPoint 
                key={index} 
                text={point} 
                color={colors.accent} 
                bulletStyle="checkmark" 
              />
            ))}
          </div>
          
          {/* Content Description */}
          {settings.contentDescription && (
            <p 
              className="mb-5" 
              style={{ color: colors.text, fontFamily: fonts.secondary }}
            >
              {settings.contentDescription}
            </p>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Get the Guide"}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Learning Layout
 * Emphasizes the learning outcomes with a more visual layout
 */
export const learningLayout = ({ settings, colors, fonts }) => {
  const learningPoints = settings.learningPoints || ["Learning point one", "Learning point two", "Learning point three"];
  
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
        {settings.headline || "Learn how to master this skill"}
      </h1>
      
      <p 
        className="mb-5" 
        style={{ color: colors.text, fontFamily: fonts.secondary }}
      >
        {settings.subheadline || "Expert guide to mastering this important skill"}
      </p>
      
      <div className="flex-1 flex flex-col">
        {/* Learning Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 flex-1">
          {learningPoints.map((point, index) => (
            <div 
              key={index}
              className="p-5 rounded-lg flex flex-col items-center text-center"
              style={{ backgroundColor: `${colors.primary}${10 + (index * 5)}` }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: colors.accent }}
              >
                <span className="text-white text-lg font-bold">
                  {index + 1}
                </span>
              </div>
              <p style={{ color: colors.text, fontFamily: fonts.secondary }}>
                {point}
              </p>
            </div>
          ))}
        </div>
        
        {/* Content Info and CTA */}
        <div 
          className="p-4 rounded-lg flex items-center justify-between"
          style={{ backgroundColor: `${colors.primary}10` }}
        >
          <div>
            {settings.contentType && (
              <div 
                className="font-bold mb-1" 
                style={{ color: colors.text, fontFamily: fonts.primary }}
              >
                {settings.contentType}
              </div>
            )}
            {settings.contentDescription && (
              <div className="text-sm" style={{ color: colors.text, fontFamily: fonts.secondary }}>
                {settings.contentDescription.length > 60 
                  ? settings.contentDescription.substring(0, 60) + '...' 
                  : settings.contentDescription}
              </div>
            )}
          </div>
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 text-white font-bold rounded-lg"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Get the Guide"}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Content Preview Layout
 * Shows a preview of the content with a focus on the resource itself
 */
export const contentPreview = ({ settings, colors, fonts }) => {
  const learningPoints = settings.learningPoints || ["Learning point one", "Learning point two", "Learning point three"];
  
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
        {/* Left Side - Content Image and Type */}
        <div className="w-full md:w-1/2 md:pr-6 flex flex-col items-center justify-center">
          <div 
            className="mb-4 px-3 py-1 rounded-full text-xs font-bold"
            style={{ backgroundColor: colors.accent, color: 'white' }}
          >
            {settings.contentType || "GUIDE"}
          </div>
          
          {settings.contentImage ? (
            <img 
              src={settings.contentImage} 
              alt="Content Preview" 
              className="max-h-64 rounded-lg shadow-lg mb-4" 
            />
          ) : (
            <div 
              className="w-full h-64 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2" style={{ color: colors.primary }}>
                  📚
                </div>
              </div>
            </div>
          )}
          
          {/* Content Description */}
          {settings.contentDescription && (
            <div 
              className="p-3 rounded-lg text-center"
              style={{ backgroundColor: `${colors.primary}10` }}
            >
              <p 
                className="text-sm" 
                style={{ color: colors.text, fontFamily: fonts.secondary }}
              >
                {settings.contentDescription}
              </p>
            </div>
          )}
        </div>
        
        {/* Right Side - Content Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* Header */}
          <h1 
            className="text-2xl font-bold mb-2" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "Learn how to master this skill"}
          </h1>
          
          <p 
            className="mb-4" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "Expert guide to mastering this important skill"}
          </p>
          
          {/* Learning Points Preview */}
          <div className="mb-5">
            <h3 
              className="font-medium mb-2" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              Highlights:
            </h3>
            
            {learningPoints.slice(0, 3).map((point, index) => (
              <div 
                key={index}
                className="flex items-center mb-2"
              >
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0" 
                  style={{ backgroundColor: colors.accent, color: 'white' }}
                >
                  <span className="text-xs">
                    {index + 1}
                  </span>
                </div>
                <span 
                  className="text-sm" 
                  style={{ color: colors.text, fontFamily: fonts.secondary }}
                >
                  {point}
                </span>
              </div>
            ))}
            
            {learningPoints.length > 3 && (
              <div 
                className="text-sm font-medium" 
                style={{ color: colors.accent, fontFamily: fonts.secondary }}
              >
                + {learningPoints.length - 3} more topics...
              </div>
            )}
          </div>
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Get the Guide"}
          </button>
        </div>
      </div>
    </div>
  );
};