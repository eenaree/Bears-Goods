type CheckValueFn<T> = (value: any) => value is T;

const useLocalStorage = <T>(
  key: string,
  checkValue: CheckValueFn<T>,
  defaultValue: T
): T => {
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

export default useLocalStorage;
