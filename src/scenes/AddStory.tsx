import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { saveStoryProp } from '../store/storiesById/actions';
import { saveDraftStory } from '../store/draftStoryId/actions';
import * as AppBar from '../context/AppBar';
import { IStory, Dispatch, IStoryProp } from '../store/types';
import { AppState } from '../store';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: 8,
  },
}));

interface IStateProps {
  title: string;
  description: string;
  storyId: string | null;
}

interface IDispatchProps {
  saveProp: <P extends IStoryProp>(storyId: string | null, key: P, value: IStory[P]) => void;
  save: (storyId: string) => void;
}

interface IProps extends IStateProps, IDispatchProps, RouteComponentProps {}

/**
 * Add a story
 */
const AddStory: React.FC<IProps> = ({
  history,
  saveProp,
  title,
  description,
  storyId,
  save,
}: IProps) => {
  const classes = useStyles();

  /**
   * Handle a value change
   */
  const handleChange = (key: IStoryProp) => (event: React.ChangeEvent<HTMLInputElement>) => saveProp(storyId, key, event.target.value);

  /**
   * Save the draft story
   */
  const onSave = () => {
    if (!storyId) return;

    save(storyId);
    history.push('/');
  };

  return (
    <div>
      <AppBar.Consumer title="Add Story" leftButton="BACK" />
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
        <Button variant="contained" color="primary" onClick={onSave}>
          Save
        </Button>
      </form>
    </div>
  );
};

/**
 * Grab the draft story from the state
 */
const mapStateToProps = (state: AppState): IStateProps => {
  const storyId = state.draftStoryId;

  const story = state.storiesById[storyId];

  if (!story) {
    return {
      title: '',
      description: '',
      storyId: null,
    };
  }

  return {
    title: story.title,
    description: story.description,
    storyId: story.id,
  };
};

/**
 * Map the save draft story prop to the component
 */
const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  saveProp: (storyId, key, value) => dispatch(saveStoryProp(storyId, key, value)),
  save: (storyId: string) => dispatch(saveDraftStory(storyId)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddStory)
);
