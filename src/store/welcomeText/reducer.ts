import { Action } from 'redux';

const defaultState = 'Welcome to CYORPG! A choose your own adventure role playing game for 2+ people. To get started pick one of these stories to play.';

/**
 * Stories reducer
 */
const reducer = (state: string = defaultState, action: Action): string => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
