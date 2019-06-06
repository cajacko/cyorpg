import {
  IMap, IStory, Actions, IStoryPart,
} from '../types';

export type IState = IMap<IStory>;

/**
 * Get the min and max positions for story parts
 */
const getBounds = (storyParts: IStory['storyParts']): IStory['bounds'] => {
  let bounds: IStory['bounds'] = {};

  Object.values(storyParts).forEach((storyPart) => {
    if (!storyPart) return;

    const { x, y } = storyPart.tree.position;

    if (!x || !y) return;

    if (!bounds.left || !bounds.right || !bounds.top || !bounds.bottom) {
      bounds = {
        left: x,
        right: x,
        top: y,
        bottom: y,
      };
    }

    if (x < bounds.left) bounds.left = x;
    if (x > bounds.right) bounds.right = x;
    if (y < bounds.top) bounds.top = y;
    if (y > bounds.bottom) bounds.bottom = y;
  });

  return bounds;
};

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
        bounds: {},
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
        bounds: {},
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
        bounds: {},
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

    case 'SET_STORY_PART_POSITION': {
      const {
        storyId, x, y, story, partId, storyPart,
      } = action.payload;

      const newStory: IStory = story || {
        id: storyId,
        title: '',
        description: '',
        startingStoryPart: 'null',
        storyParts: {},
        bounds: {},
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

      newPart.tree.position.x = x;
      newPart.tree.position.y = y;

      newStory.storyParts[partId] = newPart;
      newStory.bounds = getBounds(newStory.storyParts);

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
