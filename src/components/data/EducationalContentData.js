// src/components/data/EducationalContentData.js

export const educationalContentData = {
    label: "Educational Content",
    icon: "📚",
    description: "Promote guides, ebooks, or educational resources",
    recommendedLayout: "resourceLayout",
    headlinePlaceholder: "Learn how to master [specific skill/topic]",
    subheadlinePlaceholder: "Expert guide to understanding [topic] and improving [outcome]",
    ctaPlaceholder: "Get the Guide",
    ctaTip: "Focus on the value of learning or mastering the topic",
    fields: [
      {
        id: "contentType",
        type: "text",
        label: "Content Type",
        placeholder: "E.g., Guide, Ebook, White Paper, Report"
      },
      {
        id: "contentImage",
        type: "image",
        label: "Content Preview Image",
        tip: "Show a preview of the guide cover or relevant visual"
      },
      {
        id: "contentDescription",
        type: "textarea",
        label: "Content Description",
        placeholder: "Brief overview of what the content covers",
        tip: "Keep it concise and benefits-focused"
      },
      {
        id: "learningPoints",
        type: "list",
        label: "Learning Points",
        itemLabel: "Learning Point",
        description: "What readers will learn from this content",
        maxItems: 5,
        defaultItems: ["Learning point 1", "Learning point 2", "Learning point 3"]
      }
    ],
    layouts: [
      {
        id: "resourceLayout",
        label: "Resource Focus",
        preview: "Image + Learning Points"
      },
      {
        id: "learningLayout",
        label: "Learning Focus",
        preview: "Learning Points Grid"
      },
      {
        id: "contentPreview",
        label: "Content Preview",
        preview: "Cover + Description"
      }
    ],
    tips: [
      "Be specific about what readers will learn",
      "Include a visual preview of your content when possible",
      "Quantify the value (e.g., '5 strategies to improve...')",
      "Highlight expertise or credentials of the content creators"
    ],
    industryTips: {
      saas: [
        "Focus on practical how-to guides and implementation tips",
        "Include industry benchmarks and best practices",
        "Highlight case examples of successful implementation"
      ],
      healthcare: [
        "Focus on evidence-based practices and research findings",
        "Include compliance and regulatory guidance",
        "Emphasize patient care improvement outcomes"
      ],
      technology: [
        "Provide technical deep-dives with code samples or architecture diagrams",
        "Include step-by-step implementation guides",
        "Focus on solving specific technical challenges"
      ],
      professionalServices: [
        "Offer frameworks and methodologies that improve business processes",
        "Include templates and tools that can be immediately applied",
        "Focus on strategic insights that provide competitive advantage"
      ]
    }
  };