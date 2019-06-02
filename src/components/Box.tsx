import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const styles: React.CSSProperties = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

type RouteProps = RouteComponentProps<{
  storyId: string;
}>;

export interface BoxProps extends RouteProps {
  title: string;
  yellow?: boolean;
  id: string;
}

/**
 * Box
 */
const Box: React.FC<BoxProps> = ({
  title,
  yellow,
  history: { push },
  match: {
    params: { storyId },
  },
  id,
}: BoxProps) => {
  const backgroundColor = yellow ? 'yellow' : 'white';

  return (
    <div
      style={{ ...styles, backgroundColor }}
      onClick={() => push(`/story/${storyId}/edit/part/${id}`)}
    >
      {title}
    </div>
  );
};

export default withRouter(Box);
