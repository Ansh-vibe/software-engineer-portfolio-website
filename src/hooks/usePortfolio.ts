import portfolio from "@/src/data/portfolio.json"
import type { Portfolio } from "@/src/types/portfolio"

const typedPortfolio = portfolio as Portfolio

export function usePortfolio(): Portfolio {
  return typedPortfolio
}

export default usePortfolio
