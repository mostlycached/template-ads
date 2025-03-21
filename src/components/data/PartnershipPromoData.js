// src/components/data/PartnershipPromoData.js

export const partnershipPromoData = {
    label: "Partnership Promotion",
    icon: "🤝",
    description: "Promote a partnership or integration between two companies",
    recommendedLayout: "partnerLayout",
    headlinePlaceholder: "Better together: [Your Company] + [Partner]",
    subheadlinePlaceholder: "Seamlessly integrate to enhance your workflow",
    ctaPlaceholder: "Explore the Integration",
    ctaTip: "Focus on the combined value proposition of both offerings",
    fields: [
      {
        id: "partnerName",
        type: "text",
        label: "Partner Name",
        placeholder: "Enter partner company name"
      },
      {
        id: "partnerLogo",
        type: "image",
        label: "Partner Logo",
        tip: "Include the partner company's logo for co-branding"
      },
      {
        id: "integrationBenefits",
        type: "list",
        label: "Integration Benefits",
        itemLabel: "Benefit",
        description: "List the benefits of using both solutions together",
        maxItems: 5,
        defaultItems: ["Streamlined workflow", "Data synchronization", "Enhanced reporting"]
      },
      {
        id: "integrationImage",
        type: "image",
        label: "Integration Image",
        tip: "Show a visual representation of the integration or both products working together"
      },
      {
        id: "compatibilityInfo",
        type: "text",
        label: "Compatibility Information",
        placeholder: "E.g., Works with all versions of [Product]",
        tip: "Clarify any compatibility requirements or limitations"
      }
    ],
    layouts: [
      {
        id: "partnerLayout",
        label: "Partner Focus",
        preview: "Logos + Benefits"
      },
      {
        id: "integrationLayout",
        label: "Integration Focus",
        preview: "Technical + Benefits"
      },
      {
        id: "combinedLayout",
        label: "Combined Value",
        preview: "Value Proposition"
      }
    ],
    tips: [
      "Emphasize the combined value proposition of both solutions",
      "Use both company logos for co-branding",
      "Highlight specific integration points and workflows",
      "Focus on the problems solved by the integration"
    ],
    industryTips: {
      saas: [
        "Emphasize data sync and workflow automation benefits",
        "Highlight time savings from reduced manual work",
        "Focus on the technical simplicity of the integration"
      ],
      healthcare: [
        "Emphasize patient care improvements from combined solutions",
        "Focus on security and compliance benefits",
        "Highlight staff efficiency gains and error reduction"
      ],
      technology: [
        "Emphasize technical architecture and API integration details",
        "Focus on performance improvements and scalability",
        "Highlight reduced development effort and maintenance"
      ],
      professionalServices: [
        "Emphasize improved client service delivery",
        "Focus on strategic benefits and competitive advantage",
        "Highlight enhanced reporting and analytics capabilities"
      ]
    }
  };