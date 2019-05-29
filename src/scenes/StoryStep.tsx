import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import Modal from '@material-ui/core/Modal';
import { IStoryPart, IAction } from '../store/types';
import { AppState } from '../store';

type IRouteProps = RouteComponentProps<{
  stepId: string;
  storyId: string;
}>;

interface IStateProps extends Partial<IStoryPart> {
  noStoryPart: boolean;
}

interface IProps extends IRouteProps, IStateProps {}

const useStyles = makeStyles(theme => ({
  card: {
    margin: 20,
  },
  help: {
    float: 'right',
    padding: '3px 0 0 0',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginTop: 10,
  },
  paper: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
  closeButton: {
    float: 'right',
  },
}));

/**
 *  Show a single step in the story
 */
const StoryStep: React.FC<IProps> = ({
  headline, content, actions, history, match,
}: IProps) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  /**
   * Open the modal
   */
  const handleOpen = () => {
    setOpen(true);
  };

  /**
   * Close the modal
   */
  const handleClose = () => {
    setOpen(false);
  };

  /**
   * Decide what action to do
   */
  const action = (actionProps: IAction) => () => {
    if (actionProps.willFinish) {
      history.push('/');
    } else if (actionProps.goToStoryPart) {
      history.push(`/story/${match.params.storyId}/step/${actionProps.goToStoryPart}`);
    }
  };

  const helpButton = (
    <IconButton className={classes.help} aria-label="Help" onClick={handleOpen}>
      <HelpIcon />
    </IconButton>
  );

  return (
    <Card className={classes.card}>
      <CardContent>
        {helpButton}
        {!!headline && <Typography variant="h5">{headline}</Typography>}
        <Typography variant="body1" component="p">
          {content}
        </Typography>
        <div>
          {helpButton}
          <Typography variant="h5">Available Actions</Typography>
          <div className={classes.actions}>
            {!!actions
              && actions.map((actionProps, i) => (
                <Button
                  key={i}
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={action(actionProps)}
                >
                  {actionProps.text}
                </Button>
              ))}
          </div>
        </div>
      </CardContent>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <Button onClick={handleClose} variant="contained" className={classes.closeButton}>
            Close
          </Button>
          <Typography variant="h6" id="modal-title">
            Playing a round
          </Typography>
          <div id="simple-modal-description">
            <Typography variant="subtitle1">
              - Read out the description and available actions
            </Typography>
            <Typography variant="subtitle1">
              - Each player narrates how they get to one of the actions, using their cards and the
              characters cards
            </Typography>
            <Typography variant="subtitle1">
              - You then all vote on whose story you liked the best and click the action from that
              story
            </Typography>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

/**
 * Grab the story part
 */
const mapStateToProps = (state: AppState, props: IRouteProps): IStateProps => {
  const storyPart = state.storyPartsById[props.match.params.stepId];

  if (!storyPart) return { noStoryPart: true };

  return {
    ...storyPart,
    noStoryPart: false,
  };
};

export default withRouter(connect(mapStateToProps)(StoryStep));
