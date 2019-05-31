import {
  IStory,
  ISaveStoryPropAction,
  IStoryProp,
  SAVE_STORY_PROP,
  IDeleteStoryAction,
  DELETE_STORY,
  ISaveDraftStoryAction,
  SAVE_DRAFT_STORY,
} from '../types';

/**
 * Save a draft story
 */
export function saveDraftStory(storyId: string): ISaveDraftStoryAction {
  return {
    type: SAVE_DRAFT_STORY,
    payload: {
      storyId,
    },
  };
}

/**
 * Save a story action
 */
export function saveStoryProp<P extends IStoryProp>(
  storyId: string,
  key: P,
  value: IStory[P]
): ISaveStoryPropAction<P> {
  return {
    type: SAVE_STORY_PROP,
    payload: {
      storyId,
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
