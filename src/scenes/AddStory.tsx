import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {
  saveStoryProp,
  deleteStory as deleteStoryAction,
  saveStory,
} from '../store/storiesById/actions';
import * as AppBar from '../context/AppBar';
import { IStory, Dispatch, IStoryProp } from '../store/types';
import { AppState } from '../store';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  textField: {
    marginTop: 20,
    margin: 8,
  },
  buttons: {
    margin: 8,
    flexDirection: 'column',
    display: 'flex',
  },
  button: {
    marginTop: 20,
  },
}));

type RouteProps = RouteComponentProps<{
  storyId: string;
}>;

interface IStateProps {
  title: string;
  description: string;
}

interface IDispatchProps {
  saveProp: <P extends IStoryProp>(key: P, value: IStory[P]) => void;
  save: () => void;
  deleteStory: () => void;
}

interface IProps extends IStateProps, IDispatchProps, RouteProps {}

/**
 * Add a story
 */
const AddStory: React.FC<IProps> = ({
  history: { push },
  match: {
    params: { storyId },
  },
  saveProp,
  title,
  description,
  save,
  deleteStory,
}: IProps) => {
  const classes = useStyles();

  /**
   * Handle a value change
   */
  const handleChange = (key: IStoryProp) => (event: React.ChangeEvent<HTMLInputElement>) => saveProp(key, event.target.value);

  /**
   * Delete the story
   */
  const onDelete = () => {
    deleteStory();
    push('/');
  };

  return (
    <div>
      <AppBar.Consumer
        title="Edit Story"
        leftButton="BACK"
        rightButton={{
          text: 'Save',
          action: save,
        }}
      />
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          value={title}
          onChange={handleChange('title')}
          id="standard-full-width"
          label="Title"
          className={classes.textField}
          placeholder="The adventures of Mr. Miggins!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          value={description}
          onChange={handleChange('description')}
          id="standard-textarea"
          label="Description"
          multiline
          fullWidth
          className={classes.textField}
          margin="normal"
          placeholder="1 paragraph to describe the story"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => push(`/story/${storyId}/edit/parts`)}
            className={classes.button}
          >
            Story Parts
            <KeyboardArrowRight className={classes.rightIcon} />
          </Button>
          <Button variant="contained" color="primary" onClick={onDelete} className={classes.button}>
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
};

/**
 * Grab the draft story from the state
 */
const mapStateToProps = (
  state: AppState,
  {
    match: {
      params: { storyId },
    },
  }: RouteProps
): IStateProps => {
  const story = state.editedStoriesById[storyId] || state.storiesById[storyId];

  if (!story) {
    return {
      title: '',
      description: '',
    };
  }

  return {
    title: story.title,
    description: story.description,
  };
};

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
  saveProp: (key, value) => dispatch(saveStoryProp(storyId, key, value)),
  save: () => dispatch(saveStory(storyId)),
  deleteStory: () => dispatch(deleteStoryAction(storyId)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddStory)
);
