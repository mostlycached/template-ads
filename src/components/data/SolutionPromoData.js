// src/components/data/SolutionPromoData.js

export const solutionPromoData = {
    label: "Solution to Problem",
    icon: "🔧",
    description: "Focus on a specific pain point and your solution",
    recommendedLayout: "problemSolutionLayout",
    headlinePlaceholder: "Struggling with [pain point]?",
    subheadlinePlaceholder: "Discover how [solution] resolves this challenge",
    ctaPlaceholder: "Solve This Problem",
    ctaTip: "Connect CTA directly to resolving the specific pain point",
    fields: [
      {
        id: "painPoint",
        type: "textarea",
        label: "Pain Point Description",
        placeholder: "Describe the specific problem your audience faces",
        tip: "Be specific and show you understand their challenges"
      },
      {
        id: "solutionPoints",
        type: "list",
        label: "Solution Benefits",
        itemLabel: "Benefit",
        description: "How your solution addresses the pain point",
        maxItems: 4,
        defaultItems: ["Benefit 1", "Benefit 2", "Benefit 3"]
      },
      {
        id: "solutionImage",
        type: "image",
        label: "Solution Image",
        tip: "Visual representation of your solution or the problem being solved"
      },
      {
        id: "impactStatement",
        type: "text",
        label: "Impact Statement",
        placeholder: "E.g., Reduce [problem] by 80% within 30 days",
        tip: "Use specific metrics when possible"
      }
    ],
    layouts: [
      {
        id: "problemSolutionLayout",
        label: "Problem/Solution",
        preview: "Problem → Solution"
      },
      {
        id: "benefitsLayout",
        label: "Benefits Focus",
        preview: "Benefits List"
      },
      {
        id: "beforeAfter",
        label: "Before/After",
        preview: "Before → After"
      }
    ],
    tips: [
      "Clearly articulate the pain point in the customer's language",
      "Use contrast between the problem and solution states",
      "Include specific, measurable benefits",
      "Focus on outcomes rather than features"
    ],
    industryTips: {
      saas: [
        "Focus on workflow inefficiencies and time savings",
        "Highlight integration headaches and simplified solutions",
        "Emphasize data accessibility and reporting challenges"
      ],
      healthcare: [
        "Focus on patient care bottlenecks and solutions",
        "Highlight compliance risk mitigation",
        "Emphasize staff burnout reduction and efficiency gains"
      ],
      technology: [
        "Focus on security vulnerabilities and protection",
        "Highlight scalability challenges and solutions",
        "Emphasize maintenance burden reduction"
      ],
      professionalServices: [
        "Focus on client acquisition and retention challenges",
        "Highlight reporting inefficiencies and improved insights",
        "Emphasize time management and productivity bottlenecks"
      ]
    }
  };