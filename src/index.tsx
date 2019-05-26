import React from 'react';
import ReactDOM from 'react-dom';
import StoryList from './components/StoryList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StoryList
    stories={[
      {
        key: '1',
        text: 'Story 1',
      },
      {
        key: '2',
        text: 'Story 2',
      },
      {
        key: '3',
        text: 'Story 3',
      },
    ]}
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
