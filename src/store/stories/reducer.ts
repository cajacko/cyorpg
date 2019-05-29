import { Action } from 'redux';

type IState = string[];

const defaultState = ['1', '2', '3'];

/**
 * Stories reducer
 */
const reducer = (state: IState = defaultState, action: Action): IState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
