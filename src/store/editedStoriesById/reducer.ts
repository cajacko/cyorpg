import {
  IMap, IStory, Actions, IStoryPart,
} from '../types';

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

    case 'DELETE_STORY_PART': {
      const { storyId, story, partId } = action.payload;

      const newStory: IStory = story || {
        id: storyId,
        title: '',
        description: '',
        startingStoryPart: 'null',
        storyParts: {},
      };

      delete newStory.storyParts[partId];

      return {
        ...state,
        [storyId]: newStory,
      };
    }

    case 'SAVE_STORY_PART_PROP': {
      const {
        storyId, key, value, story, partId, storyPart,
      } = action.payload;

      const newStory: IStory = story || {
        id: storyId,
        title: '',
        description: '',
        startingStoryPart: 'null',
        storyParts: {},
      };

      const newPart: IStoryPart = storyPart || {
        id: partId,
        label: '',
        content: '',
        actions: [],
        tree: {
          position: {},
        },
      };

      newStory.storyParts[partId] = {
        ...newPart,
        [key]: value,
      };

      return {
        ...state,
        [storyId]: newStory,
      };
    }

    default:
      return state;
  }
};

export default reducer;
