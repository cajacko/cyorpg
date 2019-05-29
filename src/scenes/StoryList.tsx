import React from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StoryList from '../components/StoryList';
import { AppState } from '../store';

const useStyles = makeStyles(
  createStyles({
    card: {
      margin: 20,
    },
  })
);

interface IProps {
  stories: string[];
  welcomeText: string;
}

/**
 * The scene for showing a list of stories
 */
const StoryListScene: React.FC<IProps> = ({ stories, welcomeText }: IProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1" component="p">
            {welcomeText}
          </Typography>
        </CardContent>
      </Card>
      <StoryList stories={stories} />
    </React.Fragment>
  );
};

/**
 * Get the stories from the state
 */
const mapStateToProps = (state: AppState): IProps => ({
  stories: state.stories,
  welcomeText: state.welcomeText,
});

export default connect(mapStateToProps)(StoryListScene);
