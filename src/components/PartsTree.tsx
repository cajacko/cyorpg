import React from 'react';
import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { ArcherContainer } from 'react-archer';
import { IStoryParts } from '../store/types';
// import { IStoryParts, IStoryPart } from '../store/types';
import CustomDragLayer from './CustomDragLayer';
import Container from './Container';

interface IProps {
  parts: IStoryParts;
}

/**
 * Test
 */
const PartsTree: React.FC<IProps> = ({ parts }: IProps) => {
  const archerContainer = React.useRef(null);

  /**
   * Test
   */
  const renderArrows = () => {
    if (!archerContainer) return;
    if (!archerContainer.current) return;

    // @ts-ignore
    archerContainer.current.refreshScreen();
  };

  return (
    // @ts-ignore
    <ArcherContainer strokeColor="#0e0e0e2e" strokeWidth={1} ref={archerContainer} arrowLength={5}>
      <CustomDragLayer />
      <Container parts={parts} renderArrows={renderArrows} />
    </ArcherContainer>
  );
};

// @ts-ignore
export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(PartsTree);
