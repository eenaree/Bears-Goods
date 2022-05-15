export const addThousandSeperatorToNumber = (
  number: number
): string | number => {
  return number >= 1000 ? number.toLocaleString() : number;
};
