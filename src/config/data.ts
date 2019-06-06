import { IState } from '../store/storiesById/reducer';

const defaultState: IState = {
  1: {
    id: '1',
    title: 'Story Title 1',
    description: 'Description baby',
    startingStoryPart: '1',
    bounds: {},
    storyParts: {
      1: {
        id: '1',
        label: 'label 1',
        headline: 'Part 1',
        content: 'Content of stuff',
        tree: {
          position: {},
        },
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
        label: 'label 2',
        headline: 'Part 2',
        content: 'Content of stuff',
        tree: {
          position: {},
        },
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
        label: 'label 3',
        headline: 'Part 3',
        content: 'Content of stuff',
        tree: {
          position: {},
        },
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
