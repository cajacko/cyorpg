import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  DropTarget, ConnectDropTarget, DropTargetMonitor, DropTargetConnector,
} from 'react-dnd';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ItemTypes from './ItemTypes';
import DraggableBox from './DraggableBox';
import { setStoryPartPosition } from '../store/storiesById/actions';
import { IStoryParts, IStoryPart } from '../store/types';

type RouteProps = RouteComponentProps<{
  storyId: string;
}>;

interface IDispatchProps {
  setStoryPartPosition: (id: string, x: number, y: number) => void;
}

export interface IContainerProps {
  connectDropTarget: ConnectDropTarget;
  parts: IStoryParts;
  renderArrows: () => void;
  boxHeight: number;
  boxWidth: number;
  getPositionFromCoordinates: (props: {
  targetWidth: number;
  targetHeight: number;
  x: number;
  y: number;
  }) => {
    left: number;
    top: number;
  };
  getCoordinatesFromPosition: (props: {
  targetWidth: number;
  targetHeight: number;
  left: number;
  top: number;
  }) => {
    x: number;
    y: number;
  };
}

interface IProps extends IContainerProps, IDispatchProps, RouteProps {}

/**
 * Test
 */
class Container extends React.PureComponent<IProps> {
  /**
   * Test
   */
  public moveBox(id: string, left: number, top: number) {
    const { x, y } = this.props.getCoordinatesFromPosition({
      targetWidth: this.props.boxWidth,
      targetHeight: this.props.boxHeight,
      left,
      top,
    });
    this.props.setStoryPartPosition(id, x, y);
    // Needed, as doesn't rerender otherwise, think react-dnd prevents rerender for some reason
    this.forceUpdate();
    this.props.renderArrows();
  }

  /**
   * Test
   */
  private renderBox(item: IStoryPart, key: string) {
    const { x, y } = item.tree.position;

    const { left, top } = this.props.getPositionFromCoordinates({
      targetWidth: this.props.boxWidth,
      targetHeight: this.props.boxHeight,
      x,
      y,
    });

    return (
      <DraggableBox
        key={key}
        id={key}
        title={item.label}
        left={left}
        top={top}
        height={this.props.boxHeight}
        width={this.props.boxWidth}
      />
    );
  }

  /**
   * Test
   */
  public render() {
    const { connectDropTarget, parts } = this.props;

    // @ts-ignore
    const partsArr: IStoryPart[] = Object.values(parts).filter<IStoryPart>(part => !!part);

    const styles: React.CSSProperties = {
      width: '100%',
      height: '100%',
      position: 'relative',
    };

    return connectDropTarget(
      <div style={styles}>{partsArr.map(part => this.renderBox(part, part.id))}</div>
    );
  }
}

/**
 * Test
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
  {
    match: {
      params: { storyId },
    },
  }: RouteProps
): IDispatchProps => ({
  setStoryPartPosition: (partId, x, y) => dispatch(setStoryPartPosition(storyId, partId, x, y)),
});

export default withRouter(
  connect(
    undefined,
    mapDispatchToProps
  )(
    DropTarget(
      ItemTypes.BOX,
      {
        drop(props: IContainerProps, monitor: DropTargetMonitor, component: Container | null) {
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
      (con: DropTargetConnector) => ({
        connectDropTarget: con.dropTarget(),
      })
    )(Container)
  )
);
