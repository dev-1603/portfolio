import type { WorkExperience } from '$lib/types/portfolio';

export const workExperience: WorkExperience[] = [
  {
    id: 'sde-2-applore',
    title: 'Software Development Engineer - 2',
    company: 'Applore Technologies',
    location: 'Bhubaneswar, India (Remote)',
    duration: 'Oct 2024 - Present',
    startDate: '2024-10',
    current: true,
    description: 'Architected a "Zero-Redeploy" multi-tenant e-commerce ecosystem for 5 major US telecom brands. Engineered a headless micro-frontend architecture driven by AWS Lambda and runtime feature flags to enable instant, independent brand scaling.',
    roles: [
      'Orchestrated the architectural vision for a white-label MVNO and e-commerce platform, enabling isolated scaling for multiple US telecom brands on a unified core.',
      'Partnered closely with Project Managers and Design Heads to translate complex PRDs into actionable technical roadmaps, defining precise feature delivery estimates and finalizing user stories.',
      'Designed a "Zero-Redeploy" vendor system leveraging runtime configuration and feature flags, allowing tenants to instantly customize storefront templates, UI configurations, and feature sets.',
      'Architected a headless synchronization engine between Shopware and Strapi CMS, utilizing AWS Lambda workflows and DynamoDB indexing to decouple frontend delivery from complex catalog logic.',
      'Mentored peer and junior engineers through rigorous technical grooming and code reviews, streamlining development cycles to maintain maximum team efficiency.',
      'Defined the technical strategy for Vue 2 to Vue 3 Composition API migrations across the entire product line, resulting in cleaner Pinia state management and ~40% performance optimization.'
    ],
    achievements: [
      'Successfully delivered a high-performance, multi-tenant e-commerce core from zero to production for 5 major US telecom brands.',
      'Eliminated cross-brand redeployments by engineering a highly dynamic, configuration-driven micro-frontend architecture combining Vue.js and React.',
      'Established a versioned REST API layer with strict tenant-scoped authorization, supporting rapid product expansion across 15+ micro-services.',
      'Automated catalog propagation across all brands without frontend code changes via an API-first headless integration layer.'
    ],
    technologies: ['Vue.js', 'React.js', 'AWS Lambda', 'DynamoDB', 'Shopware', 'Strapi', 'Pinia', 'TypeScript'],
    highlights: ['Multi-tenant Architecture', 'Template-based applications', 'Zero-Redeploy Systems', 'Headless CMS', 'Vue/React Integration'],
    majorProjects: [
      {
        name: 'Bespoke MVNO Storefront Platform',
        description: 'Custom-built storefronts for US telecom carriers like AT&T, Verizon, and Lyca Mobile, where each client owned the feature set, policies, and UX flows. Built on a shared MSP and device store foundation using a micro-frontend architecture with Vue.js and React.'
      },
      {
        name: 'Self-Serve Multi-Tenant MVNE Platform',
        description: 'An in-house white-label platform where tenants onboard by selecting from a predefined set of templates, page layouts, and features. All supported themes and variants are defined by the platform — tenants configure their storefront through a structured onboarding flow with no custom development needed.'
      }
    ]
  },
  {
    id: 'senior-swe-gate-ai',
    title: 'Senior Software Engineer',
    company: 'Gate AI Pvt Ltd',
    location: 'Chennai, India (Remote)',
    duration: 'Dec 2023 - Sept 2024',
    startDate: '2023-12',
    endDate: '2024-09',
    current: false,
    description: 'Spearheaded the 0-to-1 design of an enterprise GenAI orchestration platform. Architected a provider-agnostic LLM gateway and centralized IAM portal with strict multi-tenant data isolation and fine-grained RBAC.',
    roles: [
      'Drove the architectural solutioning of PRD requirements, conducting technical grooming sessions to break down high-level business goals into scalable production features.',
      'Engineered the "Celestial Auth Portal," a centralized authentication layer utilizing JWT and OAuth2 to manage secure, enterprise-grade access across the entire platform ecosystem.',
      'Designed a provider-agnostic LLM gateway that abstracted model complexity, allowing seamless swapping of AI models (Anthropic, OpenAI, Gemini) without impacting client-side integrations.',
      'Developed a high-scale Control Plane in Node.js (Express/Sequelize) to orchestrate asynchronous AI workflows, document analysis, and high-speed streaming interactions.',
      'Implemented strict Data Loss Prevention (DLP) protocols and fine-grained RBAC to guarantee absolute data isolation within shared and closed multi-tenant chat environments.'
    ],
    achievements: [
      'Spearheaded the conceptualization and 0-to-1 delivery of an enterprise GenAI orchestration platform, scaling it from a rough MVP to a production-ready V1.',
      'Reduced feature time-to-market by 30% by developing a dynamic Component Library and modular Layout Builder utilized across all tenant frontends.',
      'Successfully integrated complex AI interaction capabilities, including public/private model segmentation and real-time sensitive data monitoring.',
      'Built a comprehensive Super Admin infrastructure for tenant onboarding, MIS reporting, and platform oversight.'
    ],
    technologies: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'LangChain', 'Tailwind CSS', 'JWT/OAuth'],
    highlights: ['LLM Orchestration', 'Identity Management', 'SaaS Data Isolation', 'Provider-Agnostic Gateway'],
    majorProjects: [
      {
        name: 'Multi-Tenant Auth & Identity Gateway',
        description: 'Centralised authentication service across the Gate AI ecosystem. Every request passed through a custom authoriser that verified tokens, resolved tenant and user identity, and injected context headers so downstream services could trust the caller without re-validating.'
      },
      {
        name: 'Provider-Agnostic AI Chat Platform',
        description: 'Multi-tenant chat application with support for multiple LLM providers, document analysis, and per-tenant isolation. Included DLP and PII guards to prevent sensitive data from leaving the platform. RBAC and feature flags were configurable per tenant, controlled entirely from the super admin layer.'
      },
      {
        name: 'Super Admin & Tenant Management Console',
        description: 'Internal dashboard for platform-wide operations — tenant onboarding, feature flag management, RBAC configuration,customer-support, and MIS reporting. Maintained a strict separation between host-level data and per-tenant data.'
      }
    ]
  },
  {
    id: 'senior-swe-geekyants',
    title: 'Senior Software Engineer',
    company: 'Geekyants',
    location: 'Bengaluru, India (Remote)',
    duration: 'Sept 2021 - Nov 2023',
    startDate: '2021-09',
    endDate: '2023-11',
    current: false,
    description: 'Worked across a 4-product fintech ecosystem serving 10,000+ active investors — covering an investment platform, advisory console, CMS, and the event-driven backend tying them together on shared GCP infrastructure.',
    roles: [
      'Collaborated directly with the CTO, Lead Designers, and DevOps to finalise product decisions and ship features end-to-end.',
      'Architected a high-concurrency investment platform built for real-time portfolio valuations and instant deposit/withdrawal flows.',
      'Built an event-driven content architecture using GCP Pub/Sub to handle heavy data jobs and automated email workflows.',
      'Designed an RBAC framework across the advisory console to deliver dynamic, role-specific capabilities without separate builds per role.',
      'Led adoption of a centralised state management pattern and set up deployment pipelines using Docker, Kubernetes, and GitLab CI.'
    ],
    achievements: [
      'Built a CMS with a two-step approval workflow, live content preview, and custom syntax generation.',
      'Kept independent shipping cycles for four products while sharing the same underlying GCP infrastructure.',
      'Delivered MIS reporting and client portfolio management tools for financial advisors — covering portfolio breakdown, transaction history, and fund rebalancing views.'
    ],
    technologies: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Node.js', 'Firebase', 'GCP', 'PostgreSQL', 'Docker', 'Kubernetes', 'Pinia', 'Quasar v2'],
    highlights: ['10k+ Investor Scale', 'Real-time Portfolio', 'Ecosystem Architecture', 'Event-Driven GCP'],
    majorProjects: [
      {
        name: 'Transactional Portfolio Engine',
        description: 'An investment platform with real-time portfolio tracking, instant deposit/withdrawal flows, and automated fund rebalancing.'
      },
      {
        name: 'Advisory & Reporting Console',
        description: 'A secure console for financial advisors with role-based access, deep MIS reporting, client portfolio management, and data visualisation.'
      },
      {
        name: 'Content Management System',
        description: 'A CMS with live content previews, custom syntax support, and a two-step role-based approval workflow.'
      },
      {
        name: 'Event-Driven Content & Notification Service',
        description: 'A backend service handling content APIs, scheduled big-data jobs, and automated email operations.'
      }
    ],

    testimonial: {
      quote: "Debjyoti created our transaction website for investment robot-advisory. He comes with a strong technical expertise in web development with an ever growing interest to learn new technologies. He is very committed professional putting in dedicated efforts to make the system go-live. He being in the team makes a huge difference and I am sure he will continue to build beautiful software systems in the future as well. All the very best to Debjyoti !!",
      author: "Ramakrishnan Subramaniam",
      title: "Co-Founder & CTO at Ametra",
      link: "https://www.linkedin.com/in/debjyoti-mohapatra/details/recommendations/"
    },
  },
  // {
  //   id: 'frontend-dev-kisai',
  //   title: 'Frontend Developer',
  //   company: 'KISAI (Ideanz IT Solutions)',
  //   location: 'Hyderabad, India',
  //   duration: 'May 2021 - Sep 2021',
  //   startDate: '2021-05',
  //   endDate: '2021-09',
  //   current: false,
  //   description: 'Built the core rendering engine for a No-Code platform and independently designed a headless component library — both grounded in atomic design principles and token-based theming.',
  //   roles: [
  //     'Built the core rendering logic for a No-Code platform using Vue 3 Composition API and XState for deterministic state management.',
  //     'Developed a Schema Builder that parsed JSON/YAML metadata and produced fully functional, stateful UI components at runtime.',
  //     'Built a Layout Builder with drag-and-drop mechanics allowing non-technical users to assemble application views without writing code.',
  //     'Independently designed and built a headless component library following atomic design principles and token-based theming — consumed both as a standard library and as drag-and-drop building blocks in the No-Code platform via props.',
  //     'Documented and previewed the component library via Storybook, covering core primitives, form elements, and layout components.'
  //   ],
  //   achievements: [
  //     'Built the frontend engine that let users define application schemas, states, and events entirely through configuration.',
  //     'Integrated XState into the core platform to guarantee predictable UI state transitions across complex component trees.',
  //     'Delivered a fully headless component library solo — reused across both traditional consumption and the No-Code drag-and-drop interface without any structural changes.',
  //     'Reduced time-to-market for enterprise clients using the No-Code toolset for web and mobile application delivery.'
  //   ],
  //   technologies: ['Vue 3 (Composition API)', 'JavaScript', 'XState', 'Tailwind CSS', 'Storybook', 'Gitlab'],
  //   highlights: ['No-Code Engine', 'State Machines (XState)', 'Dynamic Schema Parsing', 'Headless Component Library'],
  //   majorProjects: [
  //     {
  //       name: 'No-Code Application Builder',
  //       description: 'A platform where users define application schemas, layouts, and state flows through configuration — no code required. Supported drag-and-drop assembly, dynamic component rendering, and complex state transitions.'
  //     },
  //     {
  //       name: 'Headless Component Library & Design System',
  //       description: 'A component library following atomic design principles and token-based theming. Served dual purpose — used as a standard library and as headless drag-and-drop building blocks inside the No-Code platform, configured entirely through props.'
  //     }
  //   ]
  // },
  {
    id: 'software-eng-kalsoft',
    title: 'Software Engineer',
    company: 'Kalsoft Solutions',
    location: 'Bengaluru, India',
    duration: 'Nov 2019 - May 2021',
    startDate: '2019-11',
    endDate: '2021-05',
    current: false,
    description: 'Worked on two 0-to-1 enterprise products — a multi-tenant Sales CRM and a real-time market analysis platform — handling everything from GraphQL architecture to in-browser data processing and live analytics.',
    roles: [
      'Built a multi-tenant Sales CRM from scratch with a schema-first Apollo GraphQL layer on top of Vue.js and NestJS.',
      'Built an in-browser data processing engine using Jspreadsheet and SheetJS to handle bulk custom order datasets without DOM performance issues.',
      'Built real-time comparison and analytics modules for digital workshops using FeathersJS and WebSocket connections.',
      'Implemented data visualisation layers using Plotly and E-charts, with Redis caching to maintain responsiveness under heavy load.'
    ],
    achievements: [
      'Designed a GraphQL data synchronisation layer that kept complex industrial datasets in sync across global clients.',
      'Delivered a multi-tenant CRM tailored for the global Valve industry, tracking accounts and deep implementation deliverables.',
      'Built a configurable "Charge Code" system in the market analysis platform for adaptable real-time client workshops.'
    ],
    technologies: ['Vue.js', 'NestJS', 'Apollo GraphQL', 'PostgreSQL', 'Redis', 'FeathersJS', 'MongoDB', 'Jspreadsheet', 'E-charts'],
    highlights: ['0-to-1 Delivery', 'GraphQL Record Syncing', 'In-Browser Big Data', 'Real-time Analytics'],
    majorProjects: [
      {
        name: 'Salesdesk - Sales CRM',
        description: 'A multi-tenant CRM for the global Valve and service industries, tracking accounts and bulk-order datasets through a GraphQL-backed data layer.'
      },
      {
        name: 'Digital DTV - Market Analysis Tool',
        description: 'A real-time digital workshop platform with live product comparison, automated reporting, and multi-language architectural support.'
      }
    ],
    testimonial: {
      quote: "Debjyoti Mohapatara was a fantastic person to work with, and is not only a multi-skilled and insightful colleague, but also an inspiring strategist. Very good person. Great employee with a very strong problem solving skills. It was an great experience to working with him.",
      author: "Antony Agustine Raj",
      title: "Technical Lead @ Pickles Auctions",
      link: "https://www.linkedin.com/in/debjyoti-mohapatra/details/recommendations/"
    }
  }
];