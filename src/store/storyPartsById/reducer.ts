import { Action } from 'redux';
import { IMap, IStoryPart } from '../types';

interface IState {
  [key: string]: IMap<IStoryPart>;
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
