// src/components/data/ProductDemoData.js

export const productDemoData = {
    label: "Product Demo",
    icon: "🎮",
    description: "Showcase your product's features and functionality",
    recommendedLayout: "featureFocus",
    headlinePlaceholder: "See how [Product] streamlines your workflow",
    subheadlinePlaceholder: "Experience our intuitive interface and powerful features",
    ctaPlaceholder: "Request a Demo",
    ctaTip: "Emphasize 'seeing it in action' or 'experiencing' the product",
    fields: [
      {
        id: "productFeatures",
        type: "list",
        label: "Key Features",
        itemLabel: "Feature",
        description: "List 3-5 key features that demonstrate value",
        maxItems: 5,
        defaultItems: ["Feature 1", "Feature 2", "Feature 3"]
      },
      {
        id: "productImage",
        type: "image",
        label: "Product Screenshot",
        tip: "Use a high-quality screenshot showing your product in action"
      },
      {
        id: "productBenefits",
        type: "textarea",
        label: "Value Proposition",
        placeholder: "Explain how your product solves customer problems",
        tip: "Focus on outcomes, not just features"
      }
    ],
    layouts: [
      {
        id: "featureFocus",
        label: "Feature Focus",
        preview: "Image + Features"
      },
      {
        id: "productShowcase",
        label: "Product Showcase",
        preview: "Large Product Image"
      },
      {
        id: "splitLayout",
        label: "Split Layout",
        preview: "Image + Text Split"
      }
    ],
    tips: [
      "Show your product in context, not in isolation",
      "Highlight 3-5 key features that solve specific problems",
      "Use specific numbers or percentages when possible",
      "Include a screenshot that clearly shows your UI"
    ],
    industryTips: {
      saas: [
        "Emphasize ease of implementation and minimal training required",
        "Showcase integration capabilities with other popular tools",
        "Highlight cloud accessibility and security features"
      ],
      healthcare: [
        "Emphasize HIPAA compliance and security features",
        "Show how the product saves clinical time",
        "Focus on patient outcome improvements"
      ],
      technology: [
        "Highlight technical specifications and performance metrics",
        "Showcase scalability and enterprise-grade features",
        "Emphasize how it integrates with existing technology stacks"
      ],
      professionalServices: [
        "Focus on time-saving aspects and efficiency gains",
        "Showcase client management and reporting features",
        "Emphasize ROI and business outcome improvements"
      ]
    }
  };