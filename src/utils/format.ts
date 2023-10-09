export function formatTime(seconds: number): string {
  return new Date(seconds * 1000).toISOString().slice(11, 19);
}
