import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(
  createStyles({
    card: {
      margin: 20,
    },
    actions: {
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      marginTop: 10,
    },
  })
);

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

  return (
    <Card className={classes.card}>
      <CardContent>
        {!!data.title && <Typography variant="h5">{data.title}</Typography>}
        <Typography variant="body1" component="p">
          {data.body}
        </Typography>
        <div className={classes.actions}>
          <Typography variant="h5">Available Actions</Typography>
          {data.actions.map(({ id, text }) => (
            <Button key={id} variant="contained" color="secondary" className={classes.button}>
              {text}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryStep;
