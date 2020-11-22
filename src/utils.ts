export function formatDate(t: Date) {
  return `${padNum(t.getUTCHours())}:${padNum(t.getUTCMinutes())}:${padNum(
    t.getUTCSeconds()
  )}`;
}

export function padNum(n: number) {
  return n < 10 ? `0${n}` : n;
}
