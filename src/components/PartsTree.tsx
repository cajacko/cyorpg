import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { ArcherContainer } from 'react-archer';
import { AppState } from '../store';
import { IStory, IStoryParts } from '../store/types';
import CustomDragLayer from './CustomDragLayer';
import Container from './Container';

const cardSize = {
  height: 38,
  width: 100,
};

const canvasPadding = 0;

type RouteProps = RouteComponentProps<{
  storyId: string;
}>;

interface IStateProps {
  bounds: IStory['bounds'];
}

interface IProps extends IStateProps, RouteProps {
  parts: IStoryParts;
  heightOffset: number;
}

/**
 * Test
 */
const PartsTree: React.FC<IProps> = ({ parts, heightOffset, bounds }: IProps) => {
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

  let height: number = 0;
  let width: number = 0;
  let leftOffset: number = 0;
  let topOffset: number = 0;

  if (bounds.bottom) {
    height = bounds.bottom - bounds.top + cardSize.height + canvasPadding;
    width = bounds.right - bounds.left + cardSize.width + canvasPadding;

    leftOffset = -(bounds.left - canvasPadding / 2);
    topOffset = -(bounds.top - canvasPadding / 2);
  }

  return (
    <div
      style={{
        width: '100vw',
        height: `calc(100vh - ${heightOffset}px)`,
        overflow: 'auto',
      }}
    >
      {/*
  // @ts-ignore */}
      <ArcherContainer
        strokeColor="#0e0e0e2e"
        strokeWidth={1}
        ref={archerContainer}
        arrowLength={5}
        style={{
          width,
          height,
          minWidth: '100%',
          minHeight: '100%',
        }}
      >
        <CustomDragLayer />
        <Container
          parts={parts}
          renderArrows={renderArrows}
          leftOffset={leftOffset}
          topOffset={topOffset}
        />
      </ArcherContainer>
    </div>
  );
};

/**
 * Test
 */
const mapStateToProps = (state: AppState, props: RouteProps): IStateProps => {
  const story = state.editedStoriesById[props.match.params.storyId];

  const defaultState = {
    bounds: {},
  };

  if (!story) return defaultState;

  return {
    bounds: story.bounds,
  };
};

// @ts-ignore
export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(
  withRouter(connect(mapStateToProps)(PartsTree))
);
