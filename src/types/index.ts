export type GhgEmission = {
  yearMonth: string; // "2025-01", "2025-02", "2025-03"
  source: string; // gasoline, lpg, diesel, etc
  emissions: number; // tons of CO2 equivalent
};

export type Company = {
  id: string;
  name: string;
  country: string; // Country.code
  emissions: GhgEmission[];
};

export type Post = {
  id: string;
  title: string;
  resourceUid: string; // Company.id
  dateTime: string; // e.g., "2024-02"
  content: string;
};

export type Country = {
  code: string;
  name: string;
};

// Dashboard calculation types
export interface KPIData {
  totalEmissions: string;
  currentMonth: string;
  monthlyTrend: string;
  targetAchievement: string;
  mainSource: string;
  sourcePercentage: string;
}

export interface EmissionBySource {
  labels: string[];
  values: number[];
}

export interface MonthlyTrendData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
  }>;
}
