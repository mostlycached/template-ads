// src/components/B2BTemplateLayouts.js

// Import all layout components
import { featureFocus, productShowcase } from './layouts/ProductDemoLayouts';
import { testimonialsLayout, resultsLayout } from './layouts/CaseStudyLayouts';
import { eventLayout, speakerLayout, contentLayout } from './layouts/WebinarPromoLayouts';
import { insightsLayout, reportLayout, statHighlight } from './layouts/ResearchReportLayouts';
import { problemSolutionLayout, benefitsLayout, beforeAfter } from './layouts/SolutionPromoLayouts';
import { offerLayout, valueLayout, urgencyLayout } from './layouts/TrialOfferLayouts';
import { calculatorLayout, metricsLayout, resultsLayout as roiResultsLayout } from './layouts/ROICalculatorLayouts';
import { expertiseLayout, insightLayout, trendLayout } from './layouts/ThoughtLeadershipLayouts';
import { announcementLayout, showcaseLayout, benefitLayout } from './layouts/ProductAnnouncementLayouts';
import { resourceLayout, learningLayout, contentPreview } from './layouts/EducationalContentLayouts';
import { partnerLayout, integrationLayout, combinedLayout } from './layouts/PartnershipPromoLayouts';

// Universal layout that can be used for multiple objectives
import { splitLayout } from './layouts/SharedLayouts';

// Export all layouts for use in the BullTemplate component
export {
  // Product Demo
  featureFocus,
  productShowcase,
  
  // Case Study
  testimonialsLayout,
  resultsLayout,
  
  // Webinar Promo
  eventLayout,
  speakerLayout,
  contentLayout,
  
  // Research Report
  insightsLayout,
  reportLayout,
  statHighlight,
  
  // Solution Promo
  problemSolutionLayout,
  benefitsLayout,
  beforeAfter,
  
  // Trial Offer
  offerLayout,
  valueLayout,
  urgencyLayout,
  
  // ROI Calculator
  calculatorLayout,
  metricsLayout,
  roiResultsLayout,
  
  // Thought Leadership
  expertiseLayout,
  insightLayout,
  trendLayout,
  
  // Product Announcement
  announcementLayout,
  showcaseLayout,
  benefitLayout,
  
  // Educational Content
  resourceLayout,
  learningLayout,
  contentPreview,
  
  // Partnership Promo
  partnerLayout,
  integrationLayout,
  combinedLayout,
  
  // Shared layouts
  splitLayout
};

// Helper components for use across layouts
export { BulletPoint } from './layouts/SharedLayouts';