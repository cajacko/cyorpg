import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StoryListScene from '../scenes/StoryList';
import StoryIntroScene from '../scenes/StoryIntro';
import StoryStep from '../scenes/StoryStep';
import StoryNav from './StoryNav';

/**
 * All the routes for the app
 */
const Routes: React.FC = () => (
  <Switch>
    <Route path="/story/:storyId">
      <StoryNav />
      <Route path="/story/:storyId/step/:stepId" component={StoryStep} exact />
      <Route path="/story/:storyId/instructions" component={StoryIntroScene} exact />
    </Route>
    <Route component={StoryListScene} />
  </Switch>
);

export default Routes;
