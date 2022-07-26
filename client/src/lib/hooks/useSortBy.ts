import { useEffect, useState } from 'react';

export default function useSortBy() {
  const [sortBy, setSortBy] = useState(
    () => sessionStorage.getItem('sortBy') || ''
  );
  const onChangeSortBy = (value: string) => {
    setSortBy(value);
  };

  useEffect(() => {
    sessionStorage.setItem('sortBy', sortBy);
  }, [sortBy]);

  return [sortBy, onChangeSortBy] as const;
}
