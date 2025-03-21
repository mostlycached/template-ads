// src/components/layouts/ThoughtLeadershipLayouts.js
import React from 'react';
import { BulletPoint } from './SharedLayouts';

/**
 * Expertise Layout
 * Focuses on the thought leader and their expertise
 */
export const expertiseLayout = ({ settings, colors, fonts }) => {
  const insights = settings.keyInsights || ["Insight one", "Insight two", "Insight three"];
  
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
        {/* Expert Side */}
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center md:pr-6">
          {settings.expertImage ? (
            <img 
              src={settings.expertImage} 
              alt={settings.expertName || "Expert"} 
              className="w-32 h-32 object-cover rounded-full mb-3" 
            />
          ) : (
            <div 
              className="w-32 h-32 rounded-full mb-3 flex items-center justify-center"
              style={{ backgroundColor: `${colors.primary}20` }}
            >
              <span className="text-4xl" style={{ color: colors.primary }}>👤</span>
            </div>
          )}
          
          <h3 
            className="text-lg font-bold text-center" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.expertName || "Expert Name"}
          </h3>
          
          <p 
            className="text-center mb-2" 
            style={{ color: `${colors.text}99`, fontFamily: fonts.secondary }}
          >
            {settings.expertTitle || "Expert Title"}
          </p>
          
          <div 
            className="mt-2 text-center text-sm px-3 py-1 rounded-full"
            style={{ backgroundColor: `${colors.accent}20`, color: colors.accent, fontFamily: fonts.secondary }}
          >
            THOUGHT LEADERSHIP
          </div>
        </div>
        
        {/* Content Side */}
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          {/* Topic Title */}
          <div className="mb-3">
            <span 
              className="text-sm font-bold"
              style={{ color: colors.accent, fontFamily: fonts.secondary }}
            >
              {settings.topicTitle || "INDUSTRY INSIGHTS"}
            </span>
          </div>
          
          {/* Header */}
          <h1 
            className="text-2xl font-bold mb-2" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "Our perspective on industry trends"}
          </h1>
          
          <p 
            className="mb-4" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "Expert analysis on the future of our industry"}
          </p>
          
          {/* Key Insights */}
          <div className="mb-5">
            {insights.map((insight, index) => (
              <BulletPoint 
                key={index} 
                text={insight} 
                color={colors.accent} 
                bulletStyle="circle" 
              />
            ))}
          </div>
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Read Our Analysis"}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Insight Layout
 * Emphasizes the key insights with a more graphic presentation
 */
export const insightLayout = ({ settings, colors, fonts }) => {
  const insights = settings.keyInsights || ["Insight one", "Insight two", "Insight three"];
  
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
      
      {/* Topic Badge */}
      <div className="mb-3">
        <span 
          className="px-3 py-1 rounded-full text-xs font-bold"
          style={{ backgroundColor: colors.accent, color: 'white' }}
        >
          {settings.topicTitle || "INDUSTRY INSIGHTS"}
        </span>
      </div>
      
      {/* Header */}
      <h1 
        className="text-2xl font-bold mb-2" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "Our perspective on industry trends"}
      </h1>
      
      <p 
        className="mb-5" 
        style={{ color: colors.text, fontFamily: fonts.secondary }}
      >
        {settings.subheadline || "Expert analysis on the future of our industry"}
      </p>
      
      <div className="flex-1 flex flex-col">
        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 flex-1">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg"
              style={{ backgroundColor: `${colors.primary}${10 + (index * 5)}` }}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: colors.accent, color: 'white' }}
              >
                {index + 1}
              </div>
              <p style={{ color: colors.text, fontFamily: fonts.secondary }}>
                {insight}
              </p>
            </div>
          ))}
        </div>
        
        {/* Expert Info and CTA */}
        <div className="flex items-center justify-between">
          {/* Expert Info */}
          <div className="flex items-center">
            {settings.expertImage ? (
              <img 
                src={settings.expertImage} 
                alt={settings.expertName || "Expert"} 
                className="w-12 h-12 object-cover rounded-full mr-3" 
              />
            ) : (
              <div 
                className="w-12 h-12 rounded-full mr-3 flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <span className="text-xl" style={{ color: colors.primary }}>👤</span>
              </div>
            )}
            <div>
              <h3 
                className="font-bold text-sm" 
                style={{ color: colors.text, fontFamily: fonts.primary }}
              >
                {settings.expertName || "Expert Name"}
              </h3>
              <p 
                className="text-xs" 
                style={{ color: `${colors.text}99`, fontFamily: fonts.secondary }}
              >
                {settings.expertTitle || "Expert Title"}
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 text-white font-bold rounded-lg"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Read Our Analysis"}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Trend Layout
 * Focuses on industry trend with expert commentary
 */
export const trendLayout = ({ settings, colors, fonts }) => {
  const insights = settings.keyInsights || ["Insight one", "Insight two", "Insight three"];
  
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
      
      {/* Topic Title and Expert */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <span 
            className="text-sm font-bold"
            style={{ color: colors.accent, fontFamily: fonts.secondary }}
          >
            {settings.topicTitle || "INDUSTRY TRENDS"}
          </span>
        </div>
        
        <div className="flex items-center">
          <span 
            className="mr-2 text-sm font-medium"
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            By:
          </span>
          <div className="flex items-center">
            {settings.expertImage ? (
              <img 
                src={settings.expertImage} 
                alt={settings.expertName || "Expert"} 
                className="w-8 h-8 object-cover rounded-full mr-2" 
              />
            ) : null}
            <span 
              className="font-bold"
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              {settings.expertName || "Expert Name"}
            </span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <h1 
          className="text-2xl font-bold mb-3" 
          style={{ color: colors.text, fontFamily: fonts.primary }}
        >
          {settings.headline || "The Future of Our Industry"}
        </h1>
        
        {/* Main Insight Card */}
        <div 
          className="p-5 rounded-lg mb-5"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}20, ${colors.accent}20)` 
          }}
        >
          <div 
            className="flex items-center mb-2"
            style={{ color: colors.text }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span 
              className="font-bold"
              style={{ fontFamily: fonts.primary }}
            >
              Key Trend
            </span>
          </div>
          <p 
            className="mb-0" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {insights[0] || "Major industry trend that will impact your business in the coming year."}
          </p>
        </div>
        
        {/* Supporting Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {insights.slice(1).map((insight, index) => (
            <div 
              key={index}
              className="p-3 rounded-lg bg-white bg-opacity-50"
              style={{ border: `1px solid ${colors.primary}30` }}
            >
              <div className="flex items-start">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0" 
                  style={{ backgroundColor: colors.accent, color: 'white' }}
                >
                  <span className="text-xs">{index + 2}</span>
                </div>
                <span style={{ color: colors.text, fontFamily: fonts.secondary }}>
                  {insight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Button */}
      <button 
        className="px-6 py-3 text-white font-bold rounded-lg self-start"
        style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
      >
        {settings.ctaText || "Read Full Analysis"}
      </button>
    </div>
  );
};