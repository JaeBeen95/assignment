import { Country, Company } from '@/types';
import { CountryCard } from './CountryCard';
import { EmptyCountries } from './EmptyCountries';

type CountriesListProps = {
  countries: Country[];
  companies: Company[] | undefined;
};

export function CountriesList({ countries, companies }: CountriesListProps) {
  if (!countries || countries.length === 0) {
    return <EmptyCountries />;
  }

  const getCountryAnalysis = (countryCode: string) => {
    const countryCompanies =
      companies?.filter((company) => company.country === countryCode) || [];
    const totalEmissions = countryCompanies.reduce((total, company) => {
      return (
        total +
        company.emissions.reduce((sum, emission) => sum + emission.emissions, 0)
      );
    }, 0);

    return {
      companiesCount: countryCompanies.length,
      totalEmissions,
      companies: countryCompanies,
    };
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {countries.map((country) => {
        const analysis = getCountryAnalysis(country.code);
        return (
          <CountryCard
            key={country.code}
            country={country}
            analysis={analysis}
          />
        );
      })}
    </div>
  );
}
