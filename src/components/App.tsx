import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme: Theme) => createStyles({
  fab: {
    margin: theme.spacing(2),
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  delete: {
    margin: theme.spacing(2),
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  emotion: {
    fontFamily: 'helvetica, sans-serif',
    fontSize: 50,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

/**
 * App component
 */
const App: React.FC = () => {
  const [emotion, setEmotion] = React.useState('Loading');
  const [emotions, setEmotions] = React.useState<string[]>([]);
  const [showInput, setShowInput] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const classes = useStyles();

  /**
   * Set a random emotion
   */
  const setRandEmotion = (emotionsArg?: string[]) => {
    const arr = emotionsArg || emotions;
    const rand = arr[Math.floor(Math.random() * arr.length)];

    setEmotion(rand || 'No emotion to set');
  };

  /**
   * Delete emotion
   */
  const deleteEmotion = () => {
    const emotionsToSet = emotions.filter(emo => emo !== emotion);

    setEmotions(emotionsToSet);
    setRandEmotion(emotionsToSet);

    fetch('https://api.jsonbin.io/b/5d029c6e4f234842a564ef57', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'secret-key': '$2a$10$89POHX9tTf1imV1Z8UiQ6Ov0WSLocHomZ3OaRecBZ4gfiospExTZ.',
      },
      body: JSON.stringify({
        emotions: emotionsToSet,
      }),
    });
  };

  /**
   * Set remote emotions
   */
  const setRemoteEmotions = () => {
    setShowInput(false);
    const emotionsToSet = emotions.concat([inputValue]);

    setEmotions(emotionsToSet);

    fetch('https://api.jsonbin.io/b/5d029c6e4f234842a564ef57', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'secret-key': '$2a$10$89POHX9tTf1imV1Z8UiQ6Ov0WSLocHomZ3OaRecBZ4gfiospExTZ.',
      },
      body: JSON.stringify({
        emotions: emotionsToSet,
      }),
    });
  };

  React.useEffect(() => {
    fetch('https://api.jsonbin.io/b/5d029c6e4f234842a564ef57/latest', {
      headers: {
        'secret-key': '$2a$10$89POHX9tTf1imV1Z8UiQ6Ov0WSLocHomZ3OaRecBZ4gfiospExTZ.',
      },
    })
      .then(res => res.json())
      .then((contents) => {
        setEmotions(contents.emotions);
        setRandEmotion(contents.emotions);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.container}>
      <p className={classes.emotion}>{emotion}</p>
      <Fab color="primary" aria-label="Add" className={classes.delete} onClick={deleteEmotion}>
        <DeleteIcon />
      </Fab>
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={() => setShowInput(true)}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={showInput}
        onClose={() => setShowInput(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add an Emotion</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Emotion"
            fullWidth
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowInput(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={setRemoteEmotions} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
