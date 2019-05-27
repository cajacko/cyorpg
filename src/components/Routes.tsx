import React from 'react';
import { Route } from 'react-router-dom';
import StoryListScene from '../scenes/StoryList';

/**
 * All the routes for the app
 */
const Routes: React.FC = () => (
  <React.Fragment>
    <Route component={StoryListScene} />
  </React.Fragment>
);

export default Routes;
