import { Option } from '@typings/db';

interface OptionState {
  options: Option[];
  totalPrice: number;
}

export type OptionAction =
  | { type: 'ADD_OPTION'; option: Option }
  | { type: 'REMOVE_OPTION'; id: number }
  | { type: 'INCREMENT_OPTION_QUANTITY'; id: number; price: number }
  | { type: 'DECREMENT_OPTION_QUANTITY'; id: number; price: number };

export function optionReducer(
  state: OptionState,
  action: OptionAction
): OptionState {
  switch (action.type) {
    case 'ADD_OPTION':
      return {
        ...state,
        options: state.options.concat(action.option),
        totalPrice: state.totalPrice + action.option.price,
      };
    case 'REMOVE_OPTION':
      return {
        ...state,
        options: state.options.filter(option => option.id !== action.id),
        totalPrice:
          state.totalPrice -
          state.options.find(option => option.id === action.id)!.price *
            state.options.find(option => option.id === action.id)!.quantity,
      };
    case 'INCREMENT_OPTION_QUANTITY':
      return {
        ...state,
        options: state.options.map(option =>
          option.id === action.id
            ? { ...option, quantity: option.quantity + 1 }
            : option
        ),
        totalPrice: state.totalPrice + action.price,
      };
    case 'DECREMENT_OPTION_QUANTITY':
      return {
        ...state,
        options: state.options.map(option =>
          option.id === action.id
            ? { ...option, quantity: option.quantity - 1 }
            : option
        ),
        totalPrice: state.totalPrice - action.price,
      };
  }
}
