import React from 'react';
import {
  DropTarget, ConnectDropTarget, DropTargetMonitor, DropTargetConnector,
} from 'react-dnd';
import ItemTypes from './ItemTypes';
import DraggableBox from './DraggableBox';

const update = require('immutability-helper');

const styles: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  border: '1px solid black',
  position: 'relative',
};

export interface ContainerProps {
  connectDropTarget: ConnectDropTarget;
}

export interface ContainerState {
  boxes: Record<string, { top: number; left: number; title: string }>;
}

/**
 * Test
 */
class Container extends React.PureComponent<ContainerProps, ContainerState> {
  public state: ContainerState = {
    boxes: {
      a: { top: 20, left: 80, title: 'Drag me around' },
      b: { top: 180, left: 20, title: 'Drag me too' },
    },
  };

  /**
   * Test
   */
  public moveBox(id: string, left: number, top: number) {
    this.setState(
      update(this.state, {
        boxes: {
          [id]: {
            $merge: { left, top },
          },
        },
      })
    );
  }

  /**
   * Test
   */
  private renderBox(item: any, key: any) {
    return <DraggableBox key={key} id={key} {...item} />;
  }

  /**
   * Test
   */
  public render() {
    const { connectDropTarget } = this.props;
    const { boxes } = this.state;

    return connectDropTarget(
      <div style={styles}>{Object.keys(boxes).map(key => this.renderBox(boxes[key], key))}</div>
    );
  }
}

export default DropTarget(
  ItemTypes.BOX,
  {
    drop(props: ContainerProps, monitor: DropTargetMonitor, component: Container | null) {
      if (!component) {
        return;
      }
      const delta = monitor.getDifferenceFromInitialOffset() as {
        x: number;
        y: number;
      };
      const item = monitor.getItem();

      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);

      component.moveBox(item.id, left, top);
    },
  },
  (connect: DropTargetConnector) => ({
    connectDropTarget: connect.dropTarget(),
  })
)(Container);
