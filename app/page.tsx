import { PortfolioPage } from '@/components/portfolio'
import portfolio from '@/src/types/portfolio'

export default function Page() {
  return <PortfolioPage profile={portfolio.profile} skills={portfolio.skills.categories} experience={portfolio.experience} services={portfolio.services} projects={portfolio.projects} testimonials={portfolio.testimonials} />
}
