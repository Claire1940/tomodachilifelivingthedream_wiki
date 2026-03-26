import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // Supported locales for this wiki (up to 8 with English)
  locales: ['en', 'pt', 'es', 'ja', 'ko', 'fr', 'de', 'th'],

  // Default locale
  defaultLocale: 'en',

  // No prefix for default locale
  localePrefix: 'as-needed',

  // Enable locale detection
  localeDetection: true,
})

export type Locale = (typeof routing.locales)[number]
