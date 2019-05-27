import React from 'react';
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

/**
 * Render a list of stories
 */
const StoryList: React.FC<IProps> = ({ stories, history }: IProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

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
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{text}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ flexDirection: 'column' }}>
            <Typography>{description}</Typography>
            <div style={{ marginTop: 10 }}>
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
