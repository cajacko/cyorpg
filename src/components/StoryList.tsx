import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

interface IProps extends RouteComponentProps {
  stories: Array<{
    text: string;
    id: string;
    description: string;
    route: string;
  }>;
}

const useStyles = makeStyles(
  createStyles({
    details: {
      flexDirection: 'column',
    },
    buttonContainer: {
      marginTop: 10,
    },
  })
);

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
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </React.Fragment>
  );
};

export default withRouter(StoryList);
