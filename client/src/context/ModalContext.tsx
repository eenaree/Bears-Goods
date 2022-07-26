import * as React from 'react';
import { createContext, Reducer, useContext, useReducer } from 'react';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

type ModalActions = { type: 'OPEN_MODAL' } | { type: 'CLOSE_MODAL' };

const modalReducer: Reducer<boolean, ModalActions> = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return true;
    case 'CLOSE_MODAL':
      return false;
  }
};

const ModalContext = createContext<boolean | undefined>(undefined);

const ModalDispatchContext = createContext<
  React.Dispatch<ModalActions> | undefined
>(undefined);

export default function ModalProvider({ children }: Props) {
  const [modal, dispatch] = useReducer(modalReducer, false);

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
    </ModalDispatchContext.Provider>
  );
}

export const useModal = () => {
  const state = useContext(ModalContext);
  if (state === undefined) {
    throw new Error('ModalContextProvider can not found');
  }
  return state;
};

export const useModalDispatch = () => {
  const dispatch = useContext(ModalDispatchContext);
  if (dispatch === undefined) {
    throw new Error('ModalDispatchContextProvider can not found');
  }
  return dispatch;
};
