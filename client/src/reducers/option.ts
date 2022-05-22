import { Option } from '@typings/db';

interface OptionState {
  options: Option[];
  totalPrice: number;
}

export type OptionAction =
  | { type: 'ADD_OPTION'; option: Option }
  | { type: 'REMOVE_OPTION'; option: Option }
  | { type: 'INCREMENT_OPTION_QUANTITY'; size: string | number; price: number }
  | { type: 'DECREMENT_OPTION_QUANTITY'; size: string | number; price: number }
  | { type: 'RESET_OPTIONS' };

export function initializeOptions() {
  return { options: [], totalPrice: 0 };
}

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
        options: state.options.filter(
          option => option.size !== action.option.size
        ),
        totalPrice:
          state.totalPrice - action.option.price * action.option.quantity,
      };
    case 'INCREMENT_OPTION_QUANTITY':
      return {
        ...state,
        options: state.options.map(option =>
          option.size === action.size
            ? { ...option, quantity: option.quantity + 1 }
            : option
        ),
        totalPrice: state.totalPrice + action.price,
      };
    case 'DECREMENT_OPTION_QUANTITY':
      return {
        ...state,
        options: state.options.map(option =>
          option.size === action.size
            ? { ...option, quantity: option.quantity - 1 }
            : option
        ),
        totalPrice: state.totalPrice - action.price,
      };
    case 'RESET_OPTIONS':
      return initializeOptions();
  }
}
