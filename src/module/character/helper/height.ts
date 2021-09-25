export const toFt = (n: number) => {
  if (Number.isNaN(n)) return 'n/a';
  const realFt = (n * 0.3937) / 12;
  const ft = Math.floor(realFt);
  const inches = Math.round((realFt - ft) * 12 * 100) / 100;
  return `${ft}ft ${inches}'`;
};
