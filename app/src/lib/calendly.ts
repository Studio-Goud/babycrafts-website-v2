// Calendly URL configurations for different booking flows
export const CALENDLY_URLS = {
  // Main booking URL
  main: 'https://calendly.com/babycrafts/afspraak',
  
  // Category-specific booking flows
  zwangerschap: 'https://calendly.com/babycrafts/zwangerschapsbeeldje',
  ouderKind: 'https://calendly.com/babycrafts/ouder-kind',
  familie: 'https://calendly.com/babycrafts/familiebeeldje',
  baby: 'https://calendly.com/babycrafts/babybeeldje',
  schoonheid: 'https://calendly.com/babycrafts/schoonheidsbeeldje',
  eersteZwangerschap: 'https://calendly.com/babycrafts/eerste-zwangerschap',
  kraamcadeau: 'https://calendly.com/babycrafts/kraamcadeau',
  vastleggen: 'https://calendly.com/babycrafts/vastleggen',
} as const;

export type CalendlyCategory = keyof typeof CALENDLY_URLS;

export function getCalendlyUrl(category: CalendlyCategory): string {
  return CALENDLY_URLS[category] || CALENDLY_URLS.main;
}

// Prefill parameters for Calendly
export interface CalendlyPrefill {
  name?: string;
  email?: string;
  customAnswers?: Record<string, string>;
}

export function buildCalendlyUrl(baseUrl: string, prefill?: CalendlyPrefill): string {
  if (!prefill) return baseUrl;
  
  const params = new URLSearchParams();
  
  if (prefill.name) params.append('name', prefill.name);
  if (prefill.email) params.append('email', prefill.email);
  
  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}
