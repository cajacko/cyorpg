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
import useLayout from '../hooks/useLayout';

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
  const layout = useLayout(bounds);

  return (
    <div
      style={{
        width: '100vw',
        height: `calc(100vh - ${heightOffset}px)`,
        overflow: 'auto',
      }}
      ref={layout.scrollContainer}
    >
      {/*
  // @ts-ignore */}
      <ArcherContainer
        strokeColor="#0e0e0e2e"
        strokeWidth={1}
        ref={layout.archerContainer}
        arrowLength={5}
        style={{
          width: layout.width,
          height: layout.height,
          minWidth: '100%',
          minHeight: '100%',
        }}
      >
        <CustomDragLayer />
        <Container
          parts={parts}
          renderArrows={layout.renderArrows}
          leftOffset={layout.leftOffset}
          topOffset={layout.topOffset}
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
