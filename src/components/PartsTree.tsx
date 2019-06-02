import React from 'react';
import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { IStoryParts } from '../store/types';
// import { IStoryParts, IStoryPart } from '../store/types';
import CustomDragLayer from './CustomDragLayer';
import Container from './Container';

interface IProps {
  parts: IStoryParts;
}

// /**
//  * Render the tree of story parts
//  */
// const PartsTree: React.FC<IProps> = ({ parts }: IProps) => {
//   // @ts-ignore
//   const partsArr: IStoryPart[] = Object.values(parts).filter<IStoryPart>(part => !!part);

//   return (
//     <DragDropContextProvider backend={HTML5Backend}>
//       <div style={{ position: 'relative' }}>
//         {partsArr.map(({ id, label, tree: { position: { x, y } } }) => (
//           <div key={id} style={{ top: y || 0, left: x || 0, position: 'absolute' }}>
//             {label}
//           </div>
//         ))}
//       </div>
//     </DragDropContextProvider>
//   );
// };

/**
 * Test
 */
const PartsTree: React.FC<IProps> = ({ parts }: IProps) => (
  <React.Fragment>
    <CustomDragLayer />
    <Container />
  </React.Fragment>
);

// @ts-ignore
export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(PartsTree);
