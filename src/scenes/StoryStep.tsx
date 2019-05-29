import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import Modal from '@material-ui/core/Modal';

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

// TODO:
const data = {
  title: 'Surprise!',
  body: 'Story details',
  actions: [
    {
      id: '1',
      text: 'Go to the mall',
    },
    {
      id: '2',
      text: 'Go to the mall',
    },
    {
      id: '3',
      text: 'Go to the mall',
    },
  ],
};

/**
 *  Show a single step in the story
 */
const StoryStep: React.FC = () => {
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

  const helpButton = (
    <IconButton className={classes.help} aria-label="Help" onClick={handleOpen}>
      <HelpIcon />
    </IconButton>
  );

  return (
    <Card className={classes.card}>
      <CardContent>
        {helpButton}
        {!!data.title && <Typography variant="h5">{data.title}</Typography>}
        <Typography variant="body1" component="p">
          {data.body}
        </Typography>
        <div>
          {helpButton}
          <Typography variant="h5">Available Actions</Typography>
          <div className={classes.actions}>
            {data.actions.map(({ id, text }) => (
              <Button key={id} variant="contained" color="secondary" className={classes.button}>
                {text}
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

export default StoryStep;
