import { Actions } from '../types';

type IState = string;

const defaultState = 'draft-story';

/**
 * Draft story id
 */
const reducer = (state: IState = defaultState, action: Actions): IState => {
  switch (action.type) {
    case 'DELETE_STORY':
    case 'SAVE_DRAFT_STORY':
      return defaultState;

    case 'SAVE_STORY_PROP': {
      if (!action.payload.setAsDraft) return state;

      return action.payload.storyId;
    }

    default:
      return state;
  }
};

export default reducer;
