import { IMap, IStory, Actions } from '../types';
import defaultState from '../../config/data';

export type IState = IMap<IStory>;

/**
 * Stories reducer
 */
const reducer = (state: IState = defaultState, action: Actions): IState => {
  switch (action.type) {
    case 'DELETE_STORY': {
      const newState = Object.assign({}, state);

      delete newState[action.payload.storyId];

      return newState;
    }

    case 'SAVE_STORY':
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
