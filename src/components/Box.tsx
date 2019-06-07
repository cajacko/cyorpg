import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../store';
import getIsStartingStoryPart from '../utils/getIsStartingStoryPart';

const styles: React.CSSProperties = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
  boxSizing: 'border-box',
};

type RouteProps = RouteComponentProps<{
  storyId: string;
}>;

interface IStateProps {
  isStartingStoryPart: boolean;
}

export interface IPassedProps {
  title: string;
  id: string;
  width: number;
  height: number;
}

interface IPropsBeforeConnected extends RouteProps, IPassedProps {}

interface IProps extends IStateProps, IPropsBeforeConnected {}

/**
 * Box
 */
const Box: React.FC<IProps> = ({
  title,
  history: { push },
  match: {
    params: { storyId },
  },
  id,
  width,
  height,
  isStartingStoryPart,
}: IProps) => {
  const backgroundColor = isStartingStoryPart ? 'yellow' : 'white';

  return (
    <button
      style={{
        ...styles,
        backgroundColor,
        width,
        height,
      }}
      onClick={() => push(`/story/${storyId}/edit/part/${id}`)}
      type="button"
    >
      {title}
    </button>
  );
};

/**
 * Get the props from state
 */
const mapStateToProps = (
  state: AppState,
  {
    id,
    match: {
      params: { storyId },
    },
  }: IPropsBeforeConnected
): IStateProps => ({
  isStartingStoryPart: getIsStartingStoryPart(
    state.editedStoriesById[storyId] || state.storiesById[storyId],
    id
  ),
});

export default withRouter(connect(mapStateToProps)(Box));
