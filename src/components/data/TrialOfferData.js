// src/components/data/TrialOfferData.js

export const trialOfferData = {
    label: "Trial Offer",
    icon: "🎁",
    description: "Promote a free trial or special offer for your product",
    recommendedLayout: "offerLayout",
    headlinePlaceholder: "Try [Product] free for [time period]",
    subheadlinePlaceholder: "Experience all premium features with no commitment",
    ctaPlaceholder: "Start Free Trial",
    ctaTip: "Keep it simple and action-oriented, emphasize 'free' or 'no risk'",
    fields: [
      {
        id: "offerDuration",
        type: "text",
        label: "Offer Duration",
        placeholder: "E.g., 14 Days, 30 Days, 3 Months"
      },
      {
        id: "offerImage",
        type: "image",
        label: "Offer/Product Image",
        tip: "Show the product or a visual representation of the offer"
      },
      {
        id: "offerInclusions",
        type: "list",
        label: "What's Included",
        itemLabel: "Inclusion",
        description: "List what's included in the trial",
        maxItems: 5,
        defaultItems: ["Full access to all features", "Premium support", "No credit card required"]
      },
      {
        id: "noRiskStatement",
        type: "text",
        label: "No-Risk Statement",
        placeholder: "E.g., No credit card required. Cancel anytime.",
        tip: "Emphasize the risk-free nature of the trial"
      }
    ],
    layouts: [
      {
        id: "offerLayout",
        label: "Offer Focus",
        preview: "Offer Details + Image"
      },
      {
        id: "valueLayout",
        label: "Value Focus",
        preview: "Value Props Grid"
      },
      {
        id: "urgencyLayout",
        label: "Urgency Focus",
        preview: "Limited Time + CTA"
      }
    ],
    tips: [
      "Be specific about the trial duration and what's included",
      "Emphasize 'no risk' aspects like 'no credit card required'",
      "Highlight the most valuable features included in the trial",
      "Create a sense of ease with phrases like 'quick setup' or 'instant access'"
    ],
    industryTips: {
      saas: [
        "Emphasize immediate access and quick setup",
        "Highlight full-feature access during trial period",
        "Include customer support and onboarding details"
      ],
      healthcare: [
        "Focus on HIPAA compliance and security assurances",
        "Emphasize implementation support and training",
        "Include references to client success stories"
      ],
      technology: [
        "Highlight technical support and implementation assistance",
        "Emphasize scalability testing opportunities",
        "Include data migration or integration support details"
      ],
      professionalServices: [
        "Focus on onboarding assistance and implementation support",
        "Emphasize customization options available during trial",
        "Include consultation or strategy session offers"
      ]
    }
  };