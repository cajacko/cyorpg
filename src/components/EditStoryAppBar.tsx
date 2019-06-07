import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveStory } from '../store/storiesById/actions';
import * as AppBar from '../context/AppBar';
import { Dispatch } from '../store/types';
import { AppState } from '../store';

type RouteProps = RouteComponentProps<{
  storyId: string;
}>;

interface IStateProps {
  hasChanges: boolean;
}

interface IDispatchProps {
  save: () => void;
}

interface IProps extends RouteProps, IDispatchProps, IStateProps {
  title: 'Edit Story' | 'Edit Story Part' | 'Edit Starting Story Part';
  backRoute?: string;
  saveRedirect?: string;
}

/**
 * Add a story
 */
const AddStory: React.FC<IProps> = ({
  save,
  hasChanges,
  title,
  backRoute,
  saveRedirect,
  history,
}: IProps) => (
  <AppBar.Consumer
    title={title}
    leftButton="BACK"
    customBackRoute={backRoute}
    rightButton={
      hasChanges
        ? {
          text: 'Save',
          action: () => {
            save();

            if (saveRedirect) history.push(saveRedirect);
          },
        }
        : undefined
    }
  />
);

/**
 * Grab props from the state
 */
const mapStateToProps = (state: AppState, props: RouteProps): IStateProps => ({
  hasChanges: !!state.editedStoriesById[props.match.params.storyId],
});

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
    mapStateToProps,
    mapDispatchToProps
  )(AddStory)
);
