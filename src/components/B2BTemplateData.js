// src/components/B2BTemplateData.js

// Import all individual promotional objective data
import { productDemoData } from './data/ProductDemoData';
import { caseStudyData } from './data/CaseStudyData';
import { webinarPromoData } from './data/WebinarPromoData';
import { researchReportData } from './data/ResearchReportData';
import { solutionPromoData } from './data/SolutionPromoData';
import { trialOfferData } from './data/TrialOfferData';
import { roiCalculatorData } from './data/ROICalculatorData';
import { thoughtLeadershipData } from './data/ThoughtLeadershipData';
import { productAnnouncementData } from './data/ProductAnnouncementData';
import { educationalContentData } from './data/EducationalContentData';
import { partnershipPromoData } from './data/PartnershipPromoData';

// Combine all data into a single object
export const objectiveData = {
  productDemo: productDemoData,
  caseStudy: caseStudyData,
  webinarPromo: webinarPromoData,
  researchReport: researchReportData,
  solutionPromo: solutionPromoData,
  trialOffer: trialOfferData,
  roiCalculator: roiCalculatorData,
  thoughtLeadership: thoughtLeadershipData,
  productAnnouncement: productAnnouncementData,
  educationalContent: educationalContentData,
  partnershipPromo: partnershipPromoData
};

// Export individual data for direct imports
export {
  productDemoData,
  caseStudyData,
  webinarPromoData,
  researchReportData,
  solutionPromoData,
  trialOfferData,
  roiCalculatorData,
  thoughtLeadershipData,
  productAnnouncementData,
  educationalContentData,
  partnershipPromoData
};