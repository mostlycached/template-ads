// src/components/data/ROICalculatorData.js

export const roiCalculatorData = {
    label: "ROI Calculator",
    icon: "🧮",
    description: "Promote a calculator tool that demonstrates potential value",
    recommendedLayout: "calculatorLayout",
    headlinePlaceholder: "Calculate your potential [savings/ROI/benefits]",
    subheadlinePlaceholder: "See how much you could [benefit] with our solution",
    ctaPlaceholder: "Calculate Your ROI",
    ctaTip: "Emphasize personalized results and potential value discovery",
    fields: [
      {
        id: "calculatorImage",
        type: "image",
        label: "Calculator Preview",
        tip: "Show an image of the calculator interface or results visualization"
      },
      {
        id: "calculatorDescription",
        type: "textarea",
        label: "Calculator Description",
        placeholder: "Brief description of what the calculator evaluates",
        tip: "Focus on the inputs and outputs of the calculator"
      },
      {
        id: "valueMetrics",
        type: "list",
        label: "Value Metrics",
        itemLabel: "Metric",
        description: "List what metrics the calculator evaluates",
        maxItems: 5,
        defaultItems: ["Cost savings", "Time savings", "Productivity gains"]
      },
      {
        id: "averageResults",
        type: "text",
        label: "Average Results Statement",
        placeholder: "E.g., Customers typically see 40% cost reduction",
        tip: "Include an impressive but credible average result"
      }
    ],
    layouts: [
      {
        id: "calculatorLayout",
        label: "Calculator Focus",
        preview: "Calculator + Metrics"
      },
      {
        id: "metricsLayout",
        label: "Metrics Focus",
        preview: "Value Metrics Grid"
      },
      {
        id: "resultsLayout",
        label: "Results Focus",
        preview: "Results + Description"
      }
    ],
    tips: [
      "Use specific, realistic metrics that resonate with your audience",
      "Include sample results to set expectations",
      "Make it clear what information the calculator needs",
      "Balance simplicity with meaningful analysis"
    ],
    industryTips: {
      saas: [
        "Focus on cost savings and efficiency gains",
        "Include subscription cost comparisons",
        "Highlight total cost of ownership calculations"
      ],
      healthcare: [
        "Focus on patient outcome improvements and care metric enhancements",
        "Include staff time savings and operational efficiencies",
        "Highlight compliance risk reduction value"
      ],
      technology: [
        "Focus on infrastructure cost savings and performance gains",
        "Include labor cost reduction and automation benefits",
        "Highlight security risk mitigation value"
      ],
      professionalServices: [
        "Focus on revenue potential and client value increases",
        "Include staff utilization improvements and efficiency gains",
        "Highlight business outcome improvements and strategic value"
      ]
    }
  };