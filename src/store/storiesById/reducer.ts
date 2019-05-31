import { IMap, IStory, Actions } from '../types';

type IState = IMap<IStory>;

const defaultState: IState = {
  1: {
    id: '1',
    title: 'Story Title 1',
    description: 'Description baby',
    startingStoryPart: '1',
    storyParts: {
      1: {
        id: '1',
        headline: 'Part 1',
        content: 'Content of stuff',
        actions: [
          {
            goToStoryPart: '2',
            text: 'Go to 2',
          },
          {
            goToStoryPart: '3',
            text: 'Go to 3',
          },
          {
            text: 'Finish',
            willFinish: true,
          },
        ],
      },
      2: {
        id: '2',
        headline: 'Part 2',
        content: 'Content of stuff',
        actions: [
          {
            goToStoryPart: '1',
            text: 'Go to 1',
          },
          {
            goToStoryPart: '3',
            text: 'Go to 3',
          },
          {
            text: 'Finish',
            willFinish: true,
          },
        ],
      },
      3: {
        id: '3',
        headline: 'Part 3',
        content: 'Content of stuff',
        actions: [
          {
            goToStoryPart: '1',
            text: 'Go to 1',
          },
          {
            goToStoryPart: '2',
            text: 'Go to 2',
          },
          {
            text: 'Finish',
            willFinish: true,
          },
        ],
      },
    },
  },
  2: {
    id: '2',
    title: 'Story Title 2',
    description: 'Description baby',
    startingStoryPart: '2',
    storyParts: {
      1: {
        id: '1',
        headline: 'Part 1',
        content: 'Content of stuff',
        actions: [
          {
            goToStoryPart: '2',
            text: 'Go to 2',
          },
          {
            goToStoryPart: '3',
            text: 'Go to 3',
          },
          {
            text: 'Finish',
            willFinish: true,
          },
        ],
      },
      2: {
        id: '2',
        headline: 'Part 2',
        content: 'Content of stuff',
        actions: [
          {
            goToStoryPart: '1',
            text: 'Go to 1',
          },
          {
            goToStoryPart: '3',
            text: 'Go to 3',
          },
          {
            text: 'Finish',
            willFinish: true,
          },
        ],
      },
      3: {
        id: '3',
        headline: 'Part 3',
        content: 'Content of stuff',
        actions: [
          {
            goToStoryPart: '1',
            text: 'Go to 1',
          },
          {
            goToStoryPart: '2',
            text: 'Go to 2',
          },
          {
            text: 'Finish',
            willFinish: true,
          },
        ],
      },
    },
  },
  3: {
    id: '3',
    title: 'Story Title 3',
    description: 'Description baby',
    startingStoryPart: '3',
    storyParts: {
      1: {
        id: '1',
        headline: 'Part 1',
        content: 'Content of stuff',
        actions: [
          {
            goToStoryPart: '2',
            text: 'Go to 2',
          },
          {
            goToStoryPart: '3',
            text: 'Go to 3',
          },
          {
            text: 'Finish',
            willFinish: true,
          },
        ],
      },
      2: {
        id: '2',
        headline: 'Part 2',
        content: 'Content of stuff',
        actions: [
          {
            goToStoryPart: '1',
            text: 'Go to 1',
          },
          {
            goToStoryPart: '3',
            text: 'Go to 3',
          },
          {
            text: 'Finish',
            willFinish: true,
          },
        ],
      },
      3: {
        id: '3',
        headline: 'Part 3',
        content: 'Content of stuff',
        actions: [
          {
            goToStoryPart: '1',
            text: 'Go to 1',
          },
          {
            goToStoryPart: '2',
            text: 'Go to 2',
          },
          {
            text: 'Finish',
            willFinish: true,
          },
        ],
      },
    },
  },
};

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
