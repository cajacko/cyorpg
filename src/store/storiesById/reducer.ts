import { Action } from 'redux';
import { IMap, IStory } from '../types';

interface IState {
  [key: string]: IMap<IStory>;
}

/**
 * Stories reducer
 */
const reducer = (state: IState = {}, action: Action): IState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
