import dayjs from 'dayjs';
import { DateFormats } from '../types/date.ts';

export function formatPlayerTime(seconds: number): string {
  return new Date(seconds * 1000).toISOString().slice(11, 19);
}

export function formatDate(date: string, format: DateFormats): string {
  return dayjs(date).format(format);
}

export function formatRunTime(minutes: number): string {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}
