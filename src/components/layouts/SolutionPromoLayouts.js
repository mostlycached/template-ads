// src/components/layouts/SolutionPromoLayouts.js
import React from 'react';
import { BulletPoint } from './SharedLayouts';

/**
 * Problem Solution Layout
 * Focused on contrasting the problem and solution
 */
export const problemSolutionLayout = ({ settings, colors, fonts }) => {
  const benefits = settings.solutionPoints || ["Benefit one", "Benefit two", "Benefit three"];
  
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
        {settings.headline || "Struggling with this problem?"}
      </h1>
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Problem Side */}
        <div className="w-full md:w-1/2 md:pr-6 flex flex-col">
          <div 
            className="p-5 rounded-lg mb-4 flex-1"
            style={{ backgroundColor: `rgba(0,0,0,0.05)` }}
          >
            <h3 
              className="font-bold mb-3 flex items-center" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z" fill={colors.text} />
              </svg>
              The Problem
            </h3>
            
            <p 
              className="text-md mb-4" 
              style={{ color: colors.text, fontFamily: fonts.secondary }}
            >
              {settings.painPoint || "Companies frequently struggle with inefficient processes that waste time and resources, leading to decreased productivity and higher costs."}
            </p>
          </div>
          
          {/* Impact Statement */}
          {settings.impactStatement && (
            <div 
              className="p-3 rounded-lg mb-4 text-center font-bold"
              style={{ 
                backgroundColor: `${colors.accent}20`, 
                color: colors.text,
                fontFamily: fonts.primary 
              }}
            >
              {settings.impactStatement}
            </div>
          )}
        </div>
        
        {/* Solution Side */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div 
            className="p-5 rounded-lg flex-1"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <h3 
              className="font-bold mb-3 flex items-center" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill={colors.accent} />
              </svg>
              Our Solution
            </h3>
            
            <p 
              className="text-md mb-4" 
              style={{ color: colors.text, fontFamily: fonts.secondary }}
            >
              {settings.subheadline || "Our solution provides streamlined workflows that save time and reduce costs."}
            </p>
            
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
        </div>
      </div>
      
      {/* CTA Button */}
      <button 
        className="px-6 py-3 mt-5 text-white font-bold rounded-lg mx-auto"
        style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
      >
        {settings.ctaText || "Solve This Problem"}
      </button>
    </div>
  );
};

/**
 * Benefits Layout
 * Focuses on the benefits of the solution
 */
