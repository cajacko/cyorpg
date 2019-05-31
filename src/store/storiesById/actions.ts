import uuid from 'uuid';
import {
  IStory,
  ISaveStoryPropAction,
  IStoryProp,
  SAVE_STORY_PROP,
  IDeleteStoryAction,
  DELETE_STORY,
} from '../types';

/**
 * Save a story action
 */
export function saveStoryProp<P extends IStoryProp>(
  storyId: string | null,
  key: P,
  value: IStory[P]
): ISaveStoryPropAction<P> {
  const id = storyId || uuid();

  return {
    type: SAVE_STORY_PROP,
    payload: {
      setAsDraft: !storyId,
      storyId: id,
      key,
      value,
    },
  };
}

/**
 * Delete a story
 */
export function deleteStory(storyId: string): IDeleteStoryAction {
  return {
    type: DELETE_STORY,
    payload: {
      storyId,
    },
  };
}
