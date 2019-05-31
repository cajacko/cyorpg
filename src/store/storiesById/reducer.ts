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

    case 'SAVE_STORY_PROP': {
      const { storyId, key, value } = action.payload;

      const story: IStory = state[storyId] || {
        id: storyId,
        title: '',
        description: '',
        startingStoryPart: 'null',
        storyParts: {},
      };

      return {
        ...state,
        [storyId]: {
          ...story,
          [key]: value,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
