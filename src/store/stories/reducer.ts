import { Actions } from '../types';

type IState = string[];

const defaultState = ['1', '2', '3'];

/**
 * Stories reducer
 */
const reducer = (state: IState = defaultState, action: Actions): IState => {
  switch (action.type) {
    case 'DELETE_STORY':
      return state.filter(id => id !== action.payload.storyId);

    case 'SAVE_STORY': {
      const stories = [action.payload.id];

      state.forEach((id) => {
        if (stories.includes(id)) return;

        stories.push(id);
      });

      return stories;
    }

    default:
      return state;
  }
};

export default reducer;
