import { IMap, IStoryPart, Actions } from '../types';

type IState = IMap<IStoryPart>;

const defaultState: IState = {
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
};

/**
 * Stories reducer
 */
const reducer = (state: IState = defaultState, action: Actions): IState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
