// src/components/data/ThoughtLeadershipData.js

export const thoughtLeadershipData = {
    label: "Thought Leadership",
    icon: "💡",
    description: "Establish authority with expert insights on industry trends",
    recommendedLayout: "expertiseLayout",
    headlinePlaceholder: "Our perspective on [industry trend/challenge]",
    subheadlinePlaceholder: "Expert analysis on the future of [industry/topic]",
    ctaPlaceholder: "Read Our Analysis",
    ctaTip: "Emphasize depth of expertise and unique insights",
    fields: [
      {
        id: "topicTitle",
        type: "text",
        label: "Topic Area",
        placeholder: "E.g., INDUSTRY TRENDS, MARKET ANALYSIS, FUTURE OF [INDUSTRY]"
      },
      {
        id: "expertName",
        type: "text",
        label: "Expert Name",
        placeholder: "Enter the author or expert's name"
      },
      {
        id: "expertTitle",
        type: "text",
        label: "Expert Title",
        placeholder: "E.g., Chief Strategy Officer, Industry Analyst"
      },
      {
        id: "expertImage",
        type: "image",
        label: "Expert Image",
        tip: "Use a professional headshot of the thought leader"
      },
      {
        id: "keyInsights",
        type: "list",
        label: "Key Insights",
        itemLabel: "Insight",
        description: "List major insights or predictions",
        maxItems: 5,
        defaultItems: ["Industry insight 1", "Key trend 2", "Strategic prediction 3"]
      }
    ],
    layouts: [
      {
        id: "expertiseLayout",
        label: "Expert Focus",
        preview: "Author + Insights"
      },
      {
        id: "insightLayout",
        label: "Insights Focus",
        preview: "Insights Grid"
      },
      {
        id: "trendLayout",
        label: "Trend Focus",
        preview: "Key Trend + Supporting Points"
      }
    ],
    tips: [
      "Establish credibility by highlighting the expert's experience or credentials",
      "Focus on forward-looking perspectives rather than basic information",
      "Take a clear position on industry issues or trends",
      "Include specific insights that demonstrate deep expertise"
    ],
    industryTips: {
      saas: [
        "Focus on emerging technology trends and future impacts",
        "Address changing customer expectations and experiences",
        "Provide perspective on market consolidation or expansion"
      ],
      healthcare: [
        "Address regulatory changes and compliance challenges",
        "Focus on patient care innovation and quality improvement",
        "Provide perspective on healthcare technology adoption"
      ],
      technology: [
        "Focus on emerging technologies and their business applications",
        "Address security trends and evolving threat landscapes",
        "Provide insights on technology adoption challenges and solutions"
      ],
      professionalServices: [
        "Focus on business transformation and change management",
        "Address talent acquisition and retention strategies",
        "Provide perspective on client relationship evolution"
      ]
    }
  };