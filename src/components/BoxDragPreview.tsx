import React from 'react';
import Box from './Box';

const styles = {
  display: 'inline-block',
  transform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)',
};

export interface BoxDragPreviewProps {
  title: string;
  id: string;
  width: number;
  height: number;
}

/**
 * Thing
 */
const BoxDragPreview: React.FC<BoxDragPreviewProps> = props => (
  <div style={styles}>
    <Box {...props} />
  </div>
);

export default BoxDragPreview;
