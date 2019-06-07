import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const styles: React.CSSProperties = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
  boxSizing: 'border-box',
};

type RouteProps = RouteComponentProps<{
  storyId: string;
}>;

export interface BoxProps extends RouteProps {
  title: string;
  yellow?: boolean;
  id: string;
  width: number;
  height: number;
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
  width,
  height,
}: BoxProps) => {
  const backgroundColor = yellow ? 'yellow' : 'white';

  return (
    <button
      style={{
        ...styles,
        backgroundColor,
        width,
        height,
      }}
      onClick={() => push(`/story/${storyId}/edit/part/${id}`)}
      type="button"
    >
      {title}
    </button>
  );
};

export default withRouter(Box);
