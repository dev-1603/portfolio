import type { PersonalInfo, ContactInfo } from '$lib/types/portfolio';

// Format experience display text based on months difference
const formatExperienceText = () => {
  const startDate = new Date('2019-06-01');
  const currentDate = new Date();
  const diffTime = currentDate.getTime() - startDate.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  const exactYears = diffDays / 365;

  // Calculate months difference
  const monthsDifference = (exactYears - Math.floor(exactYears)) * 12;

  if (monthsDifference < 6) {
    // Less than 6 months: show as "X+ years"
    return `${Math.floor(exactYears)}+ years`;
  } else {
    // 6 months or more: show as "about X+1 years"
    return `about ${Math.ceil(exactYears)} years`;
  }
};

const yearsOfExperience = Math.floor((new Date().getTime() - new Date('2019-06-01').getTime()) / (1000 * 60 * 60 * 24 * 365));
export const experienceText = formatExperienceText();

export const personalInfo: PersonalInfo = {
  name: 'Debjyoti Mohapatra',
  title: 'Full Stack Engineer',
  yearsOfExperience: yearsOfExperience,
  domains: ['Fintech', 'Generative AI', 'E-commerce', 'SaaS', 'Low-code Platforms', 'CRM', 'CMS'],
  summary: `Full-stack products built from scratch across fintech, GenAI, telecom, SaaS, and CMS. ${experienceText} of shipping code - every time starting from an empty repo.`,
  about: `I've spent ${experienceText} building full-stack products across five completely different domains - starting from nothing each time. A fintech investment platform. A GenAI multi-tenant SaaS. A telecom e-commerce stack. A no-code builder. An authentication gateway.

The common thread isn't the domain. It's the depth: multi-tenant architecture, event-driven backends, RBAC systems, Vue/Node/TS from frontend to infra.

I'm frontend-heavy by background but backend-capable by necessity. Most of the interesting problems live at the seam between the two.`,
  location: 'Bhubaneswar, Odisha, India',
  availableForWork: true
};

export const contactInfo: ContactInfo = {
  email: 'mohapatra.dev02@gmail.com',
  phone: '+91-7568802836',
  location: 'Bhubaneswar, Odisha, India',
  linkedin: 'https://linkedin.com/in/debjyoti-mohapatra',
  github: 'https://github.com/dev-1603',
  resume: '/resumes/Debjyoti Mohapatra-Resume.pdf',
  resume2024: '/resumes/Debjyoti_Mohapatra-SeniorSoftwareDeveloper.pdf'
};
