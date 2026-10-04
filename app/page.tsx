import { PortfolioPage } from '@/components/portfolio'
import { usePortfolio } from '@/src/hooks/usePortfolio'

export default function Page() {
  const portfolio = usePortfolio()

  return <PortfolioPage profile={portfolio.profile} skills={portfolio.skills.categories} experience={portfolio.experience} services={portfolio.services} projects={portfolio.projects} testimonials={portfolio.testimonials} />
}
