import stories from './stories/reducer';
import storiesById from './storiesById/reducer';
import editedStoriesById from './editedStoriesById/reducer';
import welcomeText from './welcomeText/reducer';

const reducers = {
  editedStoriesById,
  stories,
  storiesById,
  welcomeText,
};

export default reducers;
