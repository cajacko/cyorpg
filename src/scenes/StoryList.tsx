import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StoryList from '../components/StoryList';

const useStyles = makeStyles(
  createStyles({
    card: {
      margin: 20,
    },
  })
);

/**
 * The scene for showing a list of stories
 */
const StoryListScene: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1" component="p">
            Welcome to CYORPG! A choose your own adventure role playing game for 2+ people. To get
            started pick one of these stories to play.
          </Typography>
        </CardContent>
      </Card>
      <StoryList
        stories={[
          {
            id: '1',
            text: 'Story 1',
            description: 'Hello there',
            route: '/story/1',
          },
          {
            id: '2',
            text: 'Story 2',
            description: 'Hello there',
            route: '/story/1',
          },
          {
            id: '3',
            text: 'Story 3',
            description: 'Hello there',
            route: '/story/1',
          },
          {
            id: '4',
            text: 'Story 4',
            description: 'Hello there',
            route: '/story/1',
          },
        ]}
      />
    </React.Fragment>
  );
};

export default StoryListScene;
