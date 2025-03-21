// src/components/layouts/ROICalculatorLayouts.js
import React from 'react';
import { BulletPoint } from './SharedLayouts';

/**
 * Calculator Layout
 * Focuses on the calculator and potential results
 */
export const calculatorLayout = ({ settings, colors, fonts }) => {
  const metrics = settings.valueMetrics || ["Metric one", "Metric two", "Metric three"];
  
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
        {settings.headline || "Calculate Your Potential Savings"}
      </h1>
      
      <p 
        className="text-lg mb-5" 
        style={{ color: colors.text, fontFamily: fonts.secondary }}
      >
        {settings.subheadline || "See how much you could save with our solution"}
      </p>
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Calculator Image/Representation */}
        <div className="w-full md:w-1/2 md:pr-6 flex items-center justify-center">
          {settings.calculatorImage ? (
            <img 
              src={settings.calculatorImage} 
              alt="ROI Calculator" 
              className="max-h-full rounded-lg shadow-lg" 
            />
          ) : (
            <div 
              className="w-full h-64 rounded-lg flex items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary}20, ${colors.accent}20)` 
              }}
            >
              <div 
                className="text-center p-6"
                style={{ color: colors.primary }}
              >
                <div className="text-4xl mb-3">🧮</div>
                <div className="font-bold" style={{ fontFamily: fonts.primary }}>
                  ROI Calculator
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Calculator Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* Average Results */}
          {settings.averageResults && (
            <div 
              className="p-4 rounded-lg mb-5"
              style={{ backgroundColor: `${colors.accent}20` }}
            >
              <div 
                className="font-bold mb-1" 
                style={{ color: colors.text, fontFamily: fonts.primary }}
              >
                Average Customer Results:
              </div>
              <div style={{ color: colors.text, fontFamily: fonts.secondary }}>
                {settings.averageResults}
              </div>
            </div>
          )}
          
          {/* Value Metrics */}
          <div className="mb-5">
            <h3 
              className="font-bold mb-3" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              Our calculator evaluates:
            </h3>
            
            {metrics.map((metric, index) => (
              <BulletPoint 
                key={index} 
                text={metric} 
                color={colors.accent} 
                bulletStyle="checkmark" 
              />
            ))}
          </div>
          
          {/* Calculator Description */}
          {settings.calculatorDescription && (
            <p 
              className="mb-5" 
              style={{ color: colors.text, fontFamily: fonts.secondary }}
            >
              {settings.calculatorDescription}
            </p>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Calculate Your ROI"}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Metrics Layout
 * Emphasizes the metrics evaluated by the calculator
 */
export const metricsLayout = ({ settings, colors, fonts }) => {
  const metrics = settings.valueMetrics || ["Metric one", "Metric two", "Metric three"];
  
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
        {settings.headline || "Calculate Your Potential Savings"}
      </h1>
      
      <p 
        className="text-lg mb-5" 
        style={{ color: colors.text, fontFamily: fonts.secondary }}
      >
        {settings.subheadline || "See how much you could save with our solution"}
      </p>
      
      <div className="flex-1 flex flex-col">
        {/* Value Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 flex-1">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="p-5 rounded-lg flex flex-col justify-center items-center text-center"
              style={{ backgroundColor: `${colors.primary}${10 + (index * 5)}` }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: colors.accent, color: 'white' }}
              >
                <span className="text-2xl">
                  {index === 0 ? '💰' : index === 1 ? '⏱️' : '📈'}
                </span>
              </div>
              <h3 
                className="font-bold" 
                style={{ color: colors.text, fontFamily: fonts.primary }}
              >
                {metric}
              </h3>
            </div>
          ))}
        </div>
        
        {/* Average Results */}
        {settings.averageResults && (
          <div 
            className="p-4 rounded-lg mb-6 text-center"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <div 
              className="font-bold text-lg mb-1" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              {settings.averageResults}
            </div>
            {settings.calculatorDescription && (
              <div 
                className="text-sm" 
                style={{ color: colors.text, fontFamily: fonts.secondary }}
              >
                {settings.calculatorDescription}
              </div>
            )}
          </div>
        )}
        
        {/* CTA Button */}
        <button 
          className="px-6 py-3 text-white font-bold rounded-lg mx-auto"
          style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
        >
          {settings.ctaText || "Calculate Your ROI"}
        </button>
      </div>
    </div>
  );
};

/**
 * Results Layout
 * Shows potential results from the calculator
 */
export const resultsLayout = ({ settings, colors, fonts }) => {
  const metrics = settings.valueMetrics || ["Metric one", "Metric two", "Metric three"];
  
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
        {settings.headline || "Calculate Your Potential Savings"}
      </h1>
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Calculator Details */}
        <div className="w-full md:w-2/5 md:pr-6 flex flex-col justify-center">
          <p 
            className="mb-4" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "See how much you could save with our solution"}
          </p>
          
          {/* Calculator Description */}
          {settings.calculatorDescription && (
            <div 
              className="p-4 rounded-lg mb-5"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <p style={{ color: colors.text, fontFamily: fonts.secondary }}>
                {settings.calculatorDescription}
              </p>
            </div>
          )}
          
          {/* Metrics List */}
          <div className="mb-5">
            <h3 
              className="font-bold mb-3" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              What We Calculate:
            </h3>
            
            {metrics.map((metric, index) => (
              <BulletPoint 
                key={index} 
                text={metric} 
                color={colors.accent} 
                bulletStyle="checkmark" 
              />
            ))}
          </div>
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Calculate Your ROI"}
          </button>
        </div>
        
        {/* Results Display */}
        <div className="w-full md:w-3/5 flex flex-col items-center justify-center">
          {/* Results Card */}
          <div 
            className="w-full p-6 rounded-lg"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}30, ${colors.accent}30)` 
            }}
          >
            <h3 
              className="text-center font-bold mb-4" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              Sample Results
            </h3>
            
            {/* Average Metrics */}
            <div className="mb-6">
              <div 
                className="flex items-center justify-between p-3 rounded-lg mb-2"
                style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
              >
                <div style={{ color: colors.text, fontFamily: fonts.secondary }}>
                  Annual Cost Savings
                </div>
                <div 
                  className="font-bold" 
                  style={{ color: colors.accent, fontFamily: fonts.primary }}
                >
                  $150,000
                </div>
              </div>
              
              <div 
                className="flex items-center justify-between p-3 rounded-lg mb-2"
                style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
              >
                <div style={{ color: colors.text, fontFamily: fonts.secondary }}>
                  Time Savings
                </div>
                <div 
                  className="font-bold" 
                  style={{ color: colors.accent, fontFamily: fonts.primary }}
                >
                  20 hrs/week
                </div>
              </div>
              
              <div 
                className="flex items-center justify-between p-3 rounded-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
              >
                <div style={{ color: colors.text, fontFamily: fonts.secondary }}>
                  ROI
                </div>
                <div 
                  className="font-bold" 
                  style={{ color: colors.accent, fontFamily: fonts.primary }}
                >
                  285%
                </div>
              </div>
            </div>
            
            {/* Average Results Statement */}
            {settings.averageResults && (
              <div 
                className="text-center p-3 rounded-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
              >
                <div 
                  className="font-bold" 
                  style={{ color: colors.text, fontFamily: fonts.primary }}
                >
                  {settings.averageResults}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};