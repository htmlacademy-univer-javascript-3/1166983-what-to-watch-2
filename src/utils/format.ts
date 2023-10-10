export function formatTime(seconds: number): string {
  return new Date(seconds * 1000).toISOString().slice(11, 19);
}

export function formatDate(date: Date, options: Intl.DateTimeFormatOptions, locale = 'en-US') {
  return new Intl.DateTimeFormat(locale, options).format(date);
}
