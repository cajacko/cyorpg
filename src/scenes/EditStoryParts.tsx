import React from 'react';
import uuid from 'uuid';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PartsTree from '../components/PartsTree';
import { AppState } from '../store';
import { IStoryParts } from '../store/types';
import EditStoryAppBar from '../components/EditStoryAppBar';

interface IStateProps {
  parts: IStoryParts;
}

type RouteProps = RouteComponentProps<{
  storyId: string;
}>;

interface IProps extends IStateProps, RouteProps {}

/**
 * Edit story parts component
 */
const EditStoryParts: React.FC<IProps> = ({
  parts,
  match: {
    params: { storyId },
  },
}: IProps) => {
  if (Object.keys(parts).length === 0) return <Redirect to={`/story/${storyId}/edit/part/${uuid()}`} />;

  return (
    <React.Fragment>
      <EditStoryAppBar title="Edit Story" backRoute={`/story/${storyId}/edit`} />
      <PartsTree parts={parts} heightOffset={56} />
    </React.Fragment>
  );
};

/**
 * Grab the story parts from the state
 */
const mapStateToProps = (
  state: AppState,
  {
    match: {
      params: { storyId },
    },
  }: RouteProps
): IStateProps => {
  const editedStory = state.editedStoriesById[storyId];
  const savedStory = state.storiesById[storyId];

  if (editedStory) return { parts: editedStory.storyParts };
  if (savedStory) return { parts: savedStory.storyParts };

  return {
    parts: {},
  };
};

export default withRouter(connect(mapStateToProps)(EditStoryParts));
