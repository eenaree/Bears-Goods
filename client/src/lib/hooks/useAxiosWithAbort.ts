import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface Async<T> {
  status: 'idle' | 'loading' | 'resolved' | 'rejected';
  data: T | null;
  error: unknown | null;
}

const useAxiosWithAbort = <T>(
  asyncFunction: (
    config: AxiosRequestConfig,
    ...args: any[]
  ) => Promise<AxiosResponse<T, any>>,
  ...args: any[]
): Async<T> => {
  const [state, setState] = useState<Async<T>>({
    status: 'idle',
    data: null,
    error: null,
  });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    setState({ status: 'loading', data: null, error: null });
    asyncFunction({ signal }, ...args)
      .then(({ data }) => {
        setTimeout(() => {
          if (signal.aborted) return;
          setState({ status: 'resolved', data, error: null });
        }, 500);
      })
      .catch((error: unknown) => {
        if (axios.isAxiosError(error)) {
          setTimeout(() => {
            if (signal.aborted) return;
            setState({
              status: 'rejected',
              data: null,
              error: error.response,
            });
          }, 500);
        }
      });
    return () => {
      abortController.abort();
    };
  }, [asyncFunction, ...args]);

  return state;
};

export default useAxiosWithAbort;
