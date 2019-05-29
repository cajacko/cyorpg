import { Action } from 'redux';

type IState = string[];

/**
 * Stories reducer
 */
const reducer = (state: IState = [], action: Action): IState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
