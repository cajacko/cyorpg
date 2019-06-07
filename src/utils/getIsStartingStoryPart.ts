import { IStory } from '../store/types';

/**
 * Is the given part the starting story part
 */
const getIsStartingStoryPart = (story?: IStory, partId?: string) => {
  if (!story) return true;
  if (partId && story.startingStoryPart === partId) return true;
  if (Object.keys(story.storyParts).length === 0) return true;

  return false;
};

export default getIsStartingStoryPart;
