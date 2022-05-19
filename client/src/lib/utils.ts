export const addThousandSeperatorToNumber = (
  number: number
): string | number => {
  return number >= 1000 ? number.toLocaleString() : number;
};

export const checkObject = (obj: any): boolean => {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
};
