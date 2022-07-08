import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Payload<T> {
  status: 'idle' | 'loading' | 'resolved' | 'rejected';
  data: T | null;
  error: unknown | null;
}

const useAxiosWithAbort = <T>(
  axiosRequest: (
    signal: AbortSignal,
    ...args: any[]
  ) => Promise<AxiosResponse<T, any>>,
  ...args: any[]
): Payload<T> => {
  const [state, setState] = useState<Payload<T>>({
    status: 'idle',
    data: null,
    error: null,
  });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setState({ status: 'loading', data: null, error: null });
    axiosRequest(signal, ...args)
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
  }, [axiosRequest, ...args]);

  return state;
};

export default useAxiosWithAbort;
