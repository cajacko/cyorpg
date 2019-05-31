import { IState } from '../store/storiesById/reducer';

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

export default defaultState;
