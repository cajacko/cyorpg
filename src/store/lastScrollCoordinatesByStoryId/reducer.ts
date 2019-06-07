import { Actions, IPosition } from '../types';

interface IState {
  [key: string]: undefined | IPosition;
}

const defaultState: IState = {};

/**
 * Last scroll coordinates reducer
 */
const reducer = (state: IState = defaultState, action: Actions): IState => {
  switch (action.type) {
    case 'SET_LAST_SCROLL': {
      return {
        ...defaultState,
        [action.payload.storyId]: action.payload.scroll,
      };
    }

    default:
      return state;
  }
};

export default reducer;
