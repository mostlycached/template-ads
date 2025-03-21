// src/components/data/ProductAnnouncementData.js

export const productAnnouncementData = {
    label: "Product Announcement",
    icon: "🚀",
    description: "Announce a new product, feature, or service",
    recommendedLayout: "announcementLayout",
    headlinePlaceholder: "Introducing [New Product/Feature]",
    subheadlinePlaceholder: "Designed to solve your specific problems",
    ctaPlaceholder: "Learn More",
    ctaTip: "Focus on discovery rather than immediate purchase for new products",
    fields: [
      {
        id: "productName",
        type: "text",
        label: "Product/Feature Name",
        placeholder: "Enter the name of your new product or feature"
      },
      {
        id: "productImage",
        type: "image",
        label: "Product Image",
        tip: "Use a clear, high-quality image of your product or feature"
      },
      {
        id: "keyBenefits",
        type: "list",
        label: "Key Benefits",
        itemLabel: "Benefit",
        description: "List the main benefits of your new product",
        maxItems: 5,
        defaultItems: ["Benefit 1", "Benefit 2", "Benefit 3"]
      },
      {
        id: "availabilityInfo",
        type: "text",
        label: "Availability Information",
        placeholder: "E.g., Available now, Coming this summer, Beta access",
        tip: "Be clear about when and how customers can access it"
      }
    ],
    layouts: [
      {
        id: "announcementLayout",
        label: "Announcement Focus",
        preview: "Product + Benefits"
      },
      {
        id: "showcaseLayout",
        label: "Product Showcase",
        preview: "Large Image + Benefits"
      },
      {
        id: "benefitLayout",
        label: "Benefits Focus",
        preview: "Benefits Grid"
      }
    ],
    tips: [
      "Create excitement with strong 'new' or 'introducing' language",
      "Focus on how the product solves specific customer problems",
      "Use high-quality product imagery when possible",
      "Be specific about availability and next steps"
    ],
    industryTips: {
      saas: [
        "Emphasize ease of implementation and minimal disruption",
        "Highlight integration with existing workflows and tools",
        "Focus on specific productivity or efficiency improvements"
      ],
      healthcare: [
        "Emphasize patient care improvements and clinical outcomes",
        "Highlight compliance and security features",
        "Focus on staff time savings and workflow improvements"
      ],
      technology: [
        "Emphasize technical specifications and performance improvements",
        "Highlight compatibility and integration capabilities",
        "Focus on innovation and competitive advantages"
      ],
      professionalServices: [
        "Emphasize business outcome improvements and ROI potential",
        "Highlight time savings and efficiency gains",
        "Focus on client experience enhancements and strategic benefits"
      ]
    }
  };