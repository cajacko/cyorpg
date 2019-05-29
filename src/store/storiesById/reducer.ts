import { Action } from 'redux';
import { IMap, IStory } from '../types';

type IState = IMap<IStory>;

const defaultState: IState = {
  1: {
    id: '1',
    title: 'Story Title 1',
    description: 'Description baby',
    startingStoryPart: '1',
  },
  2: {
    id: '2',
    title: 'Story Title 2',
    description: 'Description baby',
    startingStoryPart: '2',
  },
  3: {
    id: '3',
    title: 'Story Title 3',
    description: 'Description baby',
    startingStoryPart: '3',
  },
};

/**
 * Stories reducer
 */
const reducer = (state: IState = defaultState, action: Action): IState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
