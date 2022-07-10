import { GoodsOption } from '@typings/db';

interface OptionState {
  options: GoodsOption[];
}

export type OptionAction =
  | { type: 'ADD_OPTION'; option: GoodsOption }
  | { type: 'REMOVE_OPTION'; option: GoodsOption }
  | { type: 'INCREMENT_OPTION_QUANTITY'; size: string | number; price: number }
  | { type: 'DECREMENT_OPTION_QUANTITY'; size: string | number; price: number }
  | { type: 'RESET_OPTIONS' }
  | { type: 'CHANGE_OPTION_QUANTITY'; size: string | number; quantity: number };

export function optionReducer(
  state: OptionState,
  action: OptionAction
): OptionState {
  switch (action.type) {
    case 'ADD_OPTION':
      return {
        ...state,
        options: state.options.concat(action.option),
      };
    case 'REMOVE_OPTION':
      return {
        ...state,
        options: state.options.filter(
          option => option.size !== action.option.size
        ),
      };
    case 'INCREMENT_OPTION_QUANTITY':
      return {
        ...state,
        options: state.options.map(option =>
          option.size === action.size
            ? { ...option, quantity: option.quantity + 1 }
            : option
        ),
      };
    case 'DECREMENT_OPTION_QUANTITY':
      return {
        ...state,
        options: state.options.map(option =>
          option.size === action.size
            ? { ...option, quantity: option.quantity - 1 }
            : option
        ),
      };
    case 'RESET_OPTIONS': {
      return {
        options: [],
      };
    }
    case 'CHANGE_OPTION_QUANTITY':
      return {
        ...state,
        options: state.options.map(option =>
          option.size === action.size
            ? { ...option, quantity: action.quantity }
            : option
        ),
      };
  }
}
