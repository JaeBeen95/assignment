import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { fetchCompanies, fetchCountries, fetchPosts } from '@/lib/api';
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

export function useCompanyNameMap() {
  return useQuery({
    queryKey: ['companies'],
    queryFn: fetchCompanies,
    select: (companies) => {
      const map = new Map<string, string>();
      companies.forEach((company) => {
        map.set(company.id, company.name);
      });
      return map;
    },
  });
}

export function useCompanyDashboard(companyName: string) {
  return useSuspenseQuery({
    queryKey: ['companies'],
    queryFn: fetchCompanies,
    select: (companies) => {
      const company = companies.find((c) => c.name === companyName);
      if (!company)
        throw new Error(`회사 '${companyName}'를 찾을 수 없습니다.`);

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

export function useCountries() {
  return useSuspenseQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });
}

export function usePosts() {
  return useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
}
