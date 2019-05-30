import React from 'react';
import * as AppBar from '../context/AppBar';

/**
 * Add a story
 */
const AddStory: React.FC = () => (
  <div>
    <AppBar.Consumer title="Add Story" leftButton="BACK" />
    add
  </div>
);

export default AddStory;
