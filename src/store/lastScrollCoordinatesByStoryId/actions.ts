import { ISetLastScrollAction, SET_LAST_SCROLL, IPosition } from '../types';

/**
 * Save the last scroll position in a story
 */
export const saveLastScroll = (storyId: string, scroll: IPosition): ISetLastScrollAction => ({
  type: SET_LAST_SCROLL,
  payload: {
    storyId,
    scroll,
  },
});
