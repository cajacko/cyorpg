import React from 'react';
import uuid from 'uuid';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

interface IStateProps {
  stories: string[];
  welcomeText: string;
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
  history,
  match: {
    params: { storyId },
  },
}: IProps) => {
  const classes = useStyles();

  return (
    <div>
      EditStoryParts
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={() => history.push(`/story/${storyId}/edit/part/${uuid()}`)}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default withRouter(connect()(EditStoryParts));
