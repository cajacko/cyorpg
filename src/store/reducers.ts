/* eslint id-length: 0 */
import stories from './stories/reducer';
import storiesById from './storiesById/reducer';
import editedStoriesById from './editedStoriesById/reducer';
import welcomeText from './welcomeText/reducer';
import lastScrollCoordinatesByStoryId from './lastScrollCoordinatesByStoryId/reducer';

const reducers = {
  editedStoriesById,
  stories,
  storiesById,
  welcomeText,
  lastScrollCoordinatesByStoryId,
};

export default reducers;
