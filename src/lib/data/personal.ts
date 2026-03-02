import type { PersonalInfo, ContactInfo } from '$lib/types/portfolio';

// Format experience display text based on months difference
const formatExperienceText = () => {
  const startDate = new Date('2019-10-01');
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

const yearsOfExperience = Math.floor((new Date().getTime() - new Date('2019-10-01').getTime()) / (1000 * 60 * 60 * 24 * 365));
export const experienceText = formatExperienceText();

export const personalInfo: PersonalInfo = {
  name: 'Debjyoti Mohapatra',
  title: 'Senior Software/Full Stack Developer',
  yearsOfExperience: yearsOfExperience,
  domains: ['Fintech', 'Generative AI', 'E-commerce', 'SaaS', 'Low-code Platforms', 'CRM', 'CMS'],
  summary: `Senior Full Stack Developer with ${experienceText} of experience in end-to-end solutioning, specializing in scalable, high-performance applications. Proven expertise in fintech, generative AI, e-commerce, SaaS, low-code platforms, CRM, and CMS.`,
  about: `I'm a passionate Senior Full Stack Developer with ${experienceText} of experience in end-to-end solutioning, specializing in scalable, high-performance applications. My expertise spans across fintech, generative AI, e-commerce, SaaS, low-code platforms, CRM, and CMS development.

I excel in system architecture optimization, best practices implementation, and driving innovation for enhanced product quality and user experience. My technical journey includes building AI-powered multi-tenant applications, dynamic component libraries, real-time collaboration platforms, and no-code solutions.

When I'm not developing cutting-edge solutions, I contribute to open-source projects and stay at the forefront of emerging technologies. I believe in continuous learning and sharing knowledge with the developer community.`,
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
