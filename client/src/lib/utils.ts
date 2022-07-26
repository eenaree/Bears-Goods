export const addThousandSeperatorToNumber = (
  number: number
): string | number => {
  return number >= 1000 ? number.toLocaleString() : number;
};

type CheckValueFn<T> = (value: any) => value is T;

export const getLocalStorage = <T>(
  key: string,
  checkValue: CheckValueFn<T>
) => {
  const value = localStorage.getItem(key);
  if (value) {
    const parsedValue = JSON.parse(value);
    if (checkValue(parsedValue)) {
      return parsedValue;
    } else {
      localStorage.removeItem(key);
    }
  }
};
