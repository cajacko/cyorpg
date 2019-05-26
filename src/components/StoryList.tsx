import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface IProps {
  stories: Array<{
    text: string;
    key: string;
  }>;
}

/**
 * Render a list of stories
 */
const StoryList: React.FC<IProps> = ({ stories }: IProps) => (
  <List>
    {stories.map(({ text, key }) => (
      <ListItem divider key={key} button>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
);

export default StoryList;
