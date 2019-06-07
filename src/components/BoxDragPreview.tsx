import React, { useState, useEffect } from 'react';
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
const BoxDragPreview: React.FC<BoxDragPreviewProps> = (props) => {
  const [tickTock, setTickTock] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickTock(!tickTock);
    }, 500);
    return () => clearInterval(interval);
  }, [tickTock]);

  return (
    <div style={styles}>
      <Box yellow={tickTock} {...props} />
    </div>
  );
};

export default BoxDragPreview;
