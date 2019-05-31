import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveStory } from '../store/storiesById/actions';
import * as AppBar from '../context/AppBar';
import { Dispatch } from '../store/types';

type RouteProps = RouteComponentProps<{
  storyId: string;
}>;

interface IDispatchProps {
  save: () => void;
}

interface IProps extends RouteProps, IDispatchProps {}

/**
 * Add a story
 */
const AddStory: React.FC<IProps> = ({ save }: IProps) => (
  <AppBar.Consumer
    title="Edit Story"
    leftButton="BACK"
    rightButton={{
      text: 'Save',
      action: save,
    }}
  />
);

/**
 * Map the save draft story prop to the component
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
  {
    match: {
      params: { storyId },
    },
  }: RouteProps
): IDispatchProps => ({
  save: () => dispatch(saveStory(storyId)),
});

export default withRouter(
  connect(
    undefined,
    mapDispatchToProps
  )(AddStory)
);
