import getStore from '../index';
import {
  IStory,
  ISaveStoryPropAction,
  IStoryProp,
  SAVE_STORY_PROP,
  IDeleteStoryAction,
  DELETE_STORY,
  ISaveStoryAction,
  SAVE_STORY,
} from '../types';

/**
 * Save a draft story
 */
export function saveStory(storyId: string): ISaveStoryAction {
  const story = getStore().store.getState().editedStoriesById[storyId];

  if (!story) throw new Error('No story to save');

  return {
    type: SAVE_STORY,
    payload: story,
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
  const { editedStoriesById, storiesById } = getStore().store.getState();
  const editedStory = editedStoriesById[storyId];
  const story = editedStory || storiesById[storyId];

  return {
    type: SAVE_STORY_PROP,
    payload: {
      storyId,
      key,
      value,
      story,
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
