export const addThousandSeperatorToNumber = (number: number) => {
  return number >= 1000 ? number.toLocaleString() : number;
};

type LocalStorage = <T>(
  key: string,
  checkValue: (value: any) => value is T
) => T | undefined;

export const getLocalStorage: LocalStorage = (key, checkValue) => {
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
