// src/components/data/WebinarPromoData.js

export const webinarPromoData = {
    label: "Webinar/Event",
    icon: "📅",
    description: "Promote an upcoming webinar, workshop, or event",
    recommendedLayout: "eventLayout",
    headlinePlaceholder: "Join our webinar: [Compelling Topic]",
    subheadlinePlaceholder: "Learn how to [solve specific problem] in this exclusive session",
    ctaPlaceholder: "Register Now",
    ctaTip: "Create urgency with phrases like 'Limited Spots' or 'Register Now'",
    fields: [
      {
        id: "eventDate",
        type: "text",
        label: "Event Date/Time",
        placeholder: "E.g., June 15, 2025 | 1:00 PM ET"
      },
      {
        id: "eventType",
        type: "text",
        label: "Event Type",
        placeholder: "E.g., Webinar, Workshop, Conference"
      },
      {
        id: "speakerName",
        type: "text",
        label: "Speaker Name",
        placeholder: "Enter speaker's name"
      },
      {
        id: "speakerTitle",
        type: "text",
        label: "Speaker Title",
        placeholder: "E.g., Chief Technology Officer"
      },
      {
        id: "speakerImage",
        type: "image",
        label: "Speaker Image",
        tip: "Use a professional headshot of the speaker"
      },
      {
        id: "eventTopics",
        type: "list",
        label: "Key Topics",
        itemLabel: "Topic",
        description: "What attendees will learn",
        maxItems: 4,
        defaultItems: ["Topic 1", "Topic 2", "Topic 3"]
      }
    ],
    layouts: [
      {
        id: "eventLayout",
        label: "Event Focus",
        preview: "Date + Speaker"
      },
      {
        id: "speakerLayout",
        label: "Speaker Focus",
        preview: "Speaker + Topics"
      },
      {
        id: "contentLayout",
        label: "Content Focus",
        preview: "Topics + Date"
      }
    ],
    tips: [
      "Include the specific date and time with timezone",
      "Highlight the expertise of your speakers",
      "List 3-4 specific topics that will be covered",
      "Create a sense of exclusivity or limited availability"
    ],
    industryTips: {
      saas: [
        "Focus on practical takeaways attendees can implement immediately",
        "Highlight product demonstrations or sneak peeks at new features",
        "Showcase case studies or success stories from similar companies"
      ],
      healthcare: [
        "Emphasize continuing education credits if applicable",
        "Focus on compliance and regulatory updates",
        "Include patient care improvement outcomes"
      ],
      technology: [
        "Highlight cutting-edge topics and innovation",
        "Include technical deep dives and expert speakers",
        "Focus on practical implementation strategies"
      ],
      professionalServices: [
        "Emphasize networking opportunities with peers",
        "Focus on industry trends and market changes",
        "Include actionable strategies participants can apply immediately"
      ]
    }
  };