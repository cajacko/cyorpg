import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StoryListScene from '../scenes/StoryList';
import Story from '../scenes/Story';

/**
 * All the routes for the app
 */
const Routes: React.FC = () => (
  <Switch>
    <Route path="/story/:storyId" component={Story} exact />
    <Route component={StoryListScene} />
  </Switch>
);

export default Routes;
