import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { ArcherContainer } from 'react-archer';
import { AppState } from '../store';
import { IStory, IStoryParts, IPosition } from '../store/types';
import CustomDragLayer from './CustomDragLayer';
import Container from './Container';
import useLayout from '../hooks/useLayout';
import { saveLastScroll } from '../store/lastScrollCoordinatesByStoryId/actions';

type RouteProps = RouteComponentProps<{
  storyId: string;
}>;

interface IStateProps {
  bounds: IStory['bounds'];
  lastScroll?: IPosition;
}

interface IDispatchProps {
  saveScroll: (scroll: IPosition) => void;
}

interface IProps extends IStateProps, RouteProps, IDispatchProps {
  parts: IStoryParts;
  heightOffset: number;
}

/**
 * Test
 */
const PartsTree: React.FC<IProps> = ({
  parts,
  heightOffset,
  bounds,
  saveScroll,
  lastScroll,
}: IProps) => {
  const layout = useLayout(bounds, saveScroll, lastScroll);
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
        ref={archerContainer}
        arrowLength={5}
        style={{
          width: layout.width,
          height: layout.height,
          minWidth: '100%',
          minHeight: '100%',
        }}
      >
        <CustomDragLayer boxHeight={layout.cardSize.height} boxWidth={layout.cardSize.width} />
        <Container
          parts={parts}
          renderArrows={renderArrows}
          boxHeight={layout.cardSize.height}
          boxWidth={layout.cardSize.width}
          getCoordinatesFromPosition={layout.getCoordinatesFromPosition}
          getPositionFromCoordinates={layout.getPositionFromCoordinates}
        />
      </ArcherContainer>
    </div>
  );
};

/**
 * Test
 */
const mapStateToProps = (
  state: AppState,
  {
    match: {
      params: { storyId },
    },
  }: RouteProps
): IStateProps => {
  const story = state.editedStoriesById[storyId];
  const lastScroll = state.lastScrollCoordinatesByStoryId[storyId];

  const defaultState = {
    bounds: {},
    lastScroll,
  };

  if (!story) return defaultState;

  return {
    bounds: story.bounds,
    lastScroll,
  };
};

/**
 * Test
 */
const mapDispatchToProps = (dispatch: Dispatch, props: RouteProps): IDispatchProps => ({
  saveScroll: scroll => dispatch(saveLastScroll(props.match.params.storyId, scroll)),
});

// @ts-ignore
export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(PartsTree)
  )
);
