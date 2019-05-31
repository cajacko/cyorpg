import { IMap, IStory, Actions } from '../types';

export type IState = IMap<IStory>;

/**
 * Stories reducer
 */
const reducer = (state: IState = {}, action: Actions): IState => {
  switch (action.type) {
    case 'SAVE_STORY':
    case 'DELETE_STORY': {
      const newState = Object.assign({}, state);

      const id = action.type === 'SAVE_STORY' ? action.payload.id : action.payload.storyId;

      delete newState[id];

      return newState;
    }

    case 'SAVE_STORY_PROP': {
      const {
        storyId, key, value, story,
      } = action.payload;

      const newStory: IStory = story || {
        id: storyId,
        title: '',
        description: '',
        startingStoryPart: 'null',
        storyParts: {},
      };

      return {
        ...state,
        [storyId]: {
          ...newStory,
          [key]: value,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
