import React from 'react';
import {
  Route, Switch, withRouter, RouteComponentProps,
} from 'react-router-dom';
import StoryListScene from '../scenes/StoryList';
import StoryIntroScene from '../scenes/StoryIntro';
import StoryStep from '../scenes/StoryStep';
import * as AppBar from '../context/AppBar';
import AddStory from '../scenes/AddStory';
import EditStoryParts from '../scenes/EditStoryParts';
import EditStoryAppBar from './EditStoryAppBar';

/**
 * All the routes for the app
 */
const Routes: React.FC<RouteComponentProps> = ({ history }: RouteComponentProps) => (
  <AppBar.Provider>
    <Switch>
      <Route path="/story/:storyId/edit">
        <EditStoryAppBar />

        <Switch>
          <Route path="/story/:storyId/edit/parts" component={EditStoryParts} exact />
          <Route component={AddStory} />
        </Switch>
      </Route>

      <Route path="/story/:storyId">
        <AppBar.Consumer
          title="Story"
          leftButton="BACK"
          rightButton={{ text: 'Exit', action: () => history.push('/') }}
        />
        <Switch>
          <Route path="/story/:storyId/step/:stepId" component={StoryStep} exact />
          <Route path="/story/:storyId/instructions" component={StoryIntroScene} exact />
        </Switch>
      </Route>

      <Route component={StoryListScene} />
    </Switch>
  </AppBar.Provider>
);

export default withRouter(Routes);
