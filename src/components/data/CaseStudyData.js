// src/components/data/CaseStudyData.js

export const caseStudyData = {
    label: "Case Study",
    icon: "📊",
    description: "Showcase real results from a customer success story",
    recommendedLayout: "testimonialsLayout",
    headlinePlaceholder: "How [Company] achieved [specific result] with [Your Product]",
    subheadlinePlaceholder: "Learn how our solution delivered measurable results",
    ctaPlaceholder: "Read Full Case Study",
    ctaTip: "Entice viewers to learn the full story with specific results",
    fields: [
      {
        id: "clientLogo",
        type: "image",
        label: "Client Logo",
        tip: "Use client's logo (with permission) to build credibility"
      },
      {
        id: "clientName",
        type: "text",
        label: "Client Name",
        placeholder: "Enter client company name"
      },
      {
        id: "industryVertical",
        type: "text",
        label: "Industry/Vertical",
        placeholder: "E.g., Healthcare, Finance, Manufacturing"
      },
      {
        id: "keyResults",
        type: "list",
        label: "Key Results",
        itemLabel: "Result",
        description: "List measurable outcomes achieved",
        maxItems: 3,
        defaultItems: ["Result 1", "Result 2", "Result 3"]
      },
      {
        id: "testimonialQuote",
        type: "textarea",
        label: "Client Quote",
        placeholder: "Add a brief testimonial from the client",
        tip: "Keep it concise and focused on specific results"
      }
    ],
    layouts: [
      {
        id: "testimonialsLayout",
        label: "Testimonial Focus",
        preview: "Quote + Results"
      },
      {
        id: "resultsLayout",
        label: "Results Focus",
        preview: "Metrics + Logo"
      },
      {
        id: "splitLayout",
        label: "Split Layout",
        preview: "Logo + Results"
      }
    ],
    tips: [
      "Use specific, measurable results with numbers and percentages",
      "Include the client's logo to boost credibility",
      "Keep testimonial quotes authentic and results-focused",
      "Mention the industry or company size for relatability"
    ],
    industryTips: {
      saas: [
        "Highlight time-to-value and implementation speed",
        "Showcase ROI metrics and cost savings",
        "Include user adoption rates and satisfaction scores"
      ],
      healthcare: [
        "Focus on patient outcome improvements and care quality metrics",
        "Highlight compliance and risk reduction achievements",
        "Showcase staff efficiency gains and cost savings"
      ],
      technology: [
        "Emphasize performance improvements and technical metrics",
        "Showcase scalability and growth accommodation",
        "Include security enhancement and risk reduction metrics"
      ],
      professionalServices: [
        "Highlight efficiency gains and time savings",
        "Showcase client satisfaction improvements",
        "Focus on business outcome metrics and revenue impacts"
      ]
    }
  };