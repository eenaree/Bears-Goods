import * as React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { goodsAPI } from '@api/default';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const LoaderContext = createContext<boolean | undefined>(undefined);

export default function LoaderProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const requestInterceptor = goodsAPI.interceptors.request.use(
    config => {
      setIsLoading(true);
      return config;
    },
    error => {
      setIsLoading(false);
      return Promise.reject(error);
    }
  );

  const responseInterceptor = goodsAPI.interceptors.response.use(
    response => {
      setIsLoading(false);
      return response;
    },
    error => {
      if (axios.isAxiosError(error)) {
        if (error.code === AxiosError.ERR_CANCELED) {
          return Promise.reject(
            new Error('요청이 취소되어 정보를 가져오는데 실패했습니다.')
          );
        }

        setIsLoading(false);
        if (error.response) {
          if (!error.response.status) {
            return Promise.reject(new Error('서버와 연결할 수 없습니다'));
          }
          if (error.response.status == 400) {
            return Promise.reject(new Error('잘못된 요청입니다.'));
          }
          if (error.response.status == 404) {
            return Promise.reject(new Error('상품 정보를 찾을 수 없습니다.'));
          }
          if (error.response.status >= 500) {
            return Promise.reject(new Error('서버 오류가 발생했습니다.'));
          }
          return Promise.reject(new Error('알 수 없는 오류가 발생했습니다.'));
        }
      }

      return Promise.reject(new Error('알 수 없는 오류가 발생했습니다.'));
    }
  );

  useEffect(() => {
    return () => {
      goodsAPI.interceptors.request.eject(requestInterceptor);
      goodsAPI.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);

  return (
    <LoaderContext.Provider value={isLoading}>
      {children}
    </LoaderContext.Provider>
  );
}

export const useLoader = () => {
  const state = useContext(LoaderContext);
  if (state === undefined) {
    throw new Error('LoaderContextProvider can not found');
  }
  return state;
};
