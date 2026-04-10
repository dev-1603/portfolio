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
  domains: ['Fintech', 'Generative AI', 'E-commerce', 'SaaS', 'Low-code Platforms', 'CRM', 'CMS', 'Healthcare'],
  summary: `Full-stack products built from scratch across fintech, GenAI, telecom, SaaS, and CMS. ${experienceText} of shipping code - every time starting from an empty repo.`,
  about: `Senior Full Stack Engineer with ${yearsOfExperience}+ years owning product architecture end to end — from greenfield design to production systems serving real users across fintech, GenAI, telecom, SaaS, and low-code platforms.
Across five companies and five domains, the work has consistently started at the same place: an empty repo and an ambiguous problem. That's produced multi-tenant SaaS platforms, provider-agnostic AI orchestration layers, MVNO e-commerce ecosystems, no-code builders, and centralised auth gateways — each designed to scale beyond the initial delivery.
Strong across the full stack — Vue/React on the frontend, Node.js and cloud infrastructure on the backend — but the real focus is on the decisions that sit above the code: system boundaries, tenant isolation strategies, performance under real load, and the architecture that lets teams move fast without breaking things.`,
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
