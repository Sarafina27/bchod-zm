export const getLoopedIndex = (current: number, change: number, total: number) => {
  if (total <= 0) {
    return 0;
  }

  return (current + change + total) % total;
};
