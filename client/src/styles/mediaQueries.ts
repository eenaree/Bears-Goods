interface BreakPoints {
  [point: string]: number;
}

const breakpoints: BreakPoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

export const mq = (point: string) => {
  const bpArray = Object.keys(breakpoints).map<[string, number]>(key => [
    key,
    breakpoints[key],
  ]);

  const [result] = bpArray.reduce<string[]>((acc, [name, size]) => {
    if (name === point) {
      return [...acc, `@media (min-width: ${size}px)`];
    }
    return acc;
  }, []);

  return result;
};
