/* eslint id-length: 0 max-lines: 0 */
import React from 'react';
import { IStory } from '../store/types';

interface ISize {
  height: number;
  width: number;
}

interface IPosition {
  left: number;
  top: number;
}

interface ICoordinates {
  x: number;
  y: number;
}

export interface IContainerProps extends ISize {
  padding: number;
  bounds: IStory['bounds'];
  cardSize: ISize;
}

const cardSize: ISize = {
  height: 38,
  width: 100,
};

/**
 * Test
 */
const getMidPosition = (props: {
targetWidth: number;
targetHeight: number;
left: number;
top: number;
}): IPosition => ({
  left: props.left + props.targetWidth / 2,
  top: props.top + props.targetHeight / 2,
});

/**
 * Test
 */
const getTopLeftCoordinates = (props: {
targetHeight: number;
targetWidth: number;
x: number;
y: number;
}): ICoordinates => ({
  x: props.x - props.targetWidth / 2,
  y: props.y - props.targetHeight / 2,
});

/**
 * Test
 */
const positionToCoordinates = (props: {
containerProps: IContainerProps;
left: number;
top: number;
}): ICoordinates => ({
  x: props.left - props.containerProps.padding + (props.containerProps.bounds.left || 0),
  y: props.top - props.containerProps.padding + (props.containerProps.bounds.top || 0),
});

/**
 * test
 */
const coordinatesToPosition = (props: {
containerProps: IContainerProps;
x: number;
y: number;
}): IPosition => ({
  left: props.x - (props.containerProps.bounds.left || 0) + props.containerProps.padding,
  top: props.y - (props.containerProps.bounds.top || 0) + props.containerProps.padding,
});

/**
 * Test
 */
export const withGetCoordinatesFromPosition = (containerProps: IContainerProps) => (props: {
targetWidth: number;
targetHeight: number;
left: number;
top: number;
}): ICoordinates => {
  const midPosition = getMidPosition(props);

  return positionToCoordinates({ containerProps, ...midPosition });
};

/**
 * Test
 */
export const withGetPositionFromCoordinates = (containerProps: IContainerProps) => (props: {
targetHeight: number;
targetWidth: number;
x: number;
y: number;
}): IPosition => {
  const topLeftCoordinates = getTopLeftCoordinates(props);

  return coordinatesToPosition({ containerProps, ...topLeftCoordinates });
};

/**
 * Get the size to render the canvas
 */
const getContainerProps = (padding: number, bounds: IStory['bounds']): IContainerProps => {
  const containerProps = {
    height: 0,
    width: 0,
    bounds,
    padding,
    cardSize,
  };

  if (containerProps.bounds.bottom) {
    containerProps.height = containerProps.bounds.bottom - containerProps.bounds.top;
    containerProps.width = containerProps.bounds.right - containerProps.bounds.left;
  }

  // eslint-disable-next-line max-len
  containerProps.height = containerProps.height + containerProps.cardSize.height + containerProps.padding * 2;
  // eslint-disable-next-line max-len
  containerProps.width = containerProps.width + containerProps.cardSize.width + containerProps.padding * 2;

  return containerProps;
};

let idCounter = 0;

const scrollPositions: {
[key: number]: ICoordinates | undefined;
} = {};

/**
 * Use layout
 */
const useLayout = (
  bounds: IStory['bounds'],
  saveScroll: (scroll: ICoordinates) => void,
  lastScroll?: ICoordinates
) => {
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const [id] = React.useState(() => {
    idCounter += 1;

    return idCounter;
  });

  const padding = scrollContainer.current
    ? scrollContainer.current.clientHeight
    : window.outerHeight;

  const containerProps = getContainerProps(padding, bounds);

  const getCoordinatesFromPosition = withGetCoordinatesFromPosition(containerProps);
  const getPositionFromCoordinates = withGetPositionFromCoordinates(containerProps);

  React.useEffect(() => {
    const ref = scrollContainer.current;

    if (!ref) return;

    ref.onscroll = () => {
      const scrolledRef = scrollContainer.current;

      if (!scrolledRef) return;

      scrollPositions[id] = getCoordinatesFromPosition({
        targetWidth: scrolledRef.clientWidth,
        targetHeight: scrolledRef.clientHeight,
        left: scrolledRef.scrollLeft,
        top: scrolledRef.scrollTop,
      });
    };
  }, [getCoordinatesFromPosition, id]);

  // Decide where to scroll each time we get new props
  React.useEffect(() => {
    const ref = scrollContainer.current;

    if (ref) {
      const coordinates = scrollPositions[id] || lastScroll;

      if (coordinates) {
        ref.scroll(
          getPositionFromCoordinates({
            targetWidth: ref.clientWidth,
            targetHeight: ref.clientHeight,
            x: coordinates.x,
            y: coordinates.y,
          })
        );
      } else {
        // No coordinates to scroll to, so scroll to the middle

        const midTop = containerProps.height / 2;
        const midLeft = containerProps.width / 2;

        const halfScrollContainerWidth = ref.clientWidth / 2;
        const halfScrollContainerHeight = ref.clientHeight / 2;

        const scroll = {
          left: midLeft - halfScrollContainerWidth,
          top: midTop - halfScrollContainerHeight,
        };

        ref.scroll(scroll);
      }
    }

    /**
     * On unmount, save the scroll position for next time
     */
    return () => {
      const coord = scrollPositions[id];

      if (coord) saveScroll(coord);
    };
  });

  return {
    scrollContainer,
    width: containerProps.width,
    height: containerProps.height,
    cardSize: containerProps.cardSize,
    getCoordinatesFromPosition,
    getPositionFromCoordinates,
  };
};

export default useLayout;
