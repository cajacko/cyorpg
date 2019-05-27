import React from 'react';
import { Route } from 'react-router-dom';
import StoryList from './StoryList';

/**
 * Render a story list with dummy data
 */
const storyList = () => (
  <StoryList
    stories={[
      {
        id: '1',
        text: 'Story 1',
        description: 'Hello there',
        route: '/story/1',
      },
      {
        id: '2',
        text: 'Story 2',
        description: 'Hello there',
        route: '/story/1',
      },
      {
        id: '3',
        text: 'Story 3',
        description: 'Hello there',
        route: '/story/1',
      },
      {
        id: '4',
        text: 'Story 4',
        description: 'Hello there',
        route: '/story/1',
      },
    ]}
  />
);

/**
 * All the routes for the app
 */
const Routes: React.FC = () => (
  <React.Fragment>
    <Route render={storyList} />
  </React.Fragment>
);

export default Routes;
