import { useQuery } from '@tanstack/react-query';
import { fetchCompanies } from '@/lib/api';
import {
  calculateKPIs,
  calculateEmissionBySource,
  calculateMonthlyTrend,
} from '@/lib/calculations';

export function useCompanies() {
  return useQuery({
    queryKey: ['companies'],
    queryFn: fetchCompanies,
  });
}

export function useCompanyDashboard(companyName: string) {
  return useQuery({
    queryKey: ['companies'],
    queryFn: fetchCompanies,
    select: (companies) => {
      const company = companies.find((c) => c.name === companyName);
      if (!company) return null;

      return {
        company,
        kpiData: calculateKPIs(company),
        emissionBySource: calculateEmissionBySource(company),
        monthlyTrend: calculateMonthlyTrend(company),
        totalEmissions: company.emissions.reduce(
          (sum, e) => sum + e.emissions,
          0
        ),
      };
    },
  });
}
