export const addThousandSeperatorToNumber = (
  number: number
): string | number => {
  return number >= 1000 ? number.toLocaleString() : number;
};

export const checkObject = (obj: any): boolean => {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
};

type CheckValueFn<T> = (value: any) => value is T;

export const getLocalStorage = <T>(
  key: string,
  checkValue: CheckValueFn<T>,
  defaultValue: T
) => {
  const value = localStorage.getItem(key);
  if (value) {
    const parsedValue = JSON.parse(value);
    if (checkValue(parsedValue)) {
      return parsedValue;
    } else {
      localStorage.removeItem(key);
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  } else {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }
};
