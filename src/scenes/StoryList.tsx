import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import StoryList from '../components/StoryList';
import { AppState } from '../store';
import * as AppBar from '../context/AppBar';

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

interface IStateProps {
  stories: string[];
  welcomeText: string;
}

interface IProps extends IStateProps, RouteComponentProps {}

/**
 * The scene for showing a list of stories
 */
const StoryListScene: React.FC<IProps> = ({ stories, welcomeText, history }: IProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar.Consumer title="Stories" />
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1" component="p">
            {welcomeText}
          </Typography>
        </CardContent>
      </Card>
      <StoryList stories={stories} />
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={() => history.push('/add')}
      >
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
};

/**
 * Get the stories from the state
 */
const mapStateToProps = (state: AppState): IStateProps => ({
  stories: state.stories,
  welcomeText: state.welcomeText,
});

export default withRouter(connect(mapStateToProps)(StoryListScene));
