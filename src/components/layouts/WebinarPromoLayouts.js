// src/components/layouts/WebinarPromoLayouts.js
import React from 'react';
import { BulletPoint } from './SharedLayouts';

/**
 * Event Layout
 * Designed for webinar and event promotions
 */
export const eventLayout = ({ settings, colors, fonts }) => {
  const topics = settings.eventTopics || ["Topic one", "Topic two", "Topic three"];
  
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
      
      {/* Event Type Badge */}
      <div className="mb-3">
        <span 
          className="px-3 py-1 rounded-full text-xs font-bold"
          style={{ backgroundColor: colors.accent, color: 'white' }}
        >
          {settings.eventType || "WEBINAR"}
        </span>
      </div>
      
      {/* Header */}
      <h1 
        className="text-2xl font-bold mb-2" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "Join our upcoming webinar"}
      </h1>
      
      <p 
        className="text-lg mb-4" 
        style={{ color: colors.text, fontFamily: fonts.secondary }}
      >
        {settings.subheadline || "Learn valuable insights from industry experts"}
      </p>
      
      {/* Date/Time */}
      {settings.eventDate && (
        <div 
          className="flex items-center mb-4"
          style={{ color: colors.text }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" fill={colors.accent} />
          </svg>
          <span className="ml-2" style={{ fontFamily: fonts.secondary }}>
            {settings.eventDate}
          </span>
        </div>
      )}
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Speaker Info */}
        <div className="w-full md:w-1/2 md:pr-6 flex flex-col justify-center">
          <h3 
            className="font-bold mb-3" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            Featuring
          </h3>
          
          <div className="flex items-center mb-6">
            {settings.speakerImage ? (
              <img 
                src={settings.speakerImage} 
                alt={settings.speakerName || "Speaker"} 
                className="w-16 h-16 object-cover rounded-full mr-4" 
              />
            ) : (
              <div 
                className="w-16 h-16 rounded-full mr-4 flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <span style={{ color: colors.primary }}>👤</span>
              </div>
            )}
            <div>
              <h4 
                className="font-bold" 
                style={{ color: colors.text, fontFamily: fonts.primary }}
              >
                {settings.speakerName || "Speaker Name"}
              </h4>
              <p 
                className="text-sm" 
                style={{ color: `${colors.text}99`, fontFamily: fonts.secondary }}
              >
                {settings.speakerTitle || "Speaker Title"}
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 text-white font-bold rounded-lg self-start mt-auto"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Register Now"}
          </button>
        </div>
        
        {/* Topics */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div 
            className="p-5 rounded-lg"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <h3 
              className="font-bold mb-4" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              What You'll Learn
            </h3>
            
            {topics.map((topic, index) => (
              <BulletPoint 
                key={index} 
                text={topic} 
                color={colors.accent} 
                bulletStyle="checkmark" 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Speaker Focus Layout
 * Highlights the speaker for webinar/event promotions
 */
export const speakerLayout = ({ settings, colors, fonts }) => {
  const topics = settings.eventTopics || ["Topic one", "Topic two", "Topic three"];
  
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
        {/* Speaker Focus */}
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center md:pr-6 mb-6 md:mb-0">
          {settings.speakerImage ? (
            <img 
              src={settings.speakerImage} 
              alt={settings.speakerName || "Speaker"} 
              className="w-48 h-48 object-cover rounded-full mb-4" 
            />
          ) : (
            <div 
              className="w-48 h-48 rounded-full mb-4 flex items-center justify-center"
              style={{ backgroundColor: `${colors.primary}20` }}
            >
              <span className="text-5xl" style={{ color: colors.primary }}>👤</span>
            </div>
          )}
          
          <h3 
            className="text-xl font-bold text-center" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.speakerName || "Speaker Name"}
          </h3>
          
          <p 
            className="text-center mb-2" 
            style={{ color: `${colors.text}99`, fontFamily: fonts.secondary }}
          >
            {settings.speakerTitle || "Speaker Title"}
          </p>
          
          {/* Event Type Badge */}
          <div className="mt-2">
            <span 
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{ backgroundColor: colors.accent, color: 'white' }}
            >
              {settings.eventType || "WEBINAR"}
            </span>
          </div>
        </div>
        
        {/* Event Info */}
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          {/* Header */}
          <h1 
            className="text-2xl font-bold mb-2" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            {settings.headline || "Join our upcoming webinar"}
          </h1>
          
          <p 
            className="mb-4" 
            style={{ color: colors.text, fontFamily: fonts.secondary }}
          >
            {settings.subheadline || "Learn valuable insights from industry experts"}
          </p>
          
          {/* Date/Time */}
          {settings.eventDate && (
            <div 
              className="flex items-center mb-4"
              style={{ color: colors.text }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" fill={colors.accent} />
              </svg>
              <span className="ml-2" style={{ fontFamily: fonts.secondary }}>
                {settings.eventDate}
              </span>
            </div>
          )}
          
          <div 
            className="p-5 rounded-lg mb-4"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <h3 
              className="font-bold mb-3" 
              style={{ color: colors.text, fontFamily: fonts.primary }}
            >
              What You'll Learn
            </h3>
            
            {topics.map((topic, index) => (
              <BulletPoint 
                key={index} 
                text={topic} 
                color={colors.accent} 
                bulletStyle="checkmark" 
              />
            ))}
          </div>
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 text-white font-bold rounded-lg self-start"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Register Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Content Focus Layout
 * Emphasizes webinar/event topics with clear date display
 */
export const contentLayout = ({ settings, colors, fonts }) => {
  const topics = settings.eventTopics || ["Topic one", "Topic two", "Topic three"];
  
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
      
      {/* Event Type & Date Section */}
      <div className="flex items-center mb-4">
        <div 
          className="px-4 py-3 rounded-l-lg text-center"
          style={{ backgroundColor: colors.accent, color: 'white' }}
        >
          <div className="text-xs font-bold" style={{ fontFamily: fonts.primary }}>
            {settings.eventType || "WEBINAR"}
          </div>
        </div>
        
        {settings.eventDate ? (
          <div 
            className="px-4 py-3 flex-1 rounded-r-lg"
            style={{ backgroundColor: `${colors.primary}15`, color: colors.text }}
          >
            <div className="font-bold" style={{ fontFamily: fonts.primary }}>
              {settings.eventDate}
            </div>
          </div>
        ) : (
          <div 
            className="px-4 py-3 flex-1 rounded-r-lg"
            style={{ backgroundColor: `${colors.primary}15`, color: colors.text }}
          >
            <div className="font-bold" style={{ fontFamily: fonts.primary }}>
              Coming Soon
            </div>
          </div>
        )}
      </div>
      
      {/* Header */}
      <h1 
        className="text-2xl font-bold mb-2" 
        style={{ color: colors.text, fontFamily: fonts.primary }}
      >
        {settings.headline || "Join our upcoming webinar"}
      </h1>
      
      <p 
        className="text-lg mb-5" 
        style={{ color: colors.text, fontFamily: fonts.secondary }}
      >
        {settings.subheadline || "Learn valuable insights from industry experts"}
      </p>
      
      <div className="flex-1 flex flex-col">
        {/* Key Topics Section */}
        <div 
          className="p-5 rounded-lg mb-5 flex-1"
          style={{ backgroundColor: `${colors.primary}10` }}
        >
          <h3 
            className="font-bold mb-3 text-center" 
            style={{ color: colors.text, fontFamily: fonts.primary }}
          >
            Key Topics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="flex items-start p-3 rounded-lg"
                style={{ backgroundColor: `${colors.primary}15` }}
              >
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0" 
                  style={{ backgroundColor: colors.accent, color: 'white' }}
                >
                  {index + 1}
                </div>
                <span 
                  style={{ color: colors.text, fontFamily: fonts.secondary }}
                  className="flex-1"
                >
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Speaker & CTA Section */}
        <div className="flex items-center justify-between">
          {/* Speaker Quick Info */}
          <div className="flex items-center">
            {settings.speakerImage ? (
              <img 
                src={settings.speakerImage} 
                alt={settings.speakerName || "Speaker"} 
                className="w-12 h-12 object-cover rounded-full mr-3" 
              />
            ) : (
              <div 
                className="w-12 h-12 rounded-full mr-3 flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <span style={{ color: colors.primary }}>👤</span>
              </div>
            )}
            <div>
              <h4 
                className="font-bold text-sm" 
                style={{ color: colors.text, fontFamily: fonts.primary }}
              >
                {settings.speakerName || "Speaker Name"}
              </h4>
              <p 
                className="text-xs" 
                style={{ color: `${colors.text}99`, fontFamily: fonts.secondary }}
              >
                {settings.speakerTitle || "Speaker Title"}
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <button 
            className="px-6 py-3 text-white font-bold rounded-lg"
            style={{ backgroundColor: colors.button, fontFamily: fonts.primary }}
          >
            {settings.ctaText || "Register Now"}
          </button>
        </div>
      </div>
    </div>
  );
};