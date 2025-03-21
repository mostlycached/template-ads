// src/components/layouts/CaseStudyLayouts.js
import React from 'react';
import { BulletPoint } from './SharedLayouts';

/**
 * Testimonials Layout
 * Optimized for case studies and testimonials
 */
export const testimonialsLayout = ({ settings, colors, fonts }) => {
  const results = settings.keyResults || ["Result one", "Result two", "Result three"];
  
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
        className="text-xl font-bold mb-2" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "How our client achieved impressive results"}
      </h1>
      
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 md:pr-6 flex flex-col justify-center">
          {/* Client Info */}
          <div className="flex items-center mb-4">
            {settings.clientLogo ? (
              <img 
                src={settings.clientLogo} 
                alt={settings.clientName || "Client"} 
                className="h-16 mr-4" 
              />
            ) : (
              <div 
                className="w-16 h-16 rounded-lg mr-4 flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <span style={{ color: colors.primary }}>Logo</span>
              </div>
            )}
            <div>
              <h3 
                className="font-bold" 
                style={{ color: colors.text, fontFamily: fonts.primary }}
              >
                {settings.clientName || "Client Name"}
              </h3>
              <p 
                className="text-sm" 
                style={{ color: `${colors.text}99`, fontFamily: fonts.secondary }}
              >
                {settings.industryVertical || "Industry"}
              </p>
            </div>
          </div>
          
          {/* Testimonial Quote */}
          {settings.testimonialQuote && (
            <div 
              className="p-4 rounded-lg mb-6 relative"
              style={{ backgroundColor: `${colors.primary}15`, color: colors.text }}
            >
              <div 
                className="absolute text-5xl leading-none top-0 left-3 opacity-25"
                style={{ color: colors.primary }}
              >
                "
              </div>
              <p className="italic pl-6 pt-4" style={{ fontFamily: fonts.secondary }}>
                {settings.testimonialQuote}
              </p>
            </div>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Read Full Case Study"}
          </button>
        </div>
        
        {/* Results */}
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          <div 
            className="p-5 rounded-lg"
            style={{ backgroundColor: `${colors.accent}15` }}
          >
            <h3 
              className="font-bold mb-4" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              Key Results
            </h3>
            
            {results.map((result, index) => (
              <div 
                key={index} 
                className="mb-3 pb-3 border-b" 
                style={{ borderColor: `${colors.text}20` }}
              >
                <div className="flex items-center">
                  <div 
                    className="w-8 h-8 mr-3 rounded-full flex items-center justify-center flex-shrink-0" 
                    style={{ backgroundColor: colors.accent }}
                  >
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <span style={{ color: colors.text, fontFamily: fonts.secondary }}>
                    {result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Results Layout
 * Focused on metrics and results for case studies
 */
export const resultsLayout = ({ settings, colors, fonts }) => {
  const results = settings.keyResults || ["Result one", "Result two", "Result three"];
  
  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Top Bar with logos */}
      <div className="flex justify-between items-center mb-6">
        {/* Company Logo */}
        <div>
          {settings.ownerAccountImage && (
            <img 
              src={settings.ownerAccountImage} 
              alt={settings.companyName || "Company"} 
              className="h-10 object-contain" 
            />
          )}
        </div>
        
        {/* Client Logo */}
        <div className="flex items-center">
          <span 
            className="mr-2 text-sm"
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            Client:
          </span>
          {settings.clientLogo ? (
            <img 
              src={settings.clientLogo} 
              alt={settings.clientName || "Client"} 
              className="h-10" 
            />
          ) : (
            <span 
              className="font-medium"
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              {settings.clientName || "Client Name"}
            </span>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="mb-5">
          {settings.industryVertical && (
            <div className="mb-2">
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: `${colors.accent}30`, color: colors.accent }}
              >
                {settings.industryVertical}
              </span>
            </div>
          )}
          
          <h1 
            className="text-2xl font-bold" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "How our client achieved impressive results"}
          </h1>
          
          <p 
            className="text-lg" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "Learn how our solution delivered measurable results"}
          </p>
        </div>
        
        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {results.map((result, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg text-center"
              style={{ backgroundColor: `${colors.primary}${10 + (index * 5)}` }}
            >
              <div 
                className="text-3xl font-bold mb-1"
                style={{ color: colors.accent }}
              >
                {/* Extract numeric value if present */}
                {result.match(/\d+(%|x|\+)?/) ? result.match(/\d+(%|x|\+)?/)[0] : (index + 1)}
              </div>
              <div style={{ color: colors.text, fontFamily: fonts.secondary }}>
                {/* Remove numeric prefix if present */}
                {result.replace(/\d+(%|x|\+)?/, '').trim() || `Result ${index + 1}`}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial Quote */}
        {settings.testimonialQuote && (
          <div 
            className="p-4 rounded-lg mb-6"
            style={{ backgroundColor: `${colors.primary}15`, color: colors.text }}
          >
            <p className="italic" style={{ fontFamily: fonts.secondary }}>
              "{settings.testimonialQuote}"
            </p>
          </div>
        )}
      </div>
      
      {/* CTA Button */}
      <button 
        className="px-6 py-3 text-white font-bold rounded-lg"
        style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
      >
        {settings.ctaText || "Read Full Case Study"}
      </button>
    </div>
  );
};

/**
 * Impact Layout
 * Focuses on the most impressive impact metrics with visual emphasis
 */
export const impactLayout = ({ settings, colors, fonts }) => {
  const results = settings.keyResults || ["Result one", "Result two", "Result three"];
  
  // Extract the most impressive result for highlighting
  const mainResult = results[0] || "Impressive Result";
  
  // Attempt to extract numeric portion for emphasis
  const numericMatch = mainResult.match(/\d+(%|x|\+)?/);
  const numericValue = numericMatch ? numericMatch[0] : '';
  const resultText = numericMatch ? mainResult.replace(numericMatch[0], '').trim() : mainResult;
  
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
        {/* Main Impact Metric */}
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center p-4">
          <div 
            className="text-6xl font-bold mb-2" 
            style={{ color: colors.accent }}
          >
            {numericValue || '40%'}
          </div>
          <div 
            className="text-xl text-center mb-3"
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {resultText || 'Improvement'}
          </div>
          
          {/* Client Logo */}
          {settings.clientLogo ? (
            <div className="mt-4">
              <img 
                src={settings.clientLogo} 
                alt={settings.clientName || "Client"} 
                className="h-12 object-contain" 
              />
            </div>
          ) : (
            <div 
              className="mt-4 font-bold"
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              {settings.clientName || "Client Name"}
            </div>
          )}
        </div>
        
        {/* Case Study Content */}
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          {settings.industryVertical && (
            <div className="mb-2">
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: `${colors.accent}30`, color: colors.accent }}
              >
                {settings.industryVertical}
              </span>
            </div>
          )}
          
          <h1 
            className="text-2xl font-bold mb-3" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "How our client achieved impressive results"}
          </h1>
          
          {/* Additional Results */}
          <div className="mb-4">
            {results.slice(1).map((result, index) => (
              <div 
                key={index}
                className="flex items-center mb-2"
              >
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0" 
                  style={{ backgroundColor: colors.primary, color: 'white' }}
                >
                  <span className="text-xs">{index + 2}</span>
                </div>
                <span style={{ color: colors.text, fontFamily: fonts.secondary }}>
                  {result}
                </span>
              </div>
            ))}
          </div>
          
          {/* Testimonial Quote */}
          {settings.testimonialQuote && (
            <div 
              className="p-3 rounded-lg mb-4 text-sm italic"
              style={{ backgroundColor: `${colors.primary}10`, color: colors.text, fontFamily: fonts.secondary }}
            >
              "{settings.testimonialQuote}"
            </div>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Read Full Case Study"}
          </button>
        </div>
      </div>
    </div>
  );
};