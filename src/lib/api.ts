import type { Company, Post, Country } from '@/types';

const countries: Country[] = [
  { code: 'US', name: 'United States' },
  { code: 'DE', name: 'Germany' },
];

const companies: Company[] = [
  {
    id: 'c1',
    name: 'Acme Corp',
    country: 'US',
    emissions: [
      { yearMonth: '2024-01', source: 'electricity', emissions: 120 },
      { yearMonth: '2024-02', source: 'electricity', emissions: 110 },
      { yearMonth: '2024-03', source: 'electricity', emissions: 95 },
      { yearMonth: '2024-01', source: 'gasoline', emissions: 45 },
      { yearMonth: '2024-02', source: 'gasoline', emissions: 50 },
      { yearMonth: '2024-03', source: 'gasoline', emissions: 42 },
    ],
  },
  {
    id: 'c2',
    name: 'Globex',
    country: 'DE',
    emissions: [
      { yearMonth: '2024-01', source: 'electricity', emissions: 80 },
      { yearMonth: '2024-02', source: 'electricity', emissions: 105 },
      { yearMonth: '2024-03', source: 'electricity', emissions: 120 },
      { yearMonth: '2024-01', source: 'diesel', emissions: 35 },
      { yearMonth: '2024-02', source: 'diesel', emissions: 40 },
      { yearMonth: '2024-03', source: 'diesel', emissions: 38 },
    ],
  },
];

const posts: Post[] = [
  {
    id: 'p1',
    title: 'Sustainability Report',
    resourceUid: 'c1',
    dateTime: '2024-02',
    content: 'Quarterly CO2 update',
  },
  {
    id: 'p2',
    title: 'Green Initiative Update',
    resourceUid: 'c2',
    dateTime: '2024-03',
    content: 'Monthly sustainability progress',
  },
];

let _countries = [...countries];
let _companies = [...companies];
let _posts = [...posts];

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const jitter = () => 200 + Math.random() * 600;
const maybeFail = () => Math.random() < 0.15;

export async function fetchCountries(): Promise<Country[]> {
  await delay(jitter());
  return _countries;
}

export async function fetchCompanies(): Promise<Company[]> {
  await delay(jitter());
  return _companies;
}

export async function fetchPosts(): Promise<Post[]> {
  await delay(jitter());
  return _posts;
}

export async function createOrUpdatePost(
  p: Omit<Post, 'id'> & { id?: string }
): Promise<Post> {
  await delay(jitter());
  if (maybeFail()) throw new Error('Save failed');

  if (p.id) {
    _posts = _posts.map((x) => (x.id === p.id ? (p as Post) : x));
    return p as Post;
  }

  const created = { ...p, id: crypto.randomUUID() };
  _posts = [..._posts, created];
  return created;
}