export const benefitsLayout = ({ settings, colors, fonts }) => {
  const benefits = settings.solutionPoints || ["Benefit one", "Benefit two", "Benefit three"];
  
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
        {/* Content Side */}
        <div className="w-full md:w-1/2 md:pr-6 flex flex-col justify-center">
          {/* Pain Point Question */}
          <h1 
            className="text-2xl font-bold mb-2" 
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
          
          {/* Impact Statement */}
          {settings.impactStatement && (
            <div 
              className="p-3 rounded-lg mb-5 font-bold inline-block"
              style={{ 
                backgroundColor: `${colors.accent}20`, 
                color: colors.text,
                fontFamily: fonts.primary 
              }}
            >
              {settings.impactStatement}
            </div>
          )}
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 mt-auto text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Solve This Problem"}
          </button>
        </div>
        
        {/* Benefits Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* Benefits Card */}
          <div 
            className="p-6 rounded-lg"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <h3 
              className="font-bold mb-4 text-center" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              Solution Benefits
            </h3>
            
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="mb-4 p-3 rounded-lg"
                style={{ backgroundColor: `${colors.primary}10` }}
              >
                <div className="flex items-center">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0" 
                    style={{ backgroundColor: colors.accent, color: 'white', fontFamily: fonts.primary }}
                  >
                    {index + 1}
                  </div>
                  <span style={{ color: colors.text, fontFamily: fonts.secondary }}>
                    {benefit}
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
 * Before After Layout
 * Visually contrasts the before and after states
 */
export const beforeAfter = ({ settings, colors, fonts }) => {
  const benefits = settings.solutionPoints || ["Benefit one", "Benefit two", "Benefit three"];
  
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
        {settings.headline || "Transform your business processes"}
      </h1>
      
      <p 
        className="text-lg mb-5" 
        style={{ color: colors.text, fontFamily: fonts.secondary }}
      >
        {settings.subheadline || "See the difference our solution makes"}
      </p>
      
      <div className="flex-1 flex flex-col">
        {/* Before/After Container */}
        <div className="flex flex-col md:flex-row flex-1 mb-6">
          {/* Before Side */}
          <div 
            className="w-full md:w-1/2 p-5 md:rounded-l-lg"
            style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
          >
            <div className="flex items-center mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z" fill={colors.text} />
              </svg>
              <h3 
                className="font-bold" 
                style={{ color: colors.text, fontFamily: fonts.primary }}
              >
                BEFORE
              </h3>
            </div>
            
            <p 
              className="mb-3" 
              style={{ color: colors.text, fontFamily: fonts.secondary }}
            >
              {settings.painPoint || "Inefficient processes waste time and resources, leading to decreased productivity and higher costs."}
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8zm3.5-9.5l-6.5 6.5-3.5-3.5 1.41-1.41 2.09 2.09L14.09 9l1.41 1.5z" fill="rgba(0,0,0,0.5)" />
                </svg>
                <span style={{ color: colors.text, fontFamily: fonts.secondary }}>
                  Time-consuming manual processes
                </span>
              </li>
              <li className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8zm3.5-9.5l-6.5 6.5-3.5-3.5 1.41-1.41 2.09 2.09L14.09 9l1.41 1.5z" fill="rgba(0,0,0,0.5)" />
                </svg>
                <span style={{ color: colors.text, fontFamily: fonts.secondary }}>
                  High error rates and rework
                </span>
              </li>
              <li className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8zm3.5-9.5l-6.5 6.5-3.5-3.5 1.41-1.41 2.09 2.09L14.09 9l1.41 1.5z" fill="rgba(0,0,0,0.5)" />
                </svg>
                <span style={{ color: colors.text, fontFamily: fonts.secondary }}>
                  Limited visibility and reporting
                </span>
              </li>
            </ul>
          </div>
          
          {/* After Side */}
          <div 
            className="w-full md:w-1/2 p-5 md:rounded-r-lg"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <div className="flex items-center mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill={colors.accent} />
              </svg>
              <h3 
                className="font-bold" 
                style={{ color: colors.text, fontFamily: fonts.primary }}
              >
                AFTER
              </h3>
            </div>
            
            <p 
              className="mb-3" 
              style={{ color: colors.text, fontFamily: fonts.secondary }}
            >
              {settings.subheadline || "Streamlined workflows that save time and reduce costs."}
            </p>
            
            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill={colors.accent} />
                  </svg>
                  <span style={{ color: colors.text, fontFamily: fonts.secondary }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Impact Statement */}
        {settings.impactStatement && (
          <div 
            className="p-3 rounded-lg mb-4 text-center font-bold"
            style={{ 
              backgroundColor: `${colors.accent}20`, 
              color: colors.text,
              fontFamily: fonts.primary 
            }}
          >
            {settings.impactStatement}
          </div>
        )}
        
        {/* Solution Image */}
        {settings.solutionImage && (
          <div className="flex justify-center mb-4">
            <img 
              src={settings.solutionImage} 
              alt="Solution" 
              className="h-20 object-contain" 
            />
          </div>
        )}
        
        {/* CTA Button */}
        <button 
          className="px-6 py-3 text-white font-bold rounded-lg mx-auto"
          style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
        >
          {settings.ctaText || "Transform Your Business"}
        </button>
      </div>
    </div>
  );
};