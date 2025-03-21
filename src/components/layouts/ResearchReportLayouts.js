// src/components/layouts/ResearchReportLayouts.js
import React from 'react';
import { BulletPoint } from './SharedLayouts';

/**
 * Insights Layout
 * Focused on highlighting key statistics and findings
 */
export const insightsLayout = ({ settings, colors, fonts }) => {
  const findings = settings.keyFindings || ["Finding one", "Finding two", "Finding three"];
  
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
      
      {/* Report Label */}
      <div className="mb-3">
        <span 
          className="px-3 py-1 rounded-full text-xs font-bold"
          style={{ backgroundColor: colors.accent, color: 'white' }}
        >
          NEW RESEARCH
        </span>
      </div>
      
      {/* Header */}
      <h1 
        className="text-2xl font-bold mb-2" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "New Research: Key Industry Findings"}
      </h1>
      
      <p 
        className="text-lg mb-5" 
        style={{ color: colors.text, fontFamily: fonts.secondary }}
      >
        {settings.subheadline || "Get exclusive insights on industry trends"}
      </p>
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Key Findings Section */}
        <div className="w-full md:w-1/2 md:pr-6 flex flex-col justify-center">
          <h3 
            className="font-bold mb-4" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            Key Insights from {settings.reportTitle || "Our Latest Research"}
          </h3>
          
          <div className="mb-5">
            {findings.map((finding, index) => (
              <div 
                key={index}
                className="mb-4 p-3 rounded-lg"
                style={{ backgroundColor: `${colors.primary}${10 + (index * 5)}` }}
              >
                <div className="flex items-start">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0" 
                    style={{ backgroundColor: colors.accent, color: 'white' }}
                  >
                    {index + 1}
                  </div>
                  <span style={{ color: colors.text, fontFamily: fonts.secondary }}>
                    {finding}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Download the Report"}
          </button>
        </div>
        
        {/* Report Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          {settings.reportImage ? (
            <img 
              src={settings.reportImage} 
              alt="Report Cover" 
              className="max-h-full rounded-lg shadow-lg" 
            />
          ) : (
            <div 
              className="w-full h-64 rounded-lg flex flex-col items-center justify-center"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <div className="text-4xl mb-3" style={{ color: colors.primary }}>
                📊
              </div>
              <span style={{ color: colors.primary, fontFamily: fonts.primary }}>
                {settings.reportTitle || "2025 Industry Report"}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Report Layout
 * Focuses on the report cover and description
 */
export const reportLayout = ({ settings, colors, fonts }) => {
  const findings = settings.keyFindings || ["Finding one", "Finding two", "Finding three"];
  
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
        {/* Report Image Side */}
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center p-4">
          {settings.reportImage ? (
            <img 
              src={settings.reportImage} 
              alt="Report Cover" 
              className="max-h-full rounded-lg shadow-lg" 
            />
          ) : (
            <div 
              className="w-full h-64 rounded-lg flex flex-col items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary}30, ${colors.accent}30)` 
              }}
            >
              <div className="text-4xl mb-3" style={{ color: colors.primary }}>
                📊
              </div>
              <div
                className="text-lg font-bold text-center px-4"
                style={{ color: colors.primary, fontFamily: fonts.primary }}
              >
                {settings.reportTitle || "2025 Industry Report"}
              </div>
            </div>
          )}
        </div>
        
        {/* Content Side */}
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          {/* Report Label */}
          <div className="mb-3">
            <span 
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{ backgroundColor: colors.accent, color: 'white' }}
            >
              EXCLUSIVE RESEARCH
            </span>
          </div>
          
          {/* Header */}
          <h1 
            className="text-2xl font-bold mb-2" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "New Research: Key Industry Findings"}
          </h1>
          
          <p 
            className="text-lg mb-4" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "Get exclusive insights on industry trends"}
          </p>
          
          {/* Report Description */}
          {settings.reportDescription && (
            <div 
              className="p-4 rounded-lg mb-5"
              style={{ backgroundColor: `${colors.primary}10` }}
            >
              <p style={{ color: colors.text, fontFamily: fonts.secondary }}>
                {settings.reportDescription}
              </p>
            </div>
          )}
          
          {/* Sample Finding */}
          {findings[0] && (
            <div className="mb-5">
              <div className="flex items-center">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0" 
                  style={{ backgroundColor: colors.accent, color: 'white' }}
                >
                  <span className="text-xs">1</span>
                </div>
                <span 
                  className="font-medium"
                  style={{ color: colors.text, fontFamily: fonts.secondary }}
                >
                  Key finding: {findings[0]}
                </span>
              </div>
            </div>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Download the Report"}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Stat Highlight Layout
 * Makes a single compelling statistic the focal point
 */
export const statHighlight = ({ settings, colors, fonts }) => {
  const findings = settings.keyFindings || ["Finding one", "Finding two", "Finding three"];
  
  // Extract the most compelling statistic for highlighting
  const mainStat = findings[0] || "80%";
  
  // Attempt to extract numeric portion for emphasis
  const numericMatch = mainStat.match(/\d+(%|x|\+)?/);
  const numericValue = numericMatch ? numericMatch[0] : '80%';
  const statText = numericMatch ? mainStat.replace(numericMatch[0], '').trim() : 'of professionals';
  
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
      
      {/* Report Label */}
      <div className="mb-3">
        <span 
          className="px-3 py-1 rounded-full text-xs font-bold"
          style={{ backgroundColor: colors.accent, color: 'white' }}
        >
          {settings.reportTitle || "NEW RESEARCH"}
        </span>
      </div>
      
      {/* Header */}
      <h1 
        className="text-xl font-bold mb-3" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "New Research: Key Industry Findings"}
      </h1>
      
      {/* Main Statistic */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div 
          className="text-7xl font-bold mb-2" 
          style={{ color: colors.accent }}
        >
          {numericValue}
        </div>
        <div 
          className="text-xl mb-6 max-w-sm text-center"
          style={{ color: colors.text, fontFamily: fonts.primary }}
        >
          {statText}
        </div>
        
        {/* Additional Findings */}
        <div className="grid grid-cols-2 gap-4 mb-6 max-w-md w-full">
          {findings.slice(1, 3).map((finding, index) => (
            <div 
              key={index}
              className="p-3 rounded-lg text-center"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <span style={{ color: colors.text, fontFamily: fonts.secondary, fontSize: '0.9rem' }}>
                {finding}
              </span>
            </div>
          ))}
        </div>
        
        {/* Report Image (Small) */}
        {settings.reportImage && (
          <div className="mb-5">
            <img 
              src={settings.reportImage} 
              alt="Report Cover" 
              className="h-24 rounded shadow-sm" 
            />
          </div>
        )}
        
        {/* CTA Button */}
        <button 
          className="px-6 py-3 text-white font-bold rounded-lg"
          style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
        >
          {settings.ctaText || "Download the Report"}
        </button>
      </div>
    </div>
  );
};