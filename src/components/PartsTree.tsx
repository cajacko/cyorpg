import React from 'react';
import { IStoryParts, IStoryPart } from '../store/types';

interface IProps {
  parts: IStoryParts;
}

/**
 * Render the tree of story parts
 */
const PartsTree: React.FC<IProps> = ({ parts }: IProps) => {
  // @ts-ignore
  const partsArr: IStoryPart[] = Object.values(parts).filter<IStoryPart>(part => !!part);

  return (
    <div style={{ position: 'relative' }}>
      {partsArr.map(({ id, label, tree: { position: { x, y } } }) => (
        <div key={id} style={{ top: y || 0, left: x || 0, position: 'absolute' }}>
          {label}
        </div>
      ))}
    </div>
  );
};

export default PartsTree;
