import { ISaveDraftStoryAction, SAVE_DRAFT_STORY } from '../types';

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
