import {
  CTAType,
  EducationType,
  ExperienceType,
  NavLinkType,
  ProjectType,
  SocialLinkType,
  SoftwareSkillType,
} from '.';

export interface Section {
  title: string;
}

export interface NavbarSectionType {
  navLinks: NavLinkType[];
  cta: CTAType;
}

export interface HeroSectionType extends Section {
  subtitle?: string;
  tagline: string;
  description?: string;
  specialText?: string;
  cta?: CTAType & {
    hideInDesktop?: boolean;
  };
}

export interface AboutSectionType extends Section {
  list: {
    title: string;
    items: string[];
  };
  img: string;
}

type SkillType = {
  id: string;
  title: string;
  lottie: {
    light: string;
    dark: string;
  };
  points: string[];
  softwareSkills: SoftwareSkillType[];
};

export interface SkillsSectionType extends Section {
  skills: SkillType[];
}

export interface ExperienceSectionType extends Section {
  experiences: ExperienceType[];
}
export interface EducationSectionType extends Section {
  experiences: EducationType[];
}

export interface ProjectsSectionType extends Section {
  projects: ProjectType[];
}

export interface ContactSectionType extends Section {
  subtitle?: string;
  paragraphs: string[];
  link: string;
}

export interface SocialSectionType {
  socialLinks: SocialLinkType[];
}

export interface FooterSectionType extends Section {
  link: string;
}
