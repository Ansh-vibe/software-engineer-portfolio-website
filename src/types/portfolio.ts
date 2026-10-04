export type Social = { github: string; instagram: string; linkedin: string; email: string; phone: string; whatsapp: string; website: string }
export type Profile = { name: string; shortName: string; tagline: string; role: string; specialization: string; location: string; yearsOfExperience: string; bio: string; avatarSvg: string; social: Social }
export type Experience = { company: string; role: string; period: string; location: string; summary: string; highlights: string[] }
export type Project = { id: string; title: string; subtitle: string; description: string; stack: string[]; role: string; year: string; link: string; github: string; image: string; highlight: boolean }
export type SkillCategory = { name: string; items: string[] }
export type Service = { name: string; description: string }
export type Testimonial = { id: string; quote: string; name: string; role: string; avatarColor: string }
export type Certification = { id: string; name: string; issuer: string; description: string; year: string; credentialUrl: string; previewLabel: string; accent: string }
export type Education = { degree: string; institution: string; university?: string; period: string; grade: string }
export type Portfolio = { profile: Profile; skills: { categories: SkillCategory[] }; experience: Experience[]; services: Service[]; projects: Project[]; certifications: Certification[]; education: { degree: string; institution: string; university?: string; period: string; grade: string }[]; testimonials: Testimonial[] }
import raw from '@/src/data/portfolio.json'
export const portfolio = raw as Portfolio
export function usePortfolio(): Portfolio { return portfolio }
export default portfolio
