import React from 'react';
import uuid from 'uuid';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PartsTree from '../components/PartsTree';
import { AppState } from '../store';
import { IStoryParts } from '../store/types';

interface IStateProps {
  parts: IStoryParts;
}

type RouteProps = RouteComponentProps<{
  storyId: string;
}>;

interface IProps extends IStateProps, RouteProps {}

const useStyles = makeStyles(theme => ({
  card: {
    margin: 20,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
/**
 * Edit story parts component
 */
const EditStoryParts: React.FC<IProps> = ({
  parts,
  history,
  match: {
    params: { storyId },
  },
}: IProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <PartsTree parts={parts} />
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={() => history.push(`/story/${storyId}/edit/part/${uuid()}`)}
      >
        <AddIcon />
      </Fab>
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
