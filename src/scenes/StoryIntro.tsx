/* eslint react/no-array-index-key: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AppState } from '../store';
import storyInstructions from '../config/storyInstructions';

const useStyles = makeStyles(
  createStyles({
    content: {
      margin: 20,
    },
  })
);

interface IStateProps {
  startingStoryPart: string | null;
  noStory: boolean;
}

type IRouteProps = RouteComponentProps<{
  storyId: string;
}>;

interface IProps extends IRouteProps, IStateProps {}

/**
 * Show the instructions for starting a story
 */
const StoryIntroScene: React.FC<IProps> = ({ history, match, startingStoryPart }: IProps) => {
  const [expanded, setExpanded] = React.useState<number | false>(false);
  const classes = useStyles();

  /**
   * Change which panel is expanded
   */
  const handleChange = (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.content}>
        Story Instructions
      </Typography>
      {storyInstructions.map(({ summary, content }, i) => (
        <ExpansionPanel
          key={`StoryIntro__Expansion--${i}`}
          expanded={expanded === i}
          onChange={handleChange(i)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`StoryIntro__Content--${i}`}
            id={`StoryIntro__Summary--${i}`}
          >
            <Typography>{summary}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{content}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
      <Button
        color="primary"
        variant="contained"
        className={classes.content}
        onClick={() => history.push(`/story/${match.params.storyId}/step/${startingStoryPart}`)}
      >
        We&apos;re ready, let&apos;s go
      </Button>
    </React.Fragment>
  );
};

/**
 * Grab the starting story part from the state
 */
const mapStateToProps = (state: AppState, props: IRouteProps): IStateProps => {
  const { storyId } = props.match.params;
  const story = state.storiesById[storyId];

  if (!story) {
    return {
      noStory: true,
      startingStoryPart: null,
    };
  }

  return {
    noStory: false,
    startingStoryPart: story.startingStoryPart,
  };
};

export default withRouter(
  connect<IStateProps, {}, IRouteProps, AppState>(mapStateToProps)(StoryIntroScene)
);
