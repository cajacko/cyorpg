import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { AppState } from '../store';

interface IPassedProps {
  stories: string[];
}

interface IStateProps {
  stories: Array<{
    text: string;
    id: string;
    description: string;
    route: string;
  }>;
}

interface IProps extends RouteComponentProps, IStateProps {}

const useStyles = makeStyles(theme => ({
  details: {
    flexDirection: 'column',
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonContainer: {
    marginTop: 10,
  },
}));

/**
 * Render a list of stories
 */
const StoryList: React.FC<IProps> = ({ stories, history }: IProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const classes = useStyles();

  /**
   * Change which panel is expanded
   */
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      {stories.map(({
        text, id, description, route,
      }) => (
        <ExpansionPanel key={id} expanded={expanded === id} onChange={handleChange(id)}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`StoryList__Content--${id}`}
            id={`StoryList__Summary--${id}`}
          >
            <Typography>{text}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Typography>{description}</Typography>
            <div className={classes.buttonContainer}>
              <Button variant="contained" color="primary" onClick={() => history.push(route)}>
                Play Story
              </Button>
              <IconButton
                className={classes.button}
                aria-label="Edit"
                onClick={() => history.push(`/story/${id}/edit`)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </React.Fragment>
  );
};

/**
 * Get the stories
 */
const mapStateToProps = (state: AppState, props: IPassedProps): IStateProps => {
  const stories: IStateProps['stories'] = [];

  props.stories.forEach((id) => {
    const story = state.storiesById[id];

    if (story) {
      stories.push({
        description: story.description,
        id: story.id,
        text: story.title,
        route: `/story/${story.id}/instructions`,
      });
    }
  });

  return {
    stories,
  };
};

export default withRouter(connect(mapStateToProps)(StoryList));
