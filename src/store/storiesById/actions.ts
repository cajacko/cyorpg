import getStore from '../index';
import {
  IStory,
  ISaveStoryPropAction,
  IStoryProp,
  SAVE_STORY_PROP,
  SAVE_STORY_PART_PROP,
  IDeleteStoryAction,
  DELETE_STORY,
  ISaveStoryAction,
  SAVE_STORY,
  IStoryPartProp,
  IStoryPart,
  ISaveStoryPartPropAction,
  DELETE_STORY_PART,
  IDeleteStoryPartAction,
  ISetStoryPartPositionAction,
  SET_STORY_PART_POSITION,
} from '../types';

/**
 * Get the edited or actual story
 */
const getStory = (storyId: string) => {
  const { editedStoriesById, storiesById } = getStore().store.getState();
  const editedStory = editedStoriesById[storyId];
  return editedStory || storiesById[storyId];
};

/**
 * Save a draft story
 */
export const saveStory = (storyId: string): ISaveStoryAction => {
  const story = getStore().store.getState().editedStoriesById[storyId];

  if (!story) throw new Error('No story to save');

  return {
    type: SAVE_STORY,
    payload: story,
  };
};

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
      story: getStory(storyId),
    },
  };
}

/**
 * Delete a story
 */
export const deleteStory = (storyId: string): IDeleteStoryAction => ({
  type: DELETE_STORY,
  payload: {
    storyId,
  },
});

/**
 * Save a story part action
 */
export function saveStoryPartProp<P extends IStoryPartProp>(
  storyId: string,
  partId: string,
  key: P,
  value: IStoryPart[P]
): ISaveStoryPartPropAction<P> {
  const story = getStory(storyId);

  let storyPart;

  if (story) {
    storyPart = story.storyParts[partId];
  }

  return {
    type: SAVE_STORY_PART_PROP,
    payload: {
      storyId,
      partId,
      key,
      value,
      storyPart,
      story,
    },
  };
}

/**
 * Delete a story part
 */
export const deleteStoryPart = (storyId: string, partId: string): IDeleteStoryPartAction => ({
  type: DELETE_STORY_PART,
  payload: {
    storyId,
    partId,
    story: getStory(storyId),
  },
});

/**
 * Save a story part action
 */
export const setStoryPartPosition = (
  storyId: string,
  partId: string,
  x: number,
  y: number
): ISetStoryPartPositionAction => {
  const story = getStory(storyId);

  let storyPart;

  if (story) {
    storyPart = story.storyParts[partId];
  }

  return {
    type: SET_STORY_PART_POSITION,
    payload: {
      storyId,
      partId,
      x,
      y,
      storyPart,
      story,
    },
  };
};
