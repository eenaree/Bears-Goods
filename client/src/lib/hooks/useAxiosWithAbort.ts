import { useEffect, useState } from 'react';
import { AxiosPromise } from 'axios';

interface Payload<T> {
  data: T | null;
  error: string | null;
}

export default function useAxiosWithAbort<T>(
  axiosRequest: (signal: AbortSignal, ...args: any[]) => AxiosPromise<T>,
  ...args: any[]
) {
  const [payload, setPayload] = useState<Payload<T>>({
    data: null,
    error: null,
  });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setPayload({ data: null, error: null });
    axiosRequest(signal, ...args)
      .then(({ data }) => {
        if (signal.aborted) return;
        setPayload({ data, error: null });
      })
      .catch(error => {
        if (signal.aborted) return;
        if (error instanceof Error) {
          setPayload({
            data: null,
            error: error.message,
          });
        }
      });
    return () => {
      abortController.abort();
    };
  }, [axiosRequest, ...args]);

  return [payload.data, payload.error] as const;
}
