import { useCallback, useEffect, useState } from 'react';

const useSortBy = () => {
  const [sortBy, setSortBy] = useState(
    () => sessionStorage.getItem('sortBy') || ''
  );
  const onChangeSortBy = useCallback((value: string) => {
    setSortBy(value);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('sortBy', sortBy);
  }, [sortBy]);

  return [sortBy, onChangeSortBy] as const;
};

export default useSortBy;
