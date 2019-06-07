/* eslint max-lines: 0 */
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { saveStoryPartProp, deleteStoryPart, saveStoryProp } from '../store/storiesById/actions';
import { Dispatch, IStoryPartProp, IStoryPart } from '../store/types';
import { AppState } from '../store';
import getIsStartingStoryPart from '../utils/getIsStartingStoryPart';

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
  card: {
    width: '100%',
    margin: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },
}));

type RouteProps = RouteComponentProps<{
  storyId: string;
  partId: string;
}>;

interface IStateProps extends IStoryPart {
  isStartingStoryPart: boolean;
}

interface IDispatchProps {
  saveProp: <P extends IStoryPartProp>(key: P, value: IStoryPart[P]) => void;
  deletePart: () => void;
  onSetStartingPart: () => void;
}

interface IProps extends IStateProps, IDispatchProps, RouteProps {}

/**
 * Add a story
 */
const EditStoryPart: React.FC<IProps> = ({
  history: { push },
  match: {
    params: { storyId },
  },
  saveProp,
  label,
  headline,
  content,
  deletePart,
  isStartingStoryPart,
  onSetStartingPart,
}: IProps) => {
  const classes = useStyles();

  /**
   * Handle a value change
   */
  const handleChange = (key: IStoryPartProp) => (event: React.ChangeEvent<HTMLInputElement>) => saveProp(key, event.target.value);

  /**
   * Delete the story
   */
  const onDelete = () => {
    deletePart();
    push(`/story/${storyId}/edit/parts`);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      {isStartingStoryPart && (
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textPrimary">
              Starting Story
            </Typography>
          </CardContent>
        </Card>
      )}
      <TextField
        value={label}
        onChange={handleChange('label')}
        id="standard-full-width"
        label="Label"
        className={classes.textField}
        placeholder="Short name to remind you of this part"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        value={headline || ''}
        onChange={handleChange('headline')}
        id="standard-full-width-2"
        label="Headline"
        className={classes.textField}
        placeholder="Bold text to show at the top of the story part"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        value={content}
        onChange={handleChange('content')}
        id="standard-textarea"
        label="Content"
        multiline
        fullWidth
        className={classes.textField}
        margin="normal"
        placeholder="Describe the part of the story"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <div className={classes.buttons}>
        {!isStartingStoryPart && (
          <Button
            variant="contained"
            color="primary"
            onClick={onSetStartingPart}
            className={classes.button}
          >
            Set as starting part
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          disabled={isStartingStoryPart}
          onClick={isStartingStoryPart ? undefined : onDelete}
          className={classes.button}
        >
          Delete
        </Button>
        {isStartingStoryPart && (
          <Typography className={classes.title} color="textPrimary">
            You cannot delete the starting story part, you must select another part to be the
            starting part first
          </Typography>
        )}
      </div>
    </form>
  );
};

/**
 * Grab the draft story from the state
 */
const mapStateToProps = (
  state: AppState,
  {
    match: {
      params: { storyId, partId },
    },
  }: RouteProps
): IStateProps => {
  const story = state.editedStoriesById[storyId] || state.storiesById[storyId];

  const isStartingStoryPart = getIsStartingStoryPart(story, partId);

  const defaultPart: IStateProps = {
    isStartingStoryPart,
    id: partId,
    label: '',
    content: '',
    actions: [],
    tree: {
      position: {
        x: 0,
        y: 0,
      },
    },
  };

  if (!story) return defaultPart;

  const part = story.storyParts[partId];

  if (!part) return defaultPart;

  return { ...part, isStartingStoryPart };
};

/**
 * Map the save draft story prop to the component
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
  {
    match: {
      params: { storyId, partId },
    },
  }: RouteProps
): IDispatchProps => ({
  saveProp: (key, value) => dispatch(saveStoryPartProp(storyId, partId, key, value)),
  deletePart: () => dispatch(deleteStoryPart(storyId, partId)),
  onSetStartingPart: () => dispatch(saveStoryProp(storyId, 'startingStoryPart', partId)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditStoryPart)
);
